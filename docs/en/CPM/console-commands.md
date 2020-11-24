# Console Commands

[CPM](/en/CPM/index.html) has a _lot_ of functionality, more so than most people realize, and it's very easy to miss some very helpful configuration settings that allow you to use the more useful features.

::: tip
New command prefix

Starting with CPM 5.35, all CPM-specific commands have been given the prefix 'cpm-' to identify which mod they are part of. As a result, commands like 'brender' are now named 'cpm-brender'; however, an alias has been added to the older name, so that Admins with experience in the older names can still use them. As an example, all three of the following commands would be valid and produce the same result:

- cpm-chatgroupcolor
- chatgroupcolor
- cgc

You can type 'help' to see all possible commands, and any command provided by CPM will have the prefix listed. Alternately, to only see CPM-related commands, you can type 'cpm-help' instead.
:::

## High-level

This section will go over the quick-set commands you can use to configure the high-level functionality.

### an

The AN command configures the Nighttime announcer, which is a script that warns players that night is approaching, which is especially useful for both horde night, and servers that have zombies running after dark. Recommended settings are:

an true  
an warnhours 3  
an announcer Botname

The above settings will enable the announcer, provide a 3-hour warning before in-game darkness, and all alerts and warnings will be sent by the server with the name 'Botname', which you can change to be anything you want.

### hccp

The hide chat command prefix feature allows you to hide player chat that is related to CSMM/CPM commands. For example, if a player types /claim in order to obtain their shop purchases, hccp would prevent that chat from appearing in the game.

hccp /,\$

The above command will hide all chat lines that begin with the / or $ characters. CSMM uses $ by default for commands, and CPM uses / by default for commands. The comma that separates the two symbols is required.

### pfb

The prevent falling blocks feature was added to reduce or eliminate huge drop mining collapses within the game. When PFB is enabled, any block that would drop due to structural integrity issues will instead simply vanish. This prevents sand/gravel drop mining from causing hundreds of blocks to fall at once, which will often lag or crash a server completely. Similarly, if you destroy the structural supports for a base and cause it to drop, the affected blocks will simply cease to exist. PFB also generates a log line entry in the console, which can be captured via a Discord notification and sent to the admin team in Discord.

pfb 20

If PFB is set to any value above zero, it will vanish falling blocks; the numeric parameter of the pfb command only specifies how large the collapse must be before it is recorded as a log event. This prevents PFB from spamming the console log with 1-2 dropped block events when players destroy temporary frames or mostly-collapsed small structures in-game. A value of 20 is recommended for PFB.

### scn

The Server Chat Name feature allows you to customize the 'Name' of the server when it sends chat messages via CPM. Typically, this would be the same value as the 'an announcer' command above.

scn Botname

## Reference

CPM has a built in function to list all avalaible console commands (cpm-help), which give you a global description of the available commands. For detailed info on a command do:

```
help <command>
```

Available commands:

