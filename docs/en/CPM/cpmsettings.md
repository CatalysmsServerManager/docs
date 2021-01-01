# CPM Settings

## Intro

CPM has a lot of flexibility when it comes to how it behaves and what features are active. Settings can be done by consolecommands and are set in /Saves/CpmSettings.xml eventually. CpmSettings.xml can be editted manually too and saving it will make the changed settings effective immediately even on a running server.

## The various settings explained

`<BlockUTF8Names_Enabled>true</BlockUTF8Names_Enabled>`

Prevent or allow players to connect that have UTF-8 charset characters in their name.

`<SpecialCharacters>!@#$%^&amp;*(),.?":;|&lt;&gt;'</SpecialCharacters>`

Define explicit special characters that are not allowed in playernames. Beware of xml breaking characters. They need to be escaped.

`<SpecialCharactersNameBlock_Enabled>false</SpecialCharactersNameBlock_Enabled>`

Enable/Disable preventing players with special characters in their name from connecting.

`<Bundo_HistorySize>5</Bundo_HistorySize>`

The number of bundo's that are stored and you can do after prefab commands like fblock, brender, bdup, brepblock etc.

`<ChatCommandPermissions_ft>0</ChatCommandPermissions_ft>`

`<ChatCommandPermissions_ftw>0</ChatCommandPermissions_ftw>`

`<ChatCommandPermissions_mv>0</ChatCommandPermissions_mv>`

`<ChatCommandPermissions_mvw>0</ChatCommandPermissions_mvw>`

`<ChatCommandPermissions_bubble>0</ChatCommandPermissions_bubble>`

`<ChatCommandPermissions_listwp>0</ChatCommandPermissions_listwp>`

`<ChatCommandPermissions_setwp>0</ChatCommandPermissions_setwp>`

`<ChatCommandPermissions_delwp>0</ChatCommandPermissions_delwp>`

`<ChatCommandPermissions_tb>0</ChatCommandPermissions_tb>`

`<ChatCommandPermissions_rt>0</ChatCommandPermissions_rt>`

`<ChatCommandPermissions_get>0</ChatCommandPermissions_get>`

`<ChatCommandPermissions_rtc>0</ChatCommandPermissions_rtc>`

`<ChatCommandPermissions_bag>1000</ChatCommandPermissions_bag>`

`<ChatCommandPermissions_ls>0</ChatCommandPermissions_ls>`

`<ChatCommandPermissions_day7>1000</ChatCommandPermissions_day7>`

`<ChatCommandPermissions_hostiles>0</ChatCommandPermissions_hostiles>`

`<ChatCommandPermissions_bed>0</ChatCommandPermissions_bed>`

Set permissionlevel for all available CPM chatcommands. For free for all use permission level 1000.

`<CPMPrefix>/</CPMPrefix>`

The prefix for CPM chatcommands

`<DamageDetection_MinAmountDamage>5000</DamageDetection_MinAmountDamage>`

The amount of damage done on entities which will trigger the damagedetection anticheat.

Logline example for using for custom CSMM discord notification:

[CSMM_Patrons]damageDetection(Entity): Player Prisma501 (7656114567822412) triggered damage detection! Damage done: 5000

`<DamageDetection_DetectedCommand>ban add ${steamId} 10 years "Nice hack mate"</DamageDetection_DetectedCommand>`

The (optional) command to execute when damagedetections gets triggered.

`<DamageDetection_ExcludeAdminLvl>0</DamageDetection_ExcludeAdminLvl>`

The player/admin level which will be excluded from damagedetection check.

`<DisableSleeperRespawn_Enabled>false</DisableSleeperRespawn_Enabled>`

When enabled sleepers will not respawn anymore AFTER they have been cleared. Alters the sleepervolumes on map and is permanent after sleepers have been cleared from a POI.

`<DisableSleepers_Enabled>false</DisableSleepers_Enabled>`

When enabled there will be no sleeperspawns in the world. Not permanent. When disabled after enabling sleepers will spawn again.

`<DisableSleepers_BloodmoonOnly_Enabled>false</DisableSleepers_BloodmoonOnly_Enabled>`

Same as disablesleepers above but ONLY prevents sleeperspawns during bloodmoon. Not permanent.

`<GMSG_PlayerJoined_Enabled>true</GMSG_PlayerJoined_Enabled>`

`<GMSG_PlayerLeft_Enabled>true</GMSG_PlayerLeft_Enabled>`

`<GMSG_PlayerDied_Enabled>true</GMSG_PlayerDied_Enabled>`

`<GMSG_PlayerKilled_Enabled>true</GMSG_PlayerKilled_Enabled>`

Show native gamemessages in chat for joining, leaving, dying and killing. These are the vanilla global gamemessages and disabling them can have impact on CSMM hooks you might have on those actions.

`<HideChatCommandPrefixes_Prefixes>/</HideChatCommandPrefixes_Prefixes>`

Define the prefixes for chatcommands that are not to be shown in public chat. Seperate with comma for multiple prefix hiding (/,$). 

`<HideChatCommandPrefixes_Enabled>true</HideChatCommandPrefixes_Enabled>`

Enable or disable prefix hiding in chat. Prefixes in HideChatCommandPrefixes_Prefixes will be used when enabled.

`<LocationTracker_Enabled>true</LocationTracker_Enabled>`

Enable or disable local location tracking.

`<LocationTracker_ChatCommand>/loctrack</LocationTracker_ChatCommand>`

Define the chatcommand for locationtracker queries in chat. Prefix MUST be included.

