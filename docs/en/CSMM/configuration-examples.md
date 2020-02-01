# Configuration examples

These examples show you some of the things possible with CSMMs custom modules. Not all of the commands used are included in the vanilla version of the game but require extra mods installed like CPM. If an example is not clear, make sure to read the documentation for that specific module.

[[toc]]

## Custom commands

### Spawn animals to hunt

Spawn a bunch of animals so your players can get meat easily. Recommended to set a cost for this

`multipleentityspawn ${entityId} 4 @ 81 81 81 84 84 83`

### Spawn horde of zombies

High level players need an extra challenge? Give them some zombies to fight!

`say "Good luck!" ;multipleentityspawn ${entityId} 15 @ 4 5 6 4 5 6 7 8 9 7 8 9 10 11 12 11 10 12 17 18 19 61 61 61 70 70 70 58 59 58 59 58 59 54 55 54 55;wait(240) ;say "Hope you're ready for round 2, here it comes!" ;multipleentityspawn ${entityId} 15 @ 4 5 6 4 5 6 7 8 9 7 8 9 10 11 12 11 10 12 17 18 19 61 61 61 70 70`

If you want to give the player a reward, then add:

`say "The reward is coming!" ;wait(5);Se ${entityId} sc_General;say "A supply box was landing next to you."`

### Weather control

Let players control the weather. Stop rain/snow/... . This uses a custom argument to specify the type of weather to stop.

`weather ${weatherType} 0`

### Instantly fix a broken or sprained leg

`debuffplayer ${entityId} buffLegBroken; debuffplayer ${entityId} buffLegSprained`

### Starterkit

Give new players a way to get some basic items

`giveplus ${entityId} gunWoodenBow 1 2 0 ;giveplus ${entityId} ammoArrowStone 30 ;giveplus ${entityId} drinkJarGoldenRodTea 2 ;giveplus ${entityId} foodBaconAndEggs 2 ;giveplus ${entityId} medicalFirstAidBandage 2 ;giveplus ${entityId} meleeToolFireaxeIron 1 2 0 ;sayplayer ${entityId} "You have received your starter kit!"`

### Custom server-wide waypoints

Useful for a safehouse/meeting point

`teleportplayer ${entityId} 713 86 1425; sayplayer ${entityId} "Welcome to the safehouse!"`

### Let players create CPM advanced claims on their own

These provide better protection than regular land claim blocks. This includes 2 commands, one to create and one to remove.

- `ccc radius 40 ${entityId} ${steamId} 1`
- `ccc remove ${steamId}`

### Heal command

`buffplayer ${entityId} firstAid; debuffplayer ${entityId} bleeding; sayplayer ${entityId} "Healed!!"`

For healing players, Prisma has created a [Healme modlet](/assets/modlets/HealmeBuff.zip)
You could add new custom commands, one for players like $healme and one for admins like $heal PLAYERNAME

"healme" is the buff you need to call in your custom command. It will give a player godmode for a given time (in seconds) using the wait() command.

Example:

`buffplayer ${player.entityId} healme; wait(6);debuffplayer ${player.entityId} healme;debuffplayer ${player.entityId} buffLegSprained;debuffplayer ${player.entityId} buffLegBroken; say "Regeneration completed!"`

Here a Player will be healed over 6 seconds, broken legs will be repaired.
You can use "healme" also for just an admin command like \$heal PLAYERNAME, where PLAYERNAME is stored in an argument.

### Godmode

Using the example above but with 2 arguments, one for the playername and one for the time in seconds where a player is getting the godmode. Players cant fly or do other admin stuff, but they get no damage.

`sayplayer ${playername} "An admin gives you the godmode for ${time} seconds";buffplayer ${playername} healme; wait(${time});debuffplayer ${playername} healme; sayplayer ${playername} "The godmode is now disabled"`

### Let players take their LCB

`cpm-grablcb ${entityId} 10;sayplayer ${steamId} "Your LCB is in your bag."`

### Equip a player

Useful for admins

(A16) `cpm-giveplus ${entityId} gunSniperRifle 1 600 0;cpm-giveplus ${entityId} gunAK47 1 600 0;cpm-giveplus ${entityId} 762mmBullet 350;cpm-giveplus ${entityId} meatStew 5;cpm-giveplus ${entityId} megaCrush 10;cpm-giveplus ${entityId} firstAidKit 10;sayplayer ${entityId} "Go get 'em Tiger!!"`

(A17) `cpm-giveplus ${entityId} gunMR10 1 6 0;cpm-giveplus ${entityId} gunAK47 1 6 0;cpm-giveplus ${entityId} ammo762mmBulletFMJSteel 350;cpm-giveplus ${entityId} foodMeatStew 5;cpm-giveplus ${entityId} drinkCanMegaCrush 10;cpm-giveplus ${entityId} medicalFirstAidKit 10;sayplayer ${entityId} "Go get 'em Tiger!!"`

