# CSMM/CPM Common Admin Tasks

So, you've got a 7 Days To Die server set up, got CSMM connected to it for management, and have [CPM](/en/cpm) installed and running. So...now what? Are there some standard things every server admin must do? Settings you could set that will make things better/simpler/safer for the server? This page will get you started with some of the more common follow-on tasks that veteran CSMM server managers typically do once everything is up and running.

This page assumes that you have completed the basic setup process covered in the [CSMM Installation Guide](/en/csmm/installation), and that you are at least familiar with the medium/advanced topic areas such as [Roles](/en/csmm/roles), [Scheduled Commands](/en/csmm/automation), etc. Detailed explanations for how to use each part of the tool are _not_ covered here.

# Expanded Server Basics

The Installation Guide will walk you through getting the must-configure settings up and running, but once this is done, there are a lot of cosmetic tweaks and small settings that you can configure. Some of these are automated announcements and tasks, and others are plugin-specific settings that impact or alter advanced server behaviors.

## Scheduled Commands

Scheduled commands include things like automated world saving, scheduled reboots, server announcements, etc. Most of the time, these will be administrative or behind-the-scenes functionality things that the users won't interact with.

1.  **Automated world saves** - Depending on your hosting method, your game server most likely has an automated world saving mechanism enabled. People who rent servers that have a game control panel, for example, usually have a setting that looks something like the below, which forces the game to save the settings every 15 minutes. Not all panels have this sort of setting, and in some cases the save interval may be long (3-4 hours), which means you will lose too much data if you have an unexpected crash.

    ![](/assets/images/CSMM/commonAdminTasks/5210465.png)

    Instead of using the panel hosting option for saves, you can create a scheduled cron command within CSMM to force a world save.

    ![](/assets/images/CSMM/commonAdminTasks/5210467.png)

    This world save will trigger every 20 minutes, forever.

2.  **Automated server reboots** - 7 Days is notorious for the server performance getting worse over time, so regularly scheduled reboots are the simple and easy way to fix this problem. With CPM installed, a special reboot capability becomes available: a command called _shutdownba_, which allows you to trigger a reboot with a timer, and the server will provide automated warnings as that timer runs down. At the end of the timer, it will boot all the players, save the world, and then reboot the server. This command is also \_bloodmoon aware (shutdownba), \_which means that it will never trigger during a blood moon and interrupt the event. Instead, if the timer would run down and execute during the blood moon event cycle, it will pause until several in-game hours after the event ends, and then start the timer.

    The _shutdownba_ command also has an additional parameter called _reset_, that can be used to trigger a [reset region](/en/CPM/reset-regions.html) wipe. If you use reset regions only for problem areas and don't typically have very many defined, you can set the shutdownba command to use the reset parameter every time it triggers. Other servers will mark huge portions of the map as a reset region in order to regenerate the area occasionally (once a week or so), and in that case, you can run a separate scheduled command for the reset region reboot process.

    The screenshot below shows two separate reboot commands; the first is a normal reboot that runs every day of the week except Friday, and the second is the same command, but with the 'reset' parameter enabled, which only runs on Fridays. On this specific server, several of the major cities on the map are permanently marked as a reset zone, and each Friday, the server reboots and resets those cities in order to restore all damaged and destroyed buildings and loot containers.

    ![](/assets/images/CSMM/commonAdminTasks/5210469.png)

    The above commands will trigger a reboot at exactly 10AM EST. Because CSMM is located in London, cron jobs must be set to run in the GMT-0 time zone. You can [look up your offset calculation](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) in order to determine how to schedule your settings properly. In this case, '50 14' means 9:50AM EST (14:50 GMT), and the command 'cpm-shutdownba 10' will trigger a 10-minute delayed reboot, which will execute exactly at 10AM.

## CPM Settings

[CPM](/en/cpm) has a _lot_ of functionality, more so than most people realize, and it's very easy to miss some very helpful configuration settings that allow you to use the more useful features. The [full list](/en/cpm/console-commands) of commands is available for reference, and this section will go over the quick-set commands you can use to configure the high-level functionality.

**Command: an**

The AN command configures the Nighttime announcer, which is a script that warns players that night is approaching, which is especially useful for both horde night, and servers that have zombies running after dark. Recommended settings are:

an true  
an warnhours 3  
an announcer Botname

The above settings will enable the announcer, provide a 3-hour warning before in-game darkness, and all alerts and warnings will be sent by the server with the name 'Botname', which you can change to be anything you want.

**Command: hccp (older servers use pcch)**

The hide chat command prefix feature allows you to hide player chat that is related to CSMM/CPM commands. For example, if a player types /claim in order to obtain their shop purchases, hccp would prevent that chat from appearing in the game.

hccp /,\$

The above command will hide all chat lines that begin with the / or $ characters. CSMM uses $ by default for commands, and CPM uses / by default for commands. The comma that separates the two symbols is required.

**Command: pfb**

The prevent falling blocks feature was added to reduce or eliminate huge drop mining collapses within the game. When PFB is enabled, any block that would drop due to structural integrity issues will instead simply vanish. This prevents sand/gravel drop mining from causing hundreds of blocks to fall at once, which will often lag or crash a server completely. Similarly, if you destroy the structural supports for a base and cause it to drop, the affected blocks will simply cease to exist. PFB also generates a log line entry in the console, which can be captured via a Discord notification and sent to the admin team in Discord.

pfb 20

If PFB is set to any value above zero, it will vanish falling blocks; the numeric parameter of the pfb command only specifies how large the collapse must be before it is recorded as a log event. This prevents PFB from spamming the console log with 1-2 dropped block events when players destroy temporary frames or mostly-collapsed small structures in-game. A value of 20 is recommended for PFB.

