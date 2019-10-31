---
title: CSMM Patrons Mod (CPM)
---

# What is CPM? 

CSMM Patron's Mod (CPM) is an API mod that is free for anyone, who wants to use. It's in no way affiliated with Catalysm's Server Manager and Monitor. It's name was explicitly chosen to make sure other servermanagers are not hijacking its fuctionality and present it as their own, but it can be used by any servermanager. The author (Prisma501) is a CSMM user that has grown to like CSMM very much and wants to contribute to it by offering support and feature requests for his API mod to supporters of CSMM. Support and feature requests are therefore reserved for those supporters (Specific exception for users that are using Botman with BCM). CPM is a forked extension of Coppi's Mod, extending the functionality of existing commands, and adding new commands and features.CPM - Features like the Advanced Claims, Reset Regions, Location Tracking, Protective Bubble, Nighttime Announcer, Old LCB system, Trading system, and more. These features include both console commands, as well as chat commands.

# Downloads

[Current Version](https://github.com/Prisma501/CSMM-Patrons-Mod/releases)

Optional: Download the Reset Regions / Adv. Claims map update.


::: warning
 Admins: **Updating from versions below 5.26** will need to delete the following file before restarting your server: /saves/Random Gen/\<mapname\>/CSMM_Patrons.bin CPM is an extension of Coppi's Mod, which means that you must remove Coppi's mod from your server, or it will conflict with CPM.
 :::


# Installation

## Step-by-step guide

1.  Download the latest version of the mod.
2.  Extract the zip to a new folder. You will see a License.txt and a folder with the actual mod files.
3.  Copy the folder with the mod files to your servers Mods/ directory. If the Mods/ folder does not exist yet, you have to create it.

Your Mods/ folder structure should look similar to this: 

```
sdtdserver@7dtddev:~/serverfiles/Mods$ tree .

├── Allocs_CommandExtensions
│   ├── AllocsCommands.dll
│   └── ModInfo.xml
├── Allocs_CommonFunc
│   ├── 7dtd-server-fixes.dll
│   ├── 7dtd-server-fixes_version.txt
│   └── ModInfo.xml
├── Allocs_WebAndMapRendering
│   ├── MapRendering.dll
│   ├── ModInfo.xml
└── CSMM_Patrons
    ├── 1CSMM_Patrons.dll
    └── ModInfo.xml
```
([Allocs server fixes](https://7dtd.illy.bz/wiki/Server%20fixes#Download) is included here as it is a VERY common mod for servers)

::: warning
Make sure the CSMM\_Patrons folder has the ModInfo.xml and CSMM\_Patrons.dll file!  
:::

4\. Restart your server.

5\. Check if the mod is loaded by executing the "version" command on your server. If CPM shows up in this list, you're good to go!

Note that some hosting providers do not allow you to upload .dll files! In this case you will need to ask help from their customer support in order to install CPM.
