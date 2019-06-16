# PvPvE Server Configuration  

Traditionally, 7 Days To Die servers are configured as PVP servers, or PVE servers, but using a combination of CSMM and CPM, you can create a special kind of hybrid server with areas where players can kill each other freely, and areas where killing of other players comes with a configurable punishment. There are several important criteria that admins must be aware of when configuring a server in the PvPvE style of gameplay:

*   The CPM Mod is required, and at least version 8.3 is recommended in order to prevent several bugs.
*   The server is not both a PVP and PVE server. It is solely a PVP server that has a special area where kills are punished because they are supposed to be forbidden. PVE kills are not prevented, they are punished. As an Admin, you will need to watch for repeat PVE kills and punish those who are griefing in your PVE space.
*   It is possible to limit punishment for kills to players who are not friends, or punish anyone who kills in PVE. The former option prevents punishment for friendly fire incidents.
*   The PVE protection zone helps limit PVE player kills, but it does not do anything against base raiding or griefing. The only way to do prevent this is to configure Land Claims blocks to provide 100% protection, or allow the use of Advanced Claims to prevent access to player bases.
*   The PVE/PVP border is a solid line on the map, but the ability to kill people across this line depends entirely on the player's visibility of eachother across this line. It is possible for players with better computers to see other players across the line and still be able to kill them from a distance. See [ThePVP/PVEKillRules](#PvPvEServerConfiguration-ThePVP/PVEKillRules) section for more information on this.

With these restrictions understood, you can begin to configure your server.


## Server Configuration File Settings

There are several configuration settings that define the behavior of a PvPvE server.

### PlayerKillingMode

`<property name="PlayerKillingMode" value="3" />`

This setting has 4 possible values:

*   0 = No Killing
*   1 = Kill Allies Only
*   2 = Kill Strangers Only
*   3 = Kill Everyone
    

'0' is typical of a PVE server, and '3' is typical of a PVP server. Ideally, for PvPvE, you would use either '2' or '3'. If you want to punish friendly fire kills in a PVE zone, you must utilize a value of '3' for this setting. If you want friendly fire to be impossible in general, you should use '2' instead.

### LCB Settings

```
<property name="LandClaimDecayMode" value="2"/>  
<property name="LandClaimOnlineDurabilityModifier" value="0"/>  
<property name="LandClaimOfflineDurabilityModifier" value="0"/>
```

If you wish to _completely_ prevent griefing behavior in your PVE zones, you should configure your LCB settings as shown above. Be aware, however, that these settings prevent anyone from damaging a base protected by a land claim block, even in the PVP area. If you wish to allow bases in the PVP zone, you will have to use different settings, and utilize CSMM Location Tracking to chase down people who grief bases in the PVE zone.

  

## PVE Claim Regions

