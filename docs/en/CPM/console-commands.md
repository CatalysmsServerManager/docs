# Console Commands

Below is a list of Console Commands added to the server by CPM. 
 
::: tip
New command prefix

Starting with CPM 5.35, all CPM-specific commands have been given the prefix 'cpm-' to identify which mod they are part of. As a result, commands like 'brender' are now named 'cpm-brender'; however, an alias has been added to the older name, so that Admins with experience in the older names can still use them. As an example, all three of the following commands would be valid and produce the same result:

*   cpm-chatgroupcolor
*   chatgroupcolor
*   cgc
    
You can type 'help' to see all possible commands, and any command provided by CPM will have the prefix listed. Alternately, to only see CPM-related commands, you can type 'cpm-help' instead.
:::

CPM has a built in function to list all avalaible console commands (cpm-help), which give you a global description of the available commands. For detailed info on a command do:
````
help <command>
````

Available commands:
````
 cpm-additemloot additemloot => add item to SecureLoot below the given entity
 cpm-announcenighttime announcenighttime an => Turn NightTime announcement on/off
 cpm-arrest arrest => Put a player in jail (reversed claim jail required!)
 cpm-bcheck bcheck => Checks the kind of a block
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
 cpm-mv mv => Move player command (to coordinates and to other player). Optionally restrict of friends only.
 cpm-mvw mvw => Move player to waypoint.
 cpm-ov ov ownvehicle => take ownership of a vehicle.
 cpm-overridechatname overridechatname ocn => Change a player's chat name.
 cpm-own own => define an owner to SecureLoot/SecureDoor for a player.
 cpm-pd pd permadeath => Manage permadeath players
 cpm-pfb pfb preventfallingblocks => Prevent falling blocks on server.
 cpm-playerchatcolor playerchatcolor pcc => Change default player chat color.
 cpm-playsound playsound => Play an ingame sound on any server/player position.
 cpm-protectplayer protectplayer protect => Set protective bubble on player.
 cpm-release release => Release a player from jail.
 cpm-remitem remitem => remove items from SecureLoot below the given entity
 cpm-removelandprotection2 removelandprotection2 rlp2 => removes the association of a land protection block without players needing to be near
 cpm-resetregionsnow resetregionsnow => Execute shutdown immediately and reset marked regions.
 cpm-resetrwgprefabs resetrwgprefabs rrp => Reset all RWG prefabs.
 cpm-resetunclaimedregionsnow resetunclaimedregionsnow => Execute shutdown immediately and reset ALL regions except the ones that have LCB/Adv. Claim on.
 cpm-rpd rpd resetplayerdata => Reset a player
 cpm-rt rt repairtrees => Repair indestructable trees (only with damageindicator)
 cpm-say2 say2 => Sends a message to all connected clients with specific sender
 cpm-sayadmin sayadmin => Send a PM to all players meeting the minimum receipients permisson level
 cpm-sayplayer2 sayplayer2 pm2 => send a message to a single player with a specific sender name
 cpm-scn scn serverchatname => Set server chatname globally
 cpm-sdc sdc setdeathcount => Set a player's deathcount.
 cpm-setbundosize setbundosize => Set the size of history on bundo
 cpm-setplayerstatus setplayerstatus sps => Set a value on players attributes (zombiekill, playerkill)
 cpm-showinventory2 showinventory2 si2 => list inventory of a given player
 cpm-shutdownba shutdownba => Timed shutdown with bloodmoon awareness.
 cpm-sleepers sleepers => Remove sleepervolumes from world
 cpm-targetedhorde targetedhorde th => Spawn targeted horde near a (or all) player or coordinate
 cpm-teleportplayerhome teleportplayerhome teleh => teleport a player to his home (on bedroll)
 cpm-tp2bag tp2bag teleport2bag => Teleport player to his/her backpack after death.
 cpm-tprotect tprotect => Set protection to a location in same way as trader.
 cpm-traderlist traderlist => List Trader Areas
 cpm-unlockall unlockall => unlock all secure loots, chests and doors for the current player.
 cpm-w2l w2l => Write to console.
 cpm-wi wi wipeinventory => Reset a player's inventory completely (bag, belt and equipment).
 cpm-wlf wlf => Adds all friends of a player to whitelist(s) of their claim(s)
 cpm-wpc wpc => Manage CPM waypoints

````

