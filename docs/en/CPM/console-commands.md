# CPM Console Commands

Below is a list of Console Commands added to the server by CPM. 
 
::: tip
New command prefix

Starting with CPM 5.35, all CPM-specific commands have been given the prefix 'cpm-' to identify which mod they are part of. As a result, commands like 'brender' are now named 'cpm-brender'; however, an alias has been added to the older name, so that Admins with experience in the older names can still use them. As an example, all three of the following commands would be valid and produce the same result:

*   cpm-chatgroupcolor
*   chatgroupcolor
*   cgc
    
You can type 'help' to see all possible commands, and any command provided by CPM will have the prefix listed. Alternately, to only see CPM-related commands, you can type 'cpm-help' instead.
:::


additemloot \<entityid\>

Places a secure storage crate below the specified entity ID that contains the item in your current hotbar selection.

_announcenighttime \[alias:an\]_

Nighttime Announcer Commands. This command can be shortened to 'an'

an

Lists current Nighttime Announcer settings.

**an \<true/false\>**

an true

Enables/disables the Nighttime Announcer

an hordecycle \<days\>

an hordecycle 7

Configure the Nighttime Announcer to announce the correct number of days between blood moons. This does _not_ set the cycle; it just configures the announcer to match the cycle you set in the config.

an warnhours \<hours\>

an warnhours 2

Configure the number of hours before the 22:00 nighttime warning from the Nighttime Announcer.

**an announcer \<name\>**

an announcer DoomBot

Sets the in-game name of the Nighttime Announcer bot.

**an nighttimetext \<string\>**

an nighttimetext "It's getting dark. Night time in {hours} hours!"

an nighttimetext "It's getting dark. Night time in 2 hours!"

Sets the in-game text that the Nighttime Announcer uses to inform players that darkness is approaching. You can specify it manually, or you can use the {hours} variable to have the text automatically update whenever you change the warnhours variable.

Make sure to wrap the text in "s to capture the entire command.

**an blooddaytext \<string\>**

an blooddaytext "It's horde night! Make sure you're ready."

Sets the horde night announcement text for the Nighttime Announcer.

Make sure to wrap the text in "s to capture the entire command.

**an blooddaytomorrowtext \<string\>**

an blooddaytomorrowtext "Tomorrow is horde night! Cowards should log out now, just in case."

Sets the one-day warning horde night announcement text for the Nighttime Announcer.

Make sure to wrap the text in "s to capture the entire command.

**an counterdaytext \<string\>**

an counterdaytext "{daysleft} days until horde night."

Sets the text that is sent out for the first 5 days before a horde night at 22:00.

Make sure to wrap the text in "s to capture the entire command.

**arrest \<player\> \[timer\]**

arrest Corran

arrest Corran 90

Teleports the specified player into a Reverse Claim Region that has the ID name 'jail'. Anyone placed in jail can't leave (even by teleporting) until an Admin executes the 'release' command on them.

  

The 'jail' claim _must_ exist for this command to function.

  

The optional Timer parameter was added in CPM 6.8.

**bcheck \<x\> \<y\> \<z\>**

bcheck

bcheck 100 50 200

Checks the block type at the specified coordinates. Not specifying a coordinate checks the block directly below the player.

bdup

Duplicates the contents of a region for copy/pasting elsewhere.

**bdup \<x1\> \<x2\> \<y1\> \<y2\> \<z1\> \<z2\> \<x\> \<y\> \<z\> \<rot\>**

bdup 1100 1150 50 75 300 350 0

Copy the contents of the specified rectangle into memory for duplication.

**bdup \<p1/p2\>**

bdup p1

bdup p2

Copy the contents of a region by defining the opposing corners of the rectangle. If 'p1' and 'p2' are on the same altitude, the copy-region will be one-block high, otherwise it will be as high as the Y-offset between 'p1' and 'p2'.

**bdup \<x\> \<y\> \<z\> \<rot\>**

bdup 2200 2300 25 0

Paste the contents copied previously at the specified coordinates. Specifying a rotation of 0 will position it in exactly the same orientation as when it was copied.

**bdup \<rot\>**

bdup 0

Paste the contents copied previously at your feet. Specifying a rotation of 0 will position it in exactly the same orientation as when it was copied.

**bexport \<x1\> \<x2\> \<y1\> \<y2\> \<z1\> \<z2\> \<prefab\_file\_name\>**

bexport 1100 1150 50 75 300 350 secretBase

Exports the contents of the specified region to a 7 Days prefab file. The file will be stored in your server folder, specifically in the Data/Prefabs subfolder.

**bexport \<prefab\_file\_name\>**

bexport

bexport \<prefab\_file\_name\>

  

Export the contents of a region by defining the opposing corners of the rectangle by running pexport twice. The second time requires the prefab output file to be named, and the file will be stored in your server folder, specifically in the Data/Prefabs subfolder.

brender

Renders a prefabricated structure from the server data files at the position specified with an optional rotation value to change the direction the structure faces.

_Valid rotation values are 0, 1, 2, and 3._

**brender \<prefab\_file\_name\> \<x\> \<y\> \<z\> \<rot\>**

brender secretBase 2200 2300 25 0

Renders a prefabricated structure from the server data files at the position specified. If rotation is left at 0, it will render in the same orientation it was captured in.

**brender \<prefab\_file\_name\> \<rot\>**

brender secretBase 0

Renders a prefabricated structure from the server data files at your position. If rotation is left at 0, it will render in the same orientation it was captured in.

**brender \<prefab\_file\_name\> \<rot\> \<depth\>**

brender secretBase 0 25

Renders a prefabricated structure from the server data files at your position, plus or minus a vertical offset. If rotation is left at 0, it will render in the same orientation it was captured in.

brepblock

Replaces one type of block with another within the range of coordinates specified, or within a radius of the player running the command.

**brepblock \<block name\>**

brepblock steel

Returns the block id number and short name of any blocks that match the name entered.

**brepblock \<block\_to\_be\_replaced\> \<block\_name\> \<x1\> \<x2\> \<y1\> \<y2\> \<z1\> \<z2\>**

brepblock air stone 1100 1150 50 75 300 350

Replaces the first type of block with the second type of block everywhere that it exists within the specified boundaries. For example, 'air stone' would replace all air blocks with solid stone blocks.

**brepblock **\<block\_to\_be\_replaced\> \<block\_name\>** \<x\_dst\> \<y\_dst\> \<z\_dst\>**

brepblock air stone 50 20 50

Replaces the first type of block with the second type of block, starting with the block directly in front of you, heading due north. The X position specifies the distance ahead, the Z position specifies the width, and the Y position specifies the height of the region. All three values can be negative to work in the opposite direction.

**brepblock \<p1/p2\> ****\<block\_to\_be\_replaced\> \<block\_name\>******

brepblock p1

brepblock p2 air stone

Replaces the first block type with the second block type within the contents of a region by defining the opposing corners of the rectangle. If 'p1' and 'p2' are on the same altitude, the copy-region will be one-block high, otherwise it will be as high as the Y-offset between 'p1' and 'p2'.

**brepblock \<searchname\>**

brepblock stone

Searches the block type database for any blocks that have at least a partial match to the search name, and returns their id number and short name.

**bun \<true/false\>**

bun true

bun false

Blocks non-UTF player names (i.e. players with anything other than [ASCII characters](https://ascii.cl/)) in their name from connecting.

bundo

Undoes the last prefab command, such as pblock, prender, or prepblock.

_Use 'setpundosize' to determine how many times pundo can be run in a row._

checkvehiclecontent \[alias: cvc\]

**cvc \<entityid\>**

cvc 123456

Open a window that shows the inventory contents of a vehicle. If the vehicle is locked the owner will be shown.

claimcontrolcommand \[alias: ccc\]

ccc

Claim Control Commands used to work with [Advanced Claims](https://confluence.catalysm.net/display/CPM/Advanced+Claims).

**ccc add \<steamid\_claimname\> \<w\_boundary\> \<e\_boundary\> \<n\_boundary\> \<s\_boundary\> \<accessLevel\> \[\<type\>\]**

ccc add 76561197961408188\_normalClaim 1150 1100 200 150 0

ccc add 76561197961408188\_leveledClaim 1150 1100 200 150 0 leveled:50,-50

ccc add 76561197961408188\_hostileFree 1150 1100 200 150 0 hostilefree

ccc add zedFree2 1150 1100 200 150 0 hostilefree

ccc add 76561197961408188\_businessHours 1150 1100 200 150 0 openhours:5-22

ccc add 76561197961408188\_businessHours 1150 1100 200 150 0 openhours:5-22

ccc add 76561197961408188\_24hrs 1150 1100 200 150 0 timed:24

ccc add newbieTown 1150 1100 200 150 0 "notify:You are entering the newbie town!:You are exiting the newbie town!"

ccc add townPortal 1150 1100 200 150 0 portal:20:100,-1,150

ccc add jail 1150 1100 200 150 0 reversed

Add an Advanced Claim using the specified dimensions/parameters/type. You can add one of these claims by specifying the N/S/W/E parameters,

Examples for each \[\<type\>\] are listed.

Specify the claim name along with the SteamID to make that player the owner of the claim. If you do not specify a steam ID owner, then that player will not be allowed to add players to the whitelist.

**ccc add \<claimname\> \<w\_boundary\> \<e\_boundary\> \<n\_boundary\> \<s\_boundary\> \<accessLevel\> "notify:PVE Entry Warning:PVE Exit Warning:\<punishment command\>"**

ccc add myPVEtown 1150 1100 200 150 0 "notify:You have entered a PVE zone!:You are exiting a PVE zone!:kick ${entityId} 'You have been violating PVE rules.'"

ccc add westmappve -10000 0 10000 -10000 0 "notify:You have entered the west half of the map, which is PVE only!:You are now on the east half of the map, which allows PVP!:kick ${entityId} 'You have been violating PVE rules.'"

ccc add westmappvenpf -10000 0 10000 -10000 0 "notify:You have entered the west half of the map, which is PVE only!:You are now on the east half of the map, which allows PVP!:kick ${entityId} 'You have been violating PVE rules.'"

  

  

Add an Advanced Claim of the type Notify and flags it as a PVE zone; any player who kills another player in this zone will be punished according to the command listed in the text string. Since this is a standard notify claim as well, the specified entry and exit messages will be sent to the player when they cross the PVE/PVP border.

PVE claims require two things: the claim name must include the letters 'pve' in it, and a punishment command (or commands) must be added after the notification messages.

_Multiple punishment commands can be added to the punishment trigger by separating them with a semicolon ( ; ), like this:_

"notify:EntryMessage:ExitMessage:command1;command2;command3"

When PVE punishment claims are created with 'npf' in the claim name, the game will not punish PVE kills if the killer and victim are friends; this is intended to avoid punishing allies who accidentally kill eachother during events like hordenight, or a sudden zombie mob.

  

_This command is only available in CPM 5.30 and above, and the NPF parameter is only available in 8.3 and above._

**ccc radius \<radiussize\> \<steamid/entityid/playername\> \<steamid\_claimname\> \<accessLevel\> \[\<type\>\]**

ccc radius 75 Corran 76561197961408188\_normalClaim 0

ccc radius 75 Corran 76561197961408188\_leveledClaim 0 leveled:50,-50

ccc radius 75 Corran 0 hostilefree

ccc radius 75 Corran 76561197961408188\_businessHours 0 openhours:5-22

ccc radius 75 Corran 76561197961408188\_businessHours 0 openhours:5-22

ccc radius 75 Corran 76561197961408188\_24hrs 0 timed:24

ccc radius 75 Corran 0 "notify:You are entering the newbie town!:You are exiting the newbie town!"

ccc radius 75 Corran townPortal 0 portal:20:100,-1,150

ccc radius 75 Corran jail 0 reversed

Add an Advanced Claim using a specified Radius value to create a square claim, based on the current position of the player running the command.

Examples for each \[\<type\>\] are listed.

**ccc radius \<radiussize\>\<steamid\_claimname\> \<accessLevel\> **"notify:PVE Entry Warning:PVE Exit Warning:\<punishment command\>"****

ccc radius 75 Corran myPVEtown 0 "notify:You have entered a PVE zone!:You are exiting a PVE zone!:kick ${entityId} 'You have been violating PVE rules.'"

ccc radius 75 Corran safespotpve 0 "notify:You have entered a safe spot!:You have left the safe spot!:kick ${entityId} 'Don't kill people in the safe spot!'"

Add an Advanced Claim of the type Notify using the specified radius and flags it as a PVE zone; any player who kills another player in this zone will be punished according to the command listed in the text string. Since this is a standard notify claim as well, the specified entry and exit messages will be sent to the player when they cross the PVE/PVP border.

PVE claims require two things: the claim name must include the letters 'pve' in it, and a punishment command (or commands) must be added after the notification messages.

_Multiple punishment commands can be added to the punishment trigger by separating them with a semicolon ( ; ), like this:_

"notify:EntryMessage:ExitMessage:command1;command2;command3"

_This command is only available in CPM 5.30 and above._

ccc remove \<claimid/steamid\>

Removes one or all advanced claims for a given player. Specifying the Claim ID by name will remove that specific claim, while specifying the Steam ID will remove all claims for that player.

ccc list

Lists all of the advanced claims on the server.

ccc wl add \<claimid/owner-steamid\> \<new-steamid\>

Adds the new player's Steam ID to the the whitelist for claim blocks of a specific claim owner. If the claim ID is specified, they are whitelisted only for that claim, but if an Owner Steam ID is specified, the new player is whitelisted for all claims of the Owner.

ccc wl remove \<claimid/owner-steamid\> \<removed-steamid\>

Removes a specific player from the whitelist for a claim block or for all claim blocks of an owner. If the claim ID is specified, they are removed from the whiteliste only for that claim, but if an Owner Steam ID is specified, the new player is removed from the whiteliste for all claims of the Owner.

chatcommandpermissions \[alias: ccp\]

Configure the required permission level for various chat commands.

**ccp \<command\> \<permissionlevel\>**

ccp bag 0

Sets the required permission level for the specified command. Setting it to 0 means that only Admins can execute the command. You can use this to disable commands from player usage.

ccp list

Show all CPM chat commands and the required permissions needed for that command.

chatgroupcolor \[alias: cgc\]

Configure specific name colors for chat groups.

**cgc addgroup \<groupname\> \<hexcolor\>**

cgc addgroup Donators 4286F4

Create a new chat group with the specified color. Use a [hex color picker](https://htmlcolorcodes.com/color-picker/) to help select your colors.

_As of CPM Version 8.8, this now works on offline players as well._

**cgc adduser \<steamid/playername/entityid\> \<groupname\>**

cgc adduser 76561197961408188 Donators

cgc adduser Corran Donators

cgc adduser 171 Donators

Add the specified player to the group that is entered.

**cgc cleargroup \<steamid/playername/entityid\>**

cgc cleargroup 76561197961408188

cgc cleargroup Corran

cgc cleargroup 171

Removes the specified player from the group they are assigned to.

**cgc deletegroup \<groupname\>**

cgc deletegroup Donators

Removes the specified group from the database. All users assigned to this group will lose this assignment.

cgc listgroups

List all existing Chat Groups

**cgc listmembers \<groupname\>**

cgc listmembers Donators

Lists all of the users of the specified chat group.

**pcc\<steam id/player name/entity id\> \<hexcolor\> \<nameOnly\>**

pcc 76561197961408188 4286F4 1

Sets a specific player's color in the chat window. Setting the nameOnly value determines whether only their name changes color, or their name and all of their text. Color values are chosen via a [hex color value](https://htmlcolorcodes.com/color-picker/).

checkloot

Checks the secure storage cache beneath a player or entity. The secure caches are placed using the _additemloot_ command.

  

  

cpm-help

Outputs a list of all CPM-specific commands and their aliases.

**cpmprefix \<prefix\_character\>**

cpmprefix /

cpmprefix !

Specifies the prefix character that all CPM chat commands will run on. This command is / by default.

_This command is only available in CPM 5.28 and above._

cs

Spawns a scout near the specified player or coordinates.

**cs \<steam id/player name/entity id\>**

cs 76561197961408188

cs Corran

cs 171

Spawns a scout near the specified player.

**cs \<x\> \<y\> \<z\>**

cs -1520 25 558

Spawns a scout near the specified coordinates.

ds

Donor Slot management commands. Used to manage the amount and behavior of donor slots on the server.

**ds add \<steamid\> \<friendly name\> \<days\>**

ds add 76561197961408188 Corran 90

Adds the specified SteamID to the donor list, for the number of days given. If the player is already on the donor slot registry, it will add the given number of days to the existing count.

_Note: The 'friendly name' does NOT have to match their in-game name. For example, if you have a player whose in-game name is Bob-Likes-To-Feel-Special, you could simply enter 'Bob' for the friendly name. This name is just to help you identify who the SteamID belongs to._

**ds remove \<steamid\>**

ds remove 76561197961408188

Removes the specified SteamID from the donor list. This action will not kick the player if they are currently playing in a donor-only slot, but it will prevent them from signing back in after they leave if the free-to-use slots are all taken.

ds list

Displays a list of all donors and their expiration times.

**ds donorbuffer \<qty\>**

ds donorbuffer 10

Specifies how many of the total game slots are reserved for donors. This number can be changed on the fly, while the server is online.

**ds enabled \<true/false\>**

ds enabled true

Enables or disables the donor slot functionality. By default, this command is disabled.

**entity**remove** \<entityid\>**

entityremove 20510

Removes the specified entity id from the game.

This command was called 'removeentity' previously.

etele

Teleports an entity to the specified coordinates or player.

**etele entityID \<x\> \<y\> \<z\> \<optional: rotation\>**

telee 20251 1100 50 380 0

Teleport an entity to the specified coordinates.

**etele entityID \<player\_id\> \<optional: rotation\>**

telee 20251 171 0

Teleport an entity to the specified player using their entity ID.

fblock

Fills a specified region with the specified type of block. Commonly used to replace a region of dirt or water with air, or to create concrete walls or cubes.

**fblock1 \<blocktype\> \<x\> \<y\> \<z\>**

fblock1 air 1100 50 1200

Fills a single block position with the specified block. This command does not need to reload the chunk, so it will not potentially cause collisions/noclipping for players.

**fblock \<block\_name\> \<x1\> \<x2\> \<y1\> \<y2\> \<z1\> \<z2\>**

fblock air 1100 1150 50 75 300 350

Fills a region with a specified block type, by clearly defining all six points of the rectangle manually.

**fblock \<block\_name\> \<x\_dst\> \<y\_dst\> \<z\_dst\>**

fblock air 50 20 50

Fills a region with a specified block type, starting with the block directly in front of you, heading due north. The X position specifies the distance ahead, the Z position specifies the width, and the Y position specifies the height of the region. All three values can be negative to work in the opposite direction.

**fblock \<p1/p2\> \<p2:blocktype\>**

fblock p1

fblock p2 air

Fills a region with a specified block type by defining the opposing corners of the rectangle. If 'p1' and 'p2' are on the same altitude, the fill-region will be one-block high, otherwise it will be as high as the Y-offset between 'p1' and 'p2'.

Only the 'p2' command requires the block type.

**getbicycle \<steam id/player name/entity id\>**

getbicycle 76561197961408188

getbicycle Corran

getbicycle 171

Teleports any detected bicycle for the specified player to your current position.

The ownership of a bicycle is determined by which player has used the 'lock' action on a deployed bicycle. That player is the owner of the specified bicycle.

_This command is only available in CPM 7.1 and above._

**getbike **\<steam id/player name/entity id\>****

getbike 76561197961408188

getbike Corran

getbike 171

Teleports any detected minibikes for the specified player to your current position.

In A16, the bike must have a lock on it to properly detect ownership, while in A17, anyone who uses the 'lock' action on a deployed bike will be marked as the owner.

_This command is only available in CPM 5.32 and above._

**getgyrocopter \<steam id/player name/entity id\>**

getgyrocopter 76561197961408188

getgyrocopter Corran

getgyrocopter 171

Teleports any detected gyrocopters for the specified player to your current position.

The ownership of a gyrocopter is determined by which player has used the 'lock' action on a deployed gyrocopter. That player is the owner of the specified gyrocopter.

_This command is only available in CPM 7.1 and above._

**getjeep \<steam id/player name/entity id\>**

getjeep 76561197961408188

getjeep Corran

getjeep 171

Teleports any detected jeeps for the specified player to your current position.

The ownership of a jeep is determined by which player has used the 'lock' action on a deployed jeep. That player is the owner of the specified jeep.

_This command is only available in CPM 7.1 and above._

**getmotorcycle \<steam id/player name/entity id\>**

getmotorcycle 76561197961408188

getmotorcycle Corran

getmotorcycle 171

Teleports any detected motorcycles for the specified player to your current position.

The ownership of a motorcycle is determined by which player has used the 'lock' action on a deployed motorcycle. That player is the owner of the specified motorcycle.

_This command is only available in CPM 7.1 and above._

**giveat \<x\> \<y\> \<z\> \<item name\> \<amount\> \<optional:quality\>**

giveat 1150 1100 200 gunSniperRifle 1

giveat 1150 1100 200 gunSniperRifle 1 600

Places an item at the specified coordinates. For items with the quality attribute, the quality option can be used.

giveplus

Gives an item to the specified player.

If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if the bag and bar are full. Older versions drop the item at their feet.

You can also specify the quality and quantity of the given item, plus the percent durability loss of the item when it spawns.

An optional 'all' parameter applies the give command to all online players.

**giveplus \<name / entity id\> \<item name\> \<quantity\>**

giveplus 76561197961408188 gunSniperRifle 1

giveplus Corran gunSniperRifle 1

giveplus 171 gunSniperRifle 1

Gives an item (with random quality if it has quality) to the specified player.

If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if the bag and bar are full. Older versions drop the item at their feet.

**giveplus \<name / entity id\> \<item name\> \<quantity\> \<optional:quality\>**

giveplus 76561197961408188 gunSniperRifle 1 6

giveplus Corran gunSniperRifle 1 6

giveplus 171 gunSniperRifle 1 6

Gives an item to the specified player.

If CPM version 5.32 or higher is installed, it places it directly in their bag, or at their feet if the bag and bar are full. Older versions drop the item at their feet.

If quality is not specified, a _random_ quality is used.

_Quality is only available in CPM 5.32 and above._

**giveplus \<name / entity id\> \<item name\> \<quantity\> \<optional:quality\> \<optional:usedTimes\>**

giveplus 76561197961408188 gunSniperRifle 1 6 50

giveplus Corran gunSniperRifle 1 6 50

giveplus 171 gunSniperRifle 1 6 50

Gives an item to the specified player; if CPM version 5.32 or higher is installed, it places it directly in their bag, and if older versions are used, drops the item at their feet. You can also specify the percent durability loss of the item when it spawns.

usedTImes: This value is a numeric percentage, so '50' means durability is 50% gone at spawn. If quality is specified, usedTimes MUST also be specified

_Durability modification is only available in CPM 5.32 and above._

**giveplus all \<item name\> \<quantity\> \<optional:quality\> \<optional:usedTimes\>**

giveplus all gunSniperRifle 1

giveplus all gunSniperRifle 1 6

giveplus all gunSniperRifle 1 6 50

Gives an item to all online players; if CPM version 5.32 or higher is installed, it places it directly in their bag, and if older versions are used, drops the item at their feet. You can also specify the percent durability loss of the item when it spawns.

usedTImes: This value is a numeric percentage, so '50' means durability is 50% gone at spawn. If quality is specified, usedTimes MUST also be specified

_Durability modification is only available in CPM 5.32 and above._

**givexp \<name/entityid\> \<xp amount\>**

givexp Corran 100

givexp 171 100

Gives the specified player XP as if they had been crafting, looting, or killing zombies.

got (give or trade)

Management commands for the give/trade system in CPM.

got list

Outputs a list of all stored trading chests registered in the system.

**got lvi \<playerName/entityId\>**

got lvi Corran

got lvi 171

Lists all 'virtual' items in the trade chest for the specified player. These are the items that the player will receive once a trade completes.

**got lti \<playerName/entityId\>**

List all items currently stored in the trading chest for this player. These are the items that the player will trade to the other player.

**grablcb \<steam id / player name / entity id\> \<radius\>**

grablcb 76561197961408188 5

grablcb Corran 5

grablcb 171 5

Locates all Land Claim Blocks within the specified radius of the given player, and removes them. After removal, the specified player is given new LCBs to replace the ones that were deleted.

This command allows players to pick up nearby LCBs without having to destroy them, in order to relocate them.

_This command is only available in CPM 5.33 and above._

hidechatcommand \[alias hccp\]

Configure which prefixes cause commands to be hidden from the general chat. Multiple prefixes can all be hidden if they are separated by a ',' symbol. This is useful for when you have a command like /rules or /tp, and want to hide the usage of those commands.

**hccp \<commands\> \[alias: hccp\]**

hccp !

hccp /

hccp !,/

Sets the prefix values that are hidden from public chat. Multiple prefixes should be separated by commas.

_Prior to A17, this command was called tcch._

hccp list

Outputs to console the current configuration of the hccp command. This is typically used by CSMM to access and manage this setting remotely.

  

_This command is only available in CPM 6.6 and above._

**hostileschatcommand \<true/false\> \[alias: hcc\]**

hcc

hcc enabled true

Toggles whether the /hostiles command can be used in chat to determine where the nearest zombies are. If the 'enabled' parameter is not specific, hcc outputs the current status of the command.

killallzombies

Kills all zombies active on the map.

listcustomentities \[alias: lce\]

Lists all entities that meet certain filter criteria, such as being within a certain radius, within a specific rectangular location, or by type.

_Valid types: Zombie, SupplyCrate, Backpack, Item, Animal, Minibike, NPC, Player, Jeep, Bicycle, Motorcycle, Gyrocopter, and use \* to list all types._

_Prior to CPM 6.0, this command was called 'listentitiescustom', alias 'lec'._

  

**lce \<x\> \<y\> \<radius\> \<type\>**

lce 1150 50 500 Player

Lists all entities of the specified type, within the specified radius of the given X/Y coordinates.

**lce \<xMin\> \<xMax\> \<zMin\> \<zMax\> \<type\>**

lce 1150 1100 200 150 Minibike

Lists all entities of the specified type that are present within the square made by the four coordination positions given.

listlandprotection2 \[alias: llp2\]

List land protection claim blocks on the server. Depending on the parameters you specify, it will list all claims, only a summary of the claim counts, or claims in a radius around the player.

llp2 summary

Outputs a list of players who currently have land claim blocks on the server, how many, and what protection value they provide.

**llp2 \<steam id / player name / entity id\> \[optional: parseable\]**

llp2 76561197961408188

llp2 76561197961408188 parseable

llp2 Corran

llp2 171

Lists all land claim blocks for the specified player, using either their name, entity ID, or Steam ID. Adding the 'parseable' tag restructures the output to a script-friendly format.

llp2 nearby \[optional: length\]

Lists all land claim blocks within a radius of the player. The default radius is 64.

listplayerbed \[alias: lpb\]

Lists all of the player beds for the players on the server. You can optionally specify a specific player to narrow the listing.

**lpb \<optional:playername\>**

lpb

lpb Corran

Lists all of the player beds on the server. You can optionally specify a specific player to narrow the listing.

**listfriendsplayer \<optional:playername\> \[alias: lfp\]**

lfp

lfp Corran

Creates a list of all players, and everyone who is friends with that player. If a specific player name is specified, only the friends of that player will be listed.

  

_This command was called 'lpf' prior to A17._

loctrack

Performs location tracking of players in a given area using the specified inputs.

loctrack

Outputs the current values and configuration of all loctrack settings.

**loctrack command \<commandname\>**

loctrack command trackplayers

Specifies the chat command players and admins use to track players in the area. By default, this command is 'loctrack'.

**loctrack commandenabled \<true/false\>**

loctrack commandenabled true

Enables or Disables the 'loctrack' chat command functionality. This does not alter the functionality of the console command.

**loctrack enabled \<true/false\>**

loctrack enabled false

Enables or Disables location tracking via CPM entirely. Setting this to False disables the console command and chat command functionality completely.

**loctrack interval \<seconds\>**

loctrack interval 30

Sets the interval at which location tracking records the current player coordinates.

_The default interval is 15 seconds._

**loctrack maxagedata \<hours\>**

loctrack maxagedata 72

Sets the maximum age of location tracking data retention. All player position data older than this value is discarded.

_The default value for the max data age is 72 hours._

**loctrack neardistance \<meters\>**

loctrack neardistance 350

Specify the radius that the _loctrack near_ command uses when looking for nearby online players.

_The default radius is 200 meters._

**loctrack search \<x\> \<y\> \<z\> \<radius\> \<numberOfHours\>**

loctrack search 2200 95 2300 500 24

Searches for all players within a given radius of specific coordinates within the chosen amount of hours.

**loctrack search \<steam id/player name/entity id\> \<radius\> \<numberOfHours\>**

loctrack search 76561197961408188 500 4  
loctrack search Corran 500 4  
loctrack search 171 500 4

Searches for all players who were within a given radius of the specified player within the chosen amount of hours.

**loctrack showtrack \<steam id\> \<maxrecords\> \<timespan\> \<timeBetweenRecords\>**

loctrack showtrack 76561197961408188 20 08270850-08270900 30

Outputs a coordinate list, up to the maximum record amount given, of all of the location tracks for a player during the specified timespan. The records will be taken at the interval specified by the time between records parameter.

markresetregion \[alias: mrr\]

Marked [Reset Regions](https://confluence.catalysm.net/display/CPM/Functional+Overview) are specific region files that have been marked for deletion so that they regenerate, the next time a specific resetcommand is given. This command is used to mark/unmark regions, see the list of regions, and set the message displayed to players when they enter a reset region.

multipleentityspawn \[alias:mes\]

Spawn multiple entities around the specified coordinates or players. Each entity should be separated by a space.

_Type "mes" to see all entity types._

**mes \<x\> \<optional:y\> \<z\> \<spawn radius\> @ \[\<list of entities\>\]**

mes -1520 25 558 @ 1 1 18 18 21 21 21

mes -1520 558 @ 1 1 18 18 21 21 21

Spawn multiple entities around the specified coordinates. Each entity should be separated by a space. The Y coordinate can be excluded to force the entity to spawn at surface height.

**mes \<steam id/player name/entity id\> \<spawn radius\> @ \[\<list of entities\>\]**

mes 76561197961408188 50 @ 1 1 18 18 21 21 21

mes Corran 50 @ 1 1 18 18 21 21 21

mes 171 50 @ 1 1 18 18 21 21 21

Spawn multiple entities around the specified player with a given radius. Each entity should be separated by a space.

**mrr add \<optional:regionFileName\>**

mrr add

mrr add r.-4.2.7rg

Adds the specified region as a reset region so that it will be wiped after a specific reset command is given. If you are in-game, the regionFileName is optional, as CPM will calculate your current region file automatically.

If you wish to add a different region file to the list, you can enter it manually.

**mrr add \<w\_boundary\> \<e\_boundary\> \<n\_boundary\> \<s\_boundary\>**

mrr add 1150 1100 200 150

Marks all reset regions that are touched by the specified rectangle for reset. If the given rectangle is even 1 unit inside a region, that region is marked for reset.

_This command is only available in CPM 5.29 and above._

mrr list

Lists all regions currently marked for reset, if any.

**mrr notificationtext "\<entertext:exittext\>"**

mrr notificationtext "Entering a reset region.:Exiting a reset region."

Specifies the text displayed to the player when they enter and exit a reset region. Make sure to include the ':' symbol between the texts, with quotes only at the beginning and end.

**mrr remove \<optional:regionFileName\>**

mrr remove

mrr remove r.-4.2.7rg

Removes the specified region as a reset region from the list that will be wiped after a specific reset command is given. If you are in-game, the regionFileName is optional, as CPM will calculate your current region file automatically.

If you wish to remove a different region from the list, you can enter it manually.

**mrr remove \<w\_boundary\> \<e\_boundary\> \<n\_boundary\> \<s\_boundary\>**

mrr remove 1150 1100 200 150

Removes any regions that are touched by the specified rectangle from the reset region list. If the given rectangle is even 1 unit inside a region, that region is removed from the list.

_This command is only available in CPM 5.29 and above._

mv / mvw

Moves the specified player to another player, to specified coordinates, or to a waypoint.

**mv \<FROM:steamID/playername/entityid\> **\<TO:steamID/playername/entityid\> \[opt:fo\]****

mv Corran Prisma501

mv Corran Prisma501 fo

Moves the player specified first, to the player specified second. Partial names can be used if specifying the player name.

*   If the From player is offline, the To player's coordinates will be recorded, and the From player teleported to that spot when they come back online.
*   If the To player is offline, the From player will be teleported to the To player's last known coordinates.

Adding the 'fo' parameter will move the specified player to the target player, but only if they are in-game friends. This is useful for creating a custom command that acts as a friend-to-friend teleport feature.

_This command is only available in CPM 5.29 and above, and the 'fo' parameter is only available in 8.4 and above._

**mv \<steamID/playername/entityid\> **\<East/West Coordinate\> \<North/South Coordinate\>****

mv Corran 500E 1950N

mv Corran 1160W 5440S

Moves the player specified first, to the specified coordinates. Partial names can be used if specifying the player name. If the player is offline, they will be teleported to these coordinates as soon as they log in.

_This command is only available in CPM 5.29 and above._

**mvw \<FROM:steamID/playername/entityid\> **\<waypointname\>****

mvw 171 murdertown

mvw 76561197961408188 murdertown

mvw Corran murdertown

Moves the specified player to the specified waypoint. This waypoint must already exist. If the player is offline, they will be teleported to the waypoint coordinates as soon as they log in.

_This command is only available in CPM 5.29 and above._

mvw listwaypoints

  

Outputs the list of all existing waypoints int he database.

_This command is only available in CPM 5.29 and above._

oldlcb

For A17 servers, enables A16 and previous LCB-style behavior, i.e. multiple claims, and allows the admins to configure a hard limit for total LCBs.

**oldlcb \<true/false\>**

oldlcb true

oldlcb false

Enables or disables the A16 style LCB management system.

**oldlcb \<max claimcount\>**

oldlcb 4

Sets the limit of placed LCBs when enforcing the A16 style ruleset.

oldlcb

Outputs whether the oldlcb command is enabled or not, and the configured maximum claim block count.

**ownbike \<entityID\> \[alias: ob\]**

ob 123456

Takes ownership of the specified minibike entity.

overridechatname \[alias: ocn\]

Overrides the player's chat name with a new value.

**ocn \<steamID/playername/entityid\> \<new name\>**

ocn 76561197961408188 NewGuy

ocn Corran NewGuy

ocn 171 NewGuy

Changes the specified player name to the new name value.

**ocn \<steamID/playername/entityid\> clear**

ocn 76561197961408188 clear

ocn Corran clear

ocn 171 clear

Clears the chat name override from the specified player.

own

Sets the owner of an entity to the specified player.

**own \<x\> \<y\> \<z\> \<newowner\_entityid\>**

own 1150 50 500 171

Sets the entity at the specified coordinates to be owned by the new player entity ID. This command allows you to remotely set an owner for an existing entity.

**own \<x\> \<y\> \<z\>**

own 1150 50 500

Sets the entity at the specified coordinates to be owned by you.

**own \<entity\_id\> \<entity\_id\_new\_owner\>**

own 171 20501

Transfers the ownership of a secure loot container below the first entity owner, to the second entity owner.

**own \<entity\_id\_new\_owner\>**

own 20501

Transfers ownership of a secure loot container below yourself to the new owner.

**own**

Transfers ownership of a secure loot container below you, to yourself.

**pfb \<qty\>**

pfb 0

pfb 20

Configures the manage falling block functionality to prevent large server lag spikes from drop mining or collapsing of objects that obey structural integrity and gravity, such as buildings.

When PFB is set to a value higher than zer0, falling blocks will simply disappear instead of falling to ground. The value set with the command determines how many falling blocks are required to trigger a console log notice.

_20 is the suggested value for large-drop detection._

_This command is only available in CPM 5.35 and above, and was renamed in 5.38 from 'mfb' to 'pfb' along with the expanded functionality of always blocking falling objects._

playerchatmaxlength \[alias: pcml\]

**pcml \<steam id/player name/entity id\> \<chat length\>**

pcml 76561197961408188 128

pcml Corran 128

pcml 171 128

Configure the maximum chat text length for a specified player.

protectplayer \[alias: protect\]

Creates a protective bubble the specified player that kills all zombies that enter it.

protect

Creates a protective bubble around yourself that will kill all zombies that enter it.

**protect \<steamid/playername\>**

protect 76561197961408188

protect Corran

Creates a protective bubble around a target player that kills all zombies that enter it.

**release \<steamID/playername/entityid\>**

release 76561197961408188

release Corran

release 171

Releases a player from the reverse claim block called 'jail'.

**remitem \<playername/entityid\>**

remitem Corran

remitem 171

Removes the items from the secure storage container below the specified player.

**repairtrees \[alias: rt\]**

Detects and optionally repairs bugged trees that have no remaining health but can still be harvesteted or hit for XP.

_This command is only available in CPM 7.1 and above._

rt

Scans the world for bugged trees and reports them.

rt repair

Scans the world for bugged trees and repairs them.

removelandprotection2 \[alias: rlp2\]

Removes a land claim protection block _without_ having to be in the region. This command will load/unload the region file automatically.

**rlp2 \<steamid\>**

rlp 76561197961408188

Removes all land claim blocks for the specified player's Steam ID

**rlp2 \<x\> \<y\> \<z\>**

rlp2 1100 50 380

Removes the land claim block at the coordinates that are specified.

rlp2 expired

Removes all expired land claim protection blocks.

_This command is only available in CPM 5.35 and above._

**rlp2 nearby \<length\>**

rlp2 nearby 128

Removes all land claim blocks within the specified radius.

_The default radius is 64._

resetunclaimedregionsnow

Kicks all players, saves the world, and reboots immediately. During the reboot, all areas of the map which are NOT marked for reset will be erased.

This is the _inverse_ of the [Reset Regions](https://confluence.catalysm.net/display/CPM/Functional+Overview) functionality, because all areas that are not a reset region will be wiped.

This command can also be triggered as a parameter of the _shutdownba_ command.

resetregionsnow

Immediately executes a server shutdown and reboot that will regenerate marked reset regions.

_This command takes effect immediately and no warnings are given._

**say2 "\[hexcode\]Name\[-\]" "Message"**

say2 "\[0FAD32\]Superbot\[-\]" "Superbot says hello."

Broadcasts a message in chat, with options to configure the name the message is sent from, and the color of the name in the chat message.

Note that the name and message are separated by " symbols to clearly identify the 'name' the message is sent by.

_This command is only available in CPM 5.31 and above._

**pm2 \<from:steamid/playername/entityid\> \<to:steamid/playername/entityid\>**

pm2 76561197961408188 76561197935745735 "This is a PM."

pm2 Corran Catalysm "This is a PM."

pm2 171 176 "This is a PM."

Sends a message privately to a player, with the option to specify the sender's name.

**serverchatname \[alias:scn\]**

scn ServerBot

Configures the server-name prefix for when the server makes announcements in chat.

_This command is only available in CPM 5.32 and above._

**setdeathcount \<steam id\> \<count\> \[alias:sdc\]**

sdc 76561197961408188 99

Sets the death count for the specified Steam ID's account to the value specified.

_This command is only available in CPM 5.35 and above._

**setplayerstatus \<playername/entity id\> \<status\> \<value\> \[alias: sps\]**

sps Corran zkill 100

sps 171 pkill 50

Configure the values for Player Kills or Zombie Kills for a specified player.

**setpundosize \<value\>**

setpundosize 5

Configures the amount of times 'pundo' can be run in a row. Higher numbers take more memory and can be impactful to system resources.

  

  

**showinventory2 \<playername/entity id\> \<optional:tag\> \[alias:si2\]**

si2 Corran CSMM

si2 171 CSMM

Show the inventory of the player given by his SteamID, player name or entity id. Optionally, specify a tag that is included in each line of the output. In this case output is designed to be easily parseable by tools.

shutdownba \<minutes\> \<optional:reset\> \<optional:resetunclaimed\>

This command starts a Bloodmoon-aware automated shutdown with the specified number of minutes. If a Bloodmoon has started, the shutdown process will wait until 10AM the morning after the event, and then start the timer, allowing players time to loot following the horde. Prior to the shutdown, players will be kicked and world will be saved.

Optional flags for the shutdown include [resetting marked regions](/pages/createpage.action?spaceKey=CPM&title=abc1&linkCreation=true&fromPageId=1114588), as well as the opposite command, resetting all regions that are _not_ marked for reset.

Entering 0 for the minute parameter will check for a blood moon, and if none is found, immediately start the save/kick/shutdown process.

**shutdownba \<minutes\>**

shutdownba 10

This command starts a Bloodmoon-aware shutdown with 10 minute timer. Prior to the shutdown, players will be kicked and world will be saved.

_Note: this version does not reset marked region files._  

**shutdownba \<minutes\> reset**

shutdownba 10 reset

This command starts a Bloodmoon-aware shutdown with 10 minute timer and automatically [resets marked regions](/pages/createpage.action?spaceKey=CPM&title=abc1&linkCreation=true&fromPageId=1114588). Prior to the shutdown, players will be kicked and world will be saved.

**shutdownba \<minutes\> resetunclaimed**

shutdownba 10 resetunclaimed

This command starts a Bloodmoon-aware shutdown with 10 minute timer. Prior to the shutdown, players will be kicked and world will be saved.

Unlike the 'reset' version above, anything marked for reset will be saved, and all unmarked areas will be wiped.

  

_This command is only available in CPM 5.34 and above._

targetedhorde \[alias: sh\]

  

Spawns a horde on the targeted player or coordinates, with the specified amount of zombies.

**teleportplayerhome \<steam id/player name/entity id\> \[alias: teleh\]**

teleh 76561197961408188

teleh Corran

teleh 171

Teleport the specified player to their bedroll.

**th \<steam id/player name/entity id\> \<qty\>**

th 76561197961408188 10

th Corran 10

th 171 10

Spawns a horde on the specified player, with the specified amount of zombies.

**th \<x\> \<y\> \<z\> \<qty\>**

th 1100 50 380 25

Spawns a horde at the specified coordinates, with the specified amount of zombies.

tprotect

Creates a safe zone at the specified coordinates that prevent any entities from damaging anything within the zone, similar to a trader's protected space.

  

_Note: tprotect requires a Y-axis (height) coordinate, but the safe zone generated is always bedrock to sky, regardless of the Y coordinate input._

This command was called 'safe' prior to A17.

**tprotect \<add/del\> \<x1\> \<x2\> \<y1\> \<y2\> \<z1\> \<z2\>**

tprotect add 1100 1150 50 75 300 350

tprotect delete 1100 1150 50 75 300 350

Creates a safe zone at the specified coordinates using the dimensions given.

**tprotect \<x\_dst\> \<y\_dst\> \<z\_dst\>**

tprotect 500 50 500

Creates a safe zone, starting with the block directly in front of you, heading due north. The X position specifies the distance ahead, the Z position specifies the width, and the Y position specifies the height of the region. All three values can be negative to work in the opposite direction.

**tprotect \<p1/p2\> \<add/delete\>**

tprotect p1

tprotect p2 \<add/delete\>

Creates a safe zone within the contents of a region by defining the opposing corners of the rectangle. If 'p1' and 'p2' are on the same altitude, the copy-region will be one-block high, otherwise it will be as high as the Y-offset between 'p1' and 'p2'.

**tp2bag \<steam id/player name/entity id\>**

tp2bag 76561197961408188

tp2bag Corran

tp2bag 171

Teleports the specified player to their most recent death bag.

traderlist

Outputs the list of traders on the map.

unlockall

Unlocks all secured entities in the currently-loaded map for yourself. Entities in regions/chunks that are not currently loaded may require this command to be re-run when you get near them.

**w2l \<text\>**

w2l "Test message 123"

_Output appears as:_

2019-01-20T11:50:37 10411.801 INF Test message 123

Writes text to the server console log. Useful for creating log lines that include specific words in order to trigger CSMM Claim notifications, or mark when specific events occur.

  

_This command is only available in CPM 8.2 and above._

**wi \<steamid\>**

wi 76561197961408188

Erases the target player's inventory, including all items on the belt, bag, and equipped as armor/accessories. Useful for players who have the 'stuck item' glitch where they cannot remove equipped or stored items, or for players who have bugged quest items permanently stuck in their bag.

wlf

When executed by an admin or CSMM custom command, this command adds or removes all in-game friends of the specified player from any land claims that the specified player owns. This can be used to automatically permit entry to a procedurally generated advanced claim.

**wlf add \<steam id/player name/entity id\>**

wlf add

wlf add Corran

wlf add 171

Adds all in-game friends of the specified person to all whitelists they own.

**wlf del \<steam id/player name/entity id\>**

wlf del

wlf del Corran

wlf del 171

Removes all in-game friends of the specified person to all whitelists they own.

wpc

Waypoint control command used to add, delete, and list all waypoints.

**wpc add \<name\> \<x\> \<y\> \<z\>**

wpc add serverLobby 150 31 2300

Creates a waypoint at the specified coordinates, using the name provided in the command.

**wpc remove \<name\>**

wpc remove serverLobby

Deletes the specified waypoint from the server.

wpc list

Lists all available waypoints.

This is a LOT of stuff to go through. Still need help? Come visit us on Discord over at the [Catalysm Dev Server](https://discord.gg/QjKseA)

