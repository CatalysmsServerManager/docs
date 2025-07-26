# Version History

**Version 25.9 2.2 b1 Experimental (NOT 2.0 b295 Stable compatible) (26-07-2025)**

* Fixed traders despawning in hostilefree advanced claims on non-English localized servers
* 2.1 b10 Stable compatible

**Version 25.8 2.1 b7 Stable (NOT 2.0 b295 Stable compatible) (20-07-2025)**

* 2.1 Stable compatibility: fixed playerKilledByPlayer and playerKilledByEntity loglines reporting wrong names

**Version 25.7 2.1 b7 Stable (NOT 2.0 b295 Stable compatible) (14-07-2025)**

* 2.1 Stable compatibility: fixed hostilefree claim despawning traders because of the change to localized names

**Version 25.6 2.1 b7 Experimental (NOT 2.0 b295 Stable compatible) (12-07-2025)**

* 2.1 Experimental compatibility: fixed usage of localized EntityName 

**Version 25.5 2.1 b5 Experimental (NOT 2.0 b295 Stable compatible) (06-07-2025)**

* 2.1 Experimental compatibility: fixed harmony patching for locking the server by moving patch to subclass LiteNetLibAuthWrapperServer when using kicklockreboot parameter on reset commands 

**Version 25.4 2.0 b295 Stable (NOT 1.4 b8 Stable compatible) (16-06-2025)**

* 2.0 Stable compatibility

**Version 25.3 1.3 b9 Stable (1.2 b27 Stable compatible) (01-02-2025)**

* Moved ResetRegions data to specific map Save location. New location is in your maps Save location /ResetRegions. Old data will not automatically be migrated. Just copy files from /Saves/ResetRegions/ to /ResetRegions/ in your maps Saves folder.
* Updated block placement detection to newest gamecode. Affects ResetRegions, ProBlock, Antiblock, LcbFree and Landclaim adv. Claims

**Version 25.2 1.2 b27 Stable (NOT 1.1 b14 Stable and lower compatible) (06-12-2024)**

1.2 b27 Compatability:

* Fixed consolecommands:
    ownvehicle
    getbicycle
    getbike
    getmotorcycle
    getjeep
    getgyrocopter
    gethelicopter
    getdrone
    getblimp
    addfriends
    grablcb
    removelandprotection2

* Fixed webapi's:
    getlandclaims
    getplayerhomes

* Fixed Permadeath

**Version 25.1 1.1 b14 Stable (NOT A21.2 b37 Stable and lower compatible) (16-11-2024)**

* Fixed consolecommand sayadmin: did nothing at all
* Fixed consolecommand lfp (listfriendsplayer): friends names were not displayed (only EOS ID)

**Version 25.0 1.1 b14 Stable (NOT A21.2 b37 Stable and lower compatible) (25-07-2024)**

* Official 1.1 Release
* Added CPM WebUI 1.9.0: start map in zoomed out state

**Version 24.3 1.0 b330 Experimental (NOT 1.0 b313 Experimental and lower compatible) (15-07-2024)**

* Improved bloodmoonstart despawner: better handling of enemies, that in edge case have already been despawned.
* Changed WebUI port to default to WebdashBoardPort + 1. Allocs own mod does not claim a port anymore and is part of vanilla. No reason to make the port difference so big (+3). This will ONLY  be applied if you generate a NEW CpmSettings.xml or have removed the WebUI_Port setting from an existing CpmSettings.xml. Existing values will NOT be overwritten and keep being used.

**Version 24.2 1.0 b317 Experimental (NOT 1.0 b313 Experimental and lower compatible) (12-07-2024)**

* Removed chatcoloring and playerrenaming from friends and party channels. Because broken (publicly visible, so if on 24.1 please update)
* Added colorsetting in CpmSettings.xml for "command received" reply on chatcommands (`<CommandReceivedColor>D00000</CommandReceivedColor>`)

**Version 24.1 1.0 b316 Experimental (NOT 1.0 b313 Experimental and lower compatible) (12-07-2024)**

* Fixed chatcoloring, groupcoloring, chatnameoverriding, servernameoverriding and all chatrelated FUBARs that came with b316 (including say2 and pm2)

**Version 24.0 1.0 b316 Experimental (NOT 1.0 b313 Experimental and lower compatible) (12-07-2024)**

* Emergency release
* FUBAR: chatname coloring, chatname renaming, custom servername, custom playername. These are all off for now until i find time and a method to fix. Server will at least be running.

**Version 23.9 1.0 b313 Experimental (NOT A21.2 b37 Stable and lower compatible) (30-06-2024)**

* fixed owner name not showing properly in CPM WebUi on landclaim details.
* Changed custom bloodmoonspawner to do an extra check that was added in vanilla method.

**Version 23.8 1.0 b309 Experimental (NOT A21.2 b37 Stable and lower compatible) (24-06-2024)**

* 1.0 cramps massaged

**Version 23.7 1.0 b306 Experimental (NOT A21.2 b37 Stable and lower compatible) (22-06-2024)**

* LOTS of compatibility fixes
* Brought reset region system up to speed with todays standards. No more server restart needed. Removed parameters from shutdownba. Consolecommands resetregions and resetunclaimedregions can be used at will, ultra fast and on a running server. Marking regions (by console or webui has not changed)
* Due to big changes in storage, tradingsystem and consolecommands checkloot, remitem, unlockall and own have been removed

**Version 23.6 A21.2 b37 Stable (NOT A21.1 b16 Stable and lower compatible) (20-11-2023)**

* A21.2 b37 Stable compatibility
* Improved hostilefree advanced claim: better handling of enemies, that in edge case have already been despawned.
* Changed consolecommand addfriend: fixed A21.2 b37 incompatability

**Version 23.5 A21.1 b16 Stable - A21.2 b14 Experimental (10-08-2023)**

* A21.1 b16 Stable - A21.2 b14 Experimental compatibility

**Version 23.4 A21.1 b6 Experimental (21-07-2023)**

* A21.1 b6 Experimental compatibility
* Fixed /day7 zombie count
* Changed consolecommand mv: added parameter os (offline support) for parameter fo (friends only). If os parameter is added to mv fo, the tp will support offline target player. If omitted, offline tp is not supported.
* Removed command tprotect: TFP moved traderprotection to RWG prefab level instead of chunk/block level. Renders trprotect completely useless. Back to the drawing board for this functionality.

**Version 23.3 A21 b324 Stable (NOT A20 and lower compatible) (29-06-2023)**

* A21 b324 Stable compatibility

**Version 23.2 A21 b317 Experimental (NOT A20 and lower compatible) (24-06-2023)**

* Changed RegionsReset, Vehicle/Drone Removal, ResetPlayerData and Permadeath: implemented thread/latesaving safety. In edge cases (high pop servers) there was a chance of failing, because of busy gamethreads/latesaving operations.
* CPM Web UI 1.8.3: added location to landclaim info on map.

**Version 23.1 A21 b313 Experimental (NOT A20 and lower compatible) (15-06-2023)**

* CPM Web UI 1.8.2: switched coordinates for Mouse position and Last click from N/S - E/W to E/W - N/S
* Changed flydetection: fixed false positive on flying when player is in water/swimming in A21.
* Changed webapi access: added possibility to add apiusers in cpmcc_permissions.xml. Now you can use apiuser(s) to gain access to the cpm webapis based on their permissionlevel. Add "?apiuser=username&password=password" after your apicall from any script/software to use cpm apis. Delete cpmcc_permissions.xml and it will autogenerate with apiusers tree on server start. Or add the tree manually like below.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cpmcc_permissions>
	<apiusers>
		 <!-- <apiuser username="apiuser1" password="password1" permission_level="0" /> -->
	</apiusers>
	<permissions>
		<permission module="cpmcc.map" permission_level="0" />
		<permission module="cpmcc.createadvclaims" permission_level="0" />
		<permission module="cpmcc.getlandclaims" permission_level="0" />
		<permission module="cpmcc.getadvclaims" permission_level="0" />
		<permission module="cpmcc.getresetregions" permission_level="0" />
		<permission module="cpmcc.getplayerhomes" permission_level="0" />
		<permission module="cpmcc.getplayersonline" permission_level="0" />
		<permission module="cpmcc.getquestpois" permission_level="0" />
		<permission module="cpmcc.getallpois" permission_level="0" />
		<permission module="cpmcc.gettraders" permission_level="0" />
		<permission module="cpmcc.getvehicles" permission_level="0" />
	</permissions>