**Command: scn**

The Server Chat Name feature allows you to customize the 'Name' of the server when it sends chat messages via CPM. Typically, this would be the same value as the 'an announcer' command above.

scn Botname

# Discord Notifications

CSMM can generate [Discord notifications](/en/CSMM/discord-integration.html#administrative-discord-notifications) when events meet a specific criteria, allowing people with sufficient Discord privileges to see the events outside of the game.

**Alert string: falling blocks prevented**

This alert will trigger whenever \_pfb \_sends out an alert because the number of falling blocks exceeded the configured amount. In the documented examples below, both block falls exceeded the 'pfb 20' configuration on the server.

![](/assets/images/CSMM/commonAdminTasks/5210472.png)

# Custom Commands

The combination of CSMM and CPM allows you to create some truly unique and powerful custom commands for players. Some of these commands (such as RST) are part of CPM directly, but by restricting access to the command and then enabling it via CSMM instead, you can make the commands role-specific, place cooldowns on them, charge currency for their use, or any combination of the above.

## Reset Skill Tree

_Requires CPM 7.8 or higher, 8.3 recommended._

This command calls the Reset Skill Tree (rst) command in CPM in order to reset the player's perks/attribute settings, restoring all of their stats to 0 as if they had never spent a skill point before. When a player executes this command, it will kick them from the server so that the changes take effect after they log back on

Command:

rst \${steamId}

## Remove Near Death Trauma Debuff

NDT is a debuff applied to players when they die. It temporarily lowers some of their stat and perk counts by 1 or more points depending on how many times they've died recently. This command will remove the debuff completely, returning them back to normal health and stats. This version of the command below sends a message to the player shortly before removing the debuff. The message is colored via the [hex color picker](https://htmlcolorcodes.com/color-picker/) feature in CPM. In this case, the color is a light teal (29bbaf), and the message is shown to come from 'Your Server Name' as a PM.

Command:

cpm-sayplayer2 "\[29bbaf\]Your Server Name\[-\]" ${entityId} "\[29bbaf\]The server will remove your Near Death Trauma Debuff now!\[-\]" ; debuffplayer ${entityId} buffNearDeathTrauma

## Get Vehicle

_Requires CPM 7.1 or higher._

CPM includes a set of commands related to summoning a vehicle. For example, the command 'getbike' can be run by an admin, followed by a Steam ID, and the server will teleport the minibike owned by that Steam ID to the admin who runs the command. There are equivalent commands (getgyrocopter, getbicycle, etc.) for each type of vehicle. The Get Vehicle custom command combines them all into one command that can be run by any player who has permission, and will automatically summon only their own vehicles to them. This command requires you to add a [custom argument](/en/CSMM/custom-commands.html#custom-arguments) to the command that you create in order to capture which type of vehicle the user is summoning.

Command:

cpm-get${vehtype} ${entityId}

Argument Settings:

1.  Name: vehtype
2.  Type: text
3.  Required: yes
4.  Default value: bike

How does this command work? Users will type the command like this:

/gv bike

CSMM will combine the letters 'cpm-get' with whatever the users typed after '/gv' and the result will become a new command that is executed via console. For example:

'/gv motorcycle' will become 'cpm-getmotorcycle', followed by the user's Steam ID: cpm-getbike 76561197961408188

If the user were to type '/gv smith', the server would attempt to execute 'cpm-getsmith', which would fail.

## User-Created Advanced Claims

_Requires CPM 8.1.1 or higher._

In A17, the land claim protection block is less useful than it was in A16 since you can only have one now. Without it, however, zombies will be able to spawn in your base at random and during horde night. An alternative to the LCB is to use [Advanced Claims](/en/CPM/advanced-claims) to mark a region on the map where only the owner, and anyone they choose, are permitted to enter. Typically, however, Advanced Claims must be created by an admin; this command works around that. When a player runs it, it automatically creates an Advanced Claim with a radius of 20 around where the player is standing, and then whitelists the player's friends to be able to enter the area.

There are several protections in place with this command to prevent abuse by the player by spamming it to block large regions of the map off.

- Each time the player runs the command, it erases the previous Advanced Claim areas before creating the new one.
- A player can't execute this command if the newly-created Advanced Claim would overlap an existing Advanced Claim from another player, similar to how opposing LCBs cannot be placed in proximity.
- Within CSMM's Custom Command options, you can place a price, cooldown, or role restriction on this command.

Leaving the radius at 20 will mimic the size of a standard LCB radius. Note the second 'ccc radius' command; this places an additional hostileFree claim atop the base advanced claim, preventing zombies from spawning any closer than a short distance away from the base. Additionally, any zombies that wander too close to the base will simply disappear. Deleting the second 'ccc remove ' and 'ccc radius 30' lines will simply create a player-protected area but still allow zombies in. Be aware that with the hostileFree zone created, you will not be able to fight zombies near your base; they will simply disappear without giving you XP.

Commands:

ccc remove ${steamId}\_mybase\_norm;  
ccc remove ${steamId}\_mybase_hfree;  
ccc radius 20 ${steamId} ${steamId}\_mybase_norm 1;  
wlf add ${steamId};  
ccc radius 30 ${steamId} ${steamId}\_mybase\_hfree 1 hostilefree;  
pm ${steamId} "Base safe zone created. All of your friends have been whitelisted automatically."

There are a ton more commands that you can create and play around with if you explore the functionality of what CPM and CSMM can do for you.
