---
title: Advanced Claims
---
# Advanced Claims

## Intro

Advanced Claims are a CPM-specific feature intended to allow Admins a more granular control over creating areas for specific purposes. Similar to land claim blocks, Advanced Claims create a zone on the map in which certain rules apply. Unlike a LCB, however, Advanced Claims are specific to a set of coordinates, not based on placing a block in the game. Additionally, Advanced Claims can be set to nearly any size on the map, so long as the shape is rectangular.

## Creating A Claim

All advanced claims are created using the same three methods: either by specifying the 4 corners of the rectangle (individually or by using the p1/p2 syntax), or by specifying a player and then specifying a square-sided radius around them to create the claim in or by using the ClaimCreator WebUI which is HIGHLY recommended for ease of use. Additionally, all claim commands follow the same general syntax, though certain claims have optional things at the beginning or end.

## Special claim names

You are free to choose any name for any type of claim. However, there are some special "tags" you can add to a claimname that will change its behaviour in special ways.

"bmonly(fromHour-toHour)_" : when a claimname contains this "tag" it will become a claim that is only active during bloodmoons between the specified hours "fromHour-toHour". Example: bmonly(20-7)_NoEnemies: this will activate this claim every bloodday from 20:00 until after bloodmoon 07:00.

PVP/PVE claims are created by making a notify claim with "pve" or "pvp" in the name. No player damage can be done while in a PVE claim and playerdamage can be done while in a PVP claim.
Usually you will create PVE claims on a server that has global setting KillingMode for PVP and PVP claims on a server that has global setting KillingMode for PVE.
Example: ccc add PVEzone -10000 10000 10000 0 0 "notify:You are entering a PVE zone!:You are leaving a PVE zone!"
When creating a PVP claim the KillingMode can be configured in CpmSettings.xml (AdvClaims_PVP_KillingMode). Default KillingMode = 3 (kill everybody).

## Understanding Claim Parameters

Generally, claims look something like this:

`ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary>  <accessLevel>  [<type>]`

`ccc add serverlobby 482 580 3084 3000 1`

`ccc add traderSpot -150 225 50 -300 1 openHours:6-14`

The parts of this claim command are as follows:

- Claimid/SteamID - The name of the claim. Inserting a SteamID in this portion of the command will assign the claim to that player, allowing them to use the whitelist commands to manage access. You can also use simple, descriptive names that don't have a SteamID when you want to create admin-managed areas, such as PVE zones or server lobbies.
    - Example: 76561197961408188_myBase
    - Example: 76561197961408188_hostileFree
    - Example: serverlobby
- Claim Boundaries - To specify a claim via a shaped rectangle, you need to specify the 4 corners of the rectangle in a specific order. This process is described below. 
- Access Level - This parameter defines the admin permission level before the claim applies to the player. For example, if you have an in-game permission level of 50 for your donors, and want to create a donor-only area, you would specify 51 for this command, and anyone who was an access level of 51-1000 would not be able to enter this area. This can be useful for creating advanced claims that nobody can enter without permission, except Admins.
- Type - An optional parameter to specify the type of advanced claim for this command. See below for the available types and the extra steps you need to do in order to make each custom type work. If you do not specify the claim type, it will always be a Normal Advanced Claim.

## Command Syntax

The syntax is as follows, depending on the type of command you use: 

### Specify claim using 4 edge coordinates

`ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> [<type>]`

Specifying the claim by entering the 4 boundary coordinates is the most efficient way of entering an exact claim, especially from outside the game or when you are not in the area the claim is being added to.

Here's a potential claim layout:

**Image here**

The green rectangle is the intended size of the advanced claim, and the white coordinates indicate the exact map spot for each of the 4 corners. The red badge letters indicate the order in which you use each of the numbers in the claim. You only need to use each unique coordinate once, and don't have to enter all 4 sets of coordinates, just those 4 values. This is why the south-east corner is not necessary; it only contains coordinates that are the same as at least one of the other three.

The syntax is as follows:

`<w_boundary> <e_boundary> <n_boundary> <s_boundary>`

As a result, the values you would enter are as follows:
482 580 3084 3000 

::: tip 
It's important to remember that you aren't just entering a coordinate that has a W or E in it, you're entering the coordinate from the rectangle that is the furthest in that direction. For example, even though the coordinate is 482 East, 482E is more West than 580E, so 482E is the 'west' boundary, and this is why you use it as the West coordinate. Similarly, 3084N is more North than 3000N, even though both coordinates are North.Note: Also remember that West and South coordinates are negative values. If your left coordinate was 100W, you would enter it as -100. See the example below.In this picture, you have coordinates that are across both the North/South line, and the East/West line. The coordinates for this claim would be as follows. Pay special attention to the negative numbers.-150 225 50 -300
:::

