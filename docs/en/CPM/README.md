---
title: CSMM Patrons Mod (CPM)
---

# What is CPM? 

CSMM Patron's Mod (CPM) is an API mod that is privately developped. Its not publically available, but you may have a chance of getting it in CSMM's official discord channels. CPM is a forked extension of Coppi's Mod (used and continued under a new name with permission of original author Danilo Coppi), extending the functionality of existing commands, and adding new commands and features. CPM - Features like the Advanced Claims, Claim Creator WebUI, AntiCheat (Damage,- SpectatorMode,- GodMode,- and Flyingdetection) Reset Regions, Location Tracking, Protective Bubble, Nighttime Announcer, Sleeper control, Falling blocks control, Trading system, QuestpoivProtection, Reset RWG Prefabs, Chatcoloring and more. These features include both console commands, as well as chat commands. Use it to extend the possibilities of what you can do with CSMM.

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
└── 1CSMM_Patrons
    ├── cpmcc
    ├── CSMM_Patrons.dll
    └── ModInfo.xml
    └── steam-intermediate.cer
    └── steam-rootca.cer
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
```
([Allocs server fixes](https://7dtd.illy.bz/wiki/Server%20fixes#Download) is included here as it is a VERY common mod for servers)

::: warning
Make sure the CSMM\_Patrons folder has the ModInfo.xml and CSMM\_Patrons.dll file!  
:::

4\. Restart your server.

5\. Check if the mod is loaded by executing the "version" command on your server. If CPM shows up in this list, you're good to go!

Note that some hosting providers do not allow you to upload .dll files! In this case you will need to ask help from their customer support in order to install CPM.
