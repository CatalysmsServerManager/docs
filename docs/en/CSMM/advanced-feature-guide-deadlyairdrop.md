# Practical example: Spawning a horde on supply drops

3rd Shift Mod already includes a feature which spawns a horde when players approach a supply drop. It does this by creating a CPM Command Claim around the air drop. When the claim is activated, the command calls the `cpm-multipleentityspawn` (or `mes`) command to spawn a list of zombies in the area, and then removes the claim.

Entities spawned using `mes` spawn close to the player, but they are not targeted to the player, so as a custom enhancement we will replace this with `cpm-targetedhorde` (or `th`). `th` spawns a number of entities in a radius around the player, all of whom are set to target the player specifically - a much better ambush.

[[toc]]

## Configure 3SM's Deadly Air Drops

To get started, we need 3rd Shift Mod installed, and we will also need CPM installed. For details on downloading these, please join the discord.

Assuming you've got the mods installed and loaded successfully, the next step is to turn Deadly Air Drops on. In the ingame console or CSMM console window, run

```
ddrop on
ddrop 100 default 10
```

Note that the parameters `default` (which uses a default list of zombies to spawn) and `10` (which is the number of zombies to spawn) are not important - we will be overriding these values soon.

You may want to use a lower value for the chance. The value `100` specified here means that every single airdrop will create an ambush.

## Removing the default claim

We now need to create a hook which will identify the claim that is created by Deadly Air Drops, and remove it. To generate this log line, we actually need to run a test server and have a supply drop spawn. If you want to follow along with this for yourself, you'll either need a test server instance OR to have your production server run for long enough that an air drop spawns automatically. There is a console command to spawn an airdrop on the player, but this does not use the same spawner and as a result, does not trigger the Deadly Air Drop code.

If you don't want to go through this yourself, you can trust me: the log line looks like this:

`2021-01-28T14:35:58 18414.761 INF Executing command 'ccc add 629121 -1318 -1298 906 886 -1 "command:pm2 Deadly Air Drop ${entityId} 'You are under attack!';mes ${entityId} 15 @ 24 21 18 12 18;ccc remove 629121"'`



<details> 
  <summary>Output</summary>

```
**Command: eoc**
Let a local player fire a local only console coommand (or any)
Usage:
eoc <Name/EntityId/SteamId> "command param1 param2"
use single quotes for parameters that contain spaces in remote command.
```

</details>
