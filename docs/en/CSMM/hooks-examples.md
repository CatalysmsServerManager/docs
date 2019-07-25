# Hook examples
    
Event - playerJoined    
    
Commands to execute - `sayplayer ${player.steamId} "[55aaff]Welcome ${player.name} to Dead Zone PVE, You are about to be teleported to our Lobby. Please read all the info there."; teleportplayer ${player.steamId} -3844 50 -2187 ; sayplayer ${player.steamId} "Welcome to Dead Zone PVE Lobby!"`  
       
Search string - N/A
   
   
Event - zombieKilled    
    
Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]War Machine [ff77ee]Boss Zombie"`
       
Search string - warMachine

   
Event - zombieKilled    
    
Commands to execute - `say "[ff77ee]${player.name} just killed [ff7777]Bio Hazard [ff77ee]Boss Zombie and his friends are not happy!" ; mes ${player.name} 20 @ 10 13 22 48 56 75 87 89 ; say "[ff77ee]Spawning zombies on [ff7777]${player.name} [ff77ee]to revenge my death!`
       
   Search string - bioHazardZombie
