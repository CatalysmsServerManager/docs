---
title: CSMM Functions
---

# Functions

Functions are actions you can do inside the execution of a custom command.

### wait(x)

Will wait x seconds before continuing with command execution. Warning: you should not use this for long delays. Whenever CSMM restarts, it will forget about commands that are still running.

Example:

```
pm ${player.steamId} "You will be teleported in one minute."; wait(60); cpm-mvw ${player.steamId} home
```

### addCurrency(playerId, amount)

With this function, you can add or subtract currency from a players balance.

Examples:

```
pm ${player.steamId} "Thanks for your vote!"; addCurrency(${player.id}, 50)

addCurrency(${player.id}, -500); teleh ${player.entityId}
```

### setRole(steamId, role)

Sets a players role. The role parameter is the name of the role, this has to be **exactly** the same. This can be used if you have an \$adddonor command, in the vote reward command to give voters access to special commands, etc.

Example:

```
setRole(${player.steamId}, Donator)
```

### sendDiscord(channel, message)

Sends a discord message via the CSMM bot. Note that you must have already authorized the bot in your Discord server.

In order to use a channel, role or user in this command, you must identify the Discord ID for the object. This is the unique number assigned to the object and will persist when name changes etc. are made. There are two methods to identify these IDs:

#### Method 1 - Developer Mode

In your Discord **User Settings**, go to **Advanced** and enable **Developer Mode**. You can now right-click on an object in your server and use the menu option **Copy ID**.

For a user ID, right-click the user in the server user list and select Copy ID. You will need to include the <# and > in your message.

For a role ID, go into the **Server Settings**, go to **Roles**, right-click the role and select Copy ID. You will need to include the <# and > in your message.

To identify a channel to send your message to, right-click the channel in your server's channel list and select Copy ID. You should only include the number, excluding the <# and >, in the function - see the example below.

#### Method 2 - Backslash in chat

For a channel ID, send a message within your Discord server using the format `\#channel-name`. The message will appear in the chat window with the channel ID rather than its display name. Copy this number **excluding the <# and >** to set the channel you wish your Discord message to appear in - see the example below.

To get a member or role ID, send a message within your Discord server with the format `\@username` or `\@role`. The message will appear with the user's discord ID. Copy this ID **including the <# and >** into your message to mention the user.

:::warning
If you are using handlebars elements within your message, you may find that the system converts some special characters to HTML entity codes, e.g. \&\#27\; for an apostrophe. To prevent this, use triple curly braces instead of the usual double curly braces, e.g. <code v-pre>{{{player.name}}}</code>
:::

Example:

```
sendDiscord(719405252740197044, "${player.name} has reached level 100!")
```
