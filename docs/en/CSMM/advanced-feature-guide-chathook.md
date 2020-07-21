# Practical example: Reacting on specific chatmessages without the need for a custom command

With a CSMM hook you can "listen" to specific keywords in chat and with the correct trigger command you can write info to log on which you can act with a second hook to actually interprete the result of the "listening" hook and act on it. 

As an example we will create the functionality that will return the next Bloodmoon in a chat message format of your choice when someone types "when is feral", "when feral", "when is the next bloodmoon", "when bloodmoon" etc.

[[toc]]

## Creating the "listen" hook for specific content in a chatmessage

First you need to create the hook that will scan the log for above mentioned strings. The best way to do this in this case is create a logLine hook with a broad regex.

So in the regex box of the hookscreen fill in `([wW]hen).*(feral|bloodmoon)`. This will make sure the logLine hook will trigger on a fair number of "when is feral" or "when is bloodmoon" combinations. Feel free to make it more or even less flexible on when to trigger.

Next we need a command that will be triggered when the regex test against the log becomes a positive one (hit). CPM command `w2l` will write anything to log that you want. Even the output of a command. Now we have to figure out how to get information on when the next bloodmoon is. Vanilla command `ggs` will display all active gamestats. One of those stats will be the next bloodmoon day. It looks like this: `GameStat.BloodMoonDay = xx` where xx is the next bloodmoonday ingame.

So with that info we decide that the output of command `ggs` should be placed in log to be acted on with a second hook (see below).

In the commands section of the hook fill in: `w2l command ggs`. You can now save this hook as its complete.

## Creating the "acting" hook for when the "listen" hook has triggered

Next is creating a hook that will react when the first "listen" hook has been triggered. This will also be a logLine hook. When you use `w2l` the output in log will allways start with `[CSMM_Patrons] Output from command ggs:` which we will use as the searchstring for the second logLine hook. So fill it in in the searchstring field of this hook.

Now we need a regex that will read the rest of the output from `w2l command ggs` which will contain the string we are looking for `GameStat.BloodMoonDay = xx` and we want to get the `xx` part as that will be the next bloodmoonday. For that we will create a custom regex variable named "bloodday" and the regex `(?<=GameStat.BloodMoonDay = )(\d+)`. This will extract only the daynumber of the next bloodday. And now that we have the next bloodday in a custom variable we can use it in the command that will be triggered in this hook. This command should announce the next bloodday in a global chatmessage.

In the commands section of this hook screen fill in: say2 "[f36f2fb]Bloodmoon Bot[-]" "[FFFFFF]The next bloodmoon will start on day ${custom.bloodday}![-]". Feel free to use any other serverchatname, text or color. Save the hook and you're done!

Now if anyone types something in chat that will trigger the "listen" hook ("when feral" for example), the "react" hook will show a global message announcing the next bloodmoonday.

## Finishing up

CSMM and CPM each have very customizable features. If you combine the two, you can make really powerful and unique things. We hope that this guide can help you understand how to make different modules work together. If you want some more inspiration, be sure to check out the [configuration examples](/en/CSMM/configuration-examples.html).