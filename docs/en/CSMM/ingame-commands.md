# Ingame commands 

## Enabling ingame commands

To enable ingame commands, visit your servers settings page and scroll down to the ingame commands section. Enable the module with the button and set the prefix you want. 

:::tip
For best results, choose a prefix that is not shared with other mods or server managers. 

In the rest of this article, we will assume your prefix is $.
:::


## Commands reference

The easiest way to get more info on a command is to use the `$help` ingame command. This will give you a list of all available commands, if you want more info on a particular command you can use `$help settele`.

### Teleportation

| Command | Description  | Usage |
| --- | --- | --- |
| $settele | Creates a new teleport location at the players current location. | $settele newLocation |
| $renametele | Changes the name of a teleport location | $renametele oldName newName | 
| $listtele | Shows a list of available teleport locations. Optionally takes an argument 'public' that will show public teleports. | $listtele [public] |
| $removeTele | Delete a teleport location. | $removeTele name |
| $tele | Teleport to a certain teleport location.  | $tele name |
| $teleprivate | Sets a teleport as private  | $teleprivate name |
| $telepublic | Sets a teleport to public, allowing other players to use it as well  | $telepublic name |


### Economy

These commands are disabled by default. To enable them, enable the economy module

| Command | Description  | Usage |
| --- | --- | --- |
| $balance | See your current balance. | $balance  |
| $claim | Claim items you have bought in the shop. If the argument `list` is given, it will not claim any items and instead show a list of items ready to be claimed | $claim [list] |
| $pay | Send some currency to another player. The target player can be either a steam ID or a username. | $pay targetPlayer amount |
| $shop | Allows players to view items in the shop and buy them from ingame. If the first argument is `buy`, the item will be bought. Otherwise a list of items will be returned | $shop buy page item $shop page item |



### Miscellaneous

| Command | Description  | Usage |
| --- | --- | --- |
| $calladmin | Create a support ticket | $calladmin pls help im stuck  |
| $gimme | Get a random item, entity or command. An admin must configure possible items via the webinterface before you can use this command | $gimme  |
| $seen | Check when a player was last online. targetPlayer can be either a steam ID, entity ID or a username | $seen targetPlayer  |
| $vote | Claim vote rewards. Admins must configure an API key in settings before this command will work | $vote  |
| $who | 'See who was in your area, You can provide a optional size argument. For most accurate results, try to keep the size as small as possible | $who [size]  |