<table role="grid" resolved="">
    <thead>
        <tr role="row">
            <th data-column="0">
                <div>Command</div>
            </th>
            <th data-column="1">
                <div>Description</div>
            </th>
        </tr>
    </thead>
    <thead style="display: none;">
        <tr role="row">
            <th data-column="0">
                <div>Command</div>
            </th>
            <th data-column="1">
                <div>Description</div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr role="row">
            <td>
                <p><span>additemloot &lt;entityid&gt;</span></p>
            </td>
            <td><span>Places a secure storage crate below
                    the specified entity ID that contains the item in your current hotbar selection.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><em>announcenighttime [alias:an]</em></p>
            </td>
            <td>
                <p>Nighttime Announcer Commands. This command can be shortened to 'an'</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>an</p>
            </td>
            <td>Lists current Nighttime Announcer settings.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an &lt;true/false&gt;</strong></p>
                <p>an true</p>
            </td>
            <td>Enables/disables the Nighttime Announcer</td>
        </tr>
        <tr role="row">
            <td>
                <p>an hordecycle &lt;days&gt;</p>
                <p>an hordecycle 7</p>
            </td>
            <td>Configure the Nighttime Announcer to announce the correct number of
                days between blood moons. This does <em>not</em> set the cycle; it just configures the announcer to
                match the cycle you set in the config.</td>
        </tr>
        <tr role="row">
            <td>
                <p>an warnhours &lt;hours&gt;</p>
                <p>an warnhours 2</p>
            </td>
            <td>Configure the number of hours before the 22:00 nighttime warning from
                the Nighttime Announcer.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an announcer &lt;name&gt;</strong></p>
                <p>an announcer DoomBot</p>
            </td>
            <td>Sets the in-game name of the Nighttime Announcer bot.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an nighttimetext &lt;string&gt;</strong></p>
                <p>an nighttimetext "It's getting dark. Night time in {hours} hours!"</p>
                <p>an nighttimetext "It's getting dark. Night time in 2 hours!"</p>
            </td>
            <td>
                <p>Sets the in-game text that the Nighttime Announcer uses to inform players that darkness is
                    approaching. You can specify it manually, or you can use the {hours} variable to have the text
                    automatically update whenever you change the warnhours variable.</p>
                <p>Make sure to wrap the text in "s to capture the entire command.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an blooddaytext &lt;string&gt;</strong></p>
                <p>an blooddaytext "It's horde night! Make sure you're ready."</p>
            </td>
            <td>
                <p>Sets the horde night announcement text for the Nighttime Announcer.</p>
                <p><span>Make sure to wrap the text in "s to capture the entire command.</span></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an blooddaytomorrowtext &lt;string&gt;</strong></p>
                <p>an blooddaytomorrowtext "Tomorrow is horde night! Cowards should log out now, just in case."</p>
            </td>
            <td>
                <p>Sets the one-day warning horde night announcement text for the Nighttime Announcer.</p>
                <p>Make sure to wrap the text in "s to capture the entire command.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>an counterdaytext &lt;string&gt;</strong></p>
                <p>an counterdaytext "{daysleft} days until horde night."</p>
            </td>
            <td>
                <p>Sets the text that is sent out for the first 5 days before a horde night at 22:00.</p>
                <p><span>Make sure to wrap the text in "s to capture the entire command.</span></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>arrest &lt;player&gt; [timer]</strong></p>
                <p>arrest Corran</p>
                <p>arrest Corran 90</p>
            </td>
            <td>
                <p>Teleports the specified player into a Reverse Claim Region that has the ID name 'jail'. Anyone placed
                    in jail can't leave (even by teleporting) until an Admin executes the 'release' command on them.</p>
                <p><br></p>
                <p>The 'jail' claim <em>must</em> exist for this command to function.</p>
                <p><br></p>
                <p>The optional Timer parameter was added in CPM 6.8.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bcheck &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p>bcheck</p>
                <p>bcheck 100 50 200</p>
            </td>
            <td>Checks the block type at the specified coordinates. Not specifying a
                coordinate checks the block directly below the player.</td>
        </tr>
        <tr role="row">
            <td>bdup</td>
            <td>Duplicates the contents
                of a region for copy/pasting elsewhere.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bdup &lt;x1&gt; &lt;x2&gt; &lt;y1&gt; &lt;y2&gt; &lt;z1&gt; &lt;z2&gt; &lt;x&gt; &lt;y&gt;
                        &lt;z&gt; &lt;rot&gt;</strong></p>
                <p>bdup 1100 1150 50 75 300 350 0</p>
            </td>
            <td>Copy the contents of the specified rectangle into memory for
                duplication.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bdup &lt;p1/p2&gt;</strong></p>
                <p>bdup p1</p>
                <p>bdup p2</p>
            </td>
            <td>Copy the contents of a region by defining the opposing corners of the
                rectangle. If 'p1' and 'p2' are on the same altitude, the copy-region will be one-block high, otherwise
                it will be as high as the Y-offset between 'p1' and 'p2'.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bdup &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;rot&gt;</strong></p>
                <p>bdup 2200 2300 25 0</p>
            </td>
            <td>Paste the contents copied previously at the specified coordinates.
                Specifying a rotation of 0 will position it in exactly the same orientation as when it was copied.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bdup &lt;rot&gt;</strong></p>
                <p>bdup 0</p>
            </td>
            <td>Paste the contents copied previously at your feet. Specifying a
                rotation of 0 will position it in exactly the same orientation as when it was copied.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bexport &lt;x1&gt; &lt;x2&gt; &lt;y1&gt; &lt;y2&gt; &lt;z1&gt; &lt;z2&gt;
                        &lt;prefab_file_name&gt;</strong></p>
                <p>bexport 1100 1150 50 75 300 350 secretBase</p>
            </td>
            <td>
                <p>Exports the contents of the specified region to a 7 Days prefab file. The file will be stored in your
                    server folder, specifically in the Data/Prefabs subfolder.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bexport &lt;prefab_file_name&gt;</strong></p>
                <p>bexport</p>
                <p>bexport &lt;prefab_file_name&gt;</p>
                <p><br></p>
            </td>
            <td>Export the contents of a region by defining the opposing corners of the
                rectangle by running pexport twice. The second time requires the prefab output file to be named, and the
                file will be stored in your server folder, specifically in the Data/Prefabs subfolder.</td>
        </tr>
        <tr role="row">
            <td>brender</td>
            <td>
                <p>Renders a prefabricated structure from the server data files at the position specified with an
                    optional rotation value to change the direction the structure faces.</p>
                <p><em>Valid rotation values are 0, 1, 2, and 3.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brender &lt;prefab_file_name&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;rot&gt;</strong></p>
                <p>brender secretBase 2200 2300 25 0</p>
            </td>
            <td>Renders a prefabricated structure from the server data files at the
                position specified. If rotation is left at 0, it will render in the same orientation it was captured in.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brender &lt;prefab_file_name&gt; &lt;rot&gt;</strong></p>
                <p>brender secretBase 0</p>
            </td>
            <td>Renders a prefabricated structure from the server data files at your
                position. If rotation is left at 0, it will render in the same orientation it was captured in.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brender &lt;prefab_file_name&gt; &lt;rot&gt; &lt;depth&gt;</strong></p>
                <p>brender secretBase 0 25</p>
            </td>
            <td>Renders a prefabricated structure from the server data files at your
                position, plus or minus a vertical offset. If rotation is left at 0, it will render in the same
                orientation it was captured in.</td>
        </tr>
        <tr role="row">
            <td>brepblock</td>
            <td>Replaces one type of
                block with another within the range of coordinates specified, or within a radius of the player running
                the command.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brepblock &lt;block name&gt;</strong></p>
                <p>brepblock steel</p>
            </td>
            <td>Returns the block id number and short name of any blocks that match the
                name entered.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brepblock &lt;block_to_be_replaced&gt; &lt;block_name&gt; &lt;x1&gt; &lt;x2&gt; &lt;y1&gt;
                        &lt;y2&gt; &lt;z1&gt; &lt;z2&gt;</strong></p>
                <p>brepblock air stone 1100 1150 50 75 300 350</p>
            </td>
            <td>Replaces the first type of block with the second type of block
                everywhere that it exists within the specified boundaries. For example, 'air stone' would replace all
                air blocks with solid stone blocks.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brepblock <strong>&lt;block_to_be_replaced&gt; &lt;block_name&gt;</strong> &lt;x_dst&gt;
                        &lt;y_dst&gt; &lt;z_dst&gt;</strong></p>
                <p>brepblock air stone 50 20 50</p>
            </td>
            <td>Replaces the first type of block with the second type of block,
                starting with the block directly in front of you, heading due north. The X position specifies the
                distance ahead, the Z position specifies the width, and the Y position specifies the height of the
                region. All three values can be negative to work in the opposite direction.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brepblock &lt;p1/p2&gt; <strong><strong>&lt;block_to_be_replaced&gt;
                                &lt;block_name&gt;</strong></strong></strong></p>
                <p>brepblock p1</p>
                <p>brepblock p2 air stone</p>
            </td>
            <td>Replaces the first block type with the second block type within the
                contents of a region by defining the opposing corners of the rectangle. If 'p1' and 'p2' are on the same
                altitude, the copy-region will be one-block high, otherwise it will be as high as the Y-offset between
                'p1' and 'p2'.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>brepblock &lt;searchname&gt;</strong></p>
                <p>brepblock stone</p>
            </td>
            <td>Searches the block type database for any blocks that have at least a
                partial match to the search name, and returns their id number and short name.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>bun &lt;true/false&gt;</strong></p>
                <p>bun true</p>
                <p>bun false</p>
            </td>
            <td>Blocks non-UTF player names (i.e. players with anything other than <a
                    class="external-link" href="https://ascii.cl/" rel="nofollow">ASCII characters</a>) in their name
                from connecting.</td>
        </tr>
        <tr role="row">
            <td>bundo</td>
            <td>
                <p>Undoes the last prefab command, such as pblock, prender, or prepblock.</p>
                <p><em>Use 'setpundosize' to determine how many times pundo can be run in a row.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>checkvehiclecontent [alias: cvc]</p>
                <p><strong>cvc &lt;entityid&gt;</strong></p>
                <p>cvc 123456</p>
            </td>
            <td>Open a window that shows the inventory contents of a vehicle. If the
                vehicle is locked the owner will be shown.</td>
        </tr>
        <tr role="row">
            <td>
                <p>claimcontrolcommand [alias: ccc]</p>
                <p>ccc</p>
            </td>
            <td>Claim Control Commands
                used to work with <a href="https://confluence.catalysm.net/display/CPM/Advanced+Claims"
                    rel="nofollow">Advanced Claims</a>.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ccc add &lt;steamid_claimname&gt; &lt;w_boundary&gt; &lt;e_boundary&gt; &lt;n_boundary&gt;
                        &lt;s_boundary&gt; &lt;accessLevel&gt; [&lt;type&gt;]</strong></p>
                <p>ccc add 76561197961408188_normalClaim 1150 1100 200 150 0</p>
                <p>ccc add 76561197961408188_leveledClaim 1150 1100 200 150 0 leveled:50,-50</p>
                <p>ccc add <span>76561197961408188_hostileFree </span>1150 1100 200 150 0 hostilefree</p>
                <p><span>ccc add z</span><span>edFree2 </span><span>1150 1100 200 150 0 hostilefree</span></p>
                <p>ccc add 76561197961408188_businessHours 1150 1100 200 150 0 openhours:5-22</p>
                <p>ccc add 76561197961408188_businessHours 1150 1100 200 150 0 openhours:5-22</p>
                <p>ccc add 76561197961408188_24hrs 1150 1100 200 150 0 timed:24</p>
                <p><span style="letter-spacing: 0.0px;">ccc add newbieTown <span>1150 1100 200 150 0 "notify:You are
                            entering the newbie town!:You are exiting the newbie town!"</span></span></p>
                <p><span style="letter-spacing: 0.0px;">ccc add townPortal 1150 1100 200 150 0
                        portal:20:100,-1,150</span></p>
                <p>ccc add jail 1150 1100 200 150 0 reversed</p>
            </td>
            <td>
                <p>Add an Advanced Claim using the specified dimensions/parameters/type. You can add one of these claims
                    by specifying the N/S/W/E parameters,</p>
                <p>Examples for each [&lt;type&gt;] are listed.</p>
                <p><span>Specify the claim name along with the SteamID to make that player
                        the owner of the claim. If you do not specify a steam ID owner, then that player will not be
                        allowed to add players to the whitelist.</span></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ccc add &lt;claimname&gt; &lt;w_boundary&gt; &lt;e_boundary&gt; &lt;n_boundary&gt;
                        &lt;s_boundary&gt; &lt;accessLevel&gt; "notify:PVE Entry Warning:PVE Exit Warning:&lt;punishment
                        command&gt;"</strong></p>
                <p>ccc add myPVEtown 1150 1100 200 150 0 "notify:You have entered a PVE zone!:You are exiting a PVE
                    zone!:kick ${entityId} 'You have been violating PVE rules.'"</p>
                <p><span>ccc add westmappve -10000 0 10000 -10000 0 "notify:You have entered the west half of the map,
                        which is PVE only!:You are now on the east half of the map, which allows PVP!:</span><span>kick
                        ${entityId} 'You have been violating PVE rules.'"</span></p>
                <p>ccc add westmappve<span style="color: rgb(255,0,0);">npf</span> -10000 0 10000 -10000 0 "notify:You
                    have entered the west half of the map, which is PVE only!:You are now on the east half of the map,
                    which allows PVP!:kick ${entityId} 'You have been violating PVE rules.'"</p>
                <p><span><br></span></p>
                <p><br></p>
            </td>
            <td>
                <p>Add an Advanced Claim of the type Notify and flags it as a <u>PVE zone</u>; any player who kills
                    another player in this zone will be punished according to the command listed in the text string.
                    Since this is a standard notify claim as well, the specified entry and exit messages will be sent to
                    the player when they cross the PVE/PVP border.</p>
                <p>PVE claims require two things: the claim name must include the letters 'pve' in it, and a punishment
                    command (or commands) must be added after the notification messages.</p>
                <p><em>Multiple punishment commands can be added to the punishment trigger by separating them with a
                        semicolon ( ; ), like this:</em></p>
                "notify:EntryMessage:ExitMessage:command1;command2;command3"
                <p>When PVE punishment claims are created with 'npf' in the claim name, the game will not punish PVE
                    kills if the killer and victim are friends; this is intended to avoid punishing allies who
                    accidentally kill eachother during events like hordenight, or a sudden zombie mob.</p>
                <p><br></p>
                <p><em>This command is only available in CPM 5.30 and above, and the NPF parameter is only available in
                        8.3 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ccc radius &lt;radiussize&gt; &lt;steamid/entityid/playername&gt; &lt;steamid_claimname&gt;
                        &lt;accessLevel&gt; [&lt;type&gt;]</strong></p>
                <p>ccc radius 75 Corran 76561197961408188_normalClaim 0</p>
                <p>ccc radius 75 <span>Corran </span>76561197961408188_leveledClaim 0 leveled:50,-50</p>
                <p>ccc radius 75 <span>Corran </span>0 hostilefree</p>
                <p>ccc radius 75 <span>Corran </span>76561197961408188_businessHours 0 openhours:5-22</p>
                <p>ccc radius 75 <span>Corran </span>76561197961408188_businessHours 0 openhours:5-22</p>
                <p>ccc radius 75 <span>Corran </span>76561197961408188_24hrs 0 timed:24</p>
                <p>ccc radius 75 <span>Corran </span><span>0 "notify:You are entering the newbie town!:You are exiting
                        the newbie town!"</span></p>
                <p>ccc radius 75 <span>Corran </span>townPortal 0 portal:20:100,-1,150</p>
                <p>ccc radius 75 <span>Corran </span>jail 0 reversed</p>
            </td>
            <td>
                <p>Add an Advanced Claim using a specified Radius value to create a square claim, based on the current
                    position of the player running the command.</p>
                <p>Examples for each [&lt;type&gt;] are listed.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ccc radius &lt;radiussize&gt;&lt;steamid_claimname&gt; &lt;accessLevel&gt;
                        <strong>"notify:PVE Entry Warning:PVE Exit Warning:&lt;punishment command&gt;"</strong></strong>
                </p>
                <p>ccc radius 75 Corran myPVEtown 0 "notify:You have entered a PVE zone!:You are exiting a PVE
                    zone!:kick ${entityId} 'You have been violating PVE rules.'"</p>
                <p>ccc radius 75 Corran safespotpve 0 "notify:You have entered a safe spot!:You have left the safe
                    spot!:kick ${entityId} 'Don't kill people in the safe spot!'"</p>
            </td>
            <td>
                <p>Add an Advanced Claim of the type Notify using the specified radius and flags it as a <u>PVE
                        zone</u>; any player who kills another player in this zone will be punished according to the
                    command listed in the text string. Since this is a standard notify claim as well, the specified
                    entry and exit messages will be sent to the player when they cross the PVE/PVP border.</p>
                <p>PVE claims require two things: the claim name must include the letters 'pve' in it, and a punishment
                    command (or commands) must be added after the notification messages.</p>
                <p><em>Multiple punishment commands can be added to the punishment trigger by separating them with a
                        semicolon ( ; ), like this:</em></p>
                "notify:EntryMessage:ExitMessage:command1;command2;command3"
                <p><em><br></em></p>
                <p><em>This command is only available in CPM 5.30 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>ccc remove &lt;claimid/steamid&gt;</p>
            </td>
            <td>Removes one or all advanced claims for a given player. Specifying the
                Claim ID by name will remove that specific claim, while specifying the Steam ID will remove all claims
                for that player.</td>
        </tr>
        <tr role="row">
            <td>
                <p>ccc list</p>
            </td>
            <td>Lists all of the advanced claims on the server.</td>
        </tr>
        <tr role="row">
            <td>
                <p>ccc wl add &lt;claimid/owner-steamid&gt; &lt;new-steamid&gt;</p>
            </td>
            <td>Adds the new player's Steam ID to the the whitelist for claim blocks of
                a specific claim owner. If the claim ID is specified, they are whitelisted only for that claim, but if
                an Owner Steam ID is specified, the new player is whitelisted for all claims of the Owner.</td>
        </tr>
        <tr role="row">
            <td>
                <p>ccc wl remove &lt;claimid/owner-steamid&gt; &lt;removed-steamid&gt;</p>
            </td>
            <td>Removes a specific player from the whitelist for a claim block or for
                all claim blocks of an owner. <span>If the claim ID is specified, they are removed from the whiteliste
                    only for that claim, but if an Owner Steam ID is specified, the new player is removed from the
                    whiteliste for all claims of the Owner.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p>chatcommandpermissions [alias: ccp]</p>
            </td>
            <td>Configure the required
                permission level for various chat commands.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ccp &lt;command&gt; &lt;permissionlevel&gt;</strong></p>
                <p>ccp bag 0</p>
            </td>
            <td>Sets the required permission level for the specified command. Setting
                it to 0 means that only Admins can execute the command. You can use this to disable commands from player
                usage.</td>
        </tr>
        <tr role="row">
            <td>
                <p>ccp list</p>
            </td>
            <td>Show all CPM chat commands and the required permissions needed for that
                command.</td>
        </tr>
        <tr role="row">
            <td>
                <p>chatgroupcolor [alias: cgc]</p>
            </td>
            <td>Configure specific name
                colors for chat groups.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cgc addgroup &lt;groupname&gt; &lt;hexcolor&gt;</strong></p>
                <p>cgc addgroup Donators 4286F4</p>
            </td>
            <td>
                <p>Create a new chat group with the specified color. Use a <a class="external-link"
                        href="https://htmlcolorcodes.com/color-picker/" rel="nofollow"
                        style="letter-spacing: 0.0px;">hex color picker</a> to help select your colors.</p>
                <p><em>As of CPM Version 8.8, this now works on offline players as well.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cgc adduser &lt;steamid/playername/entityid&gt; &lt;groupname&gt;</strong></p>
                <p>cgc adduser 76561197961408188 Donators</p>
                <p>cgc adduser Corran Donators</p>
                <p>cgc adduser 171 Donators</p>
            </td>
            <td>Add the specified player to the group that is entered.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cgc cleargroup &lt;steamid/playername/entityid&gt;</strong></p>
                <p>cgc cleargroup 76561197961408188</p>
                <p>cgc cleargroup Corran</p>
                <p>cgc cleargroup 171</p>
            </td>
            <td>Removes the specified player from the group they are assigned to.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cgc deletegroup &lt;groupname&gt;</strong></p>
                <p>cgc deletegroup Donators</p>
            </td>
            <td>Removes the specified group from the database. All users assigned to
                this group will lose this assignment.</td>
        </tr>
        <tr role="row">
            <td>
                <p>cgc listgroups</p>
            </td>
            <td>List all existing Chat Groups</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cgc listmembers &lt;groupname&gt;</strong></p>
                <p>cgc listmembers Donators</p>
            </td>
            <td>Lists all of the users of the specified chat group.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>pcc&lt;steam id/player name/entity id&gt; &lt;hexcolor&gt; &lt;nameOnly&gt;</strong></p>
                <p>pcc <span>76561197961408188 <span>4286F4 1</span></span></p>
            </td>
            <td>Sets a specific player's color in the chat window. Setting the nameOnly
                value determines whether only their name changes color, or their name and all of their text. Color
                values are chosen via a <a class="external-link" href="https://htmlcolorcodes.com/color-picker/"
                    rel="nofollow">hex color value</a>.</td>
        </tr>
        <tr role="row">
            <td>checkloot</td>
            <td>Checks the secure storage cache beneath a player or entity. The secure
                caches are placed using the <em>additemloot</em> command.</td>
        </tr>
        <tr role="row">
            <td>
                <p><br></p>
            </td>
            <td><br></td>
        </tr>
        <tr role="row">
            <td>
                <p>cpm-help</p>
            </td>
            <td>Outputs a list of all CPM-specific commands and their aliases.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cpmprefix &lt;prefix_character&gt;</strong></p>
                <p>cpmprefix /</p>
                <p>cpmprefix !</p>
            </td>
            <td>
                <p>Specifies the prefix character that all CPM chat commands will run on. This command is / by default.
                </p>
                <p><em>This command is only available in CPM 5.28 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>cs</td>
            <td>Spawns a scout near the
                specified player or coordinates.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cs &lt;steam id/player name/entity id&gt;</strong></p>
                <p>cs 76561197961408188</p>
                <p>cs Corran</p>
                <p>cs 171</p>
            </td>
            <td>Spawns a scout near the specified player.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>cs &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p>cs -1520 25 558</p>
            </td>
            <td>Spawns a scout near the specified coordinates.</td>
        </tr>
        <tr role="row">
            <td>ds</td>
            <td>Donor Slot management commands. Used to manage the amount and
                behavior of donor slots on the server.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ds add &lt;steamid&gt; &lt;friendly name&gt; &lt;days&gt;</strong></p>
                <p>ds add <span>76561197961408188 Corran 90</span></p>
            </td>
            <td>
                <p>Adds the specified SteamID to the donor list, for the number of days given. If the player is already
                    on the donor slot registry, it will add the given number of days to the existing count.</p>
                <p><em>Note: The 'friendly name' does NOT have to match their in-game name. For example, if you have a
                        player whose in-game name is Bob-Likes-To-Feel-Special, you could simply enter 'Bob' for the
                        friendly name. This name is just to help you identify who the SteamID belongs to.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ds remove &lt;steamid&gt;</strong></p>
                <p>ds remove <span>76561197961408188 </span></p>
            </td>
            <td>Removes the specified SteamID from the donor list. This action will not
                kick the player if they are currently playing in a donor-only slot, but it will prevent them from
                signing back in after they leave if the free-to-use slots are all taken.</td>
        </tr>
        <tr role="row">
            <td>ds list</td>
            <td>Displays a list of all donors and their expiration times.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ds donorbuffer &lt;qty&gt;</strong></p>
                <p>ds donorbuffer 10</p>
            </td>
            <td>Specifies how many of the total game slots are reserved for donors.
                This number can be changed on the fly, while the server is online.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ds enabled &lt;true/false&gt;</strong></p>
                <p>ds enabled true</p>
            </td>
            <td>Enables or disables the donor slot functionality. By default, this
                command is disabled.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>entity<strong>remove</strong> &lt;entityid&gt;</strong></p>
                <p>entityremove 20510</p>
            </td>
            <td>
                <p>Removes the specified entity id from the game.</p>
                <p>This command was called 'removeentity' previously.</p>
            </td>
        </tr>
        <tr role="row">
            <td>etele</td>
            <td>Teleports an entity to
                the specified coordinates or player.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>etele entityID &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;optional: rotation&gt;</strong></p>
                <p>telee 20251 1100 50 380 0</p>
            </td>
            <td>Teleport an entity to the specified coordinates.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>etele entityID &lt;player_id&gt; &lt;optional: rotation&gt;</strong></p>
                <p>telee 20251 171 0</p>
            </td>
            <td>Teleport an entity to the specified player using their entity ID.</td>
        </tr>
         <tr role="row">
            <td>eoc (executeonclient)</td>
            <td>Execute local only commands remotely on client</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>eoc &lt;entityId/steamId/name&gt; &quot;command param1 param2&quot; </strong></p>
                <p>eoc 171 &quot;dm&quot;</p>
            </td>
            <td>Executes dm on local client of player with entityId 171.<p>Example of local only  commands:</p> <p>sg (sg OptionsFieldOfViewNew x!), automove, cm, dm, givequest, removequest, giveself, giveselfxp, buff, debuff, exhausted, gfx, dms, bents, memcl, pois, settempunit, screeneffect, showhits, starve, thirsty, xui, spawnsupplycrate etc etc</p></td>
        </tr>
        <tr role="row">
            <td>fblock</td>
            <td>Fills a specified region with the specified type of block. Commonly
                used to replace a region of dirt or water with air, or to create concrete walls or cubes.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>fblock1 &lt;blocktype&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p>fblock1 air 1100 50 1200</p>
            </td>
            <td>Fills a single block position with the specified block. This command
                does not need to reload the chunk, so it will not potentially cause collisions/noclipping for players.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>fblock &lt;block_name&gt; &lt;x1&gt; &lt;x2&gt; &lt;y1&gt; &lt;y2&gt; &lt;z1&gt;
                        &lt;z2&gt;</strong></p>
                <p>fblock air 1100 1150 50 75 300 350</p>
            </td>
            <td>Fills a region with a specified block type, by clearly defining all six
                points of the rectangle manually.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>fblock &lt;block_name&gt; &lt;x_dst&gt; &lt;y_dst&gt; &lt;z_dst&gt;</strong></p>
                <p>fblock air 50 20 50</p>
            </td>
            <td>Fills a region with a specified block type, starting with the block
                directly in front of you, heading due north. The X position specifies the distance ahead, the Z position
                specifies the width, and the Y position specifies the height of the region. All three values can be
                negative to work in the opposite direction.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>fblock &lt;p1/p2&gt; &lt;p2:blocktype&gt;</strong></p>
                <p>fblock p1</p>
                <p>fblock p2 air</p>
            </td>
            <td>
                <p>Fills a region with a specified block type by defining the opposing corners of the rectangle. If 'p1'
                    and 'p2' are on the same altitude, the fill-region will be one-block high, otherwise it will be as
                    high as the Y-offset between 'p1' and 'p2'.</p>
                <p>Only the 'p2' command requires the block type.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>getbicycle &lt;steam id/player name/entity id&gt;</strong></p>
                <p>getbicycle 76561197961408188</p>
                <p>getbicycle Corran</p>
                <p>getbicycle 171</p>
            </td>
            <td>
                <p>Teleports any detected bicycle for the specified player to your current position.</p>
                <p>The ownership of a bicycle is determined by which player has used the 'lock' action on a deployed
                    bicycle. That player is the owner of the specified bicycle.</p>
                <p><em>This command is only available in CPM 7.1 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>getbike <strong>&lt;steam id/player name/entity id&gt;</strong></strong></p>
                <p>getbike <span>76561197961408188</span></p>
                <p>getbike Corran</p>
                <p>getbike 171</p>
            </td>
            <td>
                <p>Teleports any detected minibikes for the specified player to your current position.</p>
                <p>In A16, the bike must have a lock on it to properly detect ownership, while in A17, anyone who uses
                    the 'lock' action on a deployed bike will be marked as the owner.</p>
                <p><em>This command is only available in CPM 5.32 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>getgyrocopter &lt;steam id/player name/entity id&gt;</strong></p>
                <p>getgyrocopter 76561197961408188</p>
                <p>getgyrocopter Corran</p>
                <p>getgyrocopter 171</p>
            </td>
            <td>
                <p>Teleports any detected gyrocopters for the specified player to your current position.</p>
                <p>The ownership of a gyrocopter is determined by which player has used the 'lock' action on a deployed
                    gyrocopter. That player is the owner of the specified gyrocopter.</p>
                <p><em>This command is only available in CPM 7.1 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>getjeep &lt;steam id/player name/entity id&gt;</strong></p>
                <p>getjeep 76561197961408188</p>
                <p>getjeep Corran</p>
                <p>getjeep 171</p>
            </td>
            <td>
                <p>Teleports any detected jeeps for the specified player to your current position.</p>
                <p>The ownership of a jeep is determined by which player has used the 'lock' action on a deployed jeep.
                    That player is the owner of the specified jeep.</p>
                <p><em>This command is only available in CPM 7.1 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>getmotorcycle &lt;steam id/player name/entity id&gt;</strong></p>
                <p>getmotorcycle 76561197961408188</p>
                <p>getmotorcycle Corran</p>
                <p>getmotorcycle 171</p>
            </td>
            <td>
                <p>Teleports any detected motorcycles for the specified player to your current position.</p>
                <p>The ownership of a motorcycle is determined by which player has used the 'lock' action on a deployed
                    motorcycle. That player is the owner of the specified motorcycle.</p>
                <p><em>This command is only available in CPM 7.1 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>giveat &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;item name&gt; &lt;amount&gt;
                        &lt;optional:quality&gt;</strong></p>
                <p>giveat <span>1150 1100 200 gunSniperRifle 1</span></p>
                <p><span><span>giveat </span><span>1150 1100 200 gunSniperRifle 1 600</span></span></p>
            </td>
            <td>Places an item at the specified coordinates. For items with the quality
                attribute, the quality option can be used.</td>
        </tr>
        <tr role="row">
            <td>giveplus</td>
            <td>
                <p>Gives an item to the specified player.</p>
                <p>If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if
                    the bag and bar are full. Older versions drop the item at their feet.</p>
                <p>You can also specify the <span>quality and quantity of the given item, plus the </span>percent
                    durability loss of the item when it spawns.</p>
                <p>An optional 'all' parameter applies the give command to all online players.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>giveplus &lt;name / entity id&gt; &lt;item name&gt; &lt;quantity&gt;</strong></p>
                <p>giveplus <span>76561197961408188 <span>gunSniperRifle 1</span></span></p>
                <p>giveplus Corran gunSniperRifle 1</p>
                <p>giveplus 171 gunSniperRifle 1</p>
            </td>
            <td>
                <p>Gives an item (with random quality if it has quality) to the specified player.</p>
                <p>If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if
                    the bag and bar are full. Older versions drop the item at their feet.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>giveplus &lt;name / entity id&gt; &lt;item name&gt; &lt;quantity&gt;
                        &lt;optional:quality&gt;</strong></p>
                <p>giveplus 76561197961408188 gunSniperRifle 1 6</p>
                <p>giveplus Corran gunSniperRifle 1 6</p>
                <p>giveplus 171 gunSniperRifle 1 6</p>
            </td>
            <td>
                <p>Gives an item to the specified player.</p>
                <p>If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if
                    the bag and bar are full. Older versions drop the item at their feet.</p>
                <p><span style="letter-spacing: 0.0px;">If quality is not specified, a </span><em
                        style="letter-spacing: 0.0px;">random</em><span style="letter-spacing: 0.0px;"> quality is
                        used.</span></p>
                <p><em>Quality is only available in CPM 5.32 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>giveplus &lt;name / entity id&gt; &lt;item name&gt; &lt;quantity&gt; &lt;optional:quality&gt;
                        &lt;optional:usedTimes&gt;</strong></p>
                <p>giveplus 76561197961408188 gunSniperRifle 1 6 50</p>
                <p>giveplus Corran gunSniperRifle 1 6 50</p>
                <p>giveplus 171 gunSniperRifle 1 6 50</p>
            </td>
            <td>
                <p>Gives an item to the specified player; if CPM version 5.32 or higher is installed, it places it
                    directly in their bag, and if older versions are used, drops the item at their feet. You can also
                    specify the percent durability loss of the item when it spawns.</p>
                <p>usedTImes: This value is a numeric percentage, so '50' means durability is 50% gone at spawn. If
                    quality is specified, usedTimes MUST also be specified</p>
                <p><em>Durability modification is only available in CPM 5.32 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>giveplus <span style="color: rgb(255,0,0);">all</span> &lt;item name&gt; &lt;quantity&gt;
                        &lt;optional:quality&gt; &lt;optional:usedTimes&gt;</strong></p>
                <p>giveplus all gunSniperRifle 1</p>
                <p>giveplus all gunSniperRifle 1 6</p>
                <p>giveplus all gunSniperRifle 1 6 50</p>
            </td>
            <td>
                <p>Gives an item to <u>all online players</u>; if CPM version 5.32 or higher is installed, it places it
                    directly in their bag, and if older versions are used, drops the item at their feet. You can also
                    specify the percent durability loss of the item when it spawns.</p>
                <p><span>usedTImes: This value is a numeric percentage</span>, so '50' means durability is 50% gone at
                    spawn. <span>If quality is specified, usedTimes MUST also be specified</span></p>
                <p><em>Durability modification is only available in CPM 5.32 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>givexp &lt;name/entityid&gt; &lt;xp amount&gt;</strong></p>
                <p>givexp Corran 100</p>
                <p>givexp 171 100</p>
            </td>
            <td>Gives the specified player XP as if they had been crafting, looting, or
                killing zombies.</td>
        </tr>
        <tr role="row">
            <td>got (give or trade)</td>
            <td>Management commands for the give/trade system in CPM.</td>
        </tr>
        <tr role="row">
            <td>
                <p>got list</p>
            </td>
            <td>Outputs a list of all stored trading chests registered in the system.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>got lvi &lt;playerName/entityId&gt;</strong></p>
                <p>got lvi Corran</p>
                <p>got lvi 171</p>
            </td>
            <td>Lists all 'virtual' items in the trade chest for the specified player.
                These are the items that the player will receive once a trade completes.</td>
        </tr>
        <tr role="row">
            <td><strong>got lti &lt;playerName/entityId&gt;</strong></td>
            <td>List all items currently stored in the trading chest for this player.
                These are the items that the player will trade to the other player.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>grablcb &lt;steam id / player name / entity id&gt; &lt;radius&gt;</strong></p>
                <p>grablcb <span>76561197961408188 5</span></p>
                <p><span>grablcb Corran 5</span></p>
                <p><span>grablcb 171 5</span></p>
            </td>
            <td>
                <p>Locates all Land Claim Blocks within the specified radius of the given player, and removes them.
                    After removal, the specified player is given new LCBs to replace the ones that were deleted.</p>
                <p>This command allows players to pick up nearby LCBs without having to destroy them, in order to
                    relocate them.</p>
                <p><em>This command is only available in CPM 5.33 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>hidechatcommand [alias hccp]</td>
            <td><span>Configure which prefixes cause commands to be hidden from the
                    general chat. Multiple prefixes can all be hidden if they are separated by a ',' symbol. This is
                    useful for when you have a command like /rules or /tp, and want to hide the usage of those
                    commands.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>hccp &lt;commands&gt; [alias: hccp]</strong></p>
                <p>hccp !</p>
                <p>hccp /</p>
                <p>hccp !,/</p>
            </td>
            <td>
                <p>Sets the prefix values that are hidden from public chat. Multiple prefixes should be separated by
                    commas.</p>
                <p><em>Prior to A17, this command was called tcch.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>hccp list</td>
            <td>
                <p>Outputs to console the current configuration of the hccp command. This is typically used by CSMM to
                    access and manage this setting remotely.</p>
                <p><br></p>
                <p><em>This command is only available in CPM 6.6 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>hostileschatcommand &lt;true/false&gt; [alias: hcc]</strong></p>
                <p>hcc</p>
                <p>hcc enabled true</p>
            </td>
            <td>Toggles whether the /hostiles command can be used in chat to determine
                where the nearest zombies are. If the 'enabled' parameter is not specific, hcc outputs the current
                status of the command.</td>
        </tr>
        <tr role="row">
            <td>killallzombies</td>
            <td>Kills all zombies active on the map.</td>
        </tr>
        <tr role="row">
            <td>listcustomentities
                [alias: lce]</td>
            <td>
                <p>Lists all entities that meet certain filter criteria, such as being within a certain radius, within a
                    specific rectangular location, or by type.</p>
                <p><em>Valid types: Zombie, SupplyCrate, Backpack, Item, Animal, Minibike, NPC, Player, Jeep, Bicycle,
                        Motorcycle, Gyrocopter, and use * to list all types.</em></p>
                <p><em>Prior to CPM 6.0, this command was called 'listentitiescustom', alias 'lec'.</em></p>
                <p><br></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>lce &lt;x&gt; &lt;y&gt; &lt;radius&gt; &lt;type&gt;</strong></p>
                <p>lce 1150 50 500 Player</p>
            </td>
            <td>Lists all entities of the specified type, within the specified radius
                of the given X/Y coordinates.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>lce &lt;xMin&gt; &lt;xMax&gt; &lt;zMin&gt; &lt;zMax&gt; &lt;type&gt;</strong></p>
                <p>lce <span>1150 1100 200 150 Minibike</span></p>
            </td>
            <td>Lists all entities of the specified type that are present within the
                square made by the four coordination positions given.</td>
        </tr>
        <tr role="row">
            <td>listlandprotection2
                [alias: llp2]</td>
            <td>List land protection
                claim blocks on the server. Depending on the parameters you specify, it will list all claims, only a
                summary of the claim counts, or claims in a radius around the player.</td>
        </tr>
        <tr role="row">
            <td>
                <p>llp2 summary</p>
            </td>
            <td>Outputs a list of players who currently have land claim blocks on the
                server, how many, and what protection value they provide.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>llp2 &lt;steam id / player name / entity id&gt; [optional: parseable]</strong></p>
                <p>llp2 <span>76561197961408188</span></p>
                <p><span>llp2 <span>76561197961408188 parseable</span></span></p>
                <p><span><span>llp2 Corran</span></span></p>
                <p><span><span>llp2 171</span></span></p>
            </td>
            <td>Lists all land claim blocks for the specified player, using either
                their name, entity ID, or Steam ID. Adding the 'parseable' tag restructures the output to a
                script-friendly format.</td>
        </tr>
        <tr role="row">
            <td>llp2 nearby [optional: length]</td>
            <td>Lists all land claim blocks within a radius of the player. The default
                radius is 64.</td>
        </tr>
        <tr role="row">
            <td>listplayerbed [alias:
                lpb]</td>
            <td>Lists all of the player
                beds for the players on the server. You can optionally specify a specific player to narrow the listing.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>lpb &lt;optional:playername&gt;</strong></p>
                <p>lpb</p>
                <p>lpb Corran</p>
            </td>
            <td>Lists all of the player beds on the server. <span>You can optionally
                    specify a specific player to narrow the listing.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>listfriendsplayer &lt;optional:playername&gt; [alias: lfp]</strong></p>
                <p>lfp</p>
                <p>lfp Corran</p>
            </td>
            <td>
                <p>Creates a list of all players, and everyone who is friends with that player. If a specific player
                    name is specified, only the friends of that player will be listed.</p>
                <p><br></p>
                <p><em>This command was called 'lpf' prior to A17.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>loctrack</td>
            <td>Performs location
                tracking of players in a given area using the specified inputs.</td>
        </tr>
        <tr role="row">
            <td>loctrack</td>
            <td>Outputs the current values and configuration of all loctrack settings.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack command &lt;commandname&gt;</strong></p>
                <p>loctrack command trackplayers</p>
            </td>
            <td>Specifies the chat command players and admins use to track players in
                the area. By default, this command is 'loctrack'.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack commandenabled &lt;true/false&gt;</strong></p>
                <p>loctrack commandenabled true</p>
            </td>
            <td>Enables or Disables the 'loctrack' chat command functionality. This
                does not alter the functionality of the console command.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack enabled &lt;true/false&gt;</strong></p>
                <p>loctrack enabled false</p>
            </td>
            <td>Enables or Disables location tracking via CPM entirely. Setting this to
                False disables the console command and chat command functionality completely.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack interval &lt;seconds&gt;</strong></p>
                <p>loctrack interval 30</p>
            </td>
            <td>
                <p>Sets the interval at which location tracking records the current player coordinates.</p>
                <p><em>The default interval is 15 seconds.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack maxagedata &lt;hours&gt;</strong></p>
                <p>loctrack maxagedata 72</p>
            </td>
            <td>
                <p>Sets the maximum age of location tracking data retention. All player position data older than this
                    value is discarded.</p>
                <p><em>The default value for the max data age is 72 hours.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack neardistance &lt;meters&gt;</strong></p>
                <p>loctrack neardistance 350</p>
            </td>
            <td>
                <p>Specify the radius that the <em>loctrack near</em> command uses when looking for nearby online
                    players.</p>
                <p><em>The default radius is 200 meters.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack search &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;radius&gt; &lt;numberOfHours&gt;</strong>
                </p>
                <p>loctrack search <span>2200 95 2300 500 24</span></p>
            </td>
            <td>
                <p>Searches for all players within a given radius of specific coordinates within the chosen amount of
                    hours.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack search &lt;steam id/player name/entity id&gt; &lt;radius&gt;
                        &lt;numberOfHours&gt;</strong></p>
                <p>loctrack search 76561197961408188 500 4<br>loctrack search Corran 500 4<br>loctrack search 171 500 4
                </p>
            </td>
            <td>
                <p>Searches for all players who were within a given radius of the specified player within the chosen
                    amount of hours.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>loctrack showtrack &lt;steam id&gt; &lt;maxrecords&gt; &lt;timespan&gt;
                        &lt;timeBetweenRecords&gt;</strong></p>
                <p>loctrack showtrack 76561197961408188 20 08270850-08270900 30</p>
            </td>
            <td>Outputs a coordinate list, up to the maximum record amount given, of
                all of the location tracks for a player during the specified timespan. The records will be taken at the
                interval specified by the time between records parameter.</td>
        </tr>
        <tr role="row">
            <td>markresetregion [alias:
                mrr]</td>
            <td>Marked <a
                    href="https://confluence.catalysm.net/display/CPM/Functional+Overview" rel="nofollow">Reset
                    Regions</a> are specific region files that have been marked for deletion so that they regenerate,
                the next time a specific resetcommand is given. This command is used to mark/unmark regions, see the
                list of regions, and set the message displayed to players when they enter a reset region.</td>
        </tr>
        <tr role="row">
            <td>multipleentityspawn [alias:mes]</td>
            <td>
                <p>Spawn multiple entities around the specified coordinates or players. Each entity should be separated
                    by a space.</p>
                <p><em>Type "mes" to see all entity types.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mes &lt;x&gt; &lt;optional:y&gt; &lt;z&gt; &lt;spawn radius&gt; @ [&lt;list of
                        entities&gt;]</strong></p>
                <p>mes -1520 25 558 @ 1 1 18 18 21 21 21</p>
                <p>mes -1520 558 @ 1 1 18 18 21 21 21</p>
            </td>
            <td>Spawn multiple entities around the specified coordinates. Each entity
                should be separated by a space. The Y coordinate can be excluded to force the entity to spawn at surface
                height.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mes &lt;steam id/player name/entity id&gt; &lt;spawn radius&gt; @ [&lt;list of
                        entities&gt;]</strong></p>
                <p>mes 76561197961408188 50 @ 1 1 18 18 21 21 21</p>
                <p>mes Corran 50 @ 1 1 18 18 21 21 21</p>
                <p>mes 171 50 @ 1 1 18 18 21 21 21</p>
            </td>
            <td>Spawn multiple entities around the specified player with a given
                radius. Each entity should be separated by a space.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mrr add &lt;optional:regionFileName&gt;</strong></p>
                <p>mrr add</p>
                <p>mrr add r.-4.2.7rg</p>
            </td>
            <td>
                <p>Adds the specified region as a reset region so that it will be wiped after a specific reset command
                    is given. If you are in-game, the regionFileName is optional, as CPM will calculate your current
                    region file automatically.</p>
                <p>If you wish to add a different region file to the list, you can enter it manually.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mrr add &lt;w_boundary&gt; &lt;e_boundary&gt; &lt;n_boundary&gt; &lt;s_boundary&gt;</strong>
                </p>
                <p>mrr add <span>1150 1100 200 150</span></p>
            </td>
            <td>
                <p>Marks all reset regions that are touched by the specified rectangle for reset. If the given rectangle
                    is even 1 unit inside a region, that region is marked for reset.</p>
                <p><em>This command is only available in CPM 5.29 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>mrr list</td>
            <td>Lists all regions currently marked for reset, if any.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mrr notificationtext "&lt;entertext:exittext&gt;"</strong></p>
                <p>mrr notificationtext "Entering a reset region.:Exiting a reset region."</p>
            </td>
            <td>Specifies the text displayed to the player when they enter and exit a
                reset region. Make sure to include the ':' symbol between the texts, with quotes only at the beginning
                and end.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mrr remove &lt;optional:regionFileName&gt;</strong></p>
                <p>mrr remove</p>
                <p>mrr remove r.-4.2.7rg</p>
            </td>
            <td>
                <p>Removes the specified region as a reset region from the list that will be wiped after a specific
                    reset command is given. If you are in-game, the regionFileName is optional, as CPM will calculate
                    your current region file automatically.</p>
                <p>If you wish to remove a different region from the list, you can enter it manually.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mrr remove &lt;w_boundary&gt; &lt;e_boundary&gt; &lt;n_boundary&gt;
                        &lt;s_boundary&gt;</strong></p>
                <p>mrr remove 1150 1100 200 150</p>
            </td>
            <td>
                <p>Removes any regions that are touched by the specified rectangle from the reset region list. If the
                    given rectangle is even 1 unit inside a region, that region is removed from the list.</p>
                <p><em>This command is only available in CPM 5.29 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>mv / mvw</td>
            <td>
                <p>Moves the specified player to another player, to specified coordinates, or to a waypoint.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mv &lt;FROM:steamID/playername/entityid&gt; <strong>&lt;TO:steamID/playername/entityid&gt;
                            [opt:fo]</strong></strong></p>
                <p>mv Corran Prisma501</p>
                <p>mv Corran Prisma501 fo<strong><strong><br></strong></strong></p>
            </td>
            <td>
                <p>Moves the player specified first, to the player specified second. Partial names can be used if
                    specifying the player name.</p>
                <ul>
                    <li>If the From player is offline, the To player's coordinates will be recorded, and the From player
                        teleported to that spot when they come back online.</li>
                    <li>If the To player is offline, the From player will be teleported to the To player's last known
                        coordinates.</li>
                </ul>
                <p>Adding the 'fo' parameter will move the specified player to the target player, but only if they are
                    in-game friends. This is useful for creating a custom command that acts as a friend-to-friend
                    teleport feature.</p>
                <p><em style="letter-spacing: 0.0px;">This command is only available in CPM 5.29 and above, and the 'fo'
                        parameter is only available in 8.4 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mv &lt;steamID/playername/entityid&gt; <strong>&lt;East/West Coordinate&gt; &lt;North/South
                            Coordinate&gt;</strong></strong></p>
                <p>mv Corran 500E 1950N</p>
                <p>mv Corran 1160W 5440S</p>
                <p><strong><br></strong></p>
            </td>
            <td>
                <p>Moves the player specified first, to the specified coordinates. Partial names can be used if
                    specifying the player name. If the player is offline, they will be teleported to these coordinates
                    as soon as they log in.</p>
                <p><em>This command is only available in CPM 5.29 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>mvw &lt;FROM:steamID/playername/entityid&gt; <strong>&lt;waypointname&gt;</strong></strong>
                </p>
                <p>mvw 171 murdertown</p>
                <p>mvw <span>76561197961408188 murdertown</span></p>
                <p>mvw Corran murdertown</p>
                <p><strong><br></strong></p>
            </td>
            <td>
                <p>Moves the specified player to the specified waypoint. This waypoint must already exist. <span>If the
                        player is offline, they will be teleported to the waypoint coordinates as soon as they log
                        in.</span></p>
                <p><em>This command is only available in CPM 5.29 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>mvw listwaypoints</p>
                <p><br></p>
            </td>
            <td>
                <p>Outputs the list of all existing waypoints int he database.</p>
                <p><em>This command is only available in CPM 5.29 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>oldlcb</td>
            <td>For A17 servers,
                enables A16 and previous LCB-style behavior, i.e. multiple claims, and allows the admins to configure a
                hard limit for total LCBs.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>oldlcb &lt;true/false&gt;</strong></p>
                <p>oldlcb true</p>
                <p>oldlcb false</p>
            </td>
            <td>Enables or disables the A16 style LCB management system.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>oldlcb &lt;max claimcount&gt;</strong></p>
                <p>oldlcb 4</p>
            </td>
            <td>Sets the limit of placed LCBs when enforcing the A16 style ruleset.
            </td>
        </tr>
        <tr role="row">
            <td>oldlcb</td>
            <td>Outputs whether the oldlcb command is enabled or not, and the
                configured maximum claim block count.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ownbike &lt;entityID&gt; [alias: ob]</strong></p>
                <p>ob 123456</p>
            </td>
            <td>Takes ownership of the specified minibike entity.</td>
        </tr>
        <tr role="row">
            <td>overridechatname
                [alias: ocn]</td>
            <td>Overrides the player's
                chat name with a new value.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ocn &lt;steamID/playername/entityid&gt; &lt;new name&gt;</strong></p>
                <p>ocn <span>76561197961408188 NewGuy</span></p>
                <p><span>ocn Corran NewGuy</span></p>
                <p><span>ocn 171 NewGuy</span></p>
            </td>
            <td>Changes the specified player name to the new name value.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>ocn &lt;steamID/playername/entityid&gt; clear</strong></p>
                <p>ocn 76561197961408188 clear</p>
                <p>ocn Corran clear</p>
                <p>ocn 171 clear</p>
            </td>
            <td>Clears the chat name override from the specified player.</td>
        </tr>
        <tr role="row">
            <td>own</td>
            <td>Sets the owner of an
                entity to the specified player.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>own &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;newowner_entityid&gt;</strong></p>
                <p>own <span>1150 50 500 171</span></p>
            </td>
            <td>Sets the entity at the specified coordinates to be owned by the new
                player entity ID. This command allows you to remotely set an owner for an existing entity.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>own &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p><span>own </span><span>1150 50 500</span></p>
            </td>
            <td><span>Sets the entity at the specified coordinates to be owned by
                    you.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>own &lt;entity_id&gt; &lt;entity_id_new_owner&gt;</strong></p>
                <p>own 171 20501</p>
            </td>
            <td>Transfers the ownership of a secure loot container below the first
                entity owner, to the second entity owner.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>own &lt;entity_id_new_owner&gt;</strong></p>
                <p><span>own 20501</span></p>
            </td>
            <td>Transfers ownership of a secure loot container below yourself to the
                new owner.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>own</strong></p>
            </td>
            <td>Transfers ownership of a secure loot container below you, to yourself.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>pfb &lt;qty&gt;</strong></p>
                <p>pfb 0</p>
                <p>pfb 20</p>
            </td>
            <td>
                <p>Configures the manage falling block functionality to prevent large server lag spikes from drop mining
                    or collapsing of objects that obey structural integrity and gravity, such as buildings.</p>
                <p>When PFB is set to a value higher than zer0, falling blocks will simply disappear instead of falling
                    to ground. The value set with the command determines how many falling blocks are required to trigger
                    a console log notice.</p>
                <p><em>20 is the suggested value for large-drop detection.</em></p>
                <p><em>This command is only available in CPM 5.35 and above, and was renamed in 5.38 from 'mfb' to 'pfb'
                        along with the expanded functionality of always blocking falling objects.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>playerchatmaxlength [alias: pcml]</p>
                <p><strong>pcml &lt;steam id/player name/entity id&gt; &lt;chat length&gt;</strong></p>
                <p>pcml 76561197961408188 128</p>
                <p>pcml Corran 128</p>
                <p>pcml 171 128</p>
            </td>
            <td>Configure the maximum chat text length for a specified player.</td>
        </tr>
        <tr role="row">
            <td><span>protectplayer
                    [alias: protect]</span></td>
            <td>Creates a protective
                bubble the specified player that kills all zombies that enter it.</td>
        </tr>
        <tr role="row">
            <td>protect</td>
            <td>Creates a protective bubble around yourself that will kill all zombies
                that enter it.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>protect &lt;steamid/playername&gt;</strong></p>
                <p>protect <span>76561197961408188</span></p>
                <p>protect Corran</p>
            </td>
            <td><span>Creates a protective bubble around a target player that kills all
                    zombies that enter it.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>release &lt;steamID/playername/entityid&gt;</strong></p>
                <p>release <span>76561197961408188</span></p>
                <p>release Corran</p>
                <p>release 171</p>
            </td>
            <td>Releases a player from the reverse claim block called 'jail'.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>remitem &lt;playername/entityid&gt;</strong></p>
                <p>remitem Corran</p>
                <p>remitem 171</p>
            </td>
            <td>Removes the items from the secure storage container below the specified
                player.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>repairtrees [alias: rt]</strong></p>
            </td>
            <td>
                <p>Detects and optionally repairs bugged trees that have no remaining health but can still be
                    harvesteted or hit for XP.</p>
                <p><em>This command is only available in CPM 7.1 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>rt</td>
            <td>Scans the world for bugged trees and reports them.</td>
        </tr>
        <tr role="row">
            <td>rt repair</td>
            <td>Scans the world for bugged trees and repairs them.</td>
        </tr>
        <tr role="row">
            <td>
                <p>removelandprotection2 [alias: rlp2]</p>
            </td>
            <td>Removes a land claim
                protection block <em>without </em>having to be in the region. This command will load/unload the region
                file automatically.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>rlp2 &lt;steamid&gt;</strong></p>
                <p>rlp <span>76561197961408188</span></p>
            </td>
            <td>Removes all land claim blocks for the specified player's Steam ID</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>rlp2 &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p>rlp2 <span>1100 50 380</span></p>
            </td>
            <td>Removes the land claim block at the coordinates that are specified.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>rlp2 expired</p>
            </td>
            <td>
                <p>Removes all expired land claim protection blocks.</p>
                <p><em>This command is only available in CPM 5.35 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>rlp2 nearby &lt;length&gt;</strong></p>
                <p>rlp2 nearby 128</p>
            </td>
            <td>
                <p>Removes all land claim blocks within the specified radius.</p>
                <p><em>The default radius is 64.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>resetunclaimedregionsnow</td>
            <td>
                <p>Kicks all players, saves the world, and reboots immediately. During the reboot, all areas of the map
                    which are NOT marked for reset will be erased.</p>
                <p>This is the <em>inverse </em>of the <a
                        href="https://docs.csmm.app/en/cpm/reset-regions.html" rel="nofollow">Reset
                        Regions</a> functionality, because all areas that are <u>not</u> a reset region will be wiped.
                </p>
                <p>This command can also be triggered as a parameter of the <em>shutdownba</em> command.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p>resetregionsnow</p>
            </td>
            <td>
                <p>Immediately executes a server shutdown and reboot that will regenerate marked reset regions.</p>
                <p><em>This command takes effect immediately and no warnings are given.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>say2 "[hexcode]Name[-]" "Message"</strong></p>
                <p>say2 "[0FAD32]Superbot[-]" "Superbot says hello."</p>
            </td>
            <td>
                <p>Broadcasts a message in chat, with options to configure the name the message is sent from, and the
                    color of the name in the chat message.</p>
                <p>Note that the name and message are separated by " symbols to clearly identify the 'name' the message
                    is sent by.</p>
                <p><em>This command is only available in CPM 5.31 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>pm2 &lt;from:steamid/playername/entityid&gt; &lt;to:steamid/playername/entityid&gt;</strong>
                </p>
                <p>pm2 <span>76561197961408188 <span>76561197935745735 "This is a PM."</span></span></p>
                <p>pm2 Corran Catalysm "This is a PM."</p>
                <p>pm2 171 176 "This is a PM."</p>
            </td>
            <td><span>Sends a message privately to a player, with the option to specify
                    the sender's name.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>serverchatname [alias:scn]</strong></p>
                <p>scn ServerBot</p>
            </td>
            <td>
                <p>Configures the server-name prefix for when the server makes announcements in chat.</p>
                <p><em>This command is only available in CPM 5.32 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>setdeathcount &lt;steam id&gt; &lt;count&gt; [alias:sdc]</strong></p>
                <p>sdc 76561197961408188 99</p>
            </td>
            <td>
                <p>Sets the death count <span>for the specified Steam ID's account to the value specified.</span></p>
                <p><em>This command is only available in CPM 5.35 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>setplayerstatus &lt;playername/entity id&gt; &lt;status&gt; &lt;value&gt; [alias:
                        sps]</strong></p>
                <p>sps Corran zkill 100</p>
                <p>sps 171 pkill 50</p>
            </td>
            <td>
                <p>Configure the values for Player Kills or Zombie Kills for a specified player.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>setpundosize &lt;value&gt;</strong></p>
                <p>setpundosize 5</p>
            </td>
            <td>Configures the amount of times 'pundo' can be run in a row. Higher
                numbers take more memory and can be impactful to system resources.</td>
        </tr>
        <tr role="row">
            <td>
                <p><br></p>
            </td>
            <td><br></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>showinventory2 &lt;playername/entity id&gt; &lt;optional:tag&gt; [alias:si2]</strong></p>
                <p>si2 Corran CSMM</p>
                <p>si2 171 CSMM</p>
            </td>
            <td>Show the inventory of the player given by his SteamID, player name or
                entity id. Optionally, specify a tag that is included in each line of the output. In this case output is
                designed to be easily parseable by tools.</td>
        </tr>
        <tr role="row">
            <td>shutdownba
                &lt;minutes&gt; &lt;optional:reset&gt; &lt;optional:resetunclaimed&gt;</td>
            <td>
                <p>This command starts a Bloodmoon-aware automated shutdown with the specified number of minutes. If a
                    Bloodmoon has started, the shutdown process will wait until 10AM the morning after the event, and
                    then start the timer, allowing players time to loot following the horde. <span>Prior to the
                        shutdown, players will be kicked and world will be saved.</span></p>
                <p>Optional flags for the shutdown include <a class="createlink"
                        href="/pages/createpage.action?spaceKey=CPM&amp;title=abc1&amp;linkCreation=true&amp;fromPageId=1114588">resetting
                        marked regions</a>, as well as the opposite command, resetting all regions that are <em>not</em>
                    marked for reset.</p>
                <p>Entering 0 for the minute parameter will check for a blood moon, and if none is found, immediately
                    start the save/kick/shutdown process.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>shutdownba &lt;minutes&gt;</strong></p>
                <p>shutdownba 10</p>
            </td>
            <td>
                <p><span>This command starts a Bloodmoon-aware shutdown with 10 minute timer. Prior to the shutdown,
                        players will be kicked and world will be saved.</span></p>
                <p><span><em>Note: this version does not reset marked region files.</em><br></span></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>shutdownba &lt;minutes&gt; reset</strong></p>
                <p>shutdownba 10 reset</p>
            </td>
            <td>This command starts a Bloodmoon-aware shutdown with 10 minute timer and
                automatically <a class="createlink"
                    href="/pages/createpage.action?spaceKey=CPM&amp;title=abc1&amp;linkCreation=true&amp;fromPageId=1114588">resets
                    marked regions</a>. Prior to the shutdown, players will be kicked and world will be saved.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>shutdownba &lt;minutes&gt; <span>resetunclaimed</span></strong></p>
                <p>shutdownba 10 resetunclaimed</p>
            </td>
            <td>
                <p>This command starts a Bloodmoon-aware shutdown with 10 minute timer. Prior to the shutdown, players
                    will be kicked and world will be saved.</p>
                <p>Unlike the 'reset' version above, anything marked for reset will be <u>saved</u>, and all
                    <u>unmarked</u> areas will be wiped.</p>
                <p><br></p>
                <p><em>This command is only available in CPM 5.34 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>targetedhorde [alias: sh]<p><br>
                </p>
            </td>
            <td>Spawns a horde on the targeted
                player or coordinates, with the specified amount of zombies.</td>
        </tr>
        <tr role="row">
            <td><strong>teleportplayerhome &lt;steam id/player name/entity id&gt;
                    [alias: teleh]</strong>
                <p>teleh 76561197961408188</p>
                <p>teleh Corran</p>
                <p>teleh 171</p>
            </td>
            <td>Teleport the specified player to their bedroll.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>th &lt;steam id/player name/entity id&gt; &lt;qty&gt;</strong></p>
                <p>th 76561197961408188 10</p>
                <p>th Corran 10</p>
                <p>th 171 10</p>
            </td>
            <td>Spawns a horde on the specified player, with the specified amount of
                zombies.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>th &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;qty&gt;</strong></p>
                <p>th <span>1100 50 380 25</span></p>
            </td>
            <td>Spawns <span>a horde at the specified coordinates, with the specified
                    amount of zombies.</span></td>
        </tr>
        <tr role="row">
            <td>tprotect</td>
            <td>
                <p>Creates a safe zone at the specified coordinates that prevent any entities from damaging anything
                    within the zone, similar to a trader's protected space.</p>
                <p><br></p>
                <p><em>Note: tprotect requires a Y-axis (height) coordinate, but the safe zone generated is always
                        bedrock to sky, regardless of the Y coordinate input.</em></p>
                <p><em><br></em></p>
                <p>This command was called 'safe' prior to A17.</p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>tprotect &lt;add/del&gt; &lt;x1&gt; &lt;x2&gt; &lt;y1&gt; &lt;y2&gt; &lt;z1&gt;
                        &lt;z2&gt;</strong></p>
                <p>tprotect add 1100 1150 50 75 300 350</p>
                <p>tprotect delete 1100 1150 50 75 300 350</p>
            </td>
            <td>Creates a safe zone at the specified coordinates using the dimensions
                given.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>tprotect &lt;x_dst&gt; &lt;y_dst&gt; &lt;z_dst&gt;</strong></p>
                <p>tprotect 500 50 500</p>
            </td>
            <td>Creates a safe zone, starting with the block directly in front of you,
                heading due north. The X position specifies the distance ahead, the Z position specifies the width, and
                the Y position specifies the height of the region. All three values can be negative to work in the
                opposite direction.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>tprotect &lt;p1/p2&gt; &lt;add/delete&gt;</strong></p>
                <p>tprotect p1</p>
                <p>tprotect p2 &lt;add/delete&gt;</p>
            </td>
            <td>Creates a safe zone within the contents of a region by defining the
                opposing corners of the rectangle. If 'p1' and 'p2' are on the same altitude, the copy-region will be
                one-block high, otherwise it will be as high as the Y-offset between 'p1' and 'p2'.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>tp2bag &lt;steam id/player name/entity id&gt;</strong></p>
                <p>tp2bag 76561197961408188</p>
                <p>tp2bag Corran</p>
                <p>tp2bag 171</p>
            </td>
            <td>Teleports the specified player to their most recent death bag.</td>
        </tr>
        <tr role="row">
            <td>traderlist</td>
            <td>Outputs the list of traders on the map.</td>
        </tr>
        <tr role="row">
            <td>unlockall</td>
            <td>Unlocks all secured entities in the currently-loaded map for yourself.
                Entities in regions/chunks that are not currently loaded may require this command to be re-run when you
                get near them.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>w2l &lt;text&gt;</strong></p>
                <p>w2l "Test message 123"</p>
                <p style="margin-left: 30.0px;"><em style="letter-spacing: 0.0px;">Output appears as:</em></p>
                <p style="margin-left: 30.0px;">2019-01-20T11:50:37 10411.801 INF Test message 123</p>
            </td>
            <td>
                <p>Writes text to the server console log. Useful for creating log lines that include specific words in
                    order to trigger CSMM Claim notifications, or mark when specific events occur.</p>
                <p><br></p>
                <p><em style="letter-spacing: 0.0px;">This command is only available in CPM 8.2 and above.</em></p>
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>wi &lt;steamid&gt;</strong></p>
                <p>wi <span>76561197961408188</span></p>
            </td>
            <td>Erases the target player's inventory, including all items on the belt,
                bag, and equipped as armor/accessories. Useful for players who have the 'stuck item' glitch where they
                cannot remove equipped or stored items, or for players who have bugged quest items permanently stuck in
                their bag.</td>
        </tr>
        <tr role="row">
            <td>wlf</td>
            <td>When executed by an admin or CSMM custom command, this command adds
                or removes all in-game friends of the specified player from any land claims that the specified player
                owns. This can be used to automatically permit entry to a procedurally generated advanced claim.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>wlf add &lt;steam id/player name/entity id&gt;</strong></p>
                <p>wlf add</p>
                <p>wlf add Corran</p>
                <p>wlf add 171</p>
            </td>
            <td><span>Adds all in-game friends of the specified person to all
                    whitelists they own.</span></td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>wlf del &lt;steam id/player name/entity id&gt;</strong></p>
                <p>wlf del</p>
                <p>wlf del Corran</p>
                <p>wlf del 171</p>
            </td>
            <td>Removes <span>all in-game friends of the specified person to all
                    whitelists they own.</span></td>
        </tr>
        <tr role="row">
            <td>wpc</td>
            <td>Waypoint control command used to add, delete, and list all waypoints.
            </td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>wpc add &lt;name&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</strong></p>
                <p>wpc add serverLobby 150 31 2300</p>
            </td>
            <td>Creates a waypoint at the specified coordinates, using the name
                provided in the command.</td>
        </tr>
        <tr role="row">
            <td>
                <p><strong>wpc remove &lt;name&gt;</strong></p>
                <p>wpc remove serverLobby</p>
            </td>
            <td>Deletes the specified waypoint from the server.</td>
        </tr>
        <tr role="row">
            <td>wpc list</td>
            <td>Lists all available waypoints.</td>
        </tr>
    </tbody>
</table>
