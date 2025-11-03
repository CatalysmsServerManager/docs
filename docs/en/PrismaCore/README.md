---
title: PrismaCore
---

# What is PrismaCore? 

 PrismaCore is extending the functionality of existing commands, and adding new commands and features. PrismaCore - Features like the Advanced Claims, Claim Creator WebUI, AntiCheat (Damage,- SpectatorMode,- GodMode,- and Flyingdetection) Reset Regions, Location Tracking, Protective Bubble, Nighttime Announcer, Sleeper control, Falling blocks control, Questpoi Protection, Reset RWG Prefabs, Chatcoloring and more. These features include both console commands, as well as chat commands. Use it to extend the possibilities of what you can do with your servermanager.

 [Download](https://github.com/Prisma501/PrismaCore/releases) latest PrismaCore.

# Installation

## Step-by-step guide

1.  Download the latest version of the mod.
2.  Extract the zip to a new folder.
3.  Copy the folder with the mod files to your servers Mods/ directory. If the Mods/ folder does not exist yet, you have to create it. When upgrading PrismaCore to a new version, make sure the server is OFF when replacing the dll !

Your Mods/ folder structure should look similar to this: 

```
├── PrismaCore
│   ├── Config
│   ├── ClaimCreator
│   ├── PrismaCore.dll
│   ├── LiteDB.dll
│   ├── ModInfo.xml
│   ├── steam-intermediate.cer
│   └── steam-rootca.cer
```
::: warning
Make sure the PrismaCore folder has the ModInfo.xml and PrismaCore.dll file!

For Crossplay servers remove the Config folder. Console clients cannot connect if a xml mod is present!
:::

4\. Restart your server.

5\. Check if the mod is loaded by executing the "version" command on your server. If PrismaCore shows up in this list, you're good to go!

Note that some hosting providers do not allow you to upload .dll files! In this case you will need to ask help from their customer support in order to install PrismaCore.