</cpmcc_permissions>
```

**Version 23.0 A21 b313 Experimental (NOT A20 and lower compatible) (12-06-2023)**

* A21 Compatibility.
*  Changed CPM Web UI: Added owner name to bed(roll) info. Added owner name and vehicle id (both loaded and unloaded vehicles) to vehicle info.
* Changed consolecommands resetlevel, resetskillpoints and removeexpdeficit: no more playerkicking for offline ttp editing. Level, skillpoints and expdeficit can be set live with player online.

**Version 22.4.1 A20.6 b9 Stable (NOT A20.5 and lower compatible) (19-12-2022)**

* Note to self to NOT empty worldgeneration caches on chunkresets on a server that still needs to run after the reset. Please update 22.4 if you have already downloaded it.

Changelog is the same as 22.4:
* changed consolecommand ResetChunks: fixed region corruption on using chunkresets
* enabled consolecommand rac (resetadvclaims): enabled command for resetting adv. claim reset areas, without the region corruption. You can use adv. claim reset again!
* changed command rrp (resetrwgprefabs): now using chunkresets for resetting prefabs again, without the region corruption. Reset all prefabs in minutes!
* vanilla consolecommand cr (chunkreset) will still cause region corruption if used, except if you use the fix (mod) that O C has created for patching this command.

**Version 22.4 A20.6 b9 Stable (NOT A20.5 and lower compatible) (19-12-2022)**

BIG Shoutout to O C, the author of ServerTools. He found out, that deleting a chunk before regenerating it, will cause region corruption. That makes this release possible in the first place.


* changed consolecommand ResetChunks: fixed region corruption on using chunkresets
* enabled consolecommand rac (resetadvclaims): enabled command for resetting adv. claim reset areas, without the region corruption. You can use adv. claim reset again!
* changed command rrp (resetrwgprefabs): now using chunkresets for resetting prefabs again, without the region corruption. Reset all prefabs in minutes!
* vanilla consolecommand cr (chunkreset) will still cause region corruption if used, except if you use the fix (mod) that O C has created for patching this command.

**Version 22.3 A20.6 b9 Stable (NOT A20.5 and lower compatible) (13-08-2022)**

* Added settings for Level Jump detection: configure MinJumpLevel, ExcludeAdminLevel and command(s) to execute on detection in CpmSettings.xml
* Added placeholder ```${platformId}``` for use in commands in Adv. Commandclaim, SpectatorDetection, GodmodeDetection, DamageDetection and LevelJumpDetection. ${steamId} is still in for backwards compatability in existing commands.

**Version 22.2 A20.6 b8 Experimental (NOT 20.5 and lower compatible) (30-07-2022)**

* A20.6 b8 compatability
* Fixed consolecommands bexport and brender: prefab im,- and exporting broke with A20.6 b8
* Changed consolecommand deactivatebedroll: added Xbox Live support
* Removed consolecommand givexp: TFP added that command to vanilla

**Version 22.1 A20.5 b2 Stable (12-06-2022)**

* Fixed tradingsystem: releasetradingitems (/rti) and canceltradingitems (/cti) were broken due to EOS implementation.

**Version 22.0 A20.5 b2 Stable (17-05-2022)**

* Changed consolecommand lcp (listcpmplayers): added ability to search players by XBL id. Renamed steamId to PlatformId in playerlisting.
* Fixed WebUI not using custom settings: settings were loaded after the WebUI initialization, causing WebUI to always use default settings.
* Fixed consolecommand rrp (resetrwgprefabs): stopped using TFP code to check if a prefab has a landclaim in it. That is bugged. It will only "see" the first landclaim placed by a player, causing prefabs that contain players 2nd, 3rd, 4th etc landclaim to be reset even with setting on to not reset claimed prefabs. Wrote my own implementation to fix it.

**Version 21.9 A20.5 b2 Experimental (10-05-2022)**

* A20.5 b2 Experimental Compatibility

**Version 21.8.1 A20.4 b42 Stable (03-05-2022)**

* Fixed consolecommand ds (donorslots): donorslots broke with previous release. This minor update fixes it.

**Version 21.8 A20.4 b42 Stable (02-05-2022)**

* Added gamepass player support for offline players: added gamepass offline players support for ReservedSlots (ds), ResetPlayerData (rpd), ResetLevel (rl), ResetDroneData (rdd), SetDeathCount (sdc), WipeInventory (wi), ResetSkillPoints (rs), AddFriend (af).

**Version 21.7 A20.4 b42 Stable (26-04-2022)**

* Updated CPM WebUI to 1.8.0: show EOS Id on landclaimblocks and beds. Landclaim color green for active lcb's and red for inactive lcb's

**Version 21.6 A20.4 b42 Stable (25-04-2022)**

* A20.4 b42 Stable compatibility
* Reintroducing consolecommand rrp (resetrwgprefabs): Dusted off my 3 year old implementation of resetting prefabs. This one does not use chunkresets which still causes region corruption. When running it will reset a prefab when all its chunks are loaded (by player(s)), so players actually do the work. You can leave it running until the next time you want to do a reset run as prefabs that are not loaded will just stay in the same state (they all become Schrödinger's prefabs). Its suboptimal compared to chunkresets, but at the moment this is the best you re going to get.

**Version 21.5 A20.4 b38 Experimental (NOT A20.3 b3 stable compatible) (15-04-2022)**

* A20.4 b38 Experimental compatibility
* Removed all dependencies on allocs mod. CPM is now completely standalone. I considder allocs mod abandonware, since updates are not coming (in time) anymore. CPM does its own maprendering now.

**Version 21.4 A20.3 b3 Stable (26-02-2022)**

* fixed webapi gettraders: dont return trader tile filler parts as traders anymore
* changed consolecommand bexport: added optional parameter "overwrite" to be able to overwrite existing prefabs on export

**Version 21.3.1 A20.2 b2 Stable (21-02-2022)**

* fixed consolecommand brender: forgot to add the PathAbstractions default prefab searchpaths to the implemented no reboot solution in v21.3. Now all prefab searchpaths are used again, so you can import any prefab that is in a designated prefab location again.

**Version 21.3 A20.2 b2 Stable (21-02-2022)**

* fixed consolecommand resetunclaimedregionsnow: was still using filesystem trigger instead of in memory trigger.
* changed consolecommand brender: no more reboot needed to render a prebab that has just been exported with bexport. When uploading an external prefab, a reboot is also not needed if you put the prebab in /LocalPrefabs (same location as bexport exports to).

**Version 21.2.1 A20.2 b2 Stable (08-02-2022)**

* fixed consolecommand remitem: logging removed items broke with A20.2 b2

**Version 21.2 A20.2 b2 Stable (05-02-2022)**

* A20.2 b2 Stable compatibility release

**Version 21.1 A20.1 b6 Stable (01-02-2022)**

* Changed consolecommand wipeinventory: wipe any combination of bag, belt and equipment or all
* Made CPM WebUI port configurable: will initially be controlpanel port + 3. Can be changed in CpmSettings.xml (WebUI_Port). Use this only if you have a gamehoster who doesnt want to open up a simple tcp port. Allocs patched map will break if you change port. You are on your own for making that work again.
* Added some better logging to database cleanup of tracking data. Make it easier to identify corrupt db for deletion.

**Version 21.0 A20.1 b5 Experimental (A20.0 b238 Stable compatible) (19-01-2022)**

* A20.1 b5 Experimental compatibility
* Moved reset operations (regions, vehicles, drones) to new patch location: Make sure the chunk handling thread, dronemanager and vehiclemanager dont save after the reset operation (effectively undoing the reset).
* Moved creation of timestamped copy of logfile to new patch location: get some more last loglines before server goes down.

**Version 20.9.1 A20 b238 Stable (18-01-2022)**

* Fixed consolecommand resetregionsnow: moved from filesystem markers to in memory markers for simultaneous reset support in shutdownba few versions ago. Forgot to update resetregionsnow to set the in memory marker instead of filesystem marker. Now it does.

**Version 20.9 A20 b238 Stable (17-01-2022)**

* improved webapi's getplayerhomes and getlandclaims: the menu icon on CPM Webui gets visible after loading all data. Vastly improved performance on large datasets on (very) high populated servers. Menu icon will be visible much faster.
* Added JunkDrone entityId to logline when a teleport gets blocked because of a deployed drone for dupe prevention: Playername and drone position were already logged. EntityId will make it easier to identify and work with the drone (teleport, remove etc).
* Added consolecommand resetdronedata (rdd): when a drone entity gets removed (manually or by game), the playerdata will still contain the drone as ownedEntity. This will prevent players from placing new drones (Max deployed drones reached). This ttp edit will remove stuck drone(s) (and drones only, no turrets) from the playerdata to fix that. Note: this command will not remove any drones from the world.

**Version 20.8.1 A20 b238 Stable (15-01-2022)**

* Fixed consolecommands cvc (checkvehiclecontents) and ov (ownvehicle): fixed returning vehicle owner and then vehicle not found by default.

**Version 20.8 A20 b238 Stable (08-01-2022)**

* Added consolecommand lcp (listcpmplayers): list all players that ever visited your server. Filter by online only. Search players by (partial)playername, steamId or EOS_Id. Info per player: playerName, entityId, steamId, EOS_Id, Online status, IP Address, TotalPlayTime, Overridden chatname, ColorGroup membership, Individual chatcolor and mutedChat status.
* Fixed consolecommand mcp (mutechatplayer): fixed always returning unmuted when checking mute status
* Changed consolecommands pcc (playerchatcolor) and mpc (muteplayerchat): added support for coloring and muting offline players
* Changed consolecommand shutdownba: added multiple reset support for all reset functionality. Use all or any combination of parameters reset, resetunclaimed, resetvehicles and resetdrones in one command.
* Removed casesensitivity on all commands that use parameter steamId for usage on ofline players. Steam_xxxx and steam_xxxx will both be accepted for all commands.

**Version 20.7 A20 b238 Stable (31-12-2021)**

* Fixed whitelisting in blockplacement Adv. Claims: lcbfree, landclaim, problock and antiblock
* Changed consolecommand brender: Added option to make the rendered prebab part of the randomgen world permanently. Use parameter "addtorwg" and the prefab you just rendered in will be saved in the RWG world. You can now add more skyscrapers, cities, lobby, hordebase etc to your generated RWG world. All you added with "addtorwg" will still be in the world after a chunkreset, regionfile delete or full map wipe. When you use this, the RWG world will be altered and that will trigger (re)downloading the world for all clients. So advise to make your custom RWG world on a non-player server and when done, deploy it to a production server.
* Changed consolecommand bundo: added "brender addtorwg" detection. When the undo is handling an addtorwg done with brender it will remove the prefab from the RWG world it was added to.
* Yes i know, ill be returning to my break.

**Version 20.6 A20 b238 Stable (26-12-2021)**

* Fixed a booboo i made in CPM's webapi handler with the 20.5 release
* Spent a good amount of time optimizing CPM's code overall. Found some sweet spots that are handled a lot better now. This will make 20.6 the final version for a long time. As, for a guy who quit and only promised compatibility, i spent a lot more hours than i liked on A20 version. Taking a break from this all, so enjoy this version. Its going to serve you for A20 for a long time.

**Version 20.5 A20 b238 Stable (25-12-2021)**

* Added EOS id serveradmin support to CPM WebUI and WebApi's.  No need to have Steam platform format in serveradmin.xml anymore for CPM. You can have eosId, steamId or both. CPM doesnt care anymore. For Allocs map it is still a requirement to use Steam platform format as he hasnt updated yet. So be aware of that if you use CPM's webapi through my patched allocs webmap (map.js).

**Version 20.4 A20 b238 Stable (22-12-2021)**

* Recompiled for A20 b238 Stable
* Removed exclude options from getprefab consolecommand. Will be added back once rrp gets a return to CPM.

**Version 20.3 A20 b237 Experimental Compatible (21-12-2021)**

* A20 b237 compatibility
* Added killer position to playerKilledPlayer logline
* Changed consolecommand bexport: help text now points to the correct new export location (/UserData/LocalPrefabs)
Best practice (to prevent /Saves and /UserData wandering off to userprofile or .local and keep all data in the main server folder) is to set the locations in serverconfig.xml:

	`<property name="UserDataFolder" value="UserData" />`

	`<property name="SaveGameFolder" value="Saves" />`

**Version 20.2.1 A20 b233 Experimental Compatible (17-12-2021)**

* Fixed consolecommand brender: it broke with A20 b231

**Version 20.2 A20 b218 Experimental Compatible (14-12-2021)**

* Added consolecommand getdrone: drones seem to get stuck in walls a lot. Let players get it by command (use for custom CSMM command).
* Added drone dupe prevention: got multiple reports of the existence of this (very easy) dupe exploit by using a drone. Implemented prevention of this exploit by not allowing to teleport if a player has a drone deployed. Enable in CpmSettings.xml (DroneDupePrevention_Enabled). Configurable response string in CpmStrings.xml (DroneDupePrevention).
Protected CPM chat,- and consolecommands: /bag, /bed, /ft, /ftw, /mv, /mvw, /rt, /tb, teleportplayerhome, mv, mvw, tp2bag
Protected Vanilla consolecommand: teleportplayer (this is used by CSMM's teleport system. So if you enable dupe prevention, CSMM will also be protected).

**Version 20.1 A20 b218 Experimental Compatible (12-12-2021)**

* Added: setting in CpmSettings.xml for removing drones that are not packed away from the world on restart(Drones_RemoveOnRestart)
* Changed consolecmd shutdownba: added parameter "resetdrones" for on demand drone removal
* Changed all ttp edit commands to take steamId (hail to the old ways!) when running against offline players. For online players steamId, entityId and playerName can be used.
Affects: rvr(removevendingrental), sdc(setdeathcount), wi(wipeinventory), rl(resetlevel), rpd(resetplayerdata), rs(resetskillpoints)
* Changed consolecmd lfp(listplayerfriends): show friends names instead of EOSid.
* Changed webapi getlandclaims: added EOSid to json response for owner info in claimcreator webUI.
* Changed webapi getplayerhomes: added EOSid to json response for owner info in claimcreator webUI.
* Fixed: chatcommands aaf and raf (add or remove all ingame friends to your adv. claim(s) whitelist)
* Fixed: consolecmd af(addfriend)
* Fixed: consolecmd grablcb
* Fixed: consolecmd rlp2(removelandprotection2)
* Fixed: consolecmd mv with fo(friendsonly) parameter
* Fixed: consolecmd wlf(whitelistfriends)

**Version 20.0 A20 b218 Experimental Compatible (06-12-2021)**

* A20 Experimental Compatibility
* steamId format changed. Use new format in commands/configs. Steam_76561928123009260
* Make sure you use the steam platform format in serveradmin.xml for assigning permissions. If you use the new EOS identifier, CPM (and Allocs fixes) dont pick it up. Example:
`<user platform="Steam" userid="76561928123009260" name="Prisma501" permission_level="0" />`
* rrp and rac are breaking region files in A20 so they are disabled while being worked on
* CPM now uses harmonyX that is shipped with the vanilla game. Make sure 0harmony.dll is not present in CPM modfolder. This is to ensure compatibility with mods that use the new built-in patch system that came with A20
* All major features have been tested and are functional
* Let me know if you find any quirks.
* Latest allocs version is required. Make sure you have installed 22_24_39

YOU CAN NOT USE OLD CPM DATABASES WITH A20. THE DB SCHEMAS HAVE CHANGED!

**Version 19.8.1 A19.6 b8 Stable (04-10-2021)**

* changed PVP kill logline: made logline more consistent with other CPM loglines, added more information and made format easier for regex info extraction. Ex. INF [CSMM_Patrons]playerKilledByPlayer: The killer (offenderSteamId=76561198123089815) killed Prisma501 (victimSteamId=76561198123095123) @ -350 58 -817 with AK-47 Machine Gun
* Added logline for player getting killed by any other entity than another player. For creating CSMM hooks on player killed by animal, zombie, animalzombie, modded npc's, bandits etc. Ex. INF [CSMM_Patrons]playerKilledByEntity: animalBossGrace (-346,58,-820) killed Prisma501 (76561198123083837) @ -348 58 -818
* Fixed wrong description in bmsOverrideVanillaSpawner console command
* Lowered heartbeat interval to 3 seconds
* Implemented auto debuff when a player logs off while on notify claim (buff visible), logs back in and moves/tp's out of the claim before it can detect the player on it again. The bufficon would stay on screen. Now there is an auto debuff when that happens.

**Version 19.8 A19.6 b8 Stable (30-09-2021)**

* added new consolecommand timerba: a generic bloodmoon aware timer. Can be used for anything as long as there are commands for it. Configurable delay on bloodday after time and delay until after bloodmoon time in CpmSettings.xml (TimerBA_DelayBloodDayAfter and TimerBA_DelayAfterBloodmoonUntil). Example: timerba 10 "[00FF00]Prefabs will reset in [FF0000]{Minutes} minutes" "rrp kicklockreboot". You can use multiple commands. Seperate them with ; and use single quotes around command parameters that contain spaces.
* Revised Adv. Claim PVE and added Adv. Claim PVP: compatible with existing PVE claims. Will prevent doing playerdamage when on PVE claim or allow doing player damage when on PVP claim. For PVP claims the KillingMode can be configured in CpmSettings.xml (AdvClaims_PVP_KillingMode). Default = 3. Create the same way as the previous PVE claims (except no punishment command needed with the new ones): make a notifyclaim with PVE (or PVP) in its name and you are done. The claims do use tooltip communication. Adjust to your liking in CPM's buffs.xml in the mod config folder. If your server global setting is PVE, use PVP claims. If your server global setting is PVP, use PVE claims. This functionality was already possible by using Adv. command claims but it needed multiple claims to cover the map. These new ones make it easier to implement PVE/PVP.

**Version 19.7.2 A19.6 b8 Stable (22-09-2021)**

* Improved all get vehicle commands: improved owner detection on getbicycle, getbike, getmotorcycle, getjeep, getgyrocopter, getblimp and gethelicopter commands when player plays with a steam family share account.

**Version 19.7.1 A19.6 b8 Stable (17-09-2021)**

* "Performance enhancements and bugfixes": strongly advise to update to this version (seriously, do it)

**Version 19.7 A19.6 b8 Stable (15-09-2021)**

* Added Vanilla Bloodmoon spawner override: many players on a server? Lots of bloodmoon parties going on? Suffering from "boring" bloodmoons? This is the solution for you. CPM can now override the vanilla bloodmoon spawner. That spawner is not built to handle bloodmoons on servers with many players on (the so called high pop servers). Take full control and give back alive and kicking bloodmoons!

New settings (CpmSettings.xml):

* BloodmoonSpawner_OverrideVanillaSpawner: set true to override vanilla bloodmoon spawner and let CPM handle bloodmoon.
* BloodmoonSpawner_Overridden_AdjustBMEnemyCountPerPlayerToNrOnlinePlayers: set true (default) to let CPM handle the bloodmoonspawning based on number of online players. This is the full auto mode and is recommended. Max alive zombies per player will be calculated and when players are in a bloodmoon party, CPM will bring the joy to all members of that party.
* BloodmoonSpawner_Overridden_BMEnemyCountPerPlayer: only used if the previous setting is false. This will set the maximum number of zombies alive per player during bloodmoon regardless of number of players online.
* BloodmoonSpawner_Overridden_AddMaxAliveServerDuringBloodmoon: this value will be added to the maximum allowed zombies alive that is configured in serverconfig.xml. Use this to spice up the bloodmoon spawning even more by allowing more zombies alive during bloodmoons.

**Version 19.6.4 A19.6 b8 Stable (05-09-2021)**

* Added bloodmoon despawner: Allows to despawn all zombies alive on map right before bloodmoon starts. Disabled by default. Enable in CpmSettings.xml (BloodmoonSpawner_DespawnAllOnStart).
* Changed consolecommand protect, chatcommand /bubble and Adv. claim hostilefree: traders (which are hostile by design) will not be despawned anymore. No need for a modlet anymore to remove the hostile tag from traders.

**Version 19.6.3 A19.6 b8 Stable (27-08-2021)**

* Changed Adv. Claim Reversed: added setting for TpHeight on teleporting back into a reversed claim (AdvClaims_Reversed_TpHeight in CpmSettings.xml)
* Changed consolecommand sleepers: added sleeper despawn and reset by coordinates. No need to be ingame anymore because coordinates can be used instead of only p1, p2.
* Fixed consolecommand cvc (checkvehiclecontent): fixed always using Jetpack for vehiclename when a vehicle is locked and owner is returned.

**Version 19.6.2 A19.6 b8 Stable (20-08-2021)**

* Added logline with position on player death: for easy CSMM hook creation on player death where location of death is relevant. For creating a "return to location a player died"-command for example.

Example logline: INF [CSMM_Patrons]playerDied: Prisma501 (76561198103885860) died @ 218 58 -1094

**Version 19.6.1 A19.6 b8 Stable (14-08-2021)**

* Added colon ( : ) support to commands in an Adv. Command Claim: Makes it possible to use colons in command(s) within an Adv. Command claim. Specifically implemented to support the use of CSMM variables that contain colon(s) like <code v-pre>{{time}}</code> (used in Deadly Airdrops for example).

**Version 19.6 A19.6 b8 Stable (30-07-2021)**

* Updated harmony to v2.1.1
* A19.6 b8 compatibility

**Version 19.5 A19.5 b60 Stable & A19.6 b7 Experimental (26-07-2021)**

* changed consolecommand getprefab: added optional parameter (steamId/entityId/name) for resetting a prefab. This will make it possible to use the reset functionality through a custom CSMM command. Ingame "getprefab reset" can still be used as it was.

**Version 19.4 A19.5 b60 Stable (09-07-2021)**

* Fixed scrambler to be reflection safe.
* Changed consolecommand wi (wipeinventory): moved the handler to a dedicated thread to eliminate any chance that the Pimps ttp backup mechanism undoes the ttp edit made by CPM while the player is online.

**Version 19.3 A19.5 b60 Stable (29-05-2021)**

* Bugfixes for chatcommand /ft (flyto)
    - Fixed error on using doublequoted names with spaces in parameters
    - Fixed double teleports on ambiguous names in offline,- and online players

**Version 19.2 A19.5 b60 Stable (29-05-2021)**

* Updated harmony to 2.0.4

* A19.5 b60 Stable Compatability

**Version 19.1 A19.4 b7 Stable and A19.5 b50 Experimental Compatible (14-05-2021)**

* Added loctrack chatcommand to chatpermissions. Now its possible to shield /loctrack behind permissions with ccp command or CpmSettings.xml (ChatCommandPermissions_loctrack)

* A19.5 b50 Experimental Compatability

**Version 19.0 A19.4 Stable (09-05-2021)**

* Changed consolecommand db (deactivatebedroll): added auto chunkloader and bedroll block remover. Removed requirement for owning player to be online.

* Changed consolecommand w2l (write2log): added parameter "splitlog" for usage with "w2l command [command]". When writing output of a command to log it will by default create one logline for all output of the command. When using parameter "splitlog" there will be one logline created for every output line of the command. This makes using regex on the output with custom CSMM hooks, commands and handlebars way easier if there are multiple lines of output for a command.

**Version 18.9 A19.4 Stable (12-04-2021)**

* Added option for logfile timestamping: for serverowners that have a server start mechanism in place that will overwrite the logfile over and over again. Enable in CpmSettings.xml (CreateTimeStampedCopyLogFile). Disabled (false) by default. For enabling the logfile timestamping set it to true.

**Version 18.8 A19.4 Stable (27-02-2021)**

* Added consolecommands getblimp and gethelicopter: use for custom CSMM commands to let players get their custom vehicles back that are based on the blimp (jetpack) and/or helicopter class.

**Version 18.6 A19.3 b6 Stable (A19.4 b7 Experimental Compatible) (13-01-2021)**

- Removed CPM chatcommand exclusivity. Added ability to disable CPM chatcommands. Set permission to -1 (with ccp or in CpmSettings.xml) and the chatcommand of choice is disabled. Now you can use CPM chatcommand names within CSMM without conflicts.

**Version 18.5 A19.3 b6 Stable (29-12-2020)**

- Bundled CPM WebUI 1.7.3: fixed permission handler to break menu icon because of casesensitivity of permissions. Permissions in cpmcc_permissions.xml now get applied regardless of case. This will ensure the menu icon to show.

Implemented 2 small user requests:

- With CPM 18.4.3 release (adding item used on player, zombie and animal kill) the PVE violation logline was changed and a "Player killed" logline was added to show item used on kill. This broke existing CSMM custom hooks relying on the old PVE violation logline. This version contains the "old" logline with item used appended at absolute end. This will ensure existing PVE violation hooks to be compatible.

Player killed logline (use to extract PVP kill info):

`[CSMM_Patrons] Player killed! Player offenderName (-128,60,-189) killed victimName (-130,60,-190) with Pistol`

PVE violation logline (use to extract PVE violation kill info):

`[CSMM_Patrons] PVE violation! Player offenderName (-128,60,-189) killed victimName (-130,60,-190) with Pistol`

- Added signs to be unlocked with unlockall consolecommand.

**Version 18.4.4 A19.2 b4 Stable & A19.3 b6 Experimental (20-12-2020)**

- Added anticheat leveljump: CPM will issue a warning into log for use with discord notification or csmm hook (for custom punishment) on jumping more than one level at once. Example logline: [CSMM_Patrons] WARNING: Prisma501 (73653876287651987) jumped up more than one level (10 -> 75).

**Version 18.4.3 A19.2 b4 Stable & A19.3 b6 Experimental (19-12-2020)**

- Added item (weapon) used to logline on zombie, animal and PVP kill. Can be used for CSMM hooks.

**Version 18.4.2 A19.3 Experimental Only (16-12-2020)**

- Changed consolecommand shutdownba: the server shutdown logic has changed in 19.3. Adapted shutdownba to handle the shutdown properly. This version is for A19.3 only.

**Version 18.4.1 A19.2 b4 Stable & A19.3 b5 Experimental (24-11-2020)**

- Added option for using minimum uptime of server to be taken into account on shutdownba consolecommand. Define in CpmSettings.xml in minutes (ShutdownBA_MinimumUptimeRequired). Server crashed or did a manual reboot just before a scheduled reboot? Dont want to have players face a new reboot in a short amount of time? Then this setting is for you. Default value is 0, so shutdownba will not considder server uptime. If the minimum uptime of the server has not been reached while doing shutdownba, the reboot will wait until the minimum server uptime has been reached and then finish the shutdownba command.

**Version 18.4 A19.2 b4 Stable & A19.3 b5 Experimental (21-11-2020)**

- Added tooltip communication (instead of chatmessages) for enterresetregion, exitresetregion, enterpveclaim, exitpveclaim, reversed claim, normal claim, lcbfree claim, landclaim claim, lcbinregion (resetregion), lcb2close (resetregion), allpoiprotectionlcb, allpoiprotectionbed, questpoiprotectionlcb, questpoiprotectionbed and onvehicle warnig for all relevant claims.
- optional visual indicator on players gamescreen during the time present on an adv. claim.
- Backwards compatible with existing claims.
- Choice for owners to use tooltips or the "old" chatsystem.
- no changes in claim creation process
- maximum flexibility by using tooltip modlet (see help text in the xml in /config in CPM mod folder)
- added consolecommand tooltip: show a custom tooltip to a (or all) player(s) on demand.

**Version 18.3 A19.2 b4 Stable & A19.3 b3 Experimental (16-11-2020)**

- Catalysm updated CPM Web UI to 1.7.1: added support for the getvehicles api. Now all vehicles can be viewed on CPM Web UI. New version is included in this release.

**Version 18.2 A19.2 b4 Stable & A19.3 b3 Experimental (16-11-2020)**

- added webapi for displaying all vehicles on the map. Both loaded and unloaded vehicles will be shown. When vehicle name starts with "Entity", the vehicle is not currently loaded in the world. When vehicle name starts with "vehicle", the vehicle is currently loaded in the world. For permission control add "permission module="cpmcc.getvehicles" permission_level="0"" to cpmcc_permissions.xml. By default the permission level is 0.
- added vehicles to allocs patched [map.js](https://github.com/Prisma501/Allocs-Webmap-for-CPM) to make use of the new webapi

**Version 18.1 A19.2 b4 Stable (not A18.4 Stable Compatible) (23-10-2020)**

- Catalysm updated CPM Web UI to 1.7: new Adv. Claims Landclaim and ProBlock are supported now. Improved readability on coordinates information. New CPM Web UI 1.7 is included in this release.

**Version 18.0 A19.2 b4 Stable (not A18.4 Stable Compatible) (23-10-2020)**

- Added Adv. Claim Landclaim: only claimowners, whitelisted players and accesslevel allowed players can place any block within this adv. claim. Type= "landclaim". Violation string configurable in CpmStrings.xml (AdvClaims_Landclaim). Auto giveback to placing player.
- Added Adv. Claim ProBlock: Use this claim to prevent placement of blocks that are not configured as problock(s). Violation string configurable in CpmStrings.xml (AdvClaims_ProBlock). Auto giveback to placing player.
  Usage: create claim with type "problock:block1;block2;block3". Blocknames are casesenstive (use fblock to find exact blocknames) and must be separated by semicolon when adding more than 1 block. Follows standard claim rules regarding accesslevel, ownership and whitelisting.
- Added webapi for querying new Adv. Claims Landclaim and ProBlock
- Changed Adv. Claim PVE: skip chatmessage when exitmessage of the claim is omitted.
- Changed Adv. Claim AntiBlock: implemented auto giveback to placing player.
- Updated patched Allocs Webmap: added checkboxes and handlers for new Adv. Claims Landclaim and ProBlock

**Version 17.8 A19.1 b8 Stable (not A18.4 Stable Compatible) (30-09-2020)**

- Added character based name login blocking: prevent players with specified characters in name from logging in. Configure in CpmSettings.xml (SpecialCharacters and SpecialCharactersNameBlock_Enabled). Beware of adding xml breaking chars to CpmSettings.xml. Escape them if needed.
  `& becomes &amp; , < becomes &lt; , > becomes &gt;`
  Kickmessage is configurable in CpmStrings.xml
- Added AllPoi Protection: same as QuestPoi Protection but for all prefabs. Prevents LCB and bedrolls to be placed in any POI. Configure in CpmSettings.xml (AllPoiProtection_Enabled). Not allowed messages for bed and LCB are configurable in CpmStrings.xml

**Version 17.7 A19.1 b8 Stable (not A18.4 Stable Compatible) (22-09-2020)**

- Fixed consolecommand release: Fixed offline usage. Now it's possible to release a player from jail while offline again.
- Added bedroll support to adv. claim antiblock: Now you can add bedroll as antiblock in an adv. claim antiblock.

**Version 17.6 A19 b180 Stable (not A18.4 Stable Compatible) (26-08-2020)**

- There is a serious vanilla game bug in the region file management code that was causing CPM reset commands to reset chunks that should not be reset. This version contains a harmony patch that overrides the bugged region file manager method with fixed code.
- Fixed locationtracker throwing null reference exception when game player dictionary would add/remove players to/from dictionary during location saving.

**Version 17.5 A19 b180 Stable (not A18.4 Stable Compatible) (24-08-2020)**

- Added sleeper volume resets to "getprefab reset", rac (resetadvclaim), "rac unclaimed" and rrp (resetrwgprefabs). Now all sleepervolumes in prefabs and chunks in an adv. claim reset will get reset also with a reset. This means no free lootruns (new fresh prefab without sleepers).
- Added ServerTools compatibility for when using ST Reserved slots and server is full. The harmony patch in ST will break CPM functionality when that kicks in. That is countered in this version.

**Version 17.4 A19 b180 Experimental (not A18.4 Stable Compatible) (18-08-2020)**

- Fixed consolecommand sleepers: removing sleepers broke with A19. Fixed now. Added reset functionality. Now you can despawn and reset sleepers in the marked area so that they are ready to haunt players again.
- Added serverkill on hanging/unresponsive server in rrp (resetrwgprefabs) and rac (resetadvclaim) consolecommands when using the kicklockreboot parameter. Now they will handle a hanging/unresponsive server in the reboot process like shutdownba does.
- Removed all dependencies to allocs persistent data for playerdata. CPM will store all nescesary data in own persistent storage now, so if allocs mod loses data, CPM will not be affected.
- Updated CPM Web UI to version 1.6.1: Catalysm fixed a bug where a claim would get double displayed in the Adv. Claim list when a type of claim would be in the string parameters of another claim.
- Since ServerTools has recently found its way to Harmony 2, i decided to not maintain 2 CPM versions anymore (Harmony 1.2 and 2.0). CPM will only come in the flavor of Harmony 2 from this release on. This means it will not be compatible with mods that use Harmony 1.2 anymore. Botman mod is one of the last that uses the old Harmony version 1.2 and thus will be not be compatible with CPM until they upgrade Harmony to 2.0.

**Version 17.3 A19 b180 Experimental (not A18.4 Stable Compatible) (11-08-2020)**

- Changed consolecommand rrp (resetrwgprefabs): added parameter "tradersonly" for resetting all traders on the map only. Usefull when having used settime command and the traders restock time has gone out of sync.
- Changed consolecommands rrp (resetrwgprefabs), rac (resetadvclaim): added parameter "kicklockreboot". When using this parameter all online players will get kicked, the server gets locked (players cant connect) during the reset and reboots server when reset is done. You can still use rrp and rac and rac unclaimed without kicklockreboot for full manual control but keep in mind that de world will be in a time vacuum during the reset. Any online players will experience it like X-men member Quicksilver. Literally.
- Catalysm has updated CPM WebUI to 1.6! It contains the new Adv. Claim Reset. Included in this release.

**Version 17.2 A19 b178 Experimental (not A18.4 Stable Compatible) (08-08-2020)**

- Changed consolecommand resetchunks: No need for chunks to be loaded to be reset. Makes larger areas of resetting possible. Theoratically up to 16K x 16K blocks. The larger the area the more memory you need to have available for the reset. So be wise when using.
- Changed rrp (resetrwgprefabs): Complete overhaul. All prefabs will be reset live on map in one run. No need for players to load the chunks anymore. Added restoring decorations on prefab reset.
- Changed consolecommand "getprefab reset": Added restoring decorations on prefab reset.
- Added new Adv. Claim Reset: mark an area for reset on chunklevel.
- Added new consolecommand rac (resetadvclaim): use for resetting all chunks within the new Adv. Claim Reset areas. Very memory intensive! Better use multiple smaller claims instead of few big claims. The bigger the claim the more memory is needed for CPM to be able to handle. Has an option to reset the complete map excluding claimed chunks -> Very VERY memory intensive. Tested on a 8GB virtual system with NO players on and the 8GB were almost FULLY used. Use with care. Server will crash with out of memory exception if your hardware isnt up for this.
- added webapi for displaying new Adv. Claim Reset on allocs,- or CPM webUI map.
- changed consolecommand ccc: added option to create new Adv. Claim Reset. New claim borders will automatically snap to nearest chunk borders so you know exactly what is going to reset when using consolecommand rac. Use claim type=reset for creating Adv. Claim Reset.
- changed allocs patched map.js to be able to display new Adv. Claim Reset

**Version 17.1 A19 b173 Experimental (not A18.4 Stable Compatible) (03-08-2020)**

- Updated Confuser.Core to 1.4.1
- Disabled one of the confuser protections at expence of a little protection loss for a BIG performance gain.

**Version 17.0 A19 b173 Experimental (not A18.4 Stable Compatible) (01-08-2020)**

- Major maintenance upgrade:
  - Reworked/optimized the litedb database layer for performance. Mainly ditching the use of LiteCollection which appearantly keept a reference to the db on disk open.
  - Reviewed all (5 year worth) of code and cleaned up/optimized to today's standards.
  - Reworked the harmony patch handling to be able to easily maintain a harmony 2.0 branch.

**Version 16.7 A19 b173 Experimental (not A18.4 Stable Compatible) (31-07-2020)**

- The sleeper support on hostilefree adv. claim is giving me serious headaches. Seems the sleeper hook fires so fast and much that the litedb database on filesystem gets opened so much (60 times a second) that it can't process it all and queing up the open filehandles on the server, which is bad. I moved the hostilefree claims to memory and check inmemory in the sleeper hook. This should prevent exceeding the open file limit on linux. Downside of this solution is that any hostilefree adv. claim you create on an active gamesession will not support sleeper spawn prevention until the next gameserver restart (hostilefree adv. claims get loaded into memory on gamerestart). Again this is a HIGHLY recommended update if you are on CPM version 16.3 or higher!!

**Version 16.6 A19 b173 Experimental (not A18.4 Stable Compatible) (29-07-2020)**

- HOTFIX for all sleeper related functionality. Since CPM adapting to the new sleepervolume handling of the game i noticed high CPU spikes after logging off. Somehow the sleeper spawn hook keeps firing over and over and over again when last player of the server disconnects near sleepervolumes. Resulting in high CPU usage on an empty server. Added a check for no players on server and give back control to game then. That fixes the problem. HIGHLY recommended to upgrade if on version 16.3 or higher!!

**Version 16.5 A19 b173 Experimental (not A18.4 Stable Compatible) (27-07-2020)**

- Fixed ResetRegions, QuestPoiProtection, Adv. CLaim LcbFree and Adv. Claim AntiBlock not triggering when LCB/Bedroll/AntiBlock was placed on plant (like grass) or in water. This is it boyz and galz, the new system is completely fleshed out and to my liking. There wont be an update for a good while now.

**Version 16.4 A19 b173 Experimental (not A18.4 Stable Compatible) (27-07-2020)**

- CPM is using harmony for runtime server patching and litedb for persistent data storage. Until now i merged those helper dll's into the CPM dll, because the modloader system of the game did not allow multiple dll's/xml's in the Mod folder. That is now allowed and because it positively affects performance, i dont merged them anymore. This version uses the unmerged helper dll's but is exactly the same as version 16.3.

**Version 16.3 A19 b173 Experimental (not A18.4 Stable Compatible) (26-07-2020)**

- fixed Questpoi protection being always on regardless of setting in CpmSettings.xml.
- Reverted from killing to despawning hostiles in hostilefree adv. claim, consolecmd protect and chatcmd /bubble for server stability/performance.
- Implemented sleeper support for hostilefree adv. claim, consolecmd protect and chatcmd /bubble. No more infinite sleeper respawn loops if using any of those functionalities. Sleepers will just not spawn when in hostilefree adv. claim or within 25 blocks of a player while protection is on with protect or /bubble.
- fixed sleeper respawn control (DisableSleeperRespawn_Enabled in CpmSettings.xml) due to changes in sleepervolumes in A19 b173.
- fixed sleeper control (DisableSleepers_Enabled in CpmSettings.xml) due to changes in sleepervolumes in A19 b173.
- fixed sleeper control for bloodmoons only (DisableSleepers_BloodmoonOnly_Enabled in CpmSettings.xml) due to changes in sleepervolumes in A19 b173.
- Catalysm updated CPM WebUI and added support for new adv. claim AntiBlock! Version 1.5.0 is included in this release.
- Making something clear: The new resetregions, adv. claim LcbFree, Questpoi protection and adv. claim AntiBlock are only checking on block placement of LCB/Bedroll/AntiBlock. CPM will handle them instantly(!). CPM will however NOT remove allready existing LCB/Bedroll/AntiBlock in resetregions, adv. claim LcbFree, Questpois and adv. claim Antiblock after you set/enable them. Be aware of that when enabling any of those functionalities and check on CPM WebUI if you have some manual cleaning up to do.

**Version 16.2 A19 b173 Experimental (not A18.4 Stable Compatible) (25-07-2020)**

- A19 b173 Compatibility. 16.1 seems 100% compatible, but recompiled, repacked and re-encrypted against A19 b173 binaries. In case of problems with 16.1 upgrade first before asking for support.
- Changed command help text and description for rl (resetlevel) and rs (resetskillpoints) to make it....more clear.

**Version 16.1 A19 b169 Experimental (not A18.4 Stable Compatible) (23-07-2020)**

- Heavily optimized ResetRegion, QuestPoiProtection and LcbFree Adv. Claim handling: Moved away from heartbeat thread. Now using gamehook to instantly(!) remove/giveback LCB/Bedroll.

- Added WebApi for viewing new Adv. Claim AntiBlock.

- Updated [Allocs Patched map.js](https://github.com/Prisma501/Allocs-Webmap-for-CPM) for viewing new Adv. Claim AntiBlock

Implemented 2 requests:

- Added new adv. claim antiblock: Use this claim to prevent placement of configurable block(s). Blocks that are not allowed in this claim will be instantly(!) removed.

Usage: create claim with type "antiblock:block1;block2;block3". Blocknames are casesenstive (use fblock to find exact blocknames) and must be separated by semicolon when adding more than 1 block. Follows standard claim rules regarding accesslevel and whitelisting.

- Added writable storage to consolecommands unlockall and own.

**Version 15.9.1 A19 b169 Experimental (not A18.4 Stable Compatible) (17-07-2020)**

- A19 b169 Compatibility
- After simplifying the QuestPoi protection code drastically in 15.9, a bug became clearly visible. Lcb's/bedrolls that overlap multiple questpois would cause multiple removals/deactivations of lcb's/bedroll. Fixed with this version.

**Version 15.9 A19 b163 Experimental (not A18.4 Stable Compatible) (17-07-2020)**

- Changed consolecommand listcustomentities (lce): Pimps changed the entityType for traders. Changed searchstring npc to trader. For listing traders do "lce trader". Used to be "lce npc"
- Changed Questpoi protection: the bedroll handling ingame is an absolute chaos. Changed it again to be more robust but less functional. This version wont support existing bedrolls in questpois anymore. If you enable questpoi protection after players have allready placed bedroll in questpoi's they will only get deactivated when the owning player is online. If owning player never comes online again, the bedroll has to be removed manually. If a bedroll is deactivated it will not be seen as blocking for a questpoi on queststart immediately. It will however be the players spawnpoint until he/she places a new bedroll or the server restarts.
- Changed hostilefree adv. claim and protective bubble to do a kill instead of a despawn. Sleepers wont get into a respawn loop this way.

**Version 15.8 A19 b163 Experimental (not A18.4 Stable Compatible) (13-07-2020)**

- Implemented using a dedicated thread for handling online players on ttp edit commands resetskillpoints (rs), resetlevel (rl), resetplayerdata (rpd), removexpdeficit (red) and removevendingrent (rvr) to not hold up the main server thread while working.

**Version 15.7 A19 b163 Experimental (not A18.4 Stable Compatible) (12-07-2020)**

- Found the cause of the bedroll persistency problem in A19 and re-introduced asynchronously handling lcb/bedroll. Highly recommended to upgrade.

**Version 15.6.1 A19 b163 Experimental (not 18.4 Stable Compatible) (09-07-2020)**

- fixed an error i let slip in on 15.6 on ResetRegions. When placing a LCB in a ResetRegion and the claim borders are overlapping a neighbouring ResetRegion, the player would get back 2 LCB's instead of one.

**Version 15.6 A19 b157 Experimental (09-07-2020)**

- fixed QuestPoiProtection, ResetRegions and Adv. Claim LcbFree not being able to handle allready existing lcb's/bedrolls in unloaded chunks on use/enable in an ongoing map. You can now use/enable those on an existing map with lcb's/bedrolls allready present in QuestPoi's, ResetRegions and Adv. Claims LcbFree.

**Version 15.5 A19 b157 Experimental (07-07-2020)**

- fixed shutdownba not considdering bloodmoon off and random bloodmoon
- fixed nighttime announcer not considdering bloodmoon off
- fixed day7 chatcommand not considdering bloodmoon off
- fixed permadeath. A19e compatibility
- upped waiting time after kick to 10 seconds on ttp edit/delete commands on online players: resetlevel, resetskillpoints, removeexpdeficit, resetplayerdata and removevendingrental. Should work better when using on online players. Using on offline players is still failsafe.

Sometimes it takes a while for the player profile to be saved to ttp file by the game. When its not saved completely when CPM does the edit/delete, the Pimps backup mechanism will kick in and the edit/delete will be undone. For offline players it works 100% of the time. 10 seconds should be enough to save but not long enough for the player to have joined again thus loading and using the ttp file and causing the edit to be undone again.

**Version 15.4 A19 b157 Experimental (06-07-2020)**

- Fixed anticheat damagedetection not logging when triggered.

Example logline for creating CSMM custom discord notifcation hook:

[CSMM_Patrons]damageDetection(Entity): Player Prisma501 (7656114567822412) triggered damage detection! Damage done: 5000

**Version 15.3 A19 b157 Experimental (04-07-2020)**

- Fixed consolecommand lce (listcustomentity)

**Version 15.2 A19 b157 Experimental (02-07-2020)**

- Fixed consolecommand bexport
- Fixed questpoi protection
- Fixed consolecommand db (deactivatebed)

**Version 14.6 A18.4 b4 Stable (NOT A18.3 compatible)**

Some ttp love this release. All new commands alter data that is stored in the players ttp file. That can only be editted when player is not online. So all new commands do a player kick if player is online.

- New consolecommand rl (resetlevel): set a players level to a level of your choice
- New consolecomand rs (resetskillpoints): set the number of skillpoints of a player to the count of your choice
- New consolecommand red (removeexpdeficit): remove a players ExpDeficit on demand. ExpDeficit is the XP penalty you get after dying (red bar in the XP bar above belt)

**Version 14.5 A18.4 b4 Stable (NOT A18.3 compatible)**

- changed donorslots: added admin notification on expired donor server join. All online admins of a configurable level get a PM notification when an expired donor joins. Configure admin level in CpmSettings.xml ( NotifyAdmin_Level). Default is level 0.

Also added logline for easy CSMM custom hooking. Logline is:
[CSMM_Patrons] Donorslot expired! Playername: <name> SteamID: <steamID>
So hook can be placed on ” [CSMM_Patrons] Donorslot expired! ” for discord notification.

- changed consolecommand remitem: changed commandresponse player entityId to steamId for easier CSMM regex custom variable extraction in custom hooks.

Speaking of hooks: Catalysm wrote an excellent example that shows how incredible powerful the combination of features of CSMM and CPM can be.
This example will show how to create the functionality of giving players the tools to deposit casinoCoins to the virtual CSMM economy. It even shows how to “fix” an exploit that rises while creating this.

Check it out!
https://docs.csmm.app/en/CSMM/advanced-feature-guide.html

**Version 14.4 A18.4 b4 Stable (NOT A18.3 compatible)**

- Changed consolecommand shutdownba: added on demand vehicle removal. Use “shutdownba <minutes> resetvehicles”. All vehicles on map will be removed at restart.
- Added consolecommand af (addfriend): add yourself to friend list of a player without invite or confirmation needed. Works on off,- and online players. To remove from friendlist, use the player list window ingame. Beware that if the player is online, the removal will be shown as a popup on screen (adding is silent/invisible).
- Changed consolecommand wpc (waypointcontrol): fixed wrong number of arguments error response.

**Version 14.3 A18.4 b4 Stable (NOT A18.3 compatible)**

- Added vehicle removal on restart: duping vehicles is still a major problem on MP servers. CPM now offers a way to control that pest. You can enable vehicle removal on restart in CpmSettings.xml :
  <Vehicles_RemoveOnRestart>true</Vehicles_RemoveOnRestart>
  Default value is false.
  When enabled CPM will remove ALL vehicles in the world that are not stored away in containers or backpacks/belt on server restart.
  Strongly recommended to make a warning about this functionality in server login confirmation message or by (auto) chat communication. Or there will be tears.

**Version 14.2 A18.4 b4 Stable (NOT A18.3 compatible)**

- Improved “getprefab reset” and resetrwgprefabs: now sleepervolumes in prefabs that got reset manually or automatically, will get despawned and reset too. This will fix the free loot runs on prefabs in which the sleepervolumes were cleared (all killed) and get reset after that. Previously the sleepervolumes would stay cleared until respawn timer would expire again, but the prefab was reset and full of loot again. Now they are all waiting and active again after the prefab resets. Thanks to SylenThunder for reporting.

**Version 14.1 A18.4 b4 Stable (NOT A18.3 compatible)**

- 18.4 b4 Stable compatibility
- Changed sleepers consolecommand: added option to count sleepervolumes in marked area.
- Changed write2log (w2l) consolecommand: added option to add output of a command to log. Now you have full control on what data is written in log. You can use a cronjob for w2l using gt consolecommand for example to be able to make a CSMM custom hook for checking that ingame time and fire one or multiple commands on a specific gametime. Options are limitless.
- New features since 18.3 stable:
  - Sleeperspawn control (with bloodmoon only option)
  - Sleeperrespawn control
  - Anticheat: Spectator mode detection
  - Jail auto-release bugfix
  - Chunkreset consolecommand! Reset chunks on live server

**Version 14.0 A18.4 b4 Experimental (NOT A18.3 Stable compatible)**

- Proudly presenting consolecommand resetchunks: reset chunks point to point (p1,p2) or with radius. Reset chunks to RWG default while server is running with this new command!

**Version 13.9.2 A18.4 b4 Experimental (NOT A18.3 b4 Stable compatible)**

- Jail auto-release bugfix: auto-releasing from jail was not using the new db persistent storage yet, so it failed to actually release the player from jail.

**Version 13.9.1 18.4. b3E (NOT A18.3 b4 Stable compatible) + CPMcc 1.4.0 (2020.02.22)**

- AntiCheat: added Spectator Mode detection. Can be hacked in easily clientside and offers complete invisibility towards other players and zombies/animals. Now CPM will detect unauthorized use.
  Configure in CpmSettings.xml: “MaxAdminLevelSpectatorMode” (default permission level 0).
  Optional command(s) can be fired on detection. Default is no command “SpectatorModeDetectedCommand “. To enable command(s) just put the command(s) in the setting.
  To use multiple commands just seperate them with ;
  Supported placeholders: ${entityId}, ${steamId} and \${playerName}.
  CPM will write to log upon detection for easy hooking of CSMM custom hooks/discord notifications:

[CSMM_Patrons]Unauthorized SpectatorMode detected on <playerName> (<steamId>) !!!!!
Command example: <SpectatorModeDetectedCommand>ban add \${steamId} 10 years “Hackers not welcome”</SpectatorModeDetectedCommand>

**Version 13.9 A18.3 b4 Stable + CPMcc 1.4.0 (2020.02.21)**

- Added sleeper spawn control: disable sleepers everywhere on the map. CpmSettings.xml ->
  <DisableSleepers_Enabled>true</DisableSleepers_Enabled>. To disable sleepers on map only during bloodmoon -> <DisableSleepers_BloodmoonOnly_Enabled>true</DisableSleepers_BloodmoonOnly_Enabled>

- Added sleeper respawn control: configure if sleepers respawn after being cleared or dont ever respawn again.
  CpmSettings.xml -> <DisableSleeperRespawn_Enabled>true</DisableSleeperRespawn_Enabled>

**Version 13.8 A18.3 b4 Stable + CPMcc 1.4.0 (2020.01.28)**

- changed consolecommand tprotect: implemented usage of radius when traderprotecting blocks
- CPMcc 1.4.0 is out! Big thanks to Catalysm!
  - Added: icon for playhomes
  - Added: Permission overview of loggedin user in navigation menu
  - Fixed: bug when API endpoints are set to permission level 2000 (map can be used for players now)
  - Fixed: popup message for (claimed) quest POIs
  - Fixed: Claimed quest POIs still show up in quest POI layer

**Version 13.7.1 A18.3 b4 Stable (2020.01.26)**

- Bugfixes in chatgroupcolor (cgc):
  - adduser: when using name as parameter and player was offline, the player record got added wrongly regarding primairy db key. Adding offline players now requires steamId.
  - listmembers: membership would not be shown
- Persistent playerdata: playername is now saved in persistent playerdata of CPM
- NOT A18.2 compatible
- CPM 13.5.1 is NOT compatible with A18.3

**Version 13.7 A18.3 b4 Stable (2020.01.24)**

- Changed shutdownba consolecommand: added forced server kill if server /hangs/ in the reboot process
- Changed resetplayerdata consolecommand: if player online, cpm will wait 5 secs after the kick before file wipe
- Changed adv. claim lcbFree: implemented ownership. Now also the lcbfree adv. claim sees the steamid in the name of the claim as owner.
- NOT A18.2 compatible
- CPM 13.5.1 is NOT compatible with A18.3

**Version 13.6 A18.3 b3 Experimental (2019.12.22)**

- Fixed A18.3 b3 Experimental compatibility. CPM 13.5.1 and lower is NOT compatible with A18.3 b3 Experimental

**Version 13.5.1 A18.2 b5 Stable (2019.12.19)**

- Bugfix in consolecommand mv: player to player move made moving player always tp to him/her self.
- Changed consolecommand mv and mvw: playernames params are now case insensitive.

**Version 13.5 A18.2 b5 Stable (2019.12.18)**

- Changed Vehicle adv. claim intrusion handling: warning and handling only when adv. claim intrusion conditions are met (openhours, leveled etc)
- Changed consolecommand mvw: removed partial playername support (still present in chatcommand /mvw) to prevent ambiguous name failures. Still possible to move offline player to waypoint and online player to waypoint.
- Changed consolecommand mv: removed partial playername support (still present in chatcommand /mv) to prevent ambiguous name failures. Still possible to move offline player to offline player, online player to online player, offline player to online player, online player to offline player, offline player to coordinates and online player to coordinates.

**Version 13.4 A18.2 b5 Stable (2019.12.04)**

- A18.2 b5 Stable compatibility
- Changed consolecommand setdeathcount (sdc): added support for offline players.
- Changed consolecommand setplayerstatus (sps): updated command help and description

**Version 13.3 A18.1 b8 Stable + Version 13.3 A18.2 b5 Experimental (2019.11.29)**

- Vehicle adv. claim intrusion handling: warning and handling for all vehicle types instead of only minibike.
- Explicit save of persistent data when whitelisting players on an adv. claim: prevent dataloss when server does crash or not gracefully shuts down.
- Rewrite of falling block prevention system: adapted to new structural integrity in a18.
- moved waypoints to nosql db (existing waypoints not migrated)
- moved player storage to nosql db (existing players not migrated)
- moved tradingchests to nosql db (existing tradingchests not migrated)
- moved adv. claims to nosql db (existing adv. claims not migrated)
- moved chatgroup colors to nosql db (existing chatgroup colors not migrated)

**Version 13.2 A18.1 b8 Stable (A18.2 b2 Experimental compatible) (2019.11.17)**

- changed remote trading system: fixed trading system not working when using another prefix than "/" for the trading system chatcommands.
- changed shutdownba consolecommand: fixed bloodmoon calculation not to see day 1 as a bloodmoon. Now you can boot your server bloodmoon aware on day 1 again.
- changed "bmonly(fromHour-toHour)\_" adv. claim name tag: this was still using the fixed 7 day hordecycle. Changed it to use bloodmoon cycle in settings. Now you can use adv. claims that are only active on bloodmoon again with variable bloodmoon cycle.

**Version 13.1.2 A18.1 b7 Stable (2019.11.13)**

- small change in quest poi protection: made a design booboo by logging if a quest poi doesnt get protected because its excluded from protection. That becomes spammy real quick. No need to update if you dont have exceptions on quest poi protection.

**Version 13.1.1 A18.1 b7 Stable (2019.11.12)**

- changed consolecommand bcheck: fixed out of index range exception when investigating a block by coordinates
- the gamecode doesnt always deregister a LCB or bedroll when it gets removed. CPM willl help the game now with that. Affects consolecommand rlp2, questpoi protection, reset prefabs (rrp), region reset and lcbfree adv. claim.

**Version 13.1 A18 b155 Stable (2019.11.09) (A18.1 b6 Experimental compatible)**

- changed quest poi protection: added exclusion capability by adding specific quest poi's or types of quest poi's to an exception list (/Saves/ResetRegions/QuestPoi_Exceptions.txt). You can get a poi name with the getprefab consolecommand while standing in/near the poi or with CPMcc 1.3.0 or higher you can use the map to look up specific poi names.
- completely overhauled cpm's webapi's: added native gettrader api and getallpois api and serving maptiles api. All api endpoints have explicit security now. Default permission to use any of them is admin level 0. For getting the latest cpmcc_permissions.xml please delete it from /Saves before starting server again after updating CPM. Or put the permissions in manually and save:

```
<?xml version="1.0" encoding="UTF-8"?>
<cpmcc_permissions>
	<permissions>
		<permission module="cpmcc.map" permission_level="0" />
		<permission module="cpmcc.createadvclaims" permission_level="0" />
		<permission module="cpmcc.getlandclaims" permission_level="0" />
		<permission module="cpmcc.getadvclaims" permission_level="0" />
		<permission module="cpmcc.getresetregions" permission_level="0" />
		<permission module="cpmcc.getplayerhomes" permission_level="0" />
		<permission module="cpmcc.getplayersonline" permission_level="0" />
		<permission module="cpmcc.getquestpois" permission_level="0" />
		<permission module="cpmcc.getallpois" permission_level="0" />
		<permission module="cpmcc.gettraders" permission_level="0" />
	</permissions>
