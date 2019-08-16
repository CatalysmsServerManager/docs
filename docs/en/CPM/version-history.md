# Version History

**Version 11.0 A17.4 b4 Stable (2019.08.16)**

* Added settings for individually enabling/disabling gamemessages (GMSG) for PlayerJoined,, PlayerLeft, PlayerDied and PlayerKilled.
    `<GMSG_PlayerJoined_Enabled>true</GMSG_PlayerJoined_Enabled>`
    `<GMSG_PlayerLeft_Enabled>true</GMSG_PlayerLeft_Enabled>`
    `<GMSG_PlayerDied_Enabled>true</GMSG_PlayerDied_Enabled>`
    `<GMSG_PlayerKilled_Enabled>true</GMSG_PlayerKilled_Enabled>`
* Added configurable response strings for use on arresting player.
    `<Arrest_Notification>[00FF00]You have been jailed by an Admin![-]</Arrest_Notification>`
    `<Arrest_Notification_Timed>[00FF00]You have been jailed by an Admin! You will be released automatically in {minutes} minutes[-]</Arrest_Notification_Timed>`


**Version 10.9 A17.4 b4 Stable (2019.08.09)**

* Added webapihandlers and security layers for getting online players and landclaimblocks
* Catalysm integrated online players and landclaimblocks into CPMcc using the new apis. Now you can view them on map while creating resetregions/adv. claims.
* Catalysm completely redid the look and feel of CPMcc. Very slick. I really like it.

**Version 10.8 A17.4 b4 Stable (2019.08.06)**

* Integration of adv. claim creator made by Catalysm. Now the creator webinterface will be hosted from within CPM itself! Just browse to allocs map and add one to the port and you're good to go. Make all types of advanced claims and reset regions with this superhandy gui. Many thanks to Catalysm for making this! Make sure you fill in your webtoken and password (you can use the one allready created for CSMM or make a new one in webpermissions.xml) in "Server Settings". This will be only used to access allocs webmap. Default permission for creating claims = 0. If you want that permission to be higher just uncomment the "cpmcc.createadvclaim" permission in cpmcc_permissions.xml in your /Saves folder and set it to the permission level you want. For creating claims you MUST login via Steam (lower left) to be validated for permissions.

**Version 10.7.1 A17.4 b4 Stable (2019.06.28)**

* Small addition to new eoc (executeonclient) console command: added "all" parameter to execute a local command on all connected clients.

**Version 10.7 A17.4 b4 Stable (2019.06.28)**

* Implemented new console command eoc (executeonclient): gives the ability to remotely execute local client only commands on a player. Some commands are designed to be allowed to be executed ONLY on a local client. This command will remove that restriction and let owners/admins execute those type of commands remotely (servermanager, telnet etc). The player does NOT have to have permissions set for executing the command. eoc will take care of that.

Example of commands that will become available for remote exectution by owners/admins: sg (sg OptionsFieldOfViewNew x!), automove, cm, dm, givequest, removequest, giveself, giveselfxp, buff, debuff, exhausted, gfx, dms, bents, memcl, pois, settempunit, screeneffect, showhits, starve, thirsty, xui, spawnsupplycrate etc etc


**Version 10.6 A17.4 b4 Stable (2019.06.21)**

* Implemented new advanced claim type LcbFree: control abillity to place LCB's within the boundaries of the lcbfree adv. claim. Allow to place LCB's by accesslevel and/or whitelist. If not allowed to place LCB, it will be removed and put back in player inventory. Use lcbfree as type when creating this advanced claim. Violation message is configurable in CpmStrings.xml (AdvClaims_LcbFree).
* Implemented lcbfree claims requesthandler in CPM's webapi to be able to query the defined lcbfree adv. claims.
Updated allocs webmap map.js. Added abillity to display the new lcbfree adv. claims on allocs webmap. Get it here.


**Version 10.5 A17.4 b4 Stable (2019.06.15)**