### Arrest a player

Let me show you 2 examples how this command can work in your custom commands. In this examples my custom command is called jail.
The 'jail' claim must exist for this command to function.

(Adding a simple Jail (11x11 size) type in console: ccc radius 5 YOURNAME jail 0 reversed)

I am using three arguments: playername, timer, reason

Example 1:

`arrest ${playername} ${timer}; say "${playername} is now arrested for ${timer} seconds"; say "Reason: ${reason}"`

Example 2:

`arrest ${playername}; say "${playername} is now arrested for ${timer} seconds"; say "Reason: ${reason}"; wait(${timer}); release ${playername}; say "${playername} you are now free again, please dont brake our rules"`

Chatcommand: \$jail Corran 3600 "You have broken the Rules"

### Starting a raidevent against a bad player

How it works:
If one of your players was breaking the rules, you can start a raiding-event where all players can join.
We just need 3 custom commands: 1 for the raid itself, 1 so players can join the event, and an optional one where players can tp home to the bedroll.

The main custom command looks a little bit big, but we just need two arguments and it requires CPM to be installed. The custom commands I am using are $raid $join \$leave and the arguments are "badplayer" and "portaltime"
Step 1 - the main command
`say "A raiding event will be opened"; wait(10); say "Removing the claimblock of${badplayer}"; wait(5); grablcb ${badplayer} 100; say "Landclaimblock removed from player ${badplayer}";wait(5); arrest ${badplayer}; say "${badplayer} arrested for ${portaltime} seconds "; wait(5); say "Opening the eventportal...";wait(5); wpc add raid ${player.positionX} ${player.positionY} ${player.positionZ}; say "Raidportal opened for ${portaltime} seconds"; say "Use $join to join the raid, use $leave to jump back to your bedroll"; wait(${portaltime}); say "The raidportal will be closed in 2 minutes";wait(120); wpc remove raid;say "Raidportal closed!";wait(5); release ${badplayer}; say "${badplayer} released from the arrest";wait(5);teleportplayerhome ${badplayer}`

The admin should port to the base of the bad player and start the event (in my case) with $raid BADPLAYER PORTALTIME
As you can see in the chatwindow, the server is starting with the information to all players. The landclaimblock from the bad player will be removed, the bad player will be arrested for the time you give in PORTALTIME. The command is now creates a waypoint so all players can $join the event. After the given time (PORTALTIME), the created waypoint will be deleted, the bad player will be released out of the jail and ported to his bedroll.

Step 2 - Players joining the event (\$join)
`mvw ${player.steamId} raid ; say "${player.name} joined the raid"`

Step 3- After the event, players port home (\$leave)
`teleportplayerhome ${player.steamId}; say "${player.name} left the raid"`

## Hooks

### Welcome message for new players

Event - playerJoined

Commands to execute - `sayplayer ${player.steamId} "[55aaff]Welcome ${player.name} to Dead Zone PVE, You are about to be teleported to our Lobby. Please read all the info there."; teleportplayer ${player.steamId} -3844 50 -2187 ; sayplayer ${player.steamId} "Welcome to Dead Zone PVE Lobby!"`

Search string - N/A

### Announcement when a special zombie is killed

Event - zombieKilled

Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]War Machine [ff77ee]Boss Zombie"`

Search string - warMachine

### Spawning extra zombies when a certain zombie type is killed

Event - zombieKilled

Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]Bio Hazard [ff77ee]Boss Zombie and his friends are not happy!" ; mes ${player.name} 20 @ 10 13 22 48 56 75 87 89 ; say "[ff77ee]Spawning zombies on [ff7777]${player.name} [ff77ee]to revenge my death!`

Search string - bioHazardZombie

## Cron jobs / server automation

You will want to think about how often you execute these. It's fine to save the world every 30 minutes but you do not want the server to restart every 30 minutes!

### Automatic server restart after 30 seconds, with one warning at the beginning of the timer.

::: warning
_Note: This assumes the host will restart the stopped process. This is the case for 99.999% hosting companies, but if you self-host, you will have to restart the server manually or install a program to do it for you._
:::

`say "Server Rebooting -- Log off NOW!";saveworld;wait(30);shutdown`

### Automatic chat announcements

Rules and general server info for example

`say "ANNOUNCEMENT"; say "Lost items and/or bikes are your responsibility"; say "No grieving, no stealing, no killing, no raiding"; say "All commands start with /"`

## Custom Discord notifications

### Notification when someone uses the creative or debug menu

- command: cm
- command: dm

### Notification when something was collapsing and CPM prevented the collapse

falling blocks prevented

### Notifications on server error

Have a weird error popping in your server log from time to time? Put the error code as a custom notification and you will be able to track when it happens exactly and how often.

ObjectDisposedException  
 (Or any other error code)