The PVE region claim is the most complicated part of the server setup. A PVE claim is simply a Notify [Advanced Claims](https://confluence.catalysm.net/display/CPM/Advanced+Claims) with an extra parameter, known as the punishment parameter. A PVE claim looks something like this:

ccc add pveNPFZone \-4096 2500 4096 -4096 1 "notify:You are inside the PVE Zone. Killing of other players in this zone will result in instant death.:You are in the PVP Zone. Killing of other players is permitted.:kill ${entityId}"

  

There's a lot going on in this claim command, so we'll take it section by section.

*   pveNPFZone - This is the name of the PVE area. It can be anything you want it to be, but must be unique, and should be fairly easy to understand just by the name. Note the 'NPF' part, we'll come back to that later.
*   \-4096 2500 4096 -4096 - The coordinates of the PVE claim. On a 8K map, the coordinates to the left mark everything from 4096W to 2500E as the PVE region. Everywhere else on the map is still PVP. 

![](/assets/images/CPM/pvpveConfiguration/9797735.png)

You can use ANY coordinates for your PVE region, you aren't restricted to East-West or North-South. See the Examples section below for some more coordinate combinations.

  

*   1 - The claim access level. Simply put, the PVE rules only apply to players of this access level, and any less-powerful levels. Setting this to '1' means that the PVE punishment will not apply to Admins (level 0) if they kill someone in the PVE area.
*   "notify:You..." - The notify claim code. This one has several parts, so let's break it down even more. The structure of a PVE claim looks like this: "notify:EnterMsg:ExitMsg:PunishCommands". 
    *   Notify - Mark this claim as a Notify claim, which sends messages to players when they enter or exit the region. Normal notify claims have Enter and Exit messages, and PVE claims have an extra section called Punishment.
    *   Enter Message - The message players get when they enter the PVE region. _You are inside the PVE Zone. Killing of other players in this zone will result in instant death._ This message can be anything you wish, but should notify players they are in a killing-punishment zone.
    *   Exit Message - The message given to players when they exit the PVE zone and re-enter the PVP zone. _You are in the PVP Zone. Killing of other players is permitted._As before, it should clearly indicate that killing is now permitted.
    *   Punish Commands - The console commands used to punish players who kill others in the PVE region. kill ${entityId} The simplest punishment command is to instantly kill the offending player, as shown here. You can execute multiple commands at once by separating them with a semicolon, like this: _command1;command2;command3_. _Any_ console command that can be executed by the server works here.

**Note:** Each segment (enter/exit/punish) is separated by a colon ( : ), while multiple separate punishment commands are separated by a semicolon ( ; ), make sure you get these characters correct!

  

## The PVP / PVE Kill Rules

![](/assets/images/CPM/pvpveConfiguration/9797739.png)

Once you've established your PVE zone, it's important to understand how punishment works for kills. The logic is very simple: if both players are in the PVE zone and one kills another, the killer is punished. Using the above map example, we have the following slice of the map shown in the screenshot. The left side (green) is PVE, and the right side (red) is PVP. Given that setup, the following kill scenarios can occur:

| Killer | Victim | Result                                                         |
|--------|--------|----------------------------------------------------------------|
| Green  | Red    | No punishment, both players not in green zone.                 |
| Red    | Green  | No punishment, both players not in green zone.                 |
| Green  | Green  | Killer is punished because both players are in the green zone. |
| Red    | Red    | No punishment, both players not in green zone.                 |

It makes sense that PVP to PVP kills are always permitted, but you should notice that it doesn't matter who kills who if the players are on opposite sides of the line. PVE players can kill PVP players, and PVP players can kill PVE players. This means that if you are a PVE player and want to avoid any chance of PVP, you need to stay away from the border. There's no fixed distance that is safe; if you are in PVP and can see a PVE player across the line, you can try to kill them. Most players can see approximately 200 units away on a clear, flat space, but weapons are rarely accurate at that distance. As a result, if you stay at least 200 units away, you are _usually_ safe.

  

## The DMZ Warning Zone \[optional\]

![](/assets/images/CPM/pvpveConfiguration/9797738.png)

This section is optional, but is intended to help your players understand where they are in the world. In the previous section, it explains that simply being within _visible range_ of the PVE/PVP line can be deadly. However, players themselves can't actually _see_ the border, so unless they're constantly watching their map, they have no real way to know how close they are. The DMZ Warning Zone solves that problem.

Using a standard Notify claim, you can place a warning message around the PVE/PVP line so that people know they're getting close. In other words, as people near the edge, it will warn them to be cautious; players in PVE getting close may be vulnerable to being killed, and players in PVP that are getting close to the line might accidentally get punished if they step over the line and kill someone.

`ccc add DMZ 2300 2700 4096 -4096 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."`

Using the above example for the PVE/PVP line at 2500E, this DMZ warning starts at 2300E and ends at 2700E, giving a 200 meter buffer on both sides of the line to warn players they are getting close. The message is not different depending on which side of the line you're on, it just warns you that the line is nearby. Also, the DMZ warning does not change the rules of PVE punishment in any way, it ONLY notifies the players about their proximity to the line.

Note that the access level of this claim is -1 instead of 1; it will apply to all players, including Admins. This is simply so that Admins also receive the warning when they're near the edge. This claim does not trigger punishments.

  

## The No Punish Friends (NPF) Parameter \[optional\]

This feature is only useful on servers with a PlayerKilling mode of 3 where anyone can kill anyone at any time, even if the two players are allied. Leaving PKM at 3 encourages players to be more careful because they can accidentally kill their allies in huge fights. However, on servers with a PKM of 3, you may not want to _also_ punish the killer for accidentally killing an ally. The NPF parameter prevents the punishment command from going off if a player kills another player who they are in-game friends with. Note, they must be friends, not just groupmates. 

Configuration is very simple: when creating your PVE zone, add the letters 'npf' (case sensitivity does not matter) anywhere in the claim name. In the example above 'pveNPFZone', allied players who kill each other will not be punished. Simply changing the name to 'pveZone' would remove that protection.

  

## Example PVE Zone Configurations

### East-West

See above documentation. Simply change the second number of the first set of coordinates (2500) to the point where you want the line to be.

### North-South

Similar to the East-West setup. Change both of the numbers in the second set of coordinates to match where you want your line to be. This screenshot has the line at 1100S.

![](/assets/images/CPM/pvpveConfiguration/9797741.png)

Commands:

```
ccc add pveNPFZone -4096 4096 4096 -1100 1 "notify:You are inside the PVE Zone. Killing of other players in this zone will result in instant death.:You are in the PVP Zone. Killing of other players is permitted.:kill ${entityId}"  
ccc add DMZ -4096 4096 -900 -1300 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."
```

  

### Inner Square

In the screnshot below, the inner 2K diameter square is PVE, the next 200 units in all directions are the DMZ zones, and the remainder of the map is PVP. Note the black lines on the DMZ zones; there are 4 separate zones that make up the area around the inner square. Players who move around the 4 corners of the DMZ area will receive a message each time they move from one zone to the next, and there's no way to prevent this.

![](/assets/images/CPM/pvpveConfiguration/9797740.png)

Commands:

```
ccc add pveNPFZone -1000 1000 1000 -1000 1 "notify:You are inside the PVE Zone. Killing of other players in this zone will result in instant death.:You are in the PVP Zone. Killing of other players is permitted.:kill ${entityId}"  
ccc add DMZLeft -1200 -1000 1200 -1200 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."  
ccc add DMZRight 1000 1200 1200 -1200 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."  
ccc add DMZTop -1200 1200 1200 1000 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."  
ccc add DMZBottom -1200 1200 -1000 -1200 -1 "notify:You are inside the DMZ right now. Cross-border kills are possible, so be careful!:You have exited the DMZ. Cross-border kills are no longer possible."
```