* Implemented a workaround (asynchronous removal and giving back plus 0,0 LCB's exclusion) in reset regions auto removal (and give back) of LCB's. Strange LCB's appearing on 0,0 will be excluded from being handled as they disrupt the system.
* Extended error handling in normal, reversed, timed, leveled, portal, hostilefree, openhours, notify, command and playerlevel advanced claims. The sys will keep spinning even when impossible advanded claims are created. This way the system keeps its maximum flexibility but wont bork if the flexibility leads to impossible advanced claims.


**Version 10.4 A17.4 b4 Stable (2019.05.19)**

* Improved consolecommand getprefab: return RWG prefab center coordinates, return RWG prefab size, excluded support for Navezgane city block prefabs and added automatic chunkloading for large RWG prefab resets.

**Version 10.3 A17.3 b18 Stable (2019.05.13)**

* Improved consolecommand getprefab: a player demolished a POI on your server? Someone made a base in a POI (prefab) (even though not allowed)? Reset POI's to RWG default with one command while you are in it and your POI is as fresh as it was at world generation. Just do command getprefab reset


**Version 10.2 A17.3 b18 Experimental(2019.05.11)**

* Added consolecommand getprefab: ever wondered how the POI you are in is called? Now you can get that info by running getprefab when standing in (or close to) a POI (prefab). 
Info returned: Name, filename, if the POI contains a player bed or lcb and the number of sleepervolumes that are defined in the prefabfile on disk.


**Version 10.1 A17.3 b18 Experimental(2019.05.10)**

* Added consolecommand sleepers: remove sleeper volumes from a defined area. Sleepervolumes are deleted instantly. Spawned sleepers can take up to 30 seconds to be removed.
* Changed console command bundo: removes sleeper volumes (if present) on bundo. Sleepervolumes are deleted instantly. Spawned sleepers can take up to 30 seconds to be removed.


**Version 10.0 A17.3 b18 Experimental(2019.05.09)**

* Added consolecommand lbuffs (listbuffs): list all available ingame buffs or search buffs with a specific (sub)string
* Added consolecommand lpbuffs (listplayerbuffs): list all active buffs on a specific player or all online players.
Use vanilla commands buffplayer and debuffplayer icw.  the technical buffname returned by lbuffs or lpbuffs to buff or debuff players.


**Version 9.9 A17.3 b18 Experimental(2019.05.08)**

* Reworked chunkreloading on using worldedit commands. No more falling through world or flickering when chunks on clients need a reload after using worldedit commands!!
Affected commands: brender, bdup, fblock, brepblock,, bundo, tprotect, unlockall


**Version 9.8 A17.3 b18 Experimental(2019.05.08)**

* A17.3 b18 compatibility
* Bugfix in consolecommand ocn (override chatname): when listing players with overridden chatnames, it would fail if player is not saved to allocs bin. Now it will show steamid of player if not present in allocs bin.
* Added sleepervolume support to consolecommand brender: by default any sleepervolumes defined in a prefab will get implemented on brender. Optional omitting of sleepervolume implementation by using parameter "nosleepers".
* A17.3 b18 has codebreaking changes and is therefore not compatible with CPM 9.7 and lower. 


**Version 9.7 A17.2 b27 Stable (2019.04.14)**

* New anticheat feature damage detection on entities: CPM can now trigger when a configured minimum amount of damage is inflicted on entities (other players, zombies, animals and vehicles).  Default trigger is 5000 (<DamageDetection_MinAmountDamage>5000</DamageDetection_MinAmountDamage>) 5000 is the amount of damage that the default admin tools/weapons inflict on entities, so best to keep the value at that minimum. Very often used damage hacks (+99999) will also get caught then.
To enable command(s) on detection just put the command(s) in the setting <DamageDetection_DetectedCommand></DamageDetection_DetectedCommand>. 
To use multiple commands just seperate them with ;

Supported placeholders: ${entityId}, ${steamId} and ${playerName}

Example: 
<DamageDetection_DetectedCommand>ban add ${steamId} 10 years "Hackers not welcome"</DamageDetection_DetectedCommand>

A logline will be written on detection for easy hooking with CSMM: 

[CSMM_Patrons]damageDetection: Player <playerName> (<steamId>) triggered damage detection! Damage done: <amountOfDamage>


**Version 9.6.7 A17.2 b27 Stable (2019.04.08)**

* Switched the order of group chat coloring and individual chat coloring. If a player has both individual,- and group chat colors, the individual color wins and will be used in chat.


**Version 9.6.6 A17.2 b27 Stable (2019.03.13)**

* Added optional command(s) to fire when detecting unauthorized GodMode usage: Add command(s) to CpmSettings (GodModeDetectedCommand) that will fire when a player has been detected using GodMode. 
Default is no command <GodModeDetectedCommand /> (this means empty xml value and is the same as <GodModeDetectedCommand></GodModeDetectedCommand>)
To enable command(s) just put the command(s) in the setting. To use multiple commands just seperate them with ;

Supported placeholders: ${entityId}, ${steamId} and ${playerName}

Example: <GodModeDetectedCommand>ban add ${steamId} 10 years "Hackers not welcome"</GodModeDetectedCommand>


**Version 9.6.5 A17.2 b27 Stable (2019.03.11)**

* Added custom flying vehicle support to cvc (checkvehiclecontent) console command: Helicopterclass and blimpclass (jetpack) are available for checking contents.
* Improved cgc (chatgroupcolor): cgc will list steamId if player has never been on server (aka not present in Allocs persistentdata bin)


**Version 9.6.4 A17.2 b27 Stable (2019.03.11)**

* Added custom flying vehicle support to flying detection. Helicopterclass and blimpclass (jetpack) are now excluded from detection trigger if player is using them.


**Version 9.6.3 A17.2 b27 Stable (2019.03.10)**

* Added check if player is on gyrocopter when detected flying.


**Version 9.6.2 A17.2 b27 Stable (2019.03.10)**

* Forgot to check if a player is fully spawned on flying detection. This could lead to false positives on teleporting and/or any other spawn-in.

**Version 9.6.1 A17.2 b27 Stable (2019.03.10)**

* Improved command shutdownba: shutdownba will now asynchronously handle worldsaving, playerkicking and server shutdown. This will ensure that no chunks/inventories will get corrupted on save and shutdown.
* Added support for non vanilla quality values on giveplus command: now you can use giveplus on servers that have mods installed that changed the vanilla quality system.

**Version 9.6 A17.2 b27 Stable (2019.03.08)**

* Added anticheat GodMode detection: specify the maximum admin level in CpmSettings.xml (MaxAdminLevelGodMode (default=0)) which is allowed to use GodMode on server and all players with higher level (or no admin) will get reported in log for using unauthorized GodMode. Logline: [CSMM_Patrons]Unauthorized GodMode detected on {playerName} ({steamId}) !!!!!. NoClip detection becomes obsolete with this functionality as the only way to NoClip is by using GodMode.
* Added anticheat flying detection: disabled by default (CpmSettings.xml: PlayerFlying_TriggerHeight = 0). When specifying a PlayerFlying_TriggerHeight > 0, players will get reported in log for being at configured PlayerFlying_TriggerHeight or higher (=flying). Use CpmSettings.xml: PlayerFlying_MaxAdminLevelFlying for specifying the maximum admin level that is allowed to fly without being reported. Logline: [CSMM_Patrons]Player {playerName} ({steamId}) seems to be flying !!!!!
You can use CSMM custom discord notifications to be warned in discord when a hacker is active!

**Version 9.5 A17.2 b27 Stable (2019.03.05)**

* Added events for:
    * Player level up
    * Player animal kill
    * Player zombie kill

The events can be used by CSMM's event trigger.

**Version 9.4 A17.2 b27 Stable (2019.02.28)**

* A17.2 b27 compatibility


**Version 9.3.2 A17.2 b20 Experimental (2019.02.18)**

* Changed maximum chatlength to be a global setting in CpmSettings.xml instead of a per player setting. Its disabled by default (MaxChatLength = 0). For enabling, just put the number of characters in there you want to define as maximum length for a chatmessage.

**Version 9.3.1 A17.2 b20 Experimental (2019.02.16)**

* Small fix for bloodmoon aware shutdown (shutdownba): forgot to let the MustDelay check look at new bloodmoonfrequency setting for determining if the shutdown should be delayed until after configured time when bloodmoon ended. Also when a bloodmoonrange is set higher than 0 in serverconfig.xml, the bloodmoon awareness will be shut off, as bloodmoons will be random.


**Version 9.3 A17.2 b20 Experimental (2019.02.12)**

* Settings to CpmSettings.xml and strings to CpmStrings.xml for:
    * NighttimeAnnouncer
    * LocationTracker
    * HideChatCommandPrefixes
    * BlockUTF8Names
    * CPMPrefix
    * ChatcommandsPermissions (+day7 +hostiles)
    * Serverchatname
    * PreventFallingBlocks
    * ShutdownBA
    * BundoSize
    * Advanced Claims
    * Permadeath
    * Offline teleport

* Dedicated persistent data file for Non Map specific data for easy carry over (CSMM_Patrons_NonMapSpecific.bin):
    
    Includes:
    * Groupcolors
    * Group membership
    * Player chat color
    * Overridden chatname
    * Player muted
    * Player max chat length

* Chatcommands strings to CpmStrings.xml for chatcommands:
    * acf
    * ati
    * bag
    * aaf
    * raf
    * cti
    * delwp
    * ft
    * ftw
    * get
    * hostiles
    * lcf
    * lti
    * listwp
    * mv
    * mvw
    * rtc
    * rti
    * rcf
    * ls
    * setwp

**Version 9.2 A17.2 b20 Experimental (2019.02.09)**

Removed oldlcb system: functionality is in-game now
fixed /day7 to handle new random bloodmoons
fixed nighttime announcer to handle new random bloodmoons
removed option Hordecycle for nightime announcer
random bloodmoon string to CpmStrings.xml
fixed object type changes in a17.2

**Version 9.1.1 A17.1 b9 Stable (2019.02.06)**

* Fixed exploit in oldlcb system: Since version 9.1 the oldlcb system will have all your active landclaim blocks prevent sleepers from spawning, but i forgot to check if the sleepervolume was cleared before preventing the sleeper spawns. This version fixes that exploit. Now sleeperspawns are only prevented by all active landclaim blocks if the sleepervolume has been fully cleared. 


**Version 9.1 A17.1 b9 Stable (2019.02.05)**

* Improved oldlcb system: all your active landclaim blocks will now prevent sleepers from spawning again instead of only the one placed last. 


**Version 9.0 A17.1 b9 Stable (2019.02.01)**

* Improved reset unclaimed regions functionality: consolecommand resetunclaimedregionsnow and "shutdownba <minutes> resetunclaimed" will now take server configured landclaim size into account when determining regions that should not be reset. With considderation of landclaim size, any overlap from claimed area with a region will mark the region as claimed. No more cutting playerbases in half when using this functionality.


**Version 8.9.2 A17.1 b9 Stable (2019.01.27)**

* Proudly presenting the remote trading system: let players trade with eachother remotely through a trading chest. Unstress your server by not letting the endless tp-ing from and to a "lobby" happening only to let players trade with eachother there. It makes use of the underground postal pipeline system that was in the world long before the apocalypse ^^. Full support for mods. The chatcommand /rtc has a default permission level of 0. If you want to use on your server for players apply permission 1000 to the rtc chatcommand by doing consolecommand ccp rtc 1000.

Trading process:
Registering a secure storage chest as tradingchest is step one.
This can be done unlimited and anywhere, but last registered chest is the actual active trading chest.
This means the system can also be used when underway and away from base.

Registering a tradingchest:
* Place a secure storage chest, stand on it and do /rtc (register tradingchest) in chat.

Done your chest is now up and running as active tradingchest. The only time you have to stand on your trading chest is when registering it.

* 2 players put the stuff they want to trade in their tradingchest
* each player has to "offer" his/her trade to the other by /rti <(partial) playername>
  After putting the trade in the chest, do the chatcommand for releasing trading items /rti <(partial) playername>
* the players get a quality colorcoded overview (including attached mods) in chat of the offer the other player made.
* check the offer and if you agree to it, you can approve it by /ati <(partial) playername> (approve trading items)
* if both players have approved the deal, the contents of the chests will be swapped and deal is done.
* if one or both of the players dont approve of the deal they can just cancel it by /cti (cancel trading items).
* in case you are in active trading process (chest is inaccessable to you) and you forgot what you offered again, you can do /lti (list trading items) in chat and your offer will be listed in chat again.

**Version 8.8.2 A17.1 b9 Stable (2019.01.26)**

* Added possibility to consolecommand mv (moveplayer) to accept entity,- and steamId instead of only (partial)playernames. This to prevent losing characters on url encoding.
When using for creating a custom CSMM command with fo paramter for friendsonly teleport allowance, please be aware that it still supports moving to offline player. Strongly recommended to use consolecommand w2l in the same custom CSMM command  to write a logline with the fact that a player did tp to a friend. If he/she was offline and teleporting player got into base with the teleportcommand and did some booboo, you will know about it.


**Version 8.8.1 A17.1 b9 Stable (2019.01.20)**

* Added possibility to consolecommand mvw (move2waypoint) to accept entity,- and steamId instead of only (partial)playernames. This to prevent losing characters on url encoding.
* Updated map.js to reflect latest webmap version of Alloc. If you have upgraded to version 31, get your new map.js here to show adv. claims / reset regions.


**Version 8.8 A17.1 b9 Stable (2019.01.16)**

* Major bugfix on wi (wipeinventory): The way of cleaning the equipment, bag and inventory was done by wrong approach causing inventory and bag troubles. Strong advice to upgrade if planning on using this functionality!
Improved consolecommand cgc (chatgroupcolor): now its possible to manage offline players with groupcolor management.
* Compatible with A17 b240 (except rst (resetskilltree)), A17.1 b8 (except rst (resetskilltree)) and A17.1 b9


**Version 8.7 A17.1 b8 E (2019.01.15)**

* Improved Reset Regions landclaimblock detection: LCB cleanup will now calculate any overlaps/intersects with reset regions. If a LCB is placed and it overlaps a reset region based on server landclaimblock size, the player will get (CpmStrings.xml configurable) warning in chat that he/she is claiming to close to a reset region with the danger of part(s) of the base getting wiped on a reset. The landclaimblock placed will be put back in players inventory. 

**Version 8.6 A17.1 b8 E (2019.01.14)**

* Improved DonorSlots console command ds: A player made a donation? Just add to donorslot list by ds command and specify days bought. CPM will figure out if its a new donor,, expired donor or a donor that is still active and has time left on his/her donorship thus adding time to the end of donorship date/time
* Added console command wi (wipeinventory): born out of the unremovable quest from inventory bug. With this command you completely wipe a players bag, belt and equipment. Make a custom CSMM command with permissions for all players to let players fix the problem themselves.

**Version 8.5 A17.1 b8 E (2019.01.12)**

* Introducing DonorSlots system: a system to be able to set a donorbuffer. This buffer will determine how many of the max server slots are reserved for donors and admins only. It will not allow connection if trying to connect and server is virtually full. The connection is not even finished so ultrafast recognition and kicking. With consolecommand (ds) for managing donorslots and settings through console. Fully configurable by xml too (CpmDonorSlots.xml). Configurable strings for DonorSlots in CpmStrings.xml for kicking normal players on buffer full, kicking expired donors on buffer full, welcome message in game for donors and donors that have expired donorship.

**Version 8.4 A17.1 b8 E (2019.01.10)**

* shutdownba consolecommand  now accepts 0 as parameter for immediate kick of all players and shutdown.
* Added console command wpc (waypointcontrol): add/remove/list CPM waypoints with this console command.
* Added fo (friendsonly) parameter to mv console command. Now you can force the tp to be only allowed if target is a friend in-game. Very usefull for CSMM custom command for letting players teleport to eachother.


**Version 8.3 A17 b240 Stable (2019.01.08)**

Improved rst (resetskilltree) console command: Under circumstances the .bak → .ttp rollback mechanism of TFP would undo the skilltree reset. CPM will now say "No you dont!" to the rollback if it tries.
Added option to PVE zone kill punishment: now its possible to prevent punishment on PVE violation if offender and victim are in-game friends. When adding NPF (Not Punish Friends) to the PVE zone claimname, any violation in that zone will not trigger punishment if killing an in-game friend.

**Version 8.2 A17 b240 Stable (2019.01.06)**

* Fixed bug in PVE zone kill detection. Every hit from automatic weapon fire after death of victim is considdered another kill by TFP code. Fixed that every kill will trigger only one PVE violation.
* Added consolecommand w2l (write2log): now owners/admins/CSMM can write anything and everything they like to the server log. Usefull for custom triggering of discord notifications on log filter.


**Version 8.1.1 A17 b240 Stable (2019.01.01)**

* Bugfixes to new /aaf, /raf chatcommands and wlf consolecommand. First friend got added repeatedly.


**Version 8.1 A17 b240 Stable (2018.12.31)**

* Added chatcommand /aaf for advanced claims system. Whitelist all your ingame friends for your advanced claim(s) with just one chatcommand!
* Added chatcommand /raf for advanced claims system. Remove all your ingame friends from your advanced claim(s) whitelist(s) with just one chatcommand!
* Added consolecommand wlf (whitelistfriends): console command for adding/removing a player's ingame friends to/from their advanced claim(s) whitelist(s)

A happy newyear to all and best wishes for 2019 for everyone!!!

**Version 8.0 A17 b240 Stable (2018.12.28)**

* Changed: /bubble chatcommand and protect consolecommand to use despawn instead of high damage kills. Way less stressfull for server.
Oldlcb system is back! I managed to make autoremoval of LCB's in resetregions, grablcb, resetunclaimed and rlp2 consolecommands work with both old,- and new lcbsystem.


**Version 7.9.1 A17 b240 Stable (2018.12.23)**

* Fixed: bug in preventing new normal advanced claims intersecting with existing normal advanced claims. It blocked other types of advanced claims also.


**Version 7.9 A17 b240 Stable (2018.12.23)**

* Fixed WebApi always returning an empty json array on normal advanced claim request.
* Improved normal advanced claims: they cant overlap anymore. Now its safe to create a CSMM custom command to let players create base protection by advanced claim themselves.
* Reset unclaimed regions system: regions that contain a normal advanced claim (base protection) will also be considdered claimed and not be wiped.


**Version 7.8 (2018.12.21)**

* Fixed consolecommand  resetskilltree (rst) to use new costs for attibutes (again) to get all skillpoints spent back to the player on a skilltree reset. Fixed resetskilltree: ProgressionValue object property change by TFP.
* Changed consolecommand giveplus: when using only quantity parameter and the item has quality, a random quality will be chosen. If item has modslots, random mod(s) will be given. If using qualtiy parameter, the item will have the specified quality and if item has modslots they will be kept empty.
* Changed consolecommand checkloot to be able to handle and report existing mods on items with mods.
b240 compatibility.


**Version 7.7 (2018.12.18)**

* TFP removed level gates for attribute buying. Instead the attributes become more expensive the higher the level of the attribute. Changed the spent skillpoints calculation in consolecommand resetskilltree (rst) to reflect the new costs and get all skillpoints back to the player on a skilltree reset.


**Version 7.6 (2018.12.18)**

* No changes. Just a recompile/repack with b231 binaries. In case of strange behaviour or problems, first install this version.


**Version 7.5 (2018.12.17)**

* fixed worldedit commands to not null ref on sleepervolumes: Affected → bdup, brepblock and brender
fixed rlp2, grablcb and auto LCB removal on reset regions to function with new LCB system.
* removed oldlcb patching: New LCB system is so heavily intergrated in core game code, i give up bringing old claim system back
* improved auto removal of LCB placed on reset region: Claimblock will be returned to player


**Version 7.4.1 (2018.12.16)**

* Added consolecommand sayadmin: send a chatmessage with custom sendername to a group of players based on permissionlevel. Send a chatmessage to mods and admins only at once? 
Do sayadmin MyChatName 1 "Hey fellas, watch player X. Looks like he is duping". Or just to admins level 0 →  sayadmin MyChatName 0 "Hey fellas, watch player X. Looks like he is duping".


**Version 7.4 (2018.12.15)**

* Added consolecommand resetskilltree (rst): reset the skill tree of a player. Will set all attributes, skills and perks to default and give all skillpoints spent back to the player. This makes it possible to redo the complete skilltree on demand without losing any other progress made ingame for a player. Try out other "play styles" while keeping other progress made!
re-enabled consolecommand lps (listplayerskill): list all levels of player's attributes, skills and perks.


**Version 7.3 (2018.12.14)**

* Added consolecommand resetplayerdata (rpd): reset a player. Deletes .ttp, .map and .bak files of a player. Resetting him/her to new player state.
* Added webapi interface: Resetregions / advanced claims on webmap make use of the new webapi, making it suitable for displaying reset/claim data on mulitiple server instances.
Make sure to update your map.js to hook into the new webapi. 


**Version 7.2 (2018.12.12)**

* A17 b221 compatibility

**Version 7.1 (2018.12.07)**

* Added support for all new vehicle types to consolecommand lce (listcustomentity): filters added → jeep, bicycle, gyrocopter, motorcycle
* Renamed consolecommand cbc (checkbikecontent) to cvc (checkvehiclecontent) and added support for all new vehicletypes → jeep, bicycle, gyrocopter, motorcycle. cvc will report owner if the vehicle has been locked.
* Fixed consolecommand getbike to adapt to TFP's new implementation of bikeownership. Not locked is NO owner.
* Added consolecommands for getting all new vehicletypes to their owner: getjeep, getbicycle, getmotorcycle and getgyrocopter.


**Version 7.0 (2018.12.05)**

* Added consolecommand repairtrees (rt): check map for bugged trees and report them. Do repairtrees repair to repair the exploit trees. Note: this will only fix the exploitable trees that have a damageindicator when hitting them. The ghosttrees that are not exploitable but also non interactable cannot be repaired.
* Added some more logic to heartbeat thread aborting. When external servermanagers (nonVanilla, nonCPM) do a shutdown routine witin a thread of their own there could be circumstances of the thread not closing down properly. With this addition i hope to mitigate that risk.


**Version 6.9 (2018.12.02)**

* Added old LCB system back!!! (through command oldlcb): multiple LCB's per player possible again with protection active. Strongly recommended to activate when using resetregion/resetunclaimed functionality.
The system is off by default. To activate, do console command oldlcb true. Maximum number of active LCB's is configurable and default set to 5.
* Fixed PVE punishment trigger going off when one killed oneself in a PVE zone.


**Version 6.8 (2018.11.27)**

* Added arresttimer to arrest consolecommand: add parameter in minutes that indicates how long the player should be in jail before getting automatically released. Text for release message can be altered via setstring consolecommand or editting CpmStrings.xml
* Added filterpossibillity to /day7  stats and fps info. They can be indiviually disabled by entering "off" in CpmStrings.xml for Day7_Stats and/or Day7_Fps.
* Fixed nullrefs on chatmessages when player without CPM persistent player object sends a messsage.

**Version 6.7 (2018.11.26)**

* Added bloodmoon activation for all types of advanced claims. This makes it possible to let advanced claims only be active during bloodmoons within a defined timespan. Its implemented by claimname. Use prefix "bmonly(fromHour-toHour)_" to tag a claim as bloodmoon only between fromHour and toHour. Ex. bmonly(20-7)_NoEnemies: this will activate this claim every bloodday from 20:00 until after bloodmoon 07:00. All claim types supported.
* Changed data for Chatcolor, Chatmute, MaxChatLenght and HideChatCommandPlayers to be stored in CPM's persistent bin. They were still saved in Allocs persistent bin which has a prob with keeping the data persistent atm.
* Migration of resetregion notification strings to CpmStrings.xml. mrr console command can still be used to set it. But now it can also be altered by editting CpmStrings.xml or setstring consolecommand.


**Version 6.6 (2018.11.25)**

* Added tag on every consolecommand response that indicates a functional error. CSMM will now be able to distinguish successfull from unsuccessfull command execution.
* Added stats to /day7 chatcommand: Fully configurable with setstring consolecommand or editting /saves/CpmStrings.xml. Server FPS, nr of players and nr of zombies will be shown.
* Added subcommand to hccp for listing enabled hidden chatprefixes.


**Version 6.5 (2018.11.24)**

* Fixed backend logging for chatcommands that were hidden by hccp consolecommand. CPM still sent the chatlog in old (A16) format, rendering custom CSMM commands not working. Chat log is now A17 format and custom CSMM commands are picked up again.


**Version 6.4 (2018.11.23)**

* Fixed giveplus consolecommand. Only accepting new quality tier values now.
Added suffix to chatname when chatting in party or friends chat with overridden chatname or colored chat,- name/text ( (Friends) and (Party) ). Now its always clear from what channel the chat came.


**Version 6.3 (2018.11.22)**

* Fixed teleportplayerhome consolecommand
* Fixed and re-enabled unlockall consolecommand
* Fixed Party/Friends chat when using overridden or colored chatname
* Fixed multiple gameinstances persistent data usage. Persistent bin will be in gameseed savegame folder again


**Version 6.2 (2018.11.21)**

* Fixed advanced claim hostilefree. All hostile entities will despawn again in hostilefree advanced claim.


**Version 6.1 (2018.11.21)**

* Due to some strange behaviour in A17 when getting the savegame directory for a gameseed, persistentdata could not be saved. This version fixes that. All CPM settings can be saved again and be persistent.


**Version 6.0 (2018.11.20)**

* A17 Experimental Compatible version


**Version 5.39 (2018.11.11)**

* Added

    * chatcommand /day7: shows bloodmooninfo with time awareness. Fully configurable with new setstring consolecommand.
    Time awareness strings of /day7:
    Day7_bloodmoonWarningB4Four = command /day7 issued on bloodday before 04:00 message
    Day7_bloodmoonWarningAfterFour = command /day7 issued on bloodday after 04:00 message
    Day7_bloodmoonWarningDuring = command /day7 issued on active bloodmoon night (after midnight) message 
    Day7_bloodmoonWarningDaysleft = command /day7 issued at 1 to 6 days before bloodmoon message 
    Day7_day = text for day when only 1 day is left until bloodmoon
    Day7_days = text for days when more than 1 day is left until bloodmoon
    consolecommand setstring: new editable string framework for CPM string management. For now only /day7 uses it. Strings file will be /saves/CpmStrings.xml. Can be applied by xml edit or using the setstring command with key↔value parameters. Use setstring without parameters to list all strings. In future versions all CPM strings will be put in this framework.


**Version 5.38 (2018.11.06)**

* Added: Console command bun (blockutf8names): prevent players with non-ascii chars from logging in on your server.


**Version 5.37 (2018.11.01)**

* Added (Full verson only)

    * Complete rewrite of the fallingblock detection/prevention system: new commandname: pfb (preventfallingblocks) If enabled (<logBlockCount> value greater than 0) it will prevent any blocks from falling on your server (they will vanish). With <logBlockCount> you specify from which number of simultaneously falling blocks you would like to get informed with a logline showing number of blocks falling at once and location). 


