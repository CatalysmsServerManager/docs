# Chat Commands

_Starting with PrismaCore 5.28, the PrismaCore chat command prefix is configurable by using the [console command](/en/PrismaCore/console-commands.html)_ prismacoreprefix. The default prefix is / for all versions.

The chat commands are available in two varieties: Admin commands, and Player commands. By default, all Admin commands require Level 0 access in order to execute them. You can use the 'changechatpermissions' (ccp) command to adjust the access level required for each command. This allows you to grant Players access to an Admin command, and allows you to prevent Players from using a command they normally have access to. You can completely disable a chatcommand by assigning permission -1.

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

**/mv \<moving_player\> \<destination_player\>**

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

As of PrismaCore Version 5.26, the Move and FlyTo commands can be used on Offline players. If you teleport to an Offline player, it will place you at their last known location. If you Move an offline player, the moment they log on, it will teleport them to the Move destination automatically.

### Player Protection

Admins have the ability to place a protective bubble around a player. This bubble will automatically kill all hostile creatures (but not players!) that enter the 25 meter radius of the bubble. This command can be used to protect yourself from zombies while you are out-of-window doing Admin things, or even used to place a shield around a new player who is being overwhelmed by zombies during a horde night. This chat command triggers the [console command](/en/PrismaCore/console-commands.html) _protectplayer_.

/bubble

Toggles the protective bubble around yourself. Repeat the command to reverse the status.

/bubble \<playername\>

Toggles the protective bubble around the specified player. Repeat the command to reverse the status.

## Unrestricted Chat Commands

These commands are available to both Players and Admins, unless the Admin has altered the permission level using the _ccp_ console command.

### Location Tracking

Admins can use the _loctrack \_command to determine which players have been in a specific area within a certain time frame. This is intended to be a short-term solution to help determine who was in a specific area; if you need to perform a detailed track of a player, you should use Takaro/CSMM's Player Tracking feature. Using \_loctrack_ can help determine which players need to be followed in Player Tracking.

Depending on your server configuration, the command may not be _loctrack_. The chat command can be changed or even disabled using the following console commands:

**loctrack commandenabled \<true/false\>**

**loctrack command \<command_name\>**

/loctrack

Report players that were within 50 meters of your position in the last 24 hours.

**/loctrack \<radius\> \<hours\>**

/loctrack 500 24

Report players that were within the specified radius of your position in the designated amount of hours.

/loctrack near

Reports all living players within the radius defined by the _loctrack_ _neardistance_ console command

### General Commands

/day7

Reports the next bloodmoon, number of players, number of zombies and server fps in chat.

You can disable the number of zombies and fps stats reporting by setting them to "off" in PrismaCoreStrings.xml:

Zombiecount: <Day7_Stats>off</Day7_Stats>

Server FPS: <Day7_Fps>off</Day7_Fps>

/bag

Teleports you to your most recent death bag.

/bed

Teleports you to your active bed(roll).

/hostiles

Gives you a report on how many hostile creatures there are within a small radius of your current position. This script explicitly mentions feral zombies, dogs, and vultures among others.

**/ls \<playername\>**

/ls Corran

Last Seen shows the time since the specified player was last online, in days hours and minutes.

### Advanced Claim Commands

While Players can't place Advanced Claims, they _can_ interact with Advanced Claims that were created and assigned to them in order to manage the whitelist for the claim. With most advanced claim types, any player not on the whitelist is typically not able to enter, unless they are added to the whitelist. Similarly, anyone inside a Reversed claim region can't leave unless they are whitelisted, and players on the whitelist for an OpenHours claim can enter the region off-hours.

/acf \<playername\>

Adds the specified player to the whitelist for your advanced claim(s).

/lcf \<playername\>

Lists all players whitelisted for your advanced claim(s).

/rcf \<playername\>

Removes the specified player from the whitelist for your advanced claim(s).

/aaf

Adds all ingame friends to the whitelist for your advanced claim(s).

/raf

Removes all ingame friends from the whitelist for your advanced claim(s).

## Working With Player Names

When using a command that requires a player's name, the mod will understand if you use only a portion of the name, and the search is not case sensitive. For example, with a player named Prisma501, there are various ways to use them in a command

/ft pris

/mv 501 4876E 987N

Care must be taken when choosing what letters to use if you shorten their name. If zigstum and stumpfgobs are both online, and you try to /ft stum, the mod will be confused, and you don't want that. Don't try to use a name with a space in it; just use the letters from one of the words in the name when targetting a command with a partial name.

When you need to use a players name that is ambiguous with another player online you can use double quotes around the name to be able to. When Jo and Joanna are both online and you need to target Jo, just use: /mv "Jo" prisma
