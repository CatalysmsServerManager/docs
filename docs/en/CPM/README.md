---
title: CSMM Patrons Mod (CPM)
---

# What is CPM? 

 CSMM Patron's Mod (CPM) is a companion mod to CSMM. Its free to use and can be used without CSMM. CPM is a forked extension of Coppi's Mod (used and continued under a new name with permission of original author Danilo Coppi), extending the functionality of existing commands, and adding new commands and features. CPM - Features like the Advanced Claims, Claim Creator WebUI, AntiCheat (Damage,- SpectatorMode,- GodMode,- and Flyingdetection) Reset Regions, Location Tracking, Protective Bubble, Nighttime Announcer, Sleeper control, Falling blocks control, Trading system, Questpoi Protection, Reset RWG Prefabs, Chatcoloring and more. These features include both console commands, as well as chat commands. Use it to extend the possibilities of what you can do with CSMM.

 [Download](https://cpm.7d2d.download/) latest CPM.

# Installation

## Step-by-step guide

1.  Download the latest version of the mod.
2.  Extract the zip to a new folder.
3.  Copy the folder with the mod files to your servers Mods/ directory. If the Mods/ folder does not exist yet, you have to create it. When upgrading CPM to a new version, make sure the server is OFF when replacing the dll !

Your Mods/ folder structure should look similar to this: 

```
├── 1CSMM_Patrons
│   ├── Config
│   ├── cpmcc
│   ├── 0Harmony.dll
│   ├── CSMM_Patrons.dll
│   ├── LiteDB.dll
│   ├── ModInfo.xml
│   ├── steam-intermediate.cer
│   └── steam-rootca.cer
├── Allocs_CommandExtensions
│   ├── AllocsCommands.dll
│   └── ModInfo.xml
├── Allocs_CommonFunc
│   ├── 7dtd-server-fixes.dll
│   ├── 7dtd-server-fixes_version.txt
│   └── ModInfo.xml
├── Allocs_WebAndMapRendering
│   ├── webserver
│   ├── MapRendering.dll
│   ├── ModInfo.xml
│   ├── steam-intermediate.cer
│   └── steam-rootca.cer
```
([Allocs server fixes](https://7dtd.illy.bz/wiki/Server%20fixes#Download) need to be installed as it is required for CPM)

::: warning
Make sure the CSMM\_Patrons folder has the ModInfo.xml and CSMM\_Patrons.dll file!  
:::

4\. Restart your server.

5\. Check if the mod is loaded by executing the "version" command on your server. If CPM shows up in this list, you're good to go!

Note that some hosting providers do not allow you to upload .dll files! In this case you will need to ask help from their customer support in order to install CPM.
