# Practical example: Exchanging in-game coins for CSMM currency

Letting players transfer their CSMM currency into in-game currency is very easy; you can simply sell casino coins in your CSMM shop! However, the reverse is not possible... or is it? :)

Players spending their in-game currency and obtaining CSMM currency is not a feature of CSMM but we can create this feature ourselves using a hook. This command is an example on how to use several advanced features from CSMM and CPM and combine them into a very powerful hook. We will take you through the process of building this hook to show you how you can approach making your own hooks.

[[toc]]

## Removing items

Okay, so first of all let's figure out the hardest part. This requires some 7D2D server knowledge usually.

So how can we remove an item from a players inventory? Well luckily, CPM has `remitem`. Let's figure out what this does, open up a console to your server. You can do this via the CSMM dashboard, a telnet client or even in-game.

`help remitem`

This is a great way to learn how a command works.

<details> 
  <summary>Your output may be slightly different, but at the time of writing, this is the output</summary>

```
*** Command: remitem ***
Removes items from SecureLoot below the given entity
Usage:
1. remitem <name / entity id>
1. Remove all items from SecureLoot
```

</details>

Okay, good! So it does exactly what we need it to do, how convenient! So by reading the help text, we can figure out a command for this.

`remitem <STEAMID>`

Now, this will remove the items from a chest the player is standing on. That's good! However, if we want to _react_ to something happening, we must find a way to output something into the log. This is where the command `w2l` will come in handy. `w2l` allows you to **w**rite to **l**og, it even lets you log the output of a command.

`w2l command "remitem <STEAMID>"`

If you execute this command (substituting \<STEAMID\> with a valid Steam ID of course), you will now see that the output is actually written to your logs. This might seem insignificant now, but will be very useful later when designing the hook.

## The command to execute

To allow the player to trigger this feature, we will let them execute a chat command. To configure this, we'll make use of [custom commands](/en/CSMM/custom-commands.html). We are providing the command a variable `${player.steamId}`, this of course translates into the steam ID of the player who executed the command. CSMM supports lots of special variables you can use in your commands.

`w2l command "remitem ${player.steamId}"`

So far so good, but seasoned 7D2D admins may notice something important. This command is currently exploitable! However, not to worry, let's think this through.

So the problem is that when a player types in chat, there is a slight delay before the command is picked up and processed by CSMM. A player could figure out that if they type a command, open the chest and then wait for CSMM to fire the command, the `remitem` command will fail and the coins will stay in the chest! Oh no, infinite money!

To fix this, we can use another very powerful command from CPM, called `eoc` (aka execute on client). Let's use the `help` command to get some info about this command

<details> 
  <summary>Output</summary>

```
**Command: eoc**
Let a local player fire a local only console coommand (or any)
Usage:
eoc <Name/EntityId/SteamId> "command param1 param2"
use single quotes for parameters that contain spaces in remote command.
```

</details>

Okay, so this command lets you force the player to execute a command on their client. This opens up a lot of new possibilities! The `xui` command will work for our purposes. I'll leave the details of this command out of this guide. What we want to execute on the client is `xui close looting`. Now let's put all of this together

`eoc ${player.steamId} "xui close looting";w2l command "remitem ${player.steamId}"`

So what does this do? If a player executes our custom command and then keeps the chest open, it will be automatically closed. This means the `remitem` command will work even when the player tries to abuse the system.

![Custom command configuration](/assets/images/CSMM/advanced-feature-guide/bank-command.png)

## Giving CSMM currency to a player

- Trigger regex
- Variables

So now we have some output in our server logs, cool. We can now create a [hook](/en/CSMM/hooks.html) to react to this message.

Let's figure out what we need our hook to do. The hook has to see the logline generated from the previous step and react to it. Furthermore, we want to extract exactly how many coins were deposited from the log line and use this as a variable in our hook.

`lootRemover: 1, player=76561198424822412, item=casinoCoin, qnty=1000, quality=0, used=0`

### Seeing the log line

The easiest way to have a hook pick up on a log line is with string filtering. For this, we want to find a part of the log message that is **exclusively** present in the log line we want to capture and which is static. So how about ", item=casinoCoin, qnty=" ?

::: tip
You can also use a regex for matching a log message. This can be used if you want to selectively match messages.
:::

![Search string hook config](/assets/images/CSMM/advanced-feature-guide/bank-hook-2.png)

### Creating variables

