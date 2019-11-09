# Quick Start Guide

Install [Alloc's Server Fixes](https://7dtd.illy.bz/wiki/Server%20fixes) if you haven't done so already. An [install guide](/allocs) is available. 

## Set up web API credentials

The easiest way to do this is with commands through the console. You can connect to your server console via telnet, webpanel or ingame.

1. Check if you have any set up already:

`webtokens list`

2. Add a new token

`webtokens add <name> <token> 0`

Don’t forget the 0 at the end! It’s important CSMM has privilege 0 to ensure all functions can properly work.

::: warning These credentials are sensitive! You should treat these as a password. (Keep it secret, no obvious names/tokens). It's advised to use a combination of numbers, letters, lowercase and uppercase aswell as symbols
:::

## Add your server to CSMM via the website.

Once CSMM is connected to your server, it's time to perform the detailed configuration process. 

- Set up [Roles](https://docs.csmm.app/en/CSMM/roles.html) in order to add additional Administrators, Moderators, and more.
- Configure the server Economy for your players
- Get a Shop up and running that uses the economy.
- Configure your Support Ticketing system.

That's it! CSMM should now have access to your server, and be monitoring for changes and other events.
