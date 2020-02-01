# Discord Integration

Created by Catalysm, last modified by Corran on Oct 28, 2018

CSMM has the ability to integrate itself with your Discord server, allowing you to send and receive chat messages to your servers, get statistical information (most kills, playtime, etc.), as well as generate admin-oriented messages that can be sent to a separate hidden room for details about when players connect, disconnect, warnings about players with Global Ban List entries, and more. To do this, you need to enable the Discord bot on your Discord server.

Already have the Discord Chat Bridge integrated and are looking for the next steps? Hop down to the [Administrative Notifications](/en/CSMM/discord-integration.html#administrative-discord-notifications) section to get instructions for adding administrative-type alerts to Discord.

## Configuring the Integration Settings

You must have administrative rights or control over user permissions for your Discord Server in order to execute the installation steps. Be careful who you give permission to for your linked channels.

- Anyone who can type in the Chat Bridge channel can send messages in-game to your 7 Days To Die server. Consider restricting the ability to transmit to this text channel to higher-ranked Discord members, or Admins only. 7 Days has a very limited size chat window, and Discord users can quickly overwhelm it with no way for in-game players to stop it.
- Limit who can see Administrative Notifications from the bot. They sometimes contain privileged information about player's Steam accounts, their IP address, and other normally-hidden info.

1.  In CSMM, browse to your server, and into the Settings area.
2.  Inside Settings, expand the Discord panel.
3.  Click _Add bot to your server_ to trigger the invitation to Discord for Takaro.
4.  In the window that pops up, select your Discord server.
5.  On your server, Takaro will appear.
6.  Once Takaro is present on the server, go back to CSMM and select your Discord server from the dropdown next to the _Select Guild_ button. If you don't see your server listed here, refresh the page.

![](/assets/images/CSMM/discordIntegration/1114552.png)

7.  You will need to create one or more text channels for Takaro to send messages to. Consult [Creating A Channel](https://support.discordapp.com/hc/en-us/articles/206143877-How-do-I-set-up-a-Role-Exclusive-channel-) over at Discord for more information. The linked tutorial includes explanations for public and private channels.
    In this example, a 'chat' channel and an 'admin' channel were created. Normal users can see the 'chat' channel but not transmit to it, and only users with the Discord Role _7 Days Admins_ and above can see the 'admin' channel.

![](/assets/images/CSMM/discordIntegration/1114555.png)

8.  Once the channels exist, you will need to either create a Discord Role for Takaro, or grant the Bot itself permissions to read and write to the channel. Take a look at [Discord Permissions](https://support.discordapp.com/hc/en-us/articles/206029707-How-do-I-set-up-Permissions-) for assistance on this step. Takaro needs these specific permissions Text Permissions:
    - Read Messages
    - Send Messages
    - Embed Links
9.  In CSMM, set the command Prefix for your chat channel. This is the character you add before any instructions to the bot; any lines that begin with this character will not be relayed to the game.  
    For example: typing !serverinfo will tell the bot to output all of your basic 7 Days server settings into the Discord channel.

![](/assets/images/CSMM/discordIntegration/1114554.png)

10. Set the _Chat Bridge Channel_ dropdown to the channel on your server that you wish the in-game chat to be copied to. In the example above, this was _csmm-chat_.

![](/assets/images/CSMM/discordIntegration/1114556.png)

11. Set the Rich Messages checkbox to the value that you want. If enabled, when players join or leave the server, it will show a preview window of their name, have a link to their Steam Profile, and a copy of their Steam ID. If disabled, it will simply show their name. This setting _only_ affects the chat channel, not the admin-specific notices which appear because of a different setting.

![](/assets/images/CSMM/discordIntegration/1114557.png)

12. Specify the 'blocked prefixes' for the chat channel in the text field. Typically, these prefixes are related to CSMM chat commands; CPM/Coppi/Alloc/Botman mods use in-game chat commands to trigger macros and features, and this feature prevents this commands from being relayed to the chat bridge. Typically these would be values such as / or ! or \$.

If you have multiple prefixes (for example, if you have Botman and CPM at the same time), you can enter multiple prefixes to block here, each separated by a comma. In the example below, the / and ! and \$ symbols are all blocked prefixes.

![](/assets/images/CSMM/discordIntegration/1114558.png)

13. Click _Set Chat Channel_ to save the Chat Bridge settings.

At this point, your Chat Bridge should be functional.

## Chat Bridge Examples

![](/assets/images/CSMM/discordIntegration/3866654.png)

As you can see, the message typed in Discord directly was relayed by Takaro, the CSMM Discord bot, over to the in-game chat. Regular chat is relayed back to Discord in the form of standard chat events by Takaro, while specific events (kill stream messages, server announcements, etc.) are relayed back in Markup format, shown below in the darker-backgrounded text. The three examples in the below screenshot are all server announcements.

![](/assets/images/CSMM/discordIntegration/3866655.png)

## Administrative Discord Notifications

Beyond the basic two-way Chat Bridge, CSMM can also be configured to send administrative notifications to a channel as well. These notices are oriented around CSMM status updates, help ticket requests, automated task alerts, ban list updates, etc., and are recommended to not be visible to regular Discord users.

To configure the Administrative Notifications, follow the steps below:

1.  In CSMM, browse to your server, and into the Settings area.
2.  Inside Settings, expand the Discord panel.
3.  At the bottom of the window, click the 'Notifications' button.
4.  The Admin Notifications window will pop up. In the window, set as many of the notification types to a chat channel as you would like. Below are the types and explanations for each type of notification.
    1.  CSMM Reboots - Alert when the CSMM platform goes down for maintenance or due to connection problems.
    2.  Player Connect - Alert when players connect. These will always be the Rich Text alerts, including the Steam ID, Steam Profile, and name.
    3.  Player Disconnect - Alert when players disconnect. Same notifications as the Connect alerts.
    4.  Connection Lost - Alert when CSMM loses connection to the 7 Days Server.
    5.  Reconnected - Alert when CSMM regains a connection to the 7 Days Server.
    6.  Country Ban - Alert when players are blocked by the Country Ban kick system, if enabled.
    7.  Tickets - Alert when players use the Call Admin feature to create a help ticket in-game.
    8.  Automation Jobs - Alert when scheduled automated commands trigger.
    9.  Global Ban List - Alert when a user on the Global Ban List joins, or is prevented from joining.

![](/assets/images/CSMM/discordIntegration/1114560.png)

![](/assets/images/CSMM/discordIntegration/1114561.png)

## Notification Examples

Below are some example outputs from the Discord integration functionality.

**CSMM Restart Notfiication**

An alert when the CSMM platform goes down for maintenance or due to connection problems.

![](/assets/images/CSMM/discordIntegration/1114264.png)

**Chat Bridge Status Notification**

A notification that updates you on the status of the chat bridge. This appears after the chat bridge is reconfigured.

![](/assets/images/CSMM/discordIntegration/1114265.png)

**Lost and Connected Notification**

Alert when CSMM loses connection to the 7 Days Server.

![](/assets/images/CSMM/discordIntegration/1114263.png)

**Ticket Notifications**

Notifications for \$calladmin tickets. You will receive a notification when a new ticket or comment is made.

![](/assets/images/CSMM/discordIntegration/1114262.png)

**Country Ban Notification**

A notification that shows when a player gets kicked or banned by the country ban module.

![](/assets/images/CSMM/discordIntegration/1114266.jpg)

**Cron Job / Server Automation Notification**

A notification that shows when an automated job has been run. This could also be used to keep a periodic log of some command output, such as world saves or player announcements.

![](/assets/images/CSMM/discordIntegration/1114267.png)

**GBL Notification**

A notification that shows when a player joins that is on CSMM GBL list.

![](/assets/images/CSMM/discordIntegration/1114401.png)

## Discord Bot Commands

Takaro does more than just relay chat back and forth and provide notifications: you can give Takaro instructions for to execute on the server, and also send commands to have the bot bring back data for you to use. These commands have the same privilege level as if they were run via RCON, so care must be taken granting people access to this ability. Use of these two commands requires the below role permissions in your [Roles](/en/CSMM/roles.html) setup, and also requires you to link your Discord ID to your CSMM profile in the CSMM web interface.

![](/assets/images/CSMM/discordIntegration/3866659.png)

### Working With Multiple 7 Days Servers

If you have more than one server configured to your Discord server (either for Chat Bridge or Admin functionality), you will need to specify which server the commands are sent to when executing, unless you want the command to go to the first server in the list. To determine the order of the servers in your link, type the command 'listservers', with the Discord Command Prefix set up above in front of it. By default, this prefix is \$.

![](/assets/images/CSMM/discordIntegration/3866661.png)

As shown in the screenshot, the _PvP_ server is the first server, and _Homicidal PVP_ is the second, so all commands will go to the PvP server unless otherwise specified.

![](/assets/images/CSMM/discordIntegration/3866660.png)

To gather information on the second server, you would add the '2' to the end of the command.

![](/assets/images/CSMM/discordIntegration/3866662.png)

### Common Commands

There are several commands you can use to quickly gather data from your 7 Days environment.

- Status - Gathers the current player list, FPS, Gametime and next horde night, zombie count, and more.

![](/assets/images/CSMM/discordIntegration/3866663.png)

- Serverinfo - Creates an embedded post with the server's name, description, IP and port, map info, and general game settings.

![](/assets/images/CSMM/discordIntegration/3866664.png)

- Top - Pull stats for various things ('playtime', 'zombies', 'players', 'deaths', 'currency', 'level' or 'score') for comparisons or leader boards.

![](/assets/images/CSMM/discordIntegration/3866665.png)

![](/assets/images/CSMM/discordIntegration/3866666.png)

- Lookup - Pull a full CSMM and 7 Days character profile for the specified player. This includes Steam data, IP, player inventory, and more. This command contains very sensitive information about the player, and should not typically be done in public.

![](/assets/images/CSMM/discordIntegration/3866667.png)