**Version 5.36 (2018.10.29)**

- Added (Full verson only)

    * Finetuned the fallingblock detection system: When a collapse starts (20 blocks monitoring still advised) it will report first batch with tekst: 
[CSMM_Patrons] XXX falling blocks at once detected! Position: x, y, z Use substring of this for discord notification on falling blocks. All subsequent drops of the same batch will be reported as:
[CSMM_Patrons] XXX blocks are still falling on position: .x, y, z} This will indicate the durartion and severity of the collapse in log. (This can be a lot of loglines, dont put discord notification on it)
Added 0 to allowed values of sps console command: set playerkills and zombiekills to 0 is now possible again.

**Version 5.35 (2018.10.26)**

- Added (Full verson only)

    * new consolecommand sdc (setdeathcount): set the death count to any value on any player. Want to compensate that poor player with a death caused by  gamebug? Just deduct 1 of his/her death count. Want to give donors the opportunity to reset their deathcount to zero? Just create a custom donor shielded CSMM command for it (sdc ${steamId} 0) and you are good to go.
    * new fallingblock detection system: with console command mfb to set the max number of falling blocks (at once) that are allowed until the drop will be reported to log. It is disabled by default (value 0). For detecting relevant drops the adviced number is 20 as drops always break down in batches. When you get mulitiple of 20 blocks, trust me, a large portion of the map is collapsing. (wink)
    This system can be turned on ondemand. When suspecting dropmining or POI collapsing just set the value higher than 0 (advised 20) and the monitoring is in effect. The location is in the loginfo. After that you could disable the sys again with setting it to 0.
    * Added cpm- prefix to primairy console command aliases. Now all CPM commands will be grouped together when doing the help command..
    * new console command cpm-help: displays all CPM console commands.


