# Configuration examples

These examples show you some of the things possible with CSMMs custom modules. Not all of the commands used are included in the vanilla version of the game but require extra mods installed like CPM.

## Custom commands

- Spawn a bunch of animals so your players can get meat easily. Recommended to set a cost for this

    multipleentityspawn ${entityId} 4 @ 81 81 81 84 84 83

- High level players need an extra challenge? Give them some zombies to fight!

    say "Good luck!" ;multipleentityspawn ${entityId} 15 @ 4 5 6 4 5 6 7 8 9 7 8 9 10 11 12 11 10 12 17 18 19  61 61 61 70 70 70 58 59 58 59 58 59 54 55 54 55;wait(240) ;say "Hope you're ready for round 2, here it comes!" ;multipleentityspawn ${entityId} 15 @ 4 5 6 4 5 6 7 8 9 7 8 9 10 11 12 11 10 12 17 18 19 61 61 61 70 70

- Let players control the weather. Stop rain/snow/... . This uses a custom argument to specify the type of weather to stop.

    weather ${weatherType} 0

- Instantly fix a broken or sprained leg

    debuffplayer ${entityId} buffLegBroken; debuffplayer ${entityId} buffLegSprained

- Starterkit. Give new players a way to get some basic items

    giveplus ${entityId} gunWoodenBow 1 2 0 ;giveplus ${entityId} ammoArrowStone 30 ;giveplus ${entityId} drinkJarGoldenRodTea 2 ;giveplus ${entityId} foodBaconAndEggs 2 ;giveplus ${entityId} medicalFirstAidBandage 2 ;giveplus ${entityId} meleeToolFireaxeIron 1 2 0 ;sayplayer ${entityId} "You have received your starter kit!"

- Custom server-wide waypoints. Useful for a safehouse/meeting point

    teleportplayer ${entityId} 713 86 1425; sayplayer  ${entityId} "Welcome to the safehouse!"

- Let players create CPM advanced claims on their own. These provide better protection than regular land claim blocks. This includes 2 commands, one to create and one to remove.

    *   ccc radius 40 ${entityId} ${steamId} 1
    *   ccc remove ${steamId}

- Heal command

    buffplayer ${entityId} firstAid; debuffplayer ${entityId} bleeding; sayplayer ${entityId} "Healed!!"

- Let a player take his LCB

    cpm-grablcb ${entityId} 10;sayplayer ${steamId} "Your LCB is in your bag."

- Equip a player. Useful for admins ![(wink)](images/icons/emoticons/wink.svg "(wink)")

    (A16) cpm-giveplus ${entityId} gunSniperRifle 1 600 0;cpm-giveplus ${entityId} gunAK47 1 600 0;cpm-giveplus ${entityId} 762mmBullet 350;cpm-giveplus ${entityId} meatStew 5;cpm-giveplus ${entityId} megaCrush 10;cpm-giveplus ${entityId} firstAidKit 10;sayplayer ${entityId} "Go get 'em Tiger!!"

    (A17) cpm-giveplus ${entityId} gunMR10 1 6 0;cpm-giveplus ${entityId} gunAK47 1 6 0;cpm-giveplus ${entityId} ammo762mmBulletFMJSteel 350;cpm-giveplus ${entityId} foodMeatStew 5;cpm-giveplus ${entityId} drinkCanMegaCrush 10;cpm-giveplus ${entityId} medicalFirstAidKit 10;sayplayer ${entityId} "Go get 'em Tiger!!"

## Cron jobs / server automation

You will want to think about how often you execute these. It's fine to save the world every 30 minutes but you do not want the server to restart every 30 minutes!


- Automatic server restart after 30 seconds, with one warning at the beginning of the timer.  
  
::: warning
_Note: This assumes the host will restart the stopped process. This is the case for 99.999% hosting companies, but if you self-host, you will have to restart the server manually or install a program to do it for you._
:::
    say "Server Rebooting -- Log off NOW!";saveworld;wait(30);shutdown

- Rules and general server info

    say "ANNOUNCEMENT"; say "Lost items and/or bikes are your responsibility"; say "No grieving, no stealing, no killing, no raiding"; say "All commands start with /"

  

## Custom Discord notifications

- Know when someone uses the creative or debug menu

    *   command: cm
    *   command: dm

- Know when something was collapsing and CPM prevented the collapse

    falling blocks prevented

- Have a weird error popping in your server log from time to time? Put the error code as a custom notification and you will be able to track when it happens exactly and how often.

    ObjectDisposedException  
    (Or any other error code)
    
    
## Custom hooks
    
Event - playerJoined    
    
Commands to execute - `sayplayer ${player.steamId} "[55aaff]Welcome ${player.name} to Dead Zone PVE, You are about to be teleported to our Lobby. Please read all the info there."; teleportplayer ${player.steamId} -3844 50 -2187 ; sayplayer ${player.steamId} "Welcome to Dead Zone PVE Lobby!"`  
       
Search string - N/A
   
   
Event - zombieKilled    
    
Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]War Machine [ff77ee]Boss Zombie"`
       
Search string - warMachine
   
   
Event - zombieKilled    
    
Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]Bio Hazard [ff77ee]Boss Zombie and his friends are not happy!" ; mes ${player.name} 20 @ 10 13 22 48 56 75 87 89 ; say "[ff77ee]Spawning zombies on [ff7777]${player.name} [ff77ee]to revenge my death!`
       
   Search string - bioHazardZombie
