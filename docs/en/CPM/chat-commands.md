# Chat Commands

_Starting with CPM 5.28, the CPM chat command prefix is configurable by using the [console command](https://confluence.catalysm.net/display/CPM/CPM+Console+Commands)_ cpmprefix. The default prefix is / for all versions.

  

The chat commands are available in two varieties: Admin commands, and Player commands. By default, all Admin commands require Level 0 access in order to execute them. You can use the 'changechatpermissions' (ccp) command to adjust the access level required for each command. This allows you to grant Players access to an Admin command, and allows you to prevent Players from using a command they normally have access to.

[[toc]]

## Admin-Only Chat Commands

### Waypoints

Waypoints are admin-set teleport markers. As an Admin, you can place one at any time, and it will remember your exact coordinates. Waypoints act as target destinations for several other commands, such as the Move and FlyTo commands.

/listwp

List all available waypoints.

**/setwp \<wpname\>**

/setwp secretbase

Creates a new waypoint with the specified name

**/delwp \<wpname\>**

/delwp secretbase

Deletes the specified waypoint.

### Teleports

Teleporting comes in three flavors: Move, which moves a player from one location to another, FlyTo, which allows you to teleport yourself around the map, and Grab, which brings a player to you, but lets you send them back where they came from afterward. Both the Move and FlyTo options can be used to move yourself, but using Move to teleport yourself requires you to specify yourself each time, whereas FlyTo is focused on you every time.


**/mv \<moving\_player\> \<destination\_player\>**

/mv Corran Prisma501

Teleports the first player to the second player's position.

**/mv \<playername\> \<xxE/W xxN/S\>**

/mv Corran 501E 612N

Teleports the specified player to the given map position, using E/W and N/S coordinates.

**/mvw \<playername\> \<waypointname\>**

/mvw Corran secretbase

Teleports the specified player to the given waypoint.

_Note that this command is MVW, not MV._

**/ft \<playername\>**

/ft Corran

Teleports yourself to the specified player.

**/ft \<xxE/W xxN/S\>**

/ft 501E 612N

Teleports yourself to the specified map position, using E/W and N/S coordinates.

**/ftw \<waypointname\>**

/ftw secretbase

Teleports yourself to the specified waypoint.

**/get \<playername\>**

/get Corran

Teleports the specified player to you. This is equivalent to doing /mv \<player\> \<yourname\>, but shorter.

**/tb \<playername\>**

/tb Corran

Sends the specified player back to the position they were in before they were teleported via the /get, /mv, or /mvw command.

**/rt**

Teleports yourself back to your previous location after using a teleport command.

As of CPM Version 5.26, the Move and FlyTo commands can be used on Offline players. If you teleport to an Offline player, it will place you at their last known location. If you Move an offline player, the moment they log on, it will teleport them to the Move destination automatically.

### Player Protection

Admins have the ability to place a protective bubble around a player. This bubble will automatically kill all hostile creatures (but not players!) that enter the 25 meter radius of the bubble. This command can be used to protect yourself from zombies while you are out-of-window doing Admin things, or even used to place a shield around a new player who is being overwhelmed by zombies during a horde night. This chat command triggers the [console command](https://confluence.catalysm.net/display/CPM/CPM+Console+Commands) _protectplayer_.

/bubble

Toggles the protective bubble around yourself. Repeat the command to reverse the status.

/bubble \<playername\>

Toggles the protective bubble around the specified player. Repeat the command to reverse the status.

  

## Unrestricted Chat Commands

These commands are available to both Players and Admins, unless the Admin has altered the permission level using the _ccp_ console command.

### Location Tracking

Admins can use the _loctrack _command to determine which players have been in a specific area within a certain time frame. This is intended to be a short-term solution to help determine who was in a specific area; if you need to perform a detailed track of a player, you should use CSMM's Player Tracking feature. Using _loctrack_ can help determine which players need to be followed in Player Tracking.

Depending on your server configuration, the command may not be _loctrack_. The chat command can be changed or even disabled using the following console commands:

**loctrack commandenabled \<true/false\>**

**loctrack command \<command\_name\>**


/loctrack

Report players that were within 50 meters of your position in the last 24 hours.

**/loctrack \<radius\> \<hours\>**

/loctrack 500 24

Report players that were within the specified radius of your position in the designated amount of hours.

/loctrack near

Reports all living players within the radius defined by the _loctrack_ _neardistance_ console command

### General Commands

/day7

Reports the next bloodmoon, number of players, number of zombies and server fps in chat

/bag

Teleports you to your most recent death bag.

/bed

Teleports you to your active bed(roll).

/hostiles

Gives you a report on how many hostile creatures there are within a small radius of your current position. This script explicitly mentions feral zombies, dogs, and vultures among others.

**/ls \<playername\>**

/ls Corran

Last Seen shows the time since the specified player was last online, in days hours and minutes.

### Global Trading System

Starting with CPM 8.9, a trading system was implemented that allows players to exchange items with other players. Players put items in a chest that they control, run a few chat commands to mark items for trade and review the proposed trade, and then the items switch places.

::: tip
By default, this trading system is disabled, and requires an admin to enable it. To do this, an Admin will have to run the console command **ccp rtc 1000**, which will enable the creating of trading chests.
:::

The process is as follows:

1.  Stand atop a storage box for use as your trading chest and type **/rtc**
2.  Place the items you want to trade into your chest and type **/rti \<playername\>** (note: you can use partial names, like 'Corr' instead of 'Corran'; see the Player Names section below for more info)
3.  If you need to cancel the trade at any time from here until the end, you can type **/cti** to cancel the trade.
4.  Once both sides have performed the /rti process, the mod will show both parties a list of what is being traded. At any time from here until the end, you can type /lti to repeat the list of items marked for trade.
5.  If both parties agree to the trade, they then type **/ati \<playername\>** to complete the trade.
6.  Once completed, the items will swap places and the trade is complete.


/rtc

Marks a storage chest for use as a trading chest. You must stand atop it at the moment of creation for this to take effect.

You can only have one active chest at a time; running the command again will revert the previous trading chest back into a storage box only.

/rti \<playername\>

Releases any and all items in a trading chest for trade to another player that you specify. Both sides must run this command, but the chest does not have to actually contain items to make a trade. It **is** possible to trade nothing to a player in return for something (ie, the other player just gives you an item for free) by typing /rti with an empty chest. The other player will be informed of this.

/ati \<playername\>

Accept the trade from the other player. Both sides must run this command.

/cti

Cancels the trade process, returning the items to their original owners.

/lti

Lists all items currently marked for trade.

  

### Advanced Claim Commands

While Players can't place Advanced Claims, they _can_ interact with Advanced Claims that were created and assigned to them in order to manage the whitelist for the claim. With most advanced claim types, any player not on the whitelist is typically not able to enter, unless they are added to the whitelist. Similarly, anyone inside a Reversed claim region can't leave unless they are whitelisted, and players on the whitelist for an OpenHours claim can enter the region off-hours.


/acf \<playername\>

Adds the specified player to the whitelist for your advanced claim(s).

/lcf \<playername\>

Lists all players whitelisted for your advanced claim(s).

/rcf \<playername\>

Removes the specified player from the whitelist for your advanced claim(s).

## Working With Player Names

When using a command that requires a player's name, the mod will understand if you use only a portion of the name, and the search is not case sensitive. For example, with a player named Prisma501, there are various ways to use them in a command

/ft pris

/mv 501 4876E 987N

Care must be taken when choosing what letters to use if you shorten their name. If zigstum and stumpfgobs are both online, and you try to /ft stum, the mod will be confused, and you don't want that. Don't try to use a name with a space in it; just use the letters from one of the words in the name when targetting a command with a partial name.

When you need to use a players name that is ambiguous with another player online you can use double quotes around the name to be able to. When Jo and Joanna are both online and you need to target Jo, just use: /mv "Jo" prisma
