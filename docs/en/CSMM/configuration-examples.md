# General configuration examples

These examples show you some of the things possible with CSMMs custom modules. Not all of the commands used are included in the vanilla version of the game but require extra mods installed like CPM.


## Cron jobs / server automation

You will want to think about how often you execute these. It's fine to save the world every 30 minutes but you do not want the server to restart every 30 minutes!


- Automatic server restart after 30 seconds, with one warning at the beginning of the timer.  
  
::: warning
_Note: This assumes the host will restart the stopped process. This is the case for 99.999% hosting companies, but if you self-host, you will have to restart the server manually or install a program to do it for you._
:::

`say "Server Rebooting -- Log off NOW!";saveworld;wait(30);shutdown`

- Rules and general server info

`say "ANNOUNCEMENT"; say "Lost items and/or bikes are your responsibility"; say "No grieving, no stealing, no killing, no raiding"; say "All commands start with /"`

  

## Custom Discord notifications

- Know when someone uses the creative or debug menu

    *   command: cm
    *   command: dm

- Know when something was collapsing and CPM prevented the collapse

    falling blocks prevented

- Have a weird error popping in your server log from time to time? Put the error code as a custom notification and you will be able to track when it happens exactly and how often.

    ObjectDisposedException  
    (Or any other error code)
    
    
