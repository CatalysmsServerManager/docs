---
title: Console commands
---

| Command                                                  | Description                        |
|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| airdrop                                                  | Send a supply crate to everyone that is online. If deadly air drop is enabled this can lead to ambushes.                            |
| airdrop \<playername\>                                   | send a supply crate to specified player.                                                                                            |
| cbi \<playername\>                                       | manual check online players for bad items                                                                                           |
| cbi \<additem\> or \<addplayer\>                             | adds an item to bad list or player to ignore list. ignored players wont alert on found bad items                                    |
| cbi removeitem \<item name\> or removeplayer \<player name\> | remove items/players from bad/ignore list                                                                                           |
| cbi listp or listb                                       | list all items/players on bad/ignore list                                                                                           |
| cbi checkon or checkoff                                  | turns on/off the auto check for bad items                                                                                           |
| cbi plevel \<level #\>                                     | sets permission to be exempt from item check. must be a valid integer.                                                              |
| cbi autoban                                              | turns on/off auto banning if player is found with bad items. Use banlist or  bl to view/edit the banned players from failed checks. |
| ddrop                                                    | Lists available settings for deadly air drop.                                                                                       |
| ddrop \<chance\> \<zombie list\> \<zcount\>                    | Usage: ddrop chance(number from 1-100) default or custom(which zombies to use) zcount(number of zombies to spawn)                   |
| ddrop settings                                           | List saved settings for deadly airdrop                                                                                              |
| ddrop on or off                                          | Turn on or off deadly air drops                                                                                                     |
| ddrop include \<ferals\> or \<radiated\>                     | Adds ferals or radiated to default list. Can use both but must be done one at a time.                                               |
| ddrop remove \<ferals\> or \<radiated\>                      | Removes ferals or radiated from default list.                                                                                       |
| sd                                                       | Screamer detection - will list available options for sd usage.                                                                      |
| sd on or off                                             | will turn screamer detection on or off.                                                                                             |
| tspy                                                     | Teleports you to within 50m of a player                                                                                             |