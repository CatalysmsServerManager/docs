# Custom Hooks

## Overview

The Custom Hooks feature allows CSMM to read your server's console logs and watch for specific events to occur, and then take unique custom actions in response to them. Examples of these kinds of events are:

- Send out an announcement message any time a player reaches level 50, and give them some free dukes as a reward
- During certain hours of the day, announce the location of a player's death any time they die to another player, in order to draw people to the scene to fight over the loot
- Spawn a group of cheerleader zombies near any player who kills a football player zombie
- Reward any player below level 25 who kills a player above level 100 with a diamond, or other nice items
- Announce in-game when world saves are happening, so people know lag might occur

CSMM has a number of built-in detections for common events, such as a new player connecting, existing players connecting, players being killed, players dying from the environment (zombies, animals, etc.), chat messages, _players leveling up, when a zombie is killed, when an animal is killed._ Beyond those built-in hooks, you can create completely custom hooks of your own, using any rules on any kind of event that you want.

::: warning
the _italics_ hooks require at least Version 9.5 or higher of the [CSMM Patrons Mod (CPM)](/en/CPM/index.html) plugin to be installed in order for these event triggers to work.
:::

Custom Hooks are a _complicated_ topic, but they allow you to do some crazy cool stuff, so be patient as you explore this feature!

## What Game Event Hooks Look Like

The key to understanding when custom event hooks can fire requires you to understand what CSMM can see and understand. Output log entries look something like this:

2019-03-16T23:33:34 1175.575 INF Chat (from '76561197961408188', entity id '171', to 'Global'): '**Corran**': test message  
2019-03-16T23:37:18 1399.896 INF Entity **2821** killed by **171**.

In this log, player 'Corran' sent a message to general chat that said 'test message'. After that, entity '171' killed another entity, '2821'. The first event is easy to understand, but the second event is not so simple. CSMM can compare entityIds to active players, but animals and zombies often appear and die in a few short seconds, so it's hard to tell what class of creature a specific entity is at any given moment. Even worse, once the entity dies, it's deleted from memory immediately, so no record remains. Because of this, CSMM is limited in what it can do in response. Installing the [CSMM Patrons Mod (CPM)](/en/CPM/index.html) version 9.5 or higher adds extra output to those logs. The lines with the \[CSMM_Patrons\] prefix are the extra bits of info.

2019-03-16T23:37:20 1401.709 INF Entity **2849** killed by **171**.  
2019-03-16T23:37:20 1401.710 INF \[CSMM_Patrons\]entityKilled: **Corran (76561197961408188)** killed zombie **zombieFemaleFat**

With this data, we can correctly understand the second event. The mod creates a special log line _just for CSMM_ that indicates that entity 171, aka player _Corran_ (specifically, his name and Steam ID), killed a zombie-type entity of class _zombieFemaleFat_. Now that you have the class name, you can create custom hooks uniquely for those specific events. For example, you can create a hook event that sends a message to the in-game chat every time someone kills a screamer, or gives a reward to anyone who kills a rad wight.

## Custom Hook Parameters

Each different type of Custom Hook triggers for a different event, but they all share the same basic parameters:

- Event - The type of event hook to trigger on (joins/quits/deaths, etc.)
- Commands - One or more commands that are executed when all of the criteria match
- Search String/RegEx filter _\[optional\]_ - The (optional) match that has to occur in order for the command to trigger
  - Search String - A basic text match, such as 'test message' or 'secret base', which must match _exactly_ in order to trigger
  - RegEx - Unlike a Search String which must have an exact match, [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) can detect variable combinations of things, such as any four numbers from 1-10, followed by any 3 letters, followed by a \$ or # symbol.
- Cooldown _\[optional\]_ - The amount of time that must elapse before the event hook fires again. If you have an 'on player kill' with a 60 second cooldown, it would announce the first kill it saw, and not another one for 60 seconds

![](/assets/images/CSMM/customHooks/9797807.png)

The examples above show a few different ways to use the Search String and RegEx features. In the first example, anyone who says 'test message' in global chat will cause the server to respond back and include their name in the message. In the second example, the RegEx script will detect any player who says 'test' followed by a number, such as 'test1' or 'test2' or 'test3'. Regardless of which number is used, the script will detect the message and trigger, as long as the required 3600 seconds (1 hour) has passed since the last time it sent a message out. The final example sends a message whenever players re-join the server, but only if their name includes 'John Smith' in it. This last kind of event hook can be used to trigger announcements only for specific players.

## Event Hooks

There are two types of custom hooks: built-in ones for specific events, and user-created ones built for a unique purpose by you, to fit your needs. Each is described in detail below.

### Built-In Event Hooks

