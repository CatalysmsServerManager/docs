---
title: Custom commands syntax
---

Custom commands are a way to extend the functionality of CSMM and completely tailor your experience per server. The syntax for these is used inside custom commands, hooks and the gimme command

# Getting started tutorial

This tutorial will teach you the basics of the system. After this guide, you will be able to get started writing your own commands.  

::: tip
The examples will assume you have set $ as the prefix. You can change the prefix in your ingame commands settings.
:::


## Hello world

To create a custom command, you must choose a name for your command. This is what players will type to trigger the command. For example: you select "helloworld" as name, then you will type "$helloworld" ingame to trigger it. Next, you need to enter the command(s) that will be executed on your server. This can be any console command that is available from remote sources. (layman's terms: if you can execute the command via telnet, you can use it).


Now you can go ingame and try it out! 

::: warning
Note: If a custom command has same name as an existing CSMM command, the existing CSMM command will always take precedence. the custom command never gets executed.
:::

## Built-in variables

You can add dynamic values to your commands. This is useful if you need to do something specific to the executing player like PMing the reply instead of a global message. Let's extend our hello world command.Every variable looks like this: "${variableName}". This might look familiar to people who know about template literals. When a command is executed, CSMM will look for exact matches to the built-in variables (capitalization matters!). If found, it will replace the variable with the value relating to the executing player. So if you use ${steamId}, it will be replaced by the Steam ID of the player who triggered the command.

Great! The server sent us a PM instead of displaying the message to everyone on the server.

### New variables

CSMM now uses a new syntax for variables. You can access these variables with 
- ${date}, 
- ${time}, 
- ${player.name}, 
- ${server.ip},
- ${player.positionX}, 
- ... 

See the list below for a list of all available variables with examples of their contents

```JSON
{
  "date": "2019-03-16",
  "time": "16:18:46",
  "uptime": "612525.066",
  "msg": "Executing command 'w2l testing' by Telnet from 127.0.0.1:37284",
  "trace": "",
  "type": "Log",
  "player": {
    "createdAt": 1552652314408,
    "updatedAt": 1552753112921,
    "id": 1,
    "steamId": "76561198028198341",
    "entityId": 171,
    "ip": "192.168.1.1",
    "country": "BE",
    "currency": 30,
    "avatarUrl": "",
    "name": "Catalysm",
    "positionX": 1886,
    "positionY": 83,
    "positionZ": 1866,
    "inventory": null,
    "playtime": 39645,
    "lastOnline": "2019-03-16T14:35:52Z",
    "banned": false,
    "deaths": 0,
    "zombieKills": 27,
    "playerKills": 0,
    "score": 27,
    "level": 18,
    "lastTeleportTime": "2019-03-15 13:17:44.245",
    "server": 1,
    "user": 1,
    "role": 1
  },
  "server": {
    "createdAt": 1552652314131,
    "updatedAt": 1552750573472,
    "id": 1,
    "name": "CSMM Dev",
    "ip": "192.168.0.1",
    "webPort": 28005
  }
}
```

## Multiple commands

To execute several commands inside one custom command, you have to separate them with ";".

That's it! You're done! You now have a grasp on the basics. Check out some configuration examples if you need some inspiration.

# Advanced

## Custom arguments

Let's make our hello world command a bit more dynamic!

Argument name is what you will use to substitute the value in your command. In the example, we will use ${name}
Argument type is used for validation (currently only text works, still a WIP )
An argument can be required or optional. If you deselect required, you must provide a default value.

As you can see, when we pass a parameter "dave" to the command, it will say hello to Dave! When we do not add a parameter, it will use the default value.

## Functions

Functions are actions you can do inside the execution of a custom command.

### wait(x)

Will wait x seconds before continuing with command execution. Warning: you should not use this for long delays. Whenever CSMM restarts, it will forget about commands that are still running.

### addCurrency(playerId, amount)

With this function, you can add or substract currency from a players balance. For example: addCurrency(${player.id}, 50)

### setRole(steamId, role)

Sets a players role. The role parameter is the name of the role, this has to be **exactly** the same. This can be used if you have a $adddonor command, in the vote reward command to give voters access to special commands, ...


## Legacy variables

These were the first variables added to CSMM. They are still in the application for backwards compatibility, but it is recommended to use the new syntax

- ${steamId} 
- ${entityId} 
- ${playerName} 
- ${balance}
- ${posX} 
- ${posY} 
- ${posZ}