**Version 5.34 (2018.10.21)**

- Added (Full verson only)

    * Extended reset region system with functionality to reset all(!) regions of the map that do not have claimblocks on them. 
    * New console command for resetting regions without claimblocks immedeately: resetunclaimedregionsnow This will kick all players and shutdown/reset immedeately.
    * Added parameter to shutdownba: "shutdownba <minutes> resetunclaimed": This will trigger a bloodmoon aware shutdown with a nice timer in <minutes> in chat every minute.


**Version 5.33 (2018.10.16)**

- Changed (Full verson only)

    * Changed /grablcb chatcommand to grablcb consolecommand. For chatcommand (with permissions, costs etc) use this consolecommand for creating a custom CSMM chatcommand


**Version 5.32 (2018.10.14)**

- Added (Full verson only)

    * rlp2: added option to remove all expired claimblocks from the map. Chunks will autoload if needed. ("rlp2 cleanup")
    * new consolecommand scn (serverchatname): set the global chatname of all CPM communication. With colorcode support.
    * new consolecommand getbike: tp bikes to their owners as admin or create a custom CSMM command for players to do it themselves.
    * chatcommand /grablcb: let a player pickup owned landclaims near his position (into backpack)
    * giveplus console command:
    put items directly in backpack
    added an option to give item(s) to all onine players at once (into backpack)
    when giving an item that has quality wihout defining the quality in cmd, giveplus will choose random quality
    * fixed giveplus not being able to give items without quality.

**Version 5.31 (2018.09.03)**

- Added (Full verson only)

    * console command say2: use to broadcast server messages with a custom name. Colorcoding supported.

Example: say2 "[00FF00]Whos your daddy?![-]" "No stealing, raiding, griefing allowed!"


**Version 5.30 (2018.09.02)**

- Added (Full verson only)

    * realtime PVP punishment in explicitly tagged PVE zones. PVP punishment activates when there is a notify claim with "pve" in the name AND a 3rd notify parameter is issued. The 3rd parameter can be used to fire (multiple) console command(s) at an offending player (spawn zeds, kick, ban, jail, kill, tp etc etc) for punishment. Check Advanced Claims (type Command) for syntax on commands. The mod will know a player killed a player even before the game itself does ^^. Enter,- and exitmessages are required within a PVE notify claim that has punishment. A logmessage will be written on punishment including victim and offender and their positions. This could be used to create a CSMM discord notification on PVP punishment.

    Example: ccc add PVEzone -10000 10000 10000 0 0 "notify:You are entering a PVE zone!:You are leaving a PVE zone!:kick ${entityId} 'You have been violating PVE rules.'"

**Version 5.29 (2018.08.28)**

- Added (Full verson only)

    * batch adding regions marked for reset with mrr command: mrr add <w_boundary> <e_boundary> <n_boundary> <s_boundary> and mrr remove <w_boundary> <e_boundary> <n_boundary> <s_boundary> → all regions that get touched by the defined area are added/removed to/from the reset region list.
    * console command mv: console equivalent of the /mv chatcommand. Partial playername and offline player supported 
    * console command mvw: console equivalent of the /mvw chatcommand. Partial playername and offline player supported     