As mentioned above, there are several event hook detections built in already so that you don't have to figure out what specific text to search for. Those events already include the necessary search string, and automatically include extra info for use in your automated responses. For example, when a new player connects, you are able to use special CSMM variables such as the player's name, current position, Steam ID, etc., and are able to search for text matches in their name, or numeric matches in the timestamp. For events that include two players (such as a player kill), the details for both players are available. Each of the pre-defined event types are listed below, and the bolded world, such as **playerJoined**, is the event name for the Add Custom Hook window. See the screenshot above for examples.

- **playerJoined**

This event fires the very first time a _new_ player spawns in the world after joining the server, or if the player profile is deleted and a new player is created for the same SteamID.

- **playerConnected**

This event fires when _existing_ players connect to the server each time after the first.

- **playerDisconnected**

This event fires whenever an online player drops from the server.

- **chatMessage**

This event fires whenever a player sends a message to global chat.

- **playerKilled**

This event fires whenever a player kills another player.

- **playerDeath**

This event fires whenever a player dies in the world for any reason.

- **playerSuicide**

This event fires whenever a player is responsible for their own death.

- **playerLevel**

This event fires whenever an online player levels up.

- **zombieKilled**

This event fires whenever a player kills a 'hostile' type entity, such as a zombie.

- **animalKilled**

This event fires whenever a player kills an 'animal' type entity, such as a pig or deer. Filters for this event type include player names, and the entity class name of the killed.

### User-Created Event Hooks

This is where the true creativity of custom hooks can be found. Referred to as _logLine_ Events, these hooks will fire whenever totally unique custom criteria are matched, and this capability is extremely powerful when paired up with [CSMM Patrons Mod (CPM)](/en/CPM/index.html)'s Write2Log (W2L) as well. Using W2L, you can create a server event log at any time you wish, allowing you to create a record in the event log that some specific action or event has taken place.

For example, CPM has a feature called a Command Claim, which can trigger a W2L event whenever someone enters the area. Normal command claims can take console commands and execute them, but by triggering W2L and then calling a custom hook, the commands run by the custom hook now have access to much more information and can apply custom criteria, such as only firing during certain times of day, or if the player has a specific name. It can also show information about the player, such as their currency balance, last online time, country, etc.

Additionally, the use of Regular Expressions (explanation linked above) allows you to match very specific events against other criteria that may not be available in the built-in event hooks, and to create hooks similar to the existing ones, but with even more specific criteria.

Take a look at the Custom Hook examples page for more info!

## Order of Execution

Each unique log line can trigger one or more hook events, so making sure that you understand which events fire, and in which order, is an important part of configuring your hooks. There is a specific order of operations that event hooks follow:

1.  Read log line
2.  Look for matching built-in event type (chatMessage/zombieKilled/etc.)
    1.  Matches built-in event type
        1.  Check the filter criteria and see if it matches
            1.  Match found
                1.  Execute actions
                2.  Look for more matching built-in hooks
            2.  No match found
                1.  Do nothing
                2.  Keep looking
    2.  No matching event type
        1.  Do nothing
        2.  Keep looking
3.  After checking all built-in hooks, check the logLine hooks one by one
    1.  A match is found
        1.  Execute actions for matching log
        2.  Go on to next custom hook and review it
    2.  No matches found
        1.  Do nothing
        2.  Go on to the next custom hook and review it

Using the above order, there's a few specific things you can see:

- **CSMM will always try to match the built-in event hooks first, before looking at the logLine events. If a match is found in the built-in hooks, the hook fires, and the search stops.**  
  For example, if you have a chatMessage hook that looks for 'test message', and a logLine hook that looks for 'test message', the chatMessage hook will always fire, and the logLine event will always be skipped.

- **Unlike the built-in event types, logLine hooks will execute on the _all_ matching hook conditions that it can find.**  
  For example, if you have a hook that detects the word 'test', and another hook that detects the word 'test message', both events will fire. Be careful to specify unique filter criteria.

## Examples of Custom Hooks

- Reward players for leveling up

`say "${player.name} has reached level ${newLvl} and has earned ${newLvl} zcoins"; addCurrency(${player.id}, ${newLvl})`

This will reward a player for leveling up with currency equal to their newly gained level. Note that this will reward a player for **every** level they get. If you only want to reward players for getting a level that is a multiple of 10 you can use this regex: `(level )(\[0-9\])\*0`

- Bounty for killing players in PvP

`say "${killer.name} has eliminated ${victim.name} and was awarded ${victim.playerKills}0 zcoins as bounty reward!"; addCurrency(${killer.id}, ${victim.playerKills}0)`

This will read the number of players a victim has killed and award 10 times the currency to the killer. This means that if someone has a lot of player kills, they become a bigger target for other players.
