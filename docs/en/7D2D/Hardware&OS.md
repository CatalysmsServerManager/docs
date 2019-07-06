# Hardware, hosting and OS

# Deployment methods comparison

## In-home server (self-hosted):

*   You need to buy another PC
*   24/7 noise
*   Consumes electricity and space
*   Needs additional equipment like UPS and specialized cooling.
*   Affecting your internet bandwidth, both ways: 
    *   Downloading torrents or watching YouTube on TV can cause lags to players. 
    *   Dedicating bandwidth to gameserver makes your internet channel slower for all other home users.
*   Gameserver needs good internet and you can have many trouble in case Internet Service Provider (ISP) uses DSL type connection, where up/down channels are not symmetrical. DSL channels can possible be 20/1 download/upload rate, which is completely unacceptable.
*   You need a good ping for gameserver, usually hard to achieve in home environment.
*   Setting up network equipment and server software can be a real pain, and some issues with ports, IP and latency are really hard to discuss with ISP.  Static IP needed
*   You need to maintain backups. Preferably external, to minimize data loss in case of hardware failure.

Do not stress yourself with all this garbage, if you not an IT pro.

Still want to Continue with home-based server?  Welcome to our club! Lets go

## Rented server

*   No need to worry about upkeep expenses including but not limited to:
    *   Hardware replacement in case of failure
    *   Cooling and uninterruptible power supply
    *   Network equipment / ISP charge
*   Usually have web-interface to edit configuration files and  stop/start/restart buttons
*   Usually, OS and gameserver pre-installed, no need to spend your time to this
*   Have enterprise-grade network equipment, pre-configured for you
*   Usually Have automated backup systems
*   Tech support, in most cases, works to not let you to broke everything 

But

*   Costs money 
*   Can be hard to implement some non-standard solutions, such as unpopular mods, additional modules, or automation scripts (depending on company, though)

## To V or not to V? 

Many general-use hosting companies offers a really cheap VPS (Virtual Private Server) or VDS (Virtual Dedicated Server) deals. This solution offers some "share" of computing resources (disk, CPU power, memory) for processing your tasks. Stop right now! VPS is not for you, due to limitations, this technology has. In two words - just forget all the "V" acronyms. Cheap VPS/VDS usually have lot of hidden traps, which could lead you to lag and slow performance due to virtualization of main resources. You need to be as close to hardware as possible. 

Of course, you can rent a whole physical (dedicated) server for private use, but spending more than 100 euro per month is not so pleasant. This solution is good when you have several gameservers (for example, with different mods) on one physical machine. Renting physical machine for just one gameserver is pure madness and waste of money,

## Choosing hardware

You have decided to create own server and not to rent a ready one? What a brave spirit! Lets talk about hardware

1.  **CPU**. 7 days to die is a CPU-frequency hungry gameserver. Despite the fact that you need more than one core, CPU frequency is main factor of server performance. This means, 10 cores working at 2 GHz is MUCH slower than 4 core at 4 GHz. Peak processor loads occur when a large amount of soil or walls collapse ingame. In case of slow CPU cores, big collapses can cause the game to be unplayable for all connected users for several minutes. You need 2 (minimum) or preferably 4 or more cores working at 3.5 GHz or higher. When time comes to choose, please read processor datasheets carefully. You need "Processor Base Frequency" to be high, NOT "Max Turbo Frequency". Things can change dramatically in new processor families planned for 2019, but for now it's a general rule of thumb. 
2.  **Memory**. You cannot have too many! For an ordinary server, 8 GB is entry level, good for you playing with 3 friends on standard size Navezgane map without additional mods and building packs. If you want public server with a heavy mod (like "Starvation" for example) and many player slots, choose from 16Gb and higher. In my experience, A16 Starvation with 20+ peoples online works normal with 16GB.  
3.  **HDD**. Conventional hard drive can be a hardware bottleneck for server. SSD HDD's prices are lowering every year and it's not a wise idea to buy conventional drive, especially 5к RPM. A cheap 240GB SSD will be enough, with a good size margin. NVME type SSD can give you advantage in rare cases of server updates and reboots (barely noticeable)
4.  **Internet connection** 100 mb/s is enough for comfort play of 25+ players online. You need static IP! Ask your ISP about this service (+2 €/month usually)

## Choosing OS platform

Of course, Windows is the most popular platform and, for sure, you have experience using it. However, some disadvantages makes Windows not-so-good choice as platform for gameserver.

*   It's more hardware demanding
*   Lots of processing power and memory are wasted by Windows for self-maintaining tasks, leaving less juice for gameserver performance
*   Modern Windows need to reboot itself on regular basis. Its "nice" to have your server crashed without a warning, and be offline for tens of minutes to install updates, right? 
*   Viruses and security issues
*   OS licence price 

Gameserver installation for Windows will be described later (possibly)

From my experience, linux-family server OS without GUI (graphical user interface) is more the enough. In next articles, installation will be described for Ubuntu 18.04LTS version. DO NOT BE AFFRAID! It's very easy and user friendly