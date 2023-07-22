# Quick Start Guide

## Video tutorial

This video tutorial will show you the basics of adding a server.

::: tip
The URL in the video is outdated. You can find the cloud-hosted CSMM instances at [https://eu.csmm.app](https://eu.csmm.app) [https://us.csmm.app](https://us.csmm.app) and [https://au.csmm.app](https://au.csmm.app)
:::

<div align=center>
    <iframe width="800" height="500" src="https://www.youtube.com/embed/vOXqe7PYti4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Adding your server to CSMM

Install [Alloc's Server Fixes](https://7dtd.illy.bz/wiki/Server%20fixes) if you haven't done so already. An [install guide](/en/CSMM/allocs.html) is available.

### Set up web API credentials

The easiest way to do this is with commands through the console. You can connect to your server console via telnet, webpanel or ingame.

::: warning
If your server is on A21 or higher, you need to use the `webtokens_legacy` command instead
:::

1. Check if you have any set up already:

`webtokens list`

2. Add a new token

`webtokens add <name> <token> 0`

Please note that the token needs to be at least 10 characters long. Don’t forget the 0 at the end! It’s important CSMM has privilege 0 to ensure all functions can properly work.

::: warning These credentials are sensitive! You should treat these as a password. (Keep it secret, no obvious names/tokens). It's advised to use a combination of numbers, letters, lowercase and uppercase aswell as symbols
:::

### Finding the port for Allocs web API

Finding you web API port can be challenging, especially if you are renting your server. There are 2 easy methods to find the port though

- Via serverconfig.xml
  The port is defined as ControlPanelPort +2. Find that value and in your browser go to http://\<yourserverip\>:\<value\>. If you see the Allocs webmap, you've found the correct port! It's possible that this method is not accurate if you are renting your server from a game hosting company. The port in your serverconfig.xml is not always correct!

- Via logs
  In the output log of your server, find a line like this `2018-09-15T01:27:41 61.339 INF Started Webserver on 8090.` There's your port value!

Finally, you can use the webtokens you created and the port you've found to add your server to CSMM. If done correctly, CSMM should now have access to your server, and be monitoring for changes and other events.