**Version 5.28 (2018.08.27)**

- Fixed (Full version only):

    * XSS vulnerability in advanced claims on alloc's webmap (BIG thanks to Catalysm for reporting!)
- Added (Full verson only)

    * Customisable chatcommand prefix: use consolecommand cpmprefix to set it.
    * Chatcommand /rt : return to your origin position after using /ft or /ftw for easy teleporting      


**Version 5.27 (Light version 2.13) (2018.08.22)**

- Fixed: shutdownba settings not being persistent


**Version 5.26 (2018.08.20)**

- Added (Full version only):

    * Added offline player support for admin chatcommands /ft, /mv and /mvw

        /ft offline player

        /mv online player to offline player

        /mv offline player to online player

        /mv offline player to offline player

        /mv offline player to coordinates

        /mvw move offline player to waypoint

    * **Warning**: persistent data structure has changed and demands a wipe. While server off after updating mod, please remove /saves/Random Gen/<mapname>/CSMM_Patrons.bin before starting server again. Advise: if you have advanced claims (reset region claims will be created automatically) do a "ccc list" before updating and copy paste the output. Makes it easier to recreate after .bin wipe.



**Version 5.25 (2018.08.15)**

- Added (Full version only):

    * Added permadeath play: tag players as permadeath player and they will be resetted when they die. Use console command pd (permadeath) for managing the permadeath players
    * Added interfaces to allocs webmap for all advanced claims: display all adv. claims on allocs webmap. Shielded behind permission webapi.viewallclaims in webpermissions.xml.
    Download the patch needed for Allocs webmap here.

    * Added a special substance to reset regions which will melt any landclaimblock that is put on them.
    * Added ghost claim removal (landclaims that have been reset but are still present on Alloc's webmap). Will automatically do its work on regions marked for reset.


**Version 5.24 (2018.08.11)**

- Added (Full version only):

    * Added new adv. claim type "playerlevel": this claim can be used to restrict/grant access to a claim by playerlevel. Built in basic logical expression support and level ranges. 
    Supported operators: <= (and =<), >= (and =>), == (and =), != (and =!) Define ranges by using 2 operators in 1 claim (use & between expressions).
    Examples:
    allow levels between 5 and 10: playerlevel:>=5&<=10
    allow only level 5: playerlevel:=5
    allow all levels but 5: playerlevel:!=5
    allow levels lesser than or equal 5: playerlevel:<=5

    * Added new adv cllaim type "command": fire one or multiple consolecommands when a player enter this claim. The type must be enclosed in double quotes and parameters with spaces within each command must be enclosed in single quotes. Use semicolon ( ; ) to seperate commands.
    Example:
    ccc add deathzone -10 10 10 -10 0 "command:say '${playerName} has entered the DeathZone!!! mwuhahahaha!';pm ${entityId} 'I wish you luck my friend. Lots of it...';sh ${steamId} 30"
    Example shows all 3 supported placeholders (casesensitive): ${playerName}, ${entityId} and ${steamId}


**Version 5.23 (Light version 2.12) (2018.08.05)**

* Changed (Full & Light version):

    * console command lpf (listplayerfriends): returns playernames and steamid now instead of only steamid's.

* Added (Full version only)

    * console command ccc (claimcontrolcommand): added methods to make creating claims easier. Implemented p1 p2 functionality like you may allready know from pblock commands. And radius functionality. Radius will create a claim of any type based on the position of a player or antity making borders at distance <radius> from the player/entity. This could be used for creating a CSMM custom command to let players make a defensive claim themselves. Make that a timed claim even and players could be charged an amount of currency to set it for another week for example.


**Version 5.22 (2018.08.01)**

- Added (Full version only):

    * Added new console command resetregionsnow: this will immediately shutdown and reset all regions marked for reset. Players will get kicked and world will be saved. No countdown, no bloodmoon awareness. If you want to reset the regions a more player friendly way, use "shutdownba <minutes> reset". That way the players will get a bloodmoon aware timed shutdown.
    * Added optional parameter regionName to mrr (markresetregion): now its possible to give a regionname as parameter so it can be used when not in game. Ingame both can be used (location based and by name). Via remote (telnet, webapi) only name based can be used. mrr add/remove <regionName>


**Version 5.21 (2018.08.01)**

- Added (Full version only):

    * Added interface for alloc's webmap to be able to show regions marked for reset on the webmap.
    For displaying the reset regions on the webmap, a patch for allocs map is needed.


**Version 5.2 (2018.07.31)**

- Added (Full version only):

    * Added fully automated enter,- and exit notification creation on regions marked for reset. 
    * Added possibility to make notify claims with an exit message


**Version 5.17 (2018.07.26)**

- Added (Full version only):

    * Region reset system with console command mrr (markresetregion): manage the list that contains the regions that will be resetted when giving command shutdownba <minutes> reset
    The file that contains the regions marked for reset is located in /saves/ResetRegions/regions.txt. You can edit manually and it will be in effect immediately after saving. Or you can add/remove/list regions ingame with console command mrr.


**Version 5.16 (2018.07.23)**

- Changed (Full version only):

    * added permissions to /ls (last seen). Default permission level is set to 1000 so all players can use. Set permissions with ccp command.
    * new chatcommand /bag: teleports a player to his/her backpack after death. Default permission level is set to 1000 so all players can use. Set permissions with ccp command.
    * new console command tp2bag: teleports a player to his/her backpack after death. Same as chatcommand /bag but with console command you can make a custom CSMM command and charge players currency for use and set a timeout.


**Version 5.15 (2018.07.22)**

- Changed (Full version only):

    * bugfix: forgot to take rename of 5.14 into account with ccp (chatcommandpermissions)
    * new chatcommand /get: teleport a player to you. Partial,- and ambiguous names support present as with all chatcommands. Return the player to origin with /tb (take back)


**Version 5.14 (2018.07.21)**

- Changed (Full version only):

    * renamed chatcommands /lo to /ls (last seen) and /return to /tb (take back) for servertools compatibility.

**Version 5.13 (2018.07.20)**

- Added (Full version only):

    * new advanced claim type "notify": this defines a claim (zone) in which players get a configurable message in chat when they enter the claim (PVE, PVP or no build zones for example).
    * new chatcommand /return: return a player to the position they were before getting teleported by /mv or /mvw

**Version 5.12 (2018.07.17)**

- Added (Full version only):

    * console command arrest: put a player in jail (advanced reversed claim named "jail" (lowercase) required!)
    * console command release: release a player from jail


**Version 5.11 (Light version 2.11) (2018.07.16)**

- Added (Full & Light version):

* console command cbc (checkbikecontents): check the content of the minibike basket and parts of the minibike.
* console command ob (ownbike): take ownership of any minibike

**Version 5.1 (Light version 2.1) (2018.07.13)**

- Added:

    * console command shutdownba: shutdown server with a countdown. Shutdown is bloodmoon aware and fully configurable (Full & Light version)
    * chatcommand /lo : check when a player was last seen online (Full version only)


**Version 5.0 (Light version 2.0) (2018.06.29)**

- final small bugfixes and tidy up. Coppis Addidtions renamed to CSMM Patrons Mod.

 

**Version 4.93 (Light version 1.3) (2018.06.26)**

- fixed Servertools compatibility

 

**Version 4.92 (Light version 1.2) (2018.06.23)**

 

Light version and Full version:

- ocn (overridechatname): explicit save to persistent data on command use data change

- tcch (togglechatcommandhide): support hiding multiple chatcommand prefixes

 

Full version only:

- new command ccp (chatcommandpermissions): set permission level on admin chatcommands (ft, ftw, mv, mvw, listwp, setwp, selwp, bubble)

- new command hcc (hostileschatcommand): enable/disable the /hostiles chatcommand

- command ccc (claimcontrolcommand): added making whitelisting of offline players possible

- new advanced claim type hostilefree: create an advanced claim where all hostiles will despawn

- new advanced claim type openhours: create an advanced claim that allows access during ingame opening hours

- new advanced claim type portal: create an advanced claim that acts as a portal. Permission levels for admins and whitelisting for players that can trigger the portal (public access possible)

 

**Version 4.91 (Light version 1.1) (2018.05.24)**

Changed:

- prepblock: removed obsolete rot parameter. Servermanagers dont need to change anything. Parameter still accepted but does nothing.

- prepblock <block_name> <qnt> <qnt> <qnt> not accepting 0 for qnt anymore and y length being one to high when using qnt.

- prepblock: fixed null ref exception on block 17 when displaying all blocks.

- prepblock: x, z being off 2 blocks on negative qnt parameters

 

**Version 4.9 (2018.05.21)**

Added:

- console command cp-help: list only coppis commands in console.

 

**Version 4.8 (2018.05.20)**

Added:

- console command playsound: play any ingame sound on any server/player position

 

Changed:

- advanced claims: added accessLevel for claims. Define which admin levels can enter a claim. Existing claims will get accessLevel 0 by default.

 

**Version 4.7 (2018.05.06)**

Changed:

- pblock: accepting rotation parameter again so botman doesnt have to change code. Warning: the rotation parameter will do absolutely nothing but command will accept it anyways.

 

Fixed:

- pblock: 2 blocks differential on negative qnt parameters (Thanks Spectral Force and RagnarokPVP for finding and reporting)

 

**Version 4.6 (2018.04.27)**

Fixed:

- safe command: now its possible to undo traderprotection (unbreakable blocks) on an area!!! Protect and Unprotect blocks, prefabs, bases etc at your will. Even works on existing traders (wanna redecorate them? Just do it!)

 

Changed:

- pblock command: removed the obsolete rotation parameter (command allready has direction functionality)

- safe command: using quantity system instead of coordinate system when using qnt parameters (same as new pblock)

 

**Version 4.5 (2018.04.17)**

Fixed:

- checkloot command: bug that emptied the chest upon using the command (BIG thanks to RagnarokPVP for finding and reporting it)

 

Added:

- rlp2 command: remove specific or all claimblocks of a player without the need of player(s) being near. Chunks will autoload.

- pblock1 commmand: put block at given position without the need to reload the chunk (as per smegzor's request).

Servermanagers can use it to build structures block by block with an audience to watch it happen.

- fixdeathloop command: fix a player's ttp file that has been corrupted on dying. (Thanks to AZeDo for finding out which bytes to replace ([url]https://youtu.be/6ZNSgl_l0FU[/url]))

 

**Version 4.4 (2018.03.04)**

Fixed:

- compatibillity issues when using any of the chatcoloring or nameoverride functions in CoppisAdditions. Now mods that get loaded after Coppis alphabetacally will receive the message with a ClientInfo object again so they can interprete and use it for checking if its a command they need to handle (ServerTools for example).

 

- pblock <block_name> <qnt> <qnt> <qnt> <rot> not accepting 0 for qnt anymore and y length being one to high when using qnt.

 

**Version 4.3 (2018.02.26)**

Fixed:

- bug in pblock: creating platforms/structures with specific coords or quantities making x and z length 1 to high

 

Changed:

- default chatcommand for location tracker to /loctrack (was /who). Only affects new installations. If you have an existing

  installation and use botman AND want to use its /who fuctionality, please change the chatcommand via "loctrack command newCommand".

  It can still be set to anything you like.

 

Added:

- configurable response color for locatation tracker chatcommand ("loctrack responsecolor hexString")

- configurable text (with (nested) colorcode support) for NightTime Announcer

  - an announcer name

  - an nighttimetext string

  - an blooddaytext string

  - an blooddaytomorrowtext string

  - an counterdaytext string

- configurable warning hours for NightTime Announcer ("an warnhours hours")

 

**Version 4.2 (2018.02.21)**

Fixed:

- bug in loctrack: location tracker settings not being saved

 

**Version 4.1 (2018.02.20)**

Fixed:

- datetime format in "loctrack showtrack". Now displays yyyy-MM-dd HH:mm:ss  x,y,z

 

Added:

- Advanced claims

- NightTime announcer

- Protective bubble

- Primairy consolecommand aliasses. All start with "cp-" to identify them as CoppisAdditions commands

 

**Version 4.0 (2018.02.17)**

Fixed:

- pcheck not reporting blockname (only id) when checking a block

 

Added:

- /hostiles chatcommand: report enemy activity in your vicinity

- location tracking system with console,- and chatcommand for querying

 

**Version 3.91 (2018.02.13)**

Fixed:

- pcheck reporting wrong y-coord when checking a block

 

Improved:

- fly detection: no more false positive if player is standing on absolute edge of rampBlock or halfBlock

 

**Version 3.81 (2018.02.10)**

Minor Update:

- added ocn list: list players that have overridden chatname

 

**Version 3.8 (2018.02.09)**

- added ChatGroupColor (cgc): assign players to groups and have them using the same chatname color

- added OverrideChatName (ocn): Give a player any chatname you want on your server

 

**Version 3.7 (2018.02.08)**

Improved:

- Improved noclip detection (pug command)

- Improved fly detection (pgd command)

 

Fixed:

- pblock null reference exception on listall blocks (searchstring *)

- fixed player position calculation. Affects:

    • checkloot (CheckLooter)

    • killallzombies

    • lec (ListEntityCustom)

    • owner (MakeOwner)

    • pgd (PlayerGroundDistance)

    • pug (PlayerUnderground)

    • pcheck (PrefabCheckBlock)

    • pdup (PrefabDuplicator)

    • pexport (PrefabExport)

    • pblock (PrefabFillBlock)

    • prender (PrefabRender)

    • prepblock (PrefabReplaceBlock)

    • safe (ProtectionChange)

    • additemloot (PutOnLooter)

    • remitem (RemoveFromLooter)

    • spawnminibike

    • sme (SpawnMultipleEntity)

- listplayerbed fixed incomplete listing of all players's beds if on of the players has no bed

- removed obsolete physics command