</cpmcc_permissions>
```

- New CPMcc: Catalysm has adopted to the secured webapi usage and added the use of the new CPM wepapi's gettraders and getallpois. Since CPM's webapi are secured now there is no crossvisiting from allocs map anymore. Plusside is that the maptiles are served from within CPM now and there is no need to use webtokens anymore in CPMcc. I will stop supporting showing adv. claims/resetregions/questpois/allpois/traders from allocs map. Feel free to play around with the map.js code from alloc to use the new CPM webapi's. I just wont invest in it anymore. CPMcc can be used to make use of all of them.

**Version 13.0 A18 b155 Stable (2019.11.04) (A18.1 b5 Experimental compatible)**

- integrated new CPM Claim Creator Web UI v1.2.2: Small bugfix in CPMcc. Homes were not drawn correctly. To replace, just remove the cpmcc folder from /Mods/1CSMM_Patrons folder and paste the one from this release. Server can keep running. CPM version 12.8 or higher required.

**Version 12.9 A18 b155 Stable (2019.11.04) (A18.1 b5 Experimental compatible)**

- integrated new CPM Claim Creator Web UI v1.2.1: Catalysm has built in webapi usage of the new CPM webapi's of player beds and quest poi's. Now you can show playerbeds, questpoi's and questpoi's with bed/lcb only on the CPMcc map. To replace, just remove the cpmcc folder from /Mods/1CSMM_Patrons folder and paste the one from this release. Server can keep running. CPM version 12.8 or higher required.

**Version 12.8 A18 b155 Stable (2019.11.03) (A18.1 b5 Experimental compatible)**

- changed consolecommand getprefab: added Quest POI status to the info getprefab gives about the prefab you're investigating.
- changed webapi for playerbeds: added status Active (bedroll deactivates after expirytime ends) to response
- added webapi for quest POI's: webapi for getting all prefabs that can be chosen for a quest including bedlcbonly filter
- changed quest POI protection: now taking bedroll deadzone size and expiration status of a bedroll into account. Adapted completely to how TFP code checks if a poi can be selected for questing. This means a bedroll's deadzone cannot touch a quest prefab. Even if it's not in it. Exactly like the claimed area of a landclaim.
  Changed the strings for responding to poi protection interventions because the bedroll/landclaim doesnt nescesarely need to be IN a prefab to get denied now. Only active for new installs. Please change your strings manually in CpmStrings.xml:

```
<QuestPoiProtection_LcbMessage>[F7FE2E]Claim area overlaps a quest POI! You are not allowed to place a LCB here![-]</QuestPoiProtection_LcbMessage>
<QuestPoiProtection_BedMessage>[F7FE2E]Bed(roll) deadzone overlaps a quest POI! You are not allowed to place a bed(roll) here! Bed(roll) deactivated.[-]</QuestPoiProtection_BedMessage>
```

- changed map.js: fixed correct representation of bedroll deadzone size for showing playerbeds. The deadzone gamesetting determines the size of the rectangle drawn. Active bedrolls are green and inactive are red now. Added code to show quest POI's and quest POI's with bed/lcb only to use the new quest POI webapi

**Version 12.7 A18 b155 Stable (2019.11.02) (A18.1 b5 Experimental compatible)**

- Added Quest POI Protection: prevent players from placing LCB's and/or bed(roll)s in a POI (prefab) that can be selected for a quest by the game. No more blocked quests because of LCB's and/or bed(roll)s present in that POI. Enabled by default. Use QuestPoiProtection_Enabled in CpmSettings.xml to en,- or disable. Customizable strings for detecting placed bed(roll)s and LCB's in CpmStrings.xml (QuestPoiProtection_LcbMessage and QuestPoiProtection_BedMessage).
- Added consolecommand deactivatebed (db): deactivate a players bed(roll) by this consolecommand.
- Added webapi for reporting bed(roll)s: for querying the game for active bedrolls via webapi.
- Changed map.js: added code to use the new bedroll webapi for displaying player beds on allocs webmap.

**Version 12.6 A18 b155 Stable (2019.10.28) (A18.1 b5 Experimental compatible)**

- changed consolecommand resetrwgprefabs (rrp):
  - added count of prefabs that are marked for reset in response when running the command.
  - added parameter "stop": when running "rrp stop" the active reset prefabs run will be terminated.
  - added parameter "status": when running "rrp status" it will show if there is an active reset prefabs run and if so, how many prefabs are awaiting reset on a full chunkload.
- changed "getprefab reset" and resetprefabs functionality: fixed landclaimblock/bed(roll) icon still showing for owning player after resetting a prefab with a landclaimblock/bed(roll) present.
- changed consolecommand shutdownba: fixed the possibillity of an infinite loop while CPM was waiting for all players to have gracefully disconnected. It now has a failsafe loop breaker which will do a shutdown after 5 seconds of waiting regardless if there are still stuck connections.

**Version 12.5.1 A18 b155 Stable (2019.10.27) (A18.1 b2 Experimental compatible)**

- Fixed chatcommand /bag and consolecommand tp2bag: fixed the player getting stuck in ground after a tp to dropped backpack position in some circumstances.

**Version 12.5 A18 b155 Stable (2019.10.26) (A18.1 b2 Experimental compatible)**

- Added chatcommand /bed: will take you to your active bed(roll). Default permission = 0. Use CpmSettings.xml or ccp (chatcommandpermissions) to assign permissions.
- Improved reset prefabs functionality: Little quality of life improvement. Reset prefabs exclusions can now be added after the resetcommand has been given and the active reset run will considder the new exclusion(s). Could be used if, for some reason, a prefab has troubles resetting (added logline if that happens).

All reset prefabs features once again for reference:

Use consolecommand rrp (resetrwgprefabs) or "shutdownba [minutes] resetprefabs" for resetting prefabs. No need for server to be empty. Use at your will.

There are 3 ways of using exclusions on which prefabs should be reset or not:

- By adding the unique prefab name to the exceptions file (/Saves/ResetRegions/ResetPrefabs_Exceptions.txt. You can get the unique name of any prefab on your map by standing in/near it and do consolecommand getprefab. Use "name" (ex. Prefab bombshelter_lg_01.877) of the prefab to exclude only that specific prefab from resetting when running the new command.

- By adding a type of prefab to the exceptions file (/Saves/ResetRegions/ResetPrefabs_Exceptions.txt. You can get the type of prefab on your map by standing in/near it and do consolecommand getprefab. Use "filename" (ex. funeral_home_01) of the prefab to exclude all prefabs on your map that are of that type. You can also check your /Data/Prefabs folder for available types. Just use the .tts fiilename without the extention.

- By setting if claimed prefabs should be excluded from resetting. In CpmSettings.xml you can set ResetPrefabs_ExcludeClaimedPrefabs to true/false. By default (for safety) all claimed prefabs are excluded from resetting when running the new command. When you want to allow players to setup base in prefabs and still be able to reset all other prefabs, you should leave it true. When you dont allow setup bases in prefabs,, you can set it to false and all claimed prefabs will also be reset when running the new command (claimblocks will be removed too).

Adding prefabs to the exclusion list can also be done ingame with the getprefab consolecommand:

- "getprefab exclude": for excluding the specific prefab you are in/near
- "getprefab exclude type": for excluding all prefabs of the same type as the prefab you are in/near

**Version 12.3 A18 b152 Experimental (2019.10.21)**

- Changed shutdownba x resetprefabs: added more errorhandling and extended logging. Moved the code so its absolutely guaranteed there can be no players connected or connecting while in progress.

- Changed consolecommand getprefab: added parameter "exclude" and "exclude type". Use the command for excluding the specific prefab you are in/near (exclude) or excluding all prefabs of the same type as the prefab you are in/near (exclude type) from being reset.

- Added consolecommand gc: invoke the .NET garbagecollector on demand and free up some memory.

**Version 12.2 A18 b152 Experimental (2019.10.19)**

- Fixed consolecommand resetrwgprefabs (rrp): fixed the undoing of prefab resets for prefabs that have not been visited yet after a prefab reset when the server reboots.

- Changed consolecommand shutdownba: added parameter "resetprefabs". Now its possible to combine a server reboot with a RWG prefab reset. Combine the maintenance tasks for convenience.

**Version 12.1 A18 b149 Experimental (2019.10.16)**

- Added consolecommand resetrwgprefabs (rrp): Welcome to the next level of map maintenance! Reset all RWG generated prefabs on your map to RWG virgin state. No more wiping complete region files for getting your cities (and all other RWG prefabs) clean and in a virgin RWG state. Just one command for resetting the prefabs and prefabs only. There are 3 ways of using exclusions on which prefabs should be reset or not:

  - By adding the unique prefab name to the exceptions file (/Saves/ResetRegions/ResetPrefabs_Exceptions.txt. You can get the unique name of any prefab on your map by standing in/near it and do consolecommand getprefab. Use "name" (ex. Prefab bombshelter_lg_01.877) of the prefab to exclude only that specific prefab from resetting when running the new command.

  - By adding a type of prefab to the exceptions file (/Saves/ResetRegions/ResetPrefabs_Exceptions.txt. You can get the type of prefab on your map by standing in/near it and do consolecommand getprefab. Use "filename" (ex. funeral_home_01) of the prefab to exclude all prefabs on your map that are of that type. You can also check your /Data/Prefabs folder for available types. Just use the .tts fiilename without the extention.

  - By setting if claimed prefabs should be excluded from resetting. In CpmSettings.xml you can set ResetPrefabs_ExcludeClaimedPrefabs to true/false. By default (for safety) all claimed prefabs are excluded from resetting when running the new command. When you want to allow players to setup base in prefabs and still be able to reset all other prefabs, you should leave it true. When you dont allow setup bases in prefabs,, you can set it to false and all claimed prefabs will also be reset when running the new command (claimblocks will be removed too).

For the reset to work correctly the server needs to be empty. My advise is to set up a CSMM cronjob on a time
you know the server will be unoccupied or has low playercount. The command will automatically kick all online
players with a configurable kick string if run when there are players online. In CpmStrings.xml you can set the
kick string (<ResetPrefabs_KickMessage>RWG prefabs are being reset...</ResetPrefabs_KickMessage>).

- Changed consolecommand targetedhorde (th): added "all" parameter to send a targeted horde to all online players at once.

**Version 12.0 A18 b139 Experimental (2019.10.07)**

- A18b139 Experimental compatibility (codebreaking changes so not compatible with A17 and lower)
- Added consolecommand ownvehicle: take ownership of any ingame vehicle (bicycle, minibike, motorcycle, jeep, gyrocopter, blimp and helicopter)

**Version 11.0 A17.4 b4 Stable (2019.08.16)**

- Added settings for individually enabling/disabling gamemessages (GMSG) for PlayerJoined,, PlayerLeft, PlayerDied and PlayerKilled.

  `<GMSG_PlayerJoined_Enabled>true</GMSG_PlayerJoined_Enabled>`

  `<GMSG_PlayerLeft_Enabled>true</GMSG_PlayerLeft_Enabled>`

  `<GMSG_PlayerDied_Enabled>true</GMSG_PlayerDied_Enabled>`

  `<GMSG_PlayerKilled_Enabled>true</GMSG_PlayerKilled_Enabled>`

- Added configurable response strings for use on arresting player.

  `<Arrest_Notification>[00FF00]You have been jailed by an Admin![-]</Arrest_Notification>`

  `<Arrest_Notification_Timed>[00FF00]You have been jailed by an Admin! You will be released automatically in {minutes} minutes[-]</Arrest_Notification_Timed>`

**Version 10.9 A17.4 b4 Stable (2019.08.09)**

- Added webapihandlers and security layers for getting online players and landclaimblocks
- Catalysm integrated online players and landclaimblocks into CPMcc using the new apis. Now you can view them on map while creating resetregions/adv. claims.
- Catalysm completely redid the look and feel of CPMcc. Very slick. I really like it.

**Version 10.8 A17.4 b4 Stable (2019.08.06)**

- Integration of adv. claim creator made by Catalysm. Now the creator webinterface will be hosted from within CPM itself! Just browse to allocs map and add one to the port and you're good to go. Make all types of advanced claims and reset regions with this superhandy gui. Many thanks to Catalysm for making this! Make sure you fill in your webtoken and password (you can use the one allready created for CSMM or make a new one in webpermissions.xml) in "Server Settings". This will be only used to access allocs webmap. Default permission for creating claims = 0. If you want that permission to be higher just uncomment the "cpmcc.createadvclaim" permission in cpmcc_permissions.xml in your /Saves folder and set it to the permission level you want. For creating claims you MUST login via Steam (lower left) to be validated for permissions.

**Version 10.7.1 A17.4 b4 Stable (2019.06.28)**

- Small addition to new eoc (executeonclient) console command: added "all" parameter to execute a local command on all connected clients.

**Version 10.7 A17.4 b4 Stable (2019.06.28)**

- Implemented new console command eoc (executeonclient): gives the ability to remotely execute local client only commands on a player. Some commands are designed to be allowed to be executed ONLY on a local client. This command will remove that restriction and let owners/admins execute those type of commands remotely (servermanager, telnet etc). The player does NOT have to have permissions set for executing the command. eoc will take care of that.

Example of commands that will become available for remote exectution by owners/admins: sg (sg OptionsFieldOfViewNew x!), automove, cm, dm, givequest, removequest, giveself, giveselfxp, buff, debuff, exhausted, gfx, dms, bents, memcl, pois, settempunit, screeneffect, showhits, starve, thirsty, xui, spawnsupplycrate etc etc

**Version 10.6 A17.4 b4 Stable (2019.06.21)**

- Implemented new advanced claim type LcbFree: control abillity to place LCB's within the boundaries of the lcbfree adv. claim. Allow to place LCB's by accesslevel and/or whitelist. If not allowed to place LCB, it will be removed and put back in player inventory. Use lcbfree as type when creating this advanced claim. Violation message is configurable in CpmStrings.xml (AdvClaims_LcbFree).
- Implemented lcbfree claims requesthandler in CPM's webapi to be able to query the defined lcbfree adv. claims.
  Updated allocs webmap map.js. Added abillity to display the new lcbfree adv. claims on allocs webmap. Get it here.

**Version 10.5 A17.4 b4 Stable (2019.06.15)**

- Implemented a workaround (asynchronous removal and giving back plus 0,0 LCB's exclusion) in reset regions auto removal (and give back) of LCB's. Strange LCB's appearing on 0,0 will be excluded from being handled as they disrupt the system.
- Extended error handling in normal, reversed, timed, leveled, portal, hostilefree, openhours, notify, command and playerlevel advanced claims. The sys will keep spinning even when impossible advanded claims are created. This way the system keeps its maximum flexibility but wont bork if the flexibility leads to impossible advanced claims.

**Version 10.4 A17.4 b4 Stable (2019.05.19)**

- Improved consolecommand getprefab: return RWG prefab center coordinates, return RWG prefab size, excluded support for Navezgane city block prefabs and added automatic chunkloading for large RWG prefab resets.

**Version 10.3 A17.3 b18 Stable (2019.05.13)**

- Improved consolecommand getprefab: a player demolished a POI on your server? Someone made a base in a POI (prefab) (even though not allowed)? Reset POI's to RWG default with one command while you are in it and your POI is as fresh as it was at world generation. Just do command getprefab reset

**Version 10.2 A17.3 b18 Experimental(2019.05.11)**

- Added consolecommand getprefab: ever wondered how the POI you are in is called? Now you can get that info by running getprefab when standing in (or close to) a POI (prefab).
  Info returned: Name, filename, if the POI contains a player bed or lcb and the number of sleepervolumes that are defined in the prefabfile on disk.

**Version 10.1 A17.3 b18 Experimental(2019.05.10)**

- Added consolecommand sleepers: remove sleeper volumes from a defined area. Sleepervolumes are deleted instantly. Spawned sleepers can take up to 30 seconds to be removed.
- Changed console command bundo: removes sleeper volumes (if present) on bundo. Sleepervolumes are deleted instantly. Spawned sleepers can take up to 30 seconds to be removed.

**Version 10.0 A17.3 b18 Experimental(2019.05.09)**

- Added consolecommand lbuffs (listbuffs): list all available ingame buffs or search buffs with a specific (sub)string
- Added consolecommand lpbuffs (listplayerbuffs): list all active buffs on a specific player or all online players.
  Use vanilla commands buffplayer and debuffplayer icw. the technical buffname returned by lbuffs or lpbuffs to buff or debuff players.

**Version 9.9 A17.3 b18 Experimental(2019.05.08)**

- Reworked chunkreloading on using worldedit commands. No more falling through world or flickering when chunks on clients need a reload after using worldedit commands!!
  Affected commands: brender, bdup, fblock, brepblock,, bundo, tprotect, unlockall

**Version 9.8 A17.3 b18 Experimental(2019.05.08)**

- A17.3 b18 compatibility
- Bugfix in consolecommand ocn (override chatname): when listing players with overridden chatnames, it would fail if player is not saved to allocs bin. Now it will show steamid of player if not present in allocs bin.
- Added sleepervolume support to consolecommand brender: by default any sleepervolumes defined in a prefab will get implemented on brender. Optional omitting of sleepervolume implementation by using parameter "nosleepers".
- A17.3 b18 has codebreaking changes and is therefore not compatible with CPM 9.7 and lower.

**Version 9.7 A17.2 b27 Stable (2019.04.14)**

- New anticheat feature damage detection on entities: CPM can now trigger when a configured minimum amount of damage is inflicted on entities (other players, zombies, animals and vehicles). Default trigger is 5000 (<DamageDetection_MinAmountDamage>5000</DamageDetection_MinAmountDamage>) 5000 is the amount of damage that the default admin tools/weapons inflict on entities, so best to keep the value at that minimum. Very often used damage hacks (+99999) will also get caught then.
  To enable command(s) on detection just put the command(s) in the setting <DamageDetection_DetectedCommand></DamageDetection_DetectedCommand>.
  To use multiple commands just seperate them with ;

Supported placeholders: ${entityId}, ${steamId} and \${playerName}

Example:
<DamageDetection_DetectedCommand>ban add \${steamId} 10 years "Hackers not welcome"</DamageDetection_DetectedCommand>

A logline will be written on detection for easy hooking with CSMM:

[CSMM_Patrons]damageDetection: Player <playerName> (<steamId>) triggered damage detection! Damage done: <amountOfDamage>

**Version 9.6.7 A17.2 b27 Stable (2019.04.08)**

- Switched the order of group chat coloring and individual chat coloring. If a player has both individual,- and group chat colors, the individual color wins and will be used in chat.

**Version 9.6.6 A17.2 b27 Stable (2019.03.13)**

- Added optional command(s) to fire when detecting unauthorized GodMode usage: Add command(s) to CpmSettings (GodModeDetectedCommand) that will fire when a player has been detected using GodMode.
  Default is no command <GodModeDetectedCommand /> (this means empty xml value and is the same as <GodModeDetectedCommand></GodModeDetectedCommand>)
  To enable command(s) just put the command(s) in the setting. To use multiple commands just seperate them with ;

Supported placeholders: ${entityId}, ${steamId} and \${playerName}

Example: <GodModeDetectedCommand>ban add \${steamId} 10 years "Hackers not welcome"</GodModeDetectedCommand>

**Version 9.6.5 A17.2 b27 Stable (2019.03.11)**

- Added custom flying vehicle support to cvc (checkvehiclecontent) console command: Helicopterclass and blimpclass (jetpack) are available for checking contents.
- Improved cgc (chatgroupcolor): cgc will list steamId if player has never been on server (aka not present in Allocs persistentdata bin)

**Version 9.6.4 A17.2 b27 Stable (2019.03.11)**

- Added custom flying vehicle support to flying detection. Helicopterclass and blimpclass (jetpack) are now excluded from detection trigger if player is using them.

**Version 9.6.3 A17.2 b27 Stable (2019.03.10)**

- Added check if player is on gyrocopter when detected flying.

**Version 9.6.2 A17.2 b27 Stable (2019.03.10)**

- Forgot to check if a player is fully spawned on flying detection. This could lead to false positives on teleporting and/or any other spawn-in.

**Version 9.6.1 A17.2 b27 Stable (2019.03.10)**

- Improved command shutdownba: shutdownba will now asynchronously handle worldsaving, playerkicking and server shutdown. This will ensure that no chunks/inventories will get corrupted on save and shutdown.
- Added support for non vanilla quality values on giveplus command: now you can use giveplus on servers that have mods installed that changed the vanilla quality system.

**Version 9.6 A17.2 b27 Stable (2019.03.08)**

- Added anticheat GodMode detection: specify the maximum admin level in CpmSettings.xml (MaxAdminLevelGodMode (default=0)) which is allowed to use GodMode on server and all players with higher level (or no admin) will get reported in log for using unauthorized GodMode. Logline: [CSMM_Patrons]Unauthorized GodMode detected on {playerName} ({steamId}) !!!!!. NoClip detection becomes obsolete with this functionality as the only way to NoClip is by using GodMode.
- Added anticheat flying detection: disabled by default (CpmSettings.xml: PlayerFlying_TriggerHeight = 0). When specifying a PlayerFlying_TriggerHeight > 0, players will get reported in log for being at configured PlayerFlying_TriggerHeight or higher (=flying). Use CpmSettings.xml: PlayerFlying_MaxAdminLevelFlying for specifying the maximum admin level that is allowed to fly without being reported. Logline: [CSMM_Patrons]Player {playerName} ({steamId}) seems to be flying !!!!!
  You can use CSMM custom discord notifications to be warned in discord when a hacker is active!

**Version 9.5 A17.2 b27 Stable (2019.03.05)**

- Added events for:
  - Player level up
  - Player animal kill
  - Player zombie kill

The events can be used by CSMM's event trigger.

**Version 9.4 A17.2 b27 Stable (2019.02.28)**

- A17.2 b27 compatibility

**Version 9.3.2 A17.2 b20 Experimental (2019.02.18)**

- Changed maximum chatlength to be a global setting in CpmSettings.xml instead of a per player setting. Its disabled by default (MaxChatLength = 0). For enabling, just put the number of characters in there you want to define as maximum length for a chatmessage.

**Version 9.3.1 A17.2 b20 Experimental (2019.02.16)**

- Small fix for bloodmoon aware shutdown (shutdownba): forgot to let the MustDelay check look at new bloodmoonfrequency setting for determining if the shutdown should be delayed until after configured time when bloodmoon ended. Also when a bloodmoonrange is set higher than 0 in serverconfig.xml, the bloodmoon awareness will be shut off, as bloodmoons will be random.

**Version 9.3 A17.2 b20 Experimental (2019.02.12)**

- Settings to CpmSettings.xml and strings to CpmStrings.xml for:

  - NighttimeAnnouncer
  - LocationTracker
  - HideChatCommandPrefixes
  - BlockUTF8Names
  - CPMPrefix
  - ChatcommandsPermissions (+day7 +hostiles)
  - Serverchatname
  - PreventFallingBlocks
  - ShutdownBA
  - BundoSize
  - Advanced Claims
  - Permadeath
  - Offline teleport

- Dedicated persistent data file for Non Map specific data for easy carry over (CSMM_Patrons_NonMapSpecific.bin):

  Includes:

  - Groupcolors
  - Group membership
  - Player chat color
  - Overridden chatname
  - Player muted
  - Player max chat length

- Chatcommands strings to CpmStrings.xml for chatcommands:
  - acf
  - ati
  - bag
  - aaf
  - raf
  - cti
  - delwp
  - ft
  - ftw
  - get
  - hostiles
  - lcf
  - lti
  - listwp
  - mv
  - mvw
  - rtc
  - rti
  - rcf
  - ls
  - setwp

**Version 9.2 A17.2 b20 Experimental (2019.02.09)**

Removed oldlcb system: functionality is in-game now
fixed /day7 to handle new random bloodmoons
fixed nighttime announcer to handle new random bloodmoons
removed option Hordecycle for nightime announcer
random bloodmoon string to CpmStrings.xml
fixed object type changes in a17.2

**Version 9.1.1 A17.1 b9 Stable (2019.02.06)**

- Fixed exploit in oldlcb system: Since version 9.1 the oldlcb system will have all your active landclaim blocks prevent sleepers from spawning, but i forgot to check if the sleepervolume was cleared before preventing the sleeper spawns. This version fixes that exploit. Now sleeperspawns are only prevented by all active landclaim blocks if the sleepervolume has been fully cleared.

**Version 9.1 A17.1 b9 Stable (2019.02.05)**

- Improved oldlcb system: all your active landclaim blocks will now prevent sleepers from spawning again instead of only the one placed last.

**Version 9.0 A17.1 b9 Stable (2019.02.01)**

- Improved reset unclaimed regions functionality: consolecommand resetunclaimedregionsnow and "shutdownba <minutes> resetunclaimed" will now take server configured landclaim size into account when determining regions that should not be reset. With considderation of landclaim size, any overlap from claimed area with a region will mark the region as claimed. No more cutting playerbases in half when using this functionality.

**Version 8.9.2 A17.1 b9 Stable (2019.01.27)**

- Proudly presenting the remote trading system: let players trade with eachother remotely through a trading chest. Unstress your server by not letting the endless tp-ing from and to a "lobby" happening only to let players trade with eachother there. It makes use of the underground postal pipeline system that was in the world long before the apocalypse ^^. Full support for mods. The chatcommand /rtc has a default permission level of 0. If you want to use on your server for players apply permission 1000 to the rtc chatcommand by doing consolecommand ccp rtc 1000.

Trading process:
Registering a secure storage chest as tradingchest is step one.
This can be done unlimited and anywhere, but last registered chest is the actual active trading chest.
This means the system can also be used when underway and away from base.

Registering a tradingchest:

- Place a secure storage chest, stand on it and do /rtc (register tradingchest) in chat.

Done your chest is now up and running as active tradingchest. The only time you have to stand on your trading chest is when registering it.

- 2 players put the stuff they want to trade in their tradingchest
- each player has to "offer" his/her trade to the other by /rti <(partial) playername>
  After putting the trade in the chest, do the chatcommand for releasing trading items /rti <(partial) playername>
- the players get a quality colorcoded overview (including attached mods) in chat of the offer the other player made.
- check the offer and if you agree to it, you can approve it by /ati <(partial) playername> (approve trading items)
- if both players have approved the deal, the contents of the chests will be swapped and deal is done.
- if one or both of the players dont approve of the deal they can just cancel it by /cti (cancel trading items).
- in case you are in active trading process (chest is inaccessable to you) and you forgot what you offered again, you can do /lti (list trading items) in chat and your offer will be listed in chat again.

**Version 8.8.2 A17.1 b9 Stable (2019.01.26)**

- Added possibility to consolecommand mv (moveplayer) to accept entity,- and steamId instead of only (partial)playernames. This to prevent losing characters on url encoding.
  When using for creating a custom CSMM command with fo paramter for friendsonly teleport allowance, please be aware that it still supports moving to offline player. Strongly recommended to use consolecommand w2l in the same custom CSMM command to write a logline with the fact that a player did tp to a friend. If he/she was offline and teleporting player got into base with the teleportcommand and did some booboo, you will know about it.

**Version 8.8.1 A17.1 b9 Stable (2019.01.20)**

- Added possibility to consolecommand mvw (move2waypoint) to accept entity,- and steamId instead of only (partial)playernames. This to prevent losing characters on url encoding.
- Updated map.js to reflect latest webmap version of Alloc. If you have upgraded to version 31, get your new map.js here to show adv. claims / reset regions.

**Version 8.8 A17.1 b9 Stable (2019.01.16)**

- Major bugfix on wi (wipeinventory): The way of cleaning the equipment, bag and inventory was done by wrong approach causing inventory and bag troubles. Strong advice to upgrade if planning on using this functionality!
  Improved consolecommand cgc (chatgroupcolor): now its possible to manage offline players with groupcolor management.
- Compatible with A17 b240 (except rst (resetskilltree)), A17.1 b8 (except rst (resetskilltree)) and A17.1 b9

**Version 8.7 A17.1 b8 E (2019.01.15)**

- Improved Reset Regions landclaimblock detection: LCB cleanup will now calculate any overlaps/intersects with reset regions. If a LCB is placed and it overlaps a reset region based on server landclaimblock size, the player will get (CpmStrings.xml configurable) warning in chat that he/she is claiming to close to a reset region with the danger of part(s) of the base getting wiped on a reset. The landclaimblock placed will be put back in players inventory.

**Version 8.6 A17.1 b8 E (2019.01.14)**

- Improved DonorSlots console command ds: A player made a donation? Just add to donorslot list by ds command and specify days bought. CPM will figure out if its a new donor,, expired donor or a donor that is still active and has time left on his/her donorship thus adding time to the end of donorship date/time
- Added console command wi (wipeinventory): born out of the unremovable quest from inventory bug. With this command you completely wipe a players bag, belt and equipment. Make a custom CSMM command with permissions for all players to let players fix the problem themselves.

**Version 8.5 A17.1 b8 E (2019.01.12)**

- Introducing DonorSlots system: a system to be able to set a donorbuffer. This buffer will determine how many of the max server slots are reserved for donors and admins only. It will not allow connection if trying to connect and server is virtually full. The connection is not even finished so ultrafast recognition and kicking. With consolecommand (ds) for managing donorslots and settings through console. Fully configurable by xml too (CpmDonorSlots.xml). Configurable strings for DonorSlots in CpmStrings.xml for kicking normal players on buffer full, kicking expired donors on buffer full, welcome message in game for donors and donors that have expired donorship.

**Version 8.4 A17.1 b8 E (2019.01.10)**

- shutdownba consolecommand now accepts 0 as parameter for immediate kick of all players and shutdown.
- Added console command wpc (waypointcontrol): add/remove/list CPM waypoints with this console command.
- Added fo (friendsonly) parameter to mv console command. Now you can force the tp to be only allowed if target is a friend in-game. Very usefull for CSMM custom command for letting players teleport to eachother.

**Version 8.3 A17 b240 Stable (2019.01.08)**

Improved rst (resetskilltree) console command: Under circumstances the .bak → .ttp rollback mechanism of TFP would undo the skilltree reset. CPM will now say "No you dont!" to the rollback if it tries.
Added option to PVE zone kill punishment: now its possible to prevent punishment on PVE violation if offender and victim are in-game friends. When adding NPF (Not Punish Friends) to the PVE zone claimname, any violation in that zone will not trigger punishment if killing an in-game friend.

**Version 8.2 A17 b240 Stable (2019.01.06)**

- Fixed bug in PVE zone kill detection. Every hit from automatic weapon fire after death of victim is considdered another kill by TFP code. Fixed that every kill will trigger only one PVE violation.
- Added consolecommand w2l (write2log): now owners/admins/CSMM can write anything and everything they like to the server log. Usefull for custom triggering of discord notifications on log filter.

**Version 8.1.1 A17 b240 Stable (2019.01.01)**

- Bugfixes to new /aaf, /raf chatcommands and wlf consolecommand. First friend got added repeatedly.

**Version 8.1 A17 b240 Stable (2018.12.31)**

- Added chatcommand /aaf for advanced claims system. Whitelist all your ingame friends for your advanced claim(s) with just one chatcommand!
- Added chatcommand /raf for advanced claims system. Remove all your ingame friends from your advanced claim(s) whitelist(s) with just one chatcommand!
- Added consolecommand wlf (whitelistfriends): console command for adding/removing a player's ingame friends to/from their advanced claim(s) whitelist(s)

A happy newyear to all and best wishes for 2019 for everyone!!!

**Version 8.0 A17 b240 Stable (2018.12.28)**

- Changed: /bubble chatcommand and protect consolecommand to use despawn instead of high damage kills. Way less stressfull for server.
  Oldlcb system is back! I managed to make autoremoval of LCB's in resetregions, grablcb, resetunclaimed and rlp2 consolecommands work with both old,- and new lcbsystem.

**Version 7.9.1 A17 b240 Stable (2018.12.23)**

- Fixed: bug in preventing new normal advanced claims intersecting with existing normal advanced claims. It blocked other types of advanced claims also.

**Version 7.9 A17 b240 Stable (2018.12.23)**

- Fixed WebApi always returning an empty json array on normal advanced claim request.
- Improved normal advanced claims: they cant overlap anymore. Now its safe to create a CSMM custom command to let players create base protection by advanced claim themselves.
- Reset unclaimed regions system: regions that contain a normal advanced claim (base protection) will also be considdered claimed and not be wiped.

**Version 7.8 (2018.12.21)**

- Fixed consolecommand resetskilltree (rst) to use new costs for attibutes (again) to get all skillpoints spent back to the player on a skilltree reset. Fixed resetskilltree: ProgressionValue object property change by TFP.
- Changed consolecommand giveplus: when using only quantity parameter and the item has quality, a random quality will be chosen. If item has modslots, random mod(s) will be given. If using qualtiy parameter, the item will have the specified quality and if item has modslots they will be kept empty.
- Changed consolecommand checkloot to be able to handle and report existing mods on items with mods.
  b240 compatibility.

**Version 7.7 (2018.12.18)**

- TFP removed level gates for attribute buying. Instead the attributes become more expensive the higher the level of the attribute. Changed the spent skillpoints calculation in consolecommand resetskilltree (rst) to reflect the new costs and get all skillpoints back to the player on a skilltree reset.

**Version 7.6 (2018.12.18)**

- No changes. Just a recompile/repack with b231 binaries. In case of strange behaviour or problems, first install this version.

**Version 7.5 (2018.12.17)**

- fixed worldedit commands to not null ref on sleepervolumes: Affected → bdup, brepblock and brender
  fixed rlp2, grablcb and auto LCB removal on reset regions to function with new LCB system.
- removed oldlcb patching: New LCB system is so heavily intergrated in core game code, i give up bringing old claim system back
- improved auto removal of LCB placed on reset region: Claimblock will be returned to player

**Version 7.4.1 (2018.12.16)**

- Added consolecommand sayadmin: send a chatmessage with custom sendername to a group of players based on permissionlevel. Send a chatmessage to mods and admins only at once?
  Do sayadmin MyChatName 1 "Hey fellas, watch player X. Looks like he is duping". Or just to admins level 0 → sayadmin MyChatName 0 "Hey fellas, watch player X. Looks like he is duping".

**Version 7.4 (2018.12.15)**

- Added consolecommand resetskilltree (rst): reset the skill tree of a player. Will set all attributes, skills and perks to default and give all skillpoints spent back to the player. This makes it possible to redo the complete skilltree on demand without losing any other progress made ingame for a player. Try out other "play styles" while keeping other progress made!
  re-enabled consolecommand lps (listplayerskill): list all levels of player's attributes, skills and perks.

**Version 7.3 (2018.12.14)**

- Added consolecommand resetplayerdata (rpd): reset a player. Deletes .ttp, .map and .bak files of a player. Resetting him/her to new player state.
- Added webapi interface: Resetregions / advanced claims on webmap make use of the new webapi, making it suitable for displaying reset/claim data on mulitiple server instances. Thanks to Alloc for the base code of his webapi.
  Make sure to update your map.js to hook into the new webapi.

**Version 7.2 (2018.12.12)**

- A17 b221 compatibility

**Version 7.1 (2018.12.07)**

- Added support for all new vehicle types to consolecommand lce (listcustomentity): filters added → jeep, bicycle, gyrocopter, motorcycle
- Renamed consolecommand cbc (checkbikecontent) to cvc (checkvehiclecontent) and added support for all new vehicletypes → jeep, bicycle, gyrocopter, motorcycle. cvc will report owner if the vehicle has been locked.
- Fixed consolecommand getbike to adapt to TFP's new implementation of bikeownership. Not locked is NO owner.
- Added consolecommands for getting all new vehicletypes to their owner: getjeep, getbicycle, getmotorcycle and getgyrocopter.

**Version 7.0 (2018.12.05)**

- Added consolecommand repairtrees (rt): check map for bugged trees and report them. Do repairtrees repair to repair the exploit trees. Note: this will only fix the exploitable trees that have a damageindicator when hitting them. The ghosttrees that are not exploitable but also non interactable cannot be repaired.
- Added some more logic to heartbeat thread aborting. When external servermanagers (nonVanilla, nonCPM) do a shutdown routine witin a thread of their own there could be circumstances of the thread not closing down properly. With this addition i hope to mitigate that risk.

**Version 6.9 (2018.12.02)**

- Added old LCB system back!!! (through command oldlcb): multiple LCB's per player possible again with protection active. Strongly recommended to activate when using resetregion/resetunclaimed functionality.
  The system is off by default. To activate, do console command oldlcb true. Maximum number of active LCB's is configurable and default set to 5.
- Fixed PVE punishment trigger going off when one killed oneself in a PVE zone.

**Version 6.8 (2018.11.27)**

- Added arresttimer to arrest consolecommand: add parameter in minutes that indicates how long the player should be in jail before getting automatically released. Text for release message can be altered via setstring consolecommand or editting CpmStrings.xml
- Added filterpossibillity to /day7 stats and fps info. They can be indiviually disabled by entering "off" in CpmStrings.xml for Day7_Stats and/or Day7_Fps.
- Fixed nullrefs on chatmessages when player without CPM persistent player object sends a messsage.

**Version 6.7 (2018.11.26)**

- Added bloodmoon activation for all types of advanced claims. This makes it possible to let advanced claims only be active during bloodmoons within a defined timespan. Its implemented by claimname. Use prefix "bmonly(fromHour-toHour)\_" to tag a claim as bloodmoon only between fromHour and toHour. Ex. bmonly(20-7)\_NoEnemies: this will activate this claim every bloodday from 20:00 until after bloodmoon 07:00. All claim types supported.
- Changed data for Chatcolor, Chatmute, MaxChatLenght and HideChatCommandPlayers to be stored in CPM's persistent bin. They were still saved in Allocs persistent bin which has a prob with keeping the data persistent atm.
- Migration of resetregion notification strings to CpmStrings.xml. mrr console command can still be used to set it. But now it can also be altered by editting CpmStrings.xml or setstring consolecommand.

**Version 6.6 (2018.11.25)**

- Added tag on every consolecommand response that indicates a functional error. CSMM will now be able to distinguish successfull from unsuccessfull command execution.
- Added stats to /day7 chatcommand: Fully configurable with setstring consolecommand or editting /saves/CpmStrings.xml. Server FPS, nr of players and nr of zombies will be shown.
- Added subcommand to hccp for listing enabled hidden chatprefixes.

**Version 6.5 (2018.11.24)**

- Fixed backend logging for chatcommands that were hidden by hccp consolecommand. CPM still sent the chatlog in old (A16) format, rendering custom CSMM commands not working. Chat log is now A17 format and custom CSMM commands are picked up again.

**Version 6.4 (2018.11.23)**

- Fixed giveplus consolecommand. Only accepting new quality tier values now.
  Added suffix to chatname when chatting in party or friends chat with overridden chatname or colored chat,- name/text ( (Friends) and (Party) ). Now its always clear from what channel the chat came.

**Version 6.3 (2018.11.22)**

- Fixed teleportplayerhome consolecommand
- Fixed and re-enabled unlockall consolecommand
- Fixed Party/Friends chat when using overridden or colored chatname
- Fixed multiple gameinstances persistent data usage. Persistent bin will be in gameseed savegame folder again

**Version 6.2 (2018.11.21)**

- Fixed advanced claim hostilefree. All hostile entities will despawn again in hostilefree advanced claim.

**Version 6.1 (2018.11.21)**

- Due to some strange behaviour in A17 when getting the savegame directory for a gameseed, persistentdata could not be saved. This version fixes that. All CPM settings can be saved again and be persistent.

**Version 6.0 (2018.11.20)**

- A17 Experimental Compatible version

**Version 5.39 (2018.11.11)**

- Added

  - chatcommand /day7: shows bloodmooninfo with time awareness. Fully configurable with new setstring consolecommand.
    Time awareness strings of /day7:
    Day7_bloodmoonWarningB4Four = command /day7 issued on bloodday before 04:00 message
    Day7_bloodmoonWarningAfterFour = command /day7 issued on bloodday after 04:00 message
    Day7_bloodmoonWarningDuring = command /day7 issued on active bloodmoon night (after midnight) message
    Day7_bloodmoonWarningDaysleft = command /day7 issued at 1 to 6 days before bloodmoon message
    Day7_day = text for day when only 1 day is left until bloodmoon
    Day7_days = text for days when more than 1 day is left until bloodmoon
    consolecommand setstring: new editable string framework for CPM string management. For now only /day7 uses it. Strings file will be /saves/CpmStrings.xml. Can be applied by xml edit or using the setstring command with key↔value parameters. Use setstring without parameters to list all strings. In future versions all CPM strings will be put in this framework.

**Version 5.38 (2018.11.06)**

- Added: Console command bun (blockutf8names): prevent players with non-ascii chars from logging in on your server.

**Version 5.37 (2018.11.01)**

- Added (Full verson only)

  - Complete rewrite of the fallingblock detection/prevention system: new commandname: pfb (preventfallingblocks) If enabled (<logBlockCount> value greater than 0) it will prevent any blocks from falling on your server (they will vanish). With <logBlockCount> you specify from which number of simultaneously falling blocks you would like to get informed with a logline showing number of blocks falling at once and location).

**Version 5.36 (2018.10.29)**

- Added (Full verson only)

      * Finetuned the fallingblock detection system: When a collapse starts (20 blocks monitoring still advised) it will report first batch with tekst:

  [CSMM_Patrons] XXX falling blocks at once detected! Position: x, y, z Use substring of this for discord notification on falling blocks. All subsequent drops of the same batch will be reported as:
  [CSMM_Patrons] XXX blocks are still falling on position: .x, y, z} This will indicate the durartion and severity of the collapse in log. (This can be a lot of loglines, dont put discord notification on it)
  Added 0 to allowed values of sps console command: set playerkills and zombiekills to 0 is now possible again.

**Version 5.35 (2018.10.26)**

- Added (Full verson only)

  - new consolecommand sdc (setdeathcount): set the death count to any value on any player. Want to compensate that poor player with a death caused by gamebug? Just deduct 1 of his/her death count. Want to give donors the opportunity to reset their deathcount to zero? Just create a custom donor shielded CSMM command for it (sdc \${steamId} 0) and you are good to go.
  - new fallingblock detection system: with console command mfb to set the max number of falling blocks (at once) that are allowed until the drop will be reported to log. It is disabled by default (value 0). For detecting relevant drops the adviced number is 20 as drops always break down in batches. When you get mulitiple of 20 blocks, trust me, a large portion of the map is collapsing. (wink)
    This system can be turned on ondemand. When suspecting dropmining or POI collapsing just set the value higher than 0 (advised 20) and the monitoring is in effect. The location is in the loginfo. After that you could disable the sys again with setting it to 0.
  - Added cpm- prefix to primairy console command aliases. Now all CPM commands will be grouped together when doing the help command..
  - new console command cpm-help: displays all CPM console commands.

**Version 5.34 (2018.10.21)**

- Added (Full verson only)

  - Extended reset region system with functionality to reset all(!) regions of the map that do not have claimblocks on them.
  - New console command for resetting regions without claimblocks immedeately: resetunclaimedregionsnow This will kick all players and shutdown/reset immedeately.
  - Added parameter to shutdownba: "shutdownba <minutes> resetunclaimed": This will trigger a bloodmoon aware shutdown with a nice timer in <minutes> in chat every minute.

**Version 5.33 (2018.10.16)**

- Changed (Full verson only)

  - Changed /grablcb chatcommand to grablcb consolecommand. For chatcommand (with permissions, costs etc) use this consolecommand for creating a custom CSMM chatcommand

**Version 5.32 (2018.10.14)**

- Added (Full verson only)

  - rlp2: added option to remove all expired claimblocks from the map. Chunks will autoload if needed. ("rlp2 cleanup")
  - new consolecommand scn (serverchatname): set the global chatname of all CPM communication. With colorcode support.
  - new consolecommand getbike: tp bikes to their owners as admin or create a custom CSMM command for players to do it themselves.
  - chatcommand /grablcb: let a player pickup owned landclaims near his position (into backpack)
  - giveplus console command:
    put items directly in backpack
    added an option to give item(s) to all onine players at once (into backpack)
    when giving an item that has quality wihout defining the quality in cmd, giveplus will choose random quality
  - fixed giveplus not being able to give items without quality.

**Version 5.31 (2018.09.03)**

- Added (Full verson only)

  - console command say2: use to broadcast server messages with a custom name. Colorcoding supported.

Example: say2 "[00FF00]Whos your daddy?![-]" "No stealing, raiding, griefing allowed!"

**Version 5.30 (2018.09.02)**

- Added (Full verson only)

  - realtime PVP punishment in explicitly tagged PVE zones. PVP punishment activates when there is a notify claim with "pve" in the name AND a 3rd notify parameter is issued. The 3rd parameter can be used to fire (multiple) console command(s) at an offending player (spawn zeds, kick, ban, jail, kill, tp etc etc) for punishment. Check Advanced Claims (type Command) for syntax on commands. The mod will know a player killed a player even before the game itself does ^^. Enter,- and exitmessages are required within a PVE notify claim that has punishment. A logmessage will be written on punishment including victim and offender and their positions. This could be used to create a CSMM discord notification on PVP punishment.

  Example: ccc add PVEzone -10000 10000 10000 0 0 "notify:You are entering a PVE zone!:You are leaving a PVE zone!:kick \${entityId} 'You have been violating PVE rules.'"

**Version 5.29 (2018.08.28)**

- Added (Full verson only)

  - batch adding regions marked for reset with mrr command: mrr add <w_boundary> <e_boundary> <n_boundary> <s_boundary> and mrr remove <w_boundary> <e_boundary> <n_boundary> <s_boundary> → all regions that get touched by the defined area are added/removed to/from the reset region list.
  - console command mv: console equivalent of the /mv chatcommand. Partial playername and offline player supported
  - console command mvw: console equivalent of the /mvw chatcommand. Partial playername and offline player supported

**Version 5.28 (2018.08.27)**

- Fixed (Full version only):

  - XSS vulnerability in advanced claims on alloc's webmap (BIG thanks to Catalysm for reporting!)

- Added (Full verson only)

  - Customisable chatcommand prefix: use consolecommand cpmprefix to set it.
  - Chatcommand /rt : return to your origin position after using /ft or /ftw for easy teleporting

**Version 5.27 (Light version 2.13) (2018.08.22)**

- Fixed: shutdownba settings not being persistent

**Version 5.26 (2018.08.20)**

- Added (Full version only):

  - Added offline player support for admin chatcommands /ft, /mv and /mvw

    /ft offline player

    /mv online player to offline player

    /mv offline player to online player

    /mv offline player to offline player

    /mv offline player to coordinates

    /mvw move offline player to waypoint

  - **Warning**: persistent data structure has changed and demands a wipe. While server off after updating mod, please remove /saves/Random Gen/<mapname>/CSMM_Patrons.bin before starting server again. Advise: if you have advanced claims (reset region claims will be created automatically) do a "ccc list" before updating and copy paste the output. Makes it easier to recreate after .bin wipe.

**Version 5.25 (2018.08.15)**

- Added (Full version only):

  - Added permadeath play: tag players as permadeath player and they will be resetted when they die. Use console command pd (permadeath) for managing the permadeath players
  - Added interfaces to allocs webmap for all advanced claims: display all adv. claims on allocs webmap. Shielded behind permission webapi.viewallclaims in webpermissions.xml.
    Download the patch needed for Allocs webmap here.

  - Added a special substance to reset regions which will melt any landclaimblock that is put on them.
  - Added ghost claim removal (landclaims that have been reset but are still present on Alloc's webmap). Will automatically do its work on regions marked for reset.

**Version 5.24 (2018.08.11)**

- Added (Full version only):

  - Added new adv. claim type "playerlevel": this claim can be used to restrict/grant access to a claim by playerlevel. Built in basic logical expression support and level ranges.
    Supported operators: <= (and =<), >= (and =>), == (and =), != (and =!) Define ranges by using 2 operators in 1 claim (use & between expressions).
    Examples:
    allow levels between 5 and 10: playerlevel:>=5&<=10
    allow only level 5: playerlevel:=5
    allow all levels but 5: playerlevel:!=5
    allow levels lesser than or equal 5: playerlevel:<=5

  - Added new adv cllaim type "command": fire one or multiple consolecommands when a player enter this claim. The type must be enclosed in double quotes and parameters with spaces within each command must be enclosed in single quotes. Use semicolon ( ; ) to seperate commands.
    Example:
    ccc add deathzone -10 10 10 -10 0 "command:say '${playerName} has entered the DeathZone!!! mwuhahahaha!';pm ${entityId} 'I wish you luck my friend. Lots of it...';sh ${steamId} 30"
    Example shows all 3 supported placeholders (casesensitive): ${playerName}, ${entityId} and ${steamId}

**Version 5.23 (Light version 2.12) (2018.08.05)**

- Changed (Full & Light version):

  - console command lpf (listplayerfriends): returns playernames and steamid now instead of only steamid's.

- Added (Full version only)

  - console command ccc (claimcontrolcommand): added methods to make creating claims easier. Implemented p1 p2 functionality like you may allready know from pblock commands. And radius functionality. Radius will create a claim of any type based on the position of a player or antity making borders at distance <radius> from the player/entity. This could be used for creating a CSMM custom command to let players make a defensive claim themselves. Make that a timed claim even and players could be charged an amount of currency to set it for another week for example.

**Version 5.22 (2018.08.01)**

- Added (Full version only):

  - Added new console command resetregionsnow: this will immediately shutdown and reset all regions marked for reset. Players will get kicked and world will be saved. No countdown, no bloodmoon awareness. If you want to reset the regions a more player friendly way, use "shutdownba <minutes> reset". That way the players will get a bloodmoon aware timed shutdown.
  - Added optional parameter regionName to mrr (markresetregion): now its possible to give a regionname as parameter so it can be used when not in game. Ingame both can be used (location based and by name). Via remote (telnet, webapi) only name based can be used. mrr add/remove <regionName>

**Version 5.21 (2018.08.01)**

- Added (Full version only):

  - Added interface for alloc's webmap to be able to show regions marked for reset on the webmap.
    For displaying the reset regions on the webmap, a patch for allocs map is needed.

**Version 5.2 (2018.07.31)**

- Added (Full version only):

  - Added fully automated enter,- and exit notification creation on regions marked for reset.
  - Added possibility to make notify claims with an exit message

**Version 5.17 (2018.07.26)**

- Added (Full version only):

  - Region reset system with console command mrr (markresetregion): manage the list that contains the regions that will be resetted when giving command shutdownba <minutes> reset
    The file that contains the regions marked for reset is located in /saves/ResetRegions/regions.txt. You can edit manually and it will be in effect immediately after saving. Or you can add/remove/list regions ingame with console command mrr.

**Version 5.16 (2018.07.23)**

- Changed (Full version only):

  - added permissions to /ls (last seen). Default permission level is set to 1000 so all players can use. Set permissions with ccp command.
  - new chatcommand /bag: teleports a player to his/her backpack after death. Default permission level is set to 1000 so all players can use. Set permissions with ccp command.
  - new console command tp2bag: teleports a player to his/her backpack after death. Same as chatcommand /bag but with console command you can make a custom CSMM command and charge players currency for use and set a timeout.

**Version 5.15 (2018.07.22)**

- Changed (Full version only):

  - bugfix: forgot to take rename of 5.14 into account with ccp (chatcommandpermissions)
  - new chatcommand /get: teleport a player to you. Partial,- and ambiguous names support present as with all chatcommands. Return the player to origin with /tb (take back)

**Version 5.14 (2018.07.21)**

- Changed (Full version only):

  - renamed chatcommands /lo to /ls (last seen) and /return to /tb (take back) for servertools compatibility.

**Version 5.13 (2018.07.20)**

- Added (Full version only):

  - new advanced claim type "notify": this defines a claim (zone) in which players get a configurable message in chat when they enter the claim (PVE, PVP or no build zones for example).
  - new chatcommand /return: return a player to the position they were before getting teleported by /mv or /mvw

**Version 5.12 (2018.07.17)**

- Added (Full version only):

  - console command arrest: put a player in jail (advanced reversed claim named "jail" (lowercase) required!)
  - console command release: release a player from jail

**Version 5.11 (Light version 2.11) (2018.07.16)**

- Added (Full & Light version):

* console command cbc (checkbikecontents): check the content of the minibike basket and parts of the minibike.
* console command ob (ownbike): take ownership of any minibike

**Version 5.1 (Light version 2.1) (2018.07.13)**

- Added:

  - console command shutdownba: shutdown server with a countdown. Shutdown is bloodmoon aware and fully configurable (Full & Light version)
  - chatcommand /lo : check when a player was last seen online (Full version only)

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

* pblock <block_name> <qnt> <qnt> <qnt> <rot> not accepting 0 for qnt anymore and y length being one to high when using qnt.

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

- datetime format in "loctrack showtrack". Now displays yyyy-MM-dd HH:mm:ss x,y,z

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

- pblock null reference exception on listall blocks (searchstring \*)

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