`<LocationTracker_ChatCommandEnabled>true</LocationTracker_ChatCommandEnabled>`

Enable or disable the availability of the locationtracker chatcommand.

`<LocationTracker_RecordingIntervalSeconds>15</LocationTracker_RecordingIntervalSeconds>`

Location recording interval in seconds.

`<LocationTracker_MaximumDataAgeHours>72</LocationTracker_MaximumDataAgeHours>`

Number of IRL hours that data will be kept in tracker databases. Use 0 for infinite storage (no cleaning will take place).

`<LocationTracker_NearDistance>200</LocationTracker_NearDistance>`

Distance used when doing /loctrack near. Distance is in blocks.

`<LocationTracker_ResponseColor>4DA6FF</LocationTracker_ResponseColor>`

The HEX color that will be used in locationtracker chatcommands responses.

 `<MaxAdminLevelGodMode>0</MaxAdminLevelGodMode>`

Define the player/admin level which is allowed to use Godmode whithout triggering Godmode anticheat.

Logline example for using for custom CSMM discord notification:

[CSMM_Patrons]Unauthorized GodMode detected on Prisma501 (23654789532547) !!!!!

[CSMM_Patrons]Permissionlevel: 1000 MaxAdminLevelGodMode: 0

`<GodModeDetectedCommand>ban add ${steamId} 10 years "Nice hack mate"</GodModeDetectedCommand>`

Command (optional) that will be executed when Godmode anticheat gets triggered.

`<MaxAdminLevelSpectatorMode>0</MaxAdminLevelSpectatorMode>`

Define the player/admin level which is allowed to use Spectatormode whithout triggering Spectatormode anticheat.

Logline example for using for custom CSMM discord notification:

[CSMM_Patrons]Unauthorized SpectatorMode detected on Prisma501 (23654789532547) !!!!!

[CSMM_Patrons]Permissionlevel: 1000 MaxAdminLevelSpectatorMode: 0

`<SpectatorModeDetectedCommand>ban add ${steamId} 10 years "Nice hack mate"</SpectatorModeDetectedCommand>`

Command (optional) that will be executed when Spectatormode anticheat gets triggered.

`<MaxChatLength>0</MaxChatLength>`

Define the maximum allowed number of characters in chat. The chatmessage will get blocked if length exceeds this setting.

`<NighttimeAnnouncer_Enabled>true</NighttimeAnnouncer_Enabled>`

Enable/Disable the nighttime announcer.

`<NighttimeAnnouncer_Warnhours>2</NighttimeAnnouncer_Warnhours>`

Number of ingame hours before 22:00 the nighttimeannouncer should announce.

`<NotifyAdmin_Level>0</NotifyAdmin_Level>`

The level of players/admins that will get notified (if online) when a player with an expired reserved slot joins the server.

`<PlayerFlying_TriggerHeight>0</PlayerFlying_TriggerHeight>`

The height (in blocks) that will trigger flying detection anticheat. 0 is disabled.

Logline example for using for custom CSMM discord notification:

[CSMM_Patrons]Player Prisma501 (23654789532547) seems to be flying !!!!!

`<PlayerFlying_MaxAdminLevelFlying>0</PlayerFlying_MaxAdminLevelFlying>`

The players/admins level that will be exluded from flying detection anticheat.

`<PreventFallingBlocks>400</PreventFallingBlocks>`

If set to 0, falling blocks prevention is disabled. Setting to any number higher than 0 will prevent ALL blocks from falling. This number will be used to log the falling blocks if the number of simoultaniously falling blocks is higher than this setting.

Logline example for using for custom CSMM discord notification:

[CSMM_Patrons] 658 falling blocks prevented! @ 2130 7 161

`<QuestPoiProtection_Enabled>true</QuestPoiProtection_Enabled>`

Quests wont activate if there is a bedroll/lcb in the quest poi. Enable protection and players cannot place bedrolls/lcb's in poi's that can be selected as questpoi by the game. Exceptions per POI or POI type can be added in /Saves/ResetRegions/QuestPoi_Exceptions.txt

`<AllPoiProtection_Enabled>false</AllPoiProtection_Enabled>`

Enable protection and players cannot place bedrolls/lcb's in ALL poi's on map. Exceptions per POI or POI type can be added in /Saves/ResetRegions/AllPoi_Exceptions.txt

`<ResetPrefabs_ExcludeClaimedPrefabs>true</ResetPrefabs_ExcludeClaimedPrefabs>`

If true, prefabs that contain a lcb will not be reset when doing a resetrwgprefabs (rrp) run.

`<ShutdownBA_DelayRestartBloodDayAfter>15</ShutdownBA_DelayRestartBloodDayAfter>`

Shutdownba console command is bloodmoon aware. Here you define at which hour during bloodday and later the shutdown of the server will be delayed.

`<ShutdownBA_DelayRestartAfterBloodmoonUntil>10</ShutdownBA_DelayRestartAfterBloodmoonUntil>`

The hour after bloodmoon that the delayed server shutdown will kick in again after a delayed shutdownba.

`<ShutdownBA_MinimumUptimeRequired>0</ShutdownBA_MinimumUptimeRequired>`

The minimum amount of minutes the server has to be up before shutdownba will reboot the server. 0 means reboot without considdering the server uptime. Any number higher than 0 will define the number of minutes the server has to be up before the shutdownba will actually reboot the server.

`<Vehicles_RemoveOnRestart>false</Vehicles_RemoveOnRestart>`

If true, all vehicles that are NOT stored (backpack, container etc) will be removed at every server restart.