::: warning 
If you enter the claim coordinates backwards (ie, you entered -300 50 instead of 50 -300), the claim will create, but will not work since the script can't properly identify the boundaries.
:::

### Specify claim using p1/p2 syntax

```
ccc p1
ccc p2 <claimid/steamid> <accessLevel> [<type>]
```

P1/P2 is a quick and simple way of specifying a rectangle by specifying the opposite corners of the rectangle. Move to one of the four corners and run the first command, then move to the opposing corner and run the second command.

### Specify claim using the radius command

`ccc radius <radius> <steamId/entityId/Name> <claimid/steamid> <accessLevel> [<type>]`

This version of the syntax is used to to create a square-shaped claim directly around the player who runs it. By doing this, you don't need to know where the boundary coordinates are, but you are also restricted to working only with square-shaped claims. In the screenshot below, the red dot is our target player, Corran, and a radius of 25 is specified.

`ccc radius 25 Corran 76561197961408188_myBase 1`

- The length of a claim side is specified by the radius number '25'. Note that the word 'radius' is still present just before the number; this tells the CCC command to build the claim using a radius.
- The player name to center the claim on is Corran.
- The Steam ID belongs to Corran, and is used to allow him to be able to add/remove players from the whitelist for that claim. 
- The '_myBase' portion is just a way to identify that this particular claim corresponds to his base location. Any text could be used here. 
- Permission level 1 is applied to the claim, which means that anyone with an in-game permission level of 1 or lower will be impacted by this claim; as level 0 players, Admins will ignore this boundary and be able to enter even if they aren't whitelisted.
- No claim type is specified after the permission level; this will be a Normal Advanced Claim as a result.

## Claim Types

There are several different Advanced Claim types available, and the configuration and usage of each type is described on a page specific for that claim type. Below is a summary.

### Normal

This is used for protecting player made structures/bases. The player that owns it can whitelist other players to have access to enter the advanced claim. Players that are not whitelisted will get teleported out of the advanced claimed area if they try to enter, similar to a trader that is closed.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel>
```

accessLevel: permission level that is allowed to enter the claim

whitelist: players that are allowed to enter the claim

### Reversed

This is used for containing players in a specified area. Whitelisting players for a Reversed Advanced Claim will keep them within the boundaries of the claim like a forcefield. If they leave the area, they will be teleported back in.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> reversed
```

accessLevel: required but has no function in this claim

whitelist: players that are not allowed to leave the claim

### Timed

Similar to a Normal claim, but for a specified amount of time. This was requested for a specific PVP situation in mind. If a player was raided, the server owner can grant him some time to recover without the chance of being raided again. After the specified amount of time has passed, this claim will vanish.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> timed:<numbeOfHoursToLive>
```

accessLevel: permission level that is allowed to enter the claim

whitelist: players that are allowed to enter the claim

### Leveled

Similar to a Normal claim, but with the option to define a 'top' and 'bottom' to the claim. A normal claim reaches from bedrock to heaven, but a Leveled claim has a specified height. Designed specifically to protect underground bases (with a normal claim, players walking on ground above the base would get teleported out without knowing what they intruded) or for bases that have public tunnels under them (with a normal claim, players wouldn't be able to use the tunnel under the protected base).
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> leveled:<YcoordHigh>,<YcoordLow>
```

accessLevel: permission level that is allowed to always enter the claim

whitelist: players that are allowed to always enter the claim

### Portal

Allows you to define an area as small as 1 block, along with a maximum trigger height, and any allowed player who passes through the portal area will be teleported to a preset location. 
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> portal:<stepHeight>:<x>,<y>,<z>
```

accessLevel: permission level that is allowed to always use the portal claim

whitelist: players that are allowed to use the portal claim (do "ccc wl add claimname public" to make it a public portal)

### Hostilefree

This is used for creating hostile free areas. All hostiles will despawn in this type of advanced claim. Sleepers inside this claim will not spawn.

:::warning
Traders are marked as hostile by default! If you do not want your traders to dissapear, consider using the [no hostile traders modlet](/assets/modlets/No_Hostile_Traders.zip)
:::
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> hostilefree
```

accessLevel: required but has no function in this claim

whitelist: has no function in this claim

### Openhours

Similar to a Normal claim, but with assigned opening hours, like a trader. Particularly useful to protect lobby or trading areas from being overwhelmed of players attempt to hide there during horde night; set the opening hours to 0400 to 2200 and players will get teleported out if they attempt to enter outside the specified hours.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> openhours:<openFrom>-<openTo>
```

Ex: `ccc add traderSpot -150 225 50 -300 1 openHours:6-14` (only use the nr. of hours like 4-17, 11-4, 22-11)

accessLevel: permission level that is allowed to always enter the claim

whitelist: players that are allowed to always enter the claim

### Notify

This defines a claim area in which players get a configurable private message in chat when they enter or leave the claim area.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> "notify:<enterMsgWithColorSupport>:<exitMsgWithColorSupport>"
```
Exit message is optional. If omitted, a chat message will only show on entering the claim.

accessLevel: required but has no function in this claim

whitelist: has no function in this claim

### Command

Trigger one or multiple console commands when a player enter this claim area. The claim type must be enclosed in double quotes and parameters with spaces within each command must be enclosed in single quotes. Use semicolon ( ; ) to seperate commands. Below is an example shows all 3 supported placeholders (casesensitive): ${playerName}, ${entityId} and ${steamId}:

`ccc add deathzone -10 10 10 -10 0 "command:say '${playerName} has entered the DeathZone!!! mwuhahahaha!';pm ${entityId} 'I wish you luck my friend. Lots of it...';th ${steamId} 30"`

accessLevel: permissionlevel for which the commands will NOT fire when inside claim.

whitelist: has no function in this claim

### Playerlevel

This claim can be used to restrict/grant access to a claim by player level. Built in basic logical expression, plus support for level ranges, allows you to create some very unique settings.Supported operators: <= (and =<), >= (and =>), == (and =), != (and =!) Define ranges by using 2 operators in 1 claim (use & between expressions)Examples:allow levels between 5 and 10: playerlevel:>=5&<=10allow only level 5: playerlevel:=5allow all levels but 5: playerlevel:!=5allow levels lesser than or equal 5: playerlevel:<=5
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> "playerlevel:logicalExpression>"
```

accessLevel: permission level that is allowed to always enter the claim

whitelist: has no function in this claim

### LcbFree
Control abillity to place LCB's within the boundaries of the lcbfree adv. claim. Allow to place LCB's by accesslevel and/or whitelist. If not allowed to place LCB, it will be removed and put back in player inventory. Use lcbfree as type when creating this advanced claim. Violation message is configurable in CpmStrings.xml (AdvClaims_LcbFree).
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> lcbfree
```

accessLevel: permission level that is allowed to place landclaim blocks inside claim

whitelist: players that are allowed to place landclaim blocks inside claim

### AntiBlock
Prevent configurable blocks being placed within the boundaries of the AntiBlock adv. claim. Allow certain blocks to be placed by accesslevel and/or whitelist. If not allowed to place a configured block, it will be removed instantly and the player get a message about it in chat. Use antiblock as type when creating this advanced claim. Violation message is configurable in CpmStrings.xml (AdvClaims_AntiBlock). When disallowing more than 1 block separate the blocknames with ; . Blocknames are casesensitive. You can use fblock to search and find exact blocknames.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> antiblock:block1;block2
```
Example for the type:
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> antiblock:woodFrameBlock;rebarFrameBlock
```

accessLevel: permission level that is allowed to place anti blocks inside claim

whitelist: players that are allowed to place anti blocks inside claim

### Reset
Reset areas on the map on chunk(!) level. Use this claim to very precisely mark areas you want to reset on demand. Use consolecommand rac(resetadvclaim) to actually reset the chunks that are marked with this claim. When creating this claim with ccc consolecommand or CPM Web UI the claim borders will automatically snap to the nearest chunk border. That way the claim always shows exactly what is going to be reset. Advise: resetting chunks is very memory consuming. Better to have multiple smaller claims (city/town level) than few big claims as they will consume more memory when processed. Be aware that the world will be in a time vacuum during any reset. Online players will experience it like X-men member Quicksilver. Use parameter kicklockreboot on consolecommand rac to kick all online players, lock the server during reset and reboot when done.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> reset
```

accessLevel: required but has no function in this claim

whitelist: has no function in this claim

### ProBlock
Prevent placements of blocks other than configurable problocks within the boundaries of the ProBlock adv. claim. Allow non-problocks to be placed by accesslevel, claimownership and/or whitelist. If not allowed to place a configured block, it will be removed instantly and the player get a message about it in chat. Use problock as type when creating this advanced claim. Violation message is configurable in CpmStrings.xml (AdvClaims_ProBlock). When disallowing more than 1 block separate the blocknames with ; . Blocknames are casesensitive. You can use fblock to search and find exact blocknames.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> problock:block1;block2
```
Example for the type:
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> problock:woodFrameBlock;rebarFrameBlock
```

accessLevel: permission level that is allowed to place blocks that are not problocks inside claim

whitelist: players that are allowed to place blocks that are not problocks inside claim

### Landclaim
Only claimowners, whitelisted players and accesslevel allowed players can place any block within this adv. claim. Type= "landclaim". Violation string configurable in CpmStrings.xml (AdvClaims_Landclaim). Auto giveback to placing player.
```
ccc add <claimid/steamid> <w_boundary> <e_boundary> <n_boundary> <s_boundary> <accessLevel> landclaim
```

accessLevel: permission level that is allowed to place any blocks inside claim

whitelist: players that are allowed to place any blocks inside claim