Now we want to extract some info from the log line. Namely, we want to know which player executed the command and how much they deposited exactly. We will create custom variables inside the hook for this. Custom variables take a regex and will contain whatever your regex matches in the message.

- Steam ID

  We need to know who executed the command. There is a Steam ID in the log line which we can extract as a variable. The regex for this simply looks for a string of 17 digits.

  `\d{17}`

- Quantity

  Now this one is a little trickier. the quantity in our example is "1000". How can we match that and extract only the value? We will use some advanced Regex syntax for this one.

  `(?<=item=casinoCoin, qnty=)(\d+)`

  This regular expression uses positive lookahead to make sure only what we need is matched. For more info on how this works, see this example on [regexr.com](https://regexr.com/51kil).

![Custom hook variable config](/assets/images/CSMM/advanced-feature-guide/bank-hook-3.png)

### The final hook

What should the hook actually do? Well it should give the player some amount of CSMM currency and then respond to the player, letting them know it worked.

To give the player currency, we can use the CSMM built-in function [addCurrency()](/en/CSMM/custom-commands.html) and to respond to the player, we can add a customized message with CPMs `pm2` command.

```
addCurrency(${custom.receiver}, ${custom.qnt}; pm2 [Exchange] ${custom.receiver} "You have deposited ${custom.qnt} casino coins."
```

![The final hook configuration](/assets/images/CSMM/advanced-feature-guide/bank-hook-1.png)

# Practical example: Reacting on specific chatmessages without the need for a custom command

With a CSMM hook you can "listen" to specific keywords in chat and with the correct trigger command you can write info to log on which you can act with a second hook to actually interprete the result of the "listening" hook and act on it. 

As an example we will create the functionality that will return the next Bloodmoon in a chat message format of your choice when someone types "when is feral", "when feral", "when is the next bloodmoon", "when bloodmoon" etc.

## Creating the "listen" hook for specific content in a chatmessage

First you need to create the hook that will scan the log for above mentioned strings. The best way to do this in this case is create a logLine hook with a broad regex.

So in the regex box of the hookscreen fill in `([wW]hen).*(feral|bloodmoon)`. This will make sure the logLine hook will trigger on a fair number of "when is feral" or "when is bloodmoon" combinations. Feel free to make it more or even less flexible on when to trigger.

Next we need a command that will be triggered when the regex test against the log becomes a positive one (hit). CPM command `w2l` will write anything to log that you want. Even the output of a command. Now we have to figure out how to get information on when the next bloodmoon is. Vanilla command `ggs` will display all active gamestats. One of those stats will be the next bloodmoon day. It looks like this: `GameStat.BloodMoonDay = xx` where xx is the next bloodmoonday ingame.

So with that info we decide that the output of command `ggs` should be placed in log to be acted on with a second hook (see below).

In the commands section of the hook fill in: `w2l command ggs`. You can now save this hook as its complete.

## Creating the "acting" hook for the "listen" hook has triggered

Next is creating a hook that will react when the first "listen" hook has been triggered. This will also be a logLine hook. When you use `w2l` the output in log will allways start with `[CSMM_Patrons] Output from command ggs:` which we will use as the searchstring for the second logLine hook. So fill it in in the searchstring field of this hook.

Now we need a regex that will read the rest of the output from `w2l command ggs` which will contain the string we are looking for `GameStat.BloodMoonDay = xx` and we want to get the `xx` part as that will be the next bloodmoonday. For that we will create a custom regex variable named "bloodday" and the regex `(?<=GameStat.BloodMoonDay = )(\d+)`. This will extract only the daynumber of the next bloodday. And now that we have the next bloodday in a custom variable we can use it in the command that will be triggered in this hook. This command should announce the next bloodday in a global chatmessage.

In the commands section of this hook screen fill in: say2 "[f36f2fb]Bloodmoon Bot[-]" "[FFFFFF]The next bloodmoon will start on day ${custom.bloodday}![-]". Feel free to use any other serverchatname, text or color. Save the hook and you're done!

Now if anyone types something in chat that will trigger the "listen" hook ("when feral" for example), the "react" hook will show a global message announcing the next bloodmoonday.

## Finishing up

CSMM and CPM each have very customizable features. If you combine the two, you can make really powerful and unique things. We hope that this guide can help you understand how to make different modules work together. If you want some more inspiration, be sure to check out the [configuration examples](/en/CSMM/configuration-examples.html).