```
 cpm-additemloot additemloot => add item to SecureLoot below the given entity
 cpm-af af addfriend => Add yourself to a player friends list and vice versa.
 cpm-announcenighttime announcenighttime an => Turn NightTime announcement on/off
 cpm-arrest arrest => Put a player in jail (reversed claim jail required!)
 cpm-bcheck bcheck => Checks the type of block by coordinates or under your feet.
 cpm-bdup bdup => Copy an Area to another location
 cpm-bexport bexport => Exports as Prefab some space
 cpm-brender brender => Renders a Prefab on given location
 cpm-brepblock brepblock => Replace blocks from a defined location
 cpm-bun bun blockutf8names => Kick any players with UTF-8 chars in name at login
 cpm-bundo bundo => Undo last prefab command
 cpm-ccc ccc => Manage advanced claims
 cpm-ccp ccp chatcommandpermissions => Set permission levels on admin chatcommands
 cpm-chatgroupcolor chatgroupcolor cgc => Manage chat color by groupmembership.
 cpm-checkloot checkloot => check items from SecureLoot below the given entity
 cpm-cpmprefix cpmprefix => Set prefix for CPM chatcommands.
 cpm-cs cs => Spawn scouts near a player or coordinate
 cpm-cvc cvc checkvehiclecontent => check the content of a vehicle.
 cpm-db db deactivatebed => Deactivate a players bed(roll).
 cpm-ds donorslot ds => Add, Remove and View steamids on the ReservedSlots list.
 cpm-entityremove entityremove => remove entity from game
 cpm-eoc eoc executeonclient => Let a local player fire a local only console coommand (or any)
 cpm-etele etele => Teleport an entity
 cpm-fblock fblock => Fill a defined area with a specific block
 cpm-fblock1 fblock1 => place one block at a time without the need of chunkreloading (RPC)
 cpm-gc gc => Invoke the garbagecollector. Free some memory.
 cpm-getbicycle getbicycle => Get lost or stuck bicycle to player
 cpm-getbike getbike => Get lost or stuck minibike to player
 cpm-getgyrocopter getgyrocopter => Get lost or stuck gyrocopter to player
 cpm-getjeep getjeep => Get lost or stuck jeep to player
 cpm-getmotorcycle getmotorcycle => Get lost or stuck motorcycle to player
 cpm-getprefab getprefab => Get info/manage the RWG prefab you are standing in.
 cpm-giveplus giveplus => give an item to a player(s) (entity id or name)
 cpm-givexp givexp => give XP to a player
 cpm-got got => give items to or trade items with other player
 cpm-grablcb grablcb => Put all landclaims within <radius> of and owned by player in his/her backpack.
 cpm-help => Help on console and specific CSMM Patrons Mod commands
 cpm-hidechatcommand hidechatcommand hccp => specify a chat message prefix that defines chat commands that are hidden from chat
 cpm-lce lce listcustomentity => List entity with custom parameter for better filtering.
 cpm-listbedplayer listbedplayer lbp => list bed locations of all players or a specific player
 cpm-listbuffs listbuffs lbuffs => List or search all available buffs
 cpm-listfriendsplayer listfriendsplayer lfp => list friends of a single player or all players
 cpm-listlandclaims listlandclaims llc => lists all land protection blocks and owners
 cpm-listplayerbuffs listplayerbuffs lpbuffs => List players active buffs
 cpm-listplayerskill listplayerskill lps => list players Skills
 cpm-loctrack loctrack => Manage locationtracker settings and data
 cpm-mrr mrr markresetregion => Manage the reset regions list.
 cpm-multipleentityspawn multipleentityspawn mes => spawn multiple entities around some coordinate or player
 cpm-mutechatplayer mutechatplayer mcp => mute a player on public chat
 cpm-mv mv => Move player command (to coordinates and to other player). Optionally restrict to friends only.
 cpm-mvw mvw => Move player to waypoint.
 cpm-ov ov ownvehicle => take ownership of a vehicle.
 cpm-overridechatname overridechatname ocn => Change a player's chat name.
 cpm-own own => define an owner to SecureLoot/SecureDoor for a player.
 cpm-pd pd permadeath => Manage permadeath players
 cpm-pfb pfb preventfallingblocks => Prevent falling blocks on server.
 cpm-playerchatcolor playerchatcolor pcc => Change default player chat color.
 cpm-playsound playsound => Play an ingame sound on any server/player position.
 cpm-protectplayer protectplayer protect => Set protective bubble on player.
 cpm-red red removeexpdeficit => Remove a player's ExpDeficit.
 cpm-release release => Release a player from jail.
 cpm-remitem remitem => remove items from SecureLoot below the given entity
 cpm-removelandprotection2 removelandprotection2 rlp2 => removes the association of a land protection block without players needing to be near
 cpm-resetadvclaim rac resetadvclaim => Reset the area(s) covered by Adv. Claim Reset to RWG default on chunk level.
 cpm-resetchunks resetchunks => Reset chunks to RWG default.
 cpm-resetregionsnow resetregionsnow => Execute shutdown immediately and reset marked regions.
 cpm-resetrwgprefabs resetrwgprefabs rrp => Reset all RWG prefabs.
 cpm-resetunclaimedregionsnow resetunclaimedregionsnow => Execute shutdown immediately and reset ALL regions except the ones that have LCB/Adv. Claim on.
 cpm-rl rl resetlevel => Reset a player's level.
 cpm-rpd rpd resetplayerdata => Reset a player
 cpm-rs rs resetskillpoints => Reset a player's skillpoints.
 cpm-rt rt repairtrees => Repair indestructable trees (only with damageindicator)
 cpm-rvr rvr removevendingrental => Remove a player's vendingmachine rental status
 cpm-say2 say2 => Sends a message to all connected clients with specific sender
 cpm-sayadmin sayadmin => Send a PM to all players meeting the minimum receipients permisson level
 cpm-sayplayer2 sayplayer2 pm2 => send a message to a single player with a specific sender name
 cpm-scn scn serverchatname => Set server chatname globally
 cpm-sdc sdc setdeathcount => Set a player's deathcount.
 cpm-setbundosize setbundosize => Set the size of history on bundo
 cpm-setplayerstatus setplayerstatus sps => Change players attributes (zombiekills, playerkills)
 cpm-showinventory2 showinventory2 si2 => list inventory of a given player
 cpm-shutdownba shutdownba => Timed shutdown with bloodmoon awareness.
 cpm-sleepers sleepers => Remove sleepervolumes from world
 cpm-targetedhorde targetedhorde th => Spawn targeted horde near a (or all) player or coordinate
 cpm-teleportplayerhome teleportplayerhome teleh => teleport a player to his home (on bedroll)
 cpm-tooltip tooltip => Show a tooltip on a specific connected client
 cpm-tp2bag tp2bag teleport2bag => Teleport player to his/her backpack after death.
 cpm-tprotect tprotect => Set protection to a location in same way as trader.
 cpm-traderlist traderlist => List Trader Areas
 cpm-unlockall unlockall => unlock all secure loots, chests and doors for the current player.
 cpm-w2l w2l => Write to console.
 cpm-wi wi wipeinventory => Reset a player's inventory completely (bag, belt and equipment).
 cpm-wlf wlf => Adds all friends of a player to whitelist(s) of their claim(s)
 cpm-wpc wpc => Manage CPM waypoints
```
