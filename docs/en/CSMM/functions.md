---
title: CSMM Functions
---

# Functions

Functions are actions you can do inside the execution of a custom command.

### wait(x)

Will wait x seconds before continuing with command execution. Warning: you should not use this for long delays. Whenever CSMM restarts, it will forget about commands that are still running.

Example:
```
pm \${player.steamId} "You will be teleported in one minute."; wait(60); cpm-mvw \${player.steamId} home
```

### addCurrency(playerId, amount)

With this function, you can add or subtract currency from a players balance.

Examples:
```
pm \${player.steamId} "Thanks for your vote!"; addCurrency(\${player.id}, 50)

addCurrency(\${player.id}, -500); teleh \${player.entityId}
```

### setRole(steamId, role)

Sets a players role. The role parameter is the name of the role, this has to be **exactly** the same. This can be used if you have an \$adddonor command, in the vote reward command to give voters access to special commands, etc.

Example:
```
setRole(\${player.steamId}, Donator)
```

### sendDiscord(channel, message)

Sends a discord message via the CSMM bot. Note that you must have already authorised the bot in your Discord server.

To identify a channel, send a message within your Discord server using the format `\\#channel-name`. The message will appear in the chat window with the channel ID rather than its display name. Copy this number (excluding the <# and >) to set the channel you wish your Discord message to appear in.

To mention a member, you will need the member's ID. This is similar to identifying the channel: send a message within your Discord server with the format `\\@username`. The message will appear with the user's discord ID. Copy this ID **including the <# and >** into your message to mention the user.

To mention a channel, the process is almost identical to mentioning a user. Send a message within your Discord server with the format `\\@rolename` and copy the resulting string into your message to mention a role.

:::warning
If you are using handlebars elements within your message, you may find that the system converts some special characters to HTML entity codes, e.g. \&\#27\; for an apostrophe. To prevent this, use triple curly braces instead of the usual double curly braces, e.g. `{{{player.name}}}`
:::

Example:
```
sendDiscord(719405252740197044), "${player.name} has reached level 100!")
```
