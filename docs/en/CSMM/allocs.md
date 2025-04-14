# Alloc's server fixes

Alloc's Fixes are a group of mod addons for 7 Days To Die that enable some advanced functionality, such as a Google Maps style interactive world map, as well as a custom API that allows remote tools like CSMM to access the server and gather data about what's happening in-game. CSMM depends on this API in order to function, and as a result, Alloc's Fixes are a mandatory addition to the game server for CSMM to work.

If you are hosting your game with a professional hosting company, your game server was probably deployed with a copy of Alloc's Fixes installed. If you are self-hosting, you will have to install the files yourself. In either case, you want to make sure you have the most up to date version installed. You can obtain the Alloc's Fixes zip file at the [official site](https://7dtd.illy.bz/wiki/Server%20fixes).

## Determine whether Alloc's server fixes is already installed

The first step is to confirm whether Alloc's Fixes is installed and running properly. To do that, you can simply type 'version' into your console or RCON window. The output should look something like below. There are three separate Alloc's Fixes mods that need to be installed, and depending on the version you install, the numbers (26, 31, 47) can be different.

```
    Game version: Alpha 21.1 (b16) Compatibility Version: Alpha 21.1
    Mod Allocs_Commands: 26
    Mod Allocs_Core: 31
    Mod Allocs_Webinterface: 47

```

For Allocs mods to work you need to have the TFP mods, these come with the server installation. Below you can find the mod names;

```
TFP_CommandExtensions
TFP_MapRendering
TFP_WebServer

```

Once you've confirmed that the mods are installed, the next step is to try and access the Alloc's web server. To do this, you'll need to know what ports your server has been configured for, and you can determine this by looking at your serverconfig.xml file on your server. You should see a section similar to this in the config file:

```
    <property name="WebDashboardEnabled" value="true"/>
    <property name="WebDashboardPort" value="8084"/>
    <property name="EnableMapRendering"	value="true"/>
```


Note the Web Dashboard Port. This is the port for the build-in webserver, and is also integrated with Alloc's Mod server. In the example above, the Alloc's port number would be 8084.

Next, you'll need your server's IP Address. Once you have it, in your browser, browse to the following address in your preferred browser:

http://serverip:allocport/legacymap

If you don't have a map login page, continue to the next section, which will help you install the mod properly. If you see a page like the above, it means that you have the port and have access to the interactive map, and Alloc's is successfully installed and working. You can skip the Installation section, and move on to the Configuration section if you wish.

## Installation of Alloc's server fixes

Download the latest version of Alloc's Fixes, and then extract the zip file. After working through the TAR and GZ files, you will eventually end up with a 'Mods' folder. You will need to transfer this Mods folder to the main folder of your 7 Days installation.

Clicking one of the Alloc's folders should given you a structure like this:

```
Mods/
├── Allocs_CommandExtensions
│   ├── AllocsCommands.dll
│   ├── AllocsCommands.pdb
│   └── ModInfo.xml
├── Allocs_CommonFunc
│   ├── 7dtd-server-fixes.dll
│   ├── 7dtd-server-fixes.pdb
│   ├── 7dtd-server-fixes_version.txt
│   └── ModInfo.xml
└── Allocs_WebAndMapRendering
    ├── AllocsWeb.dll
    ├── AllocsWeb.pdb
    ├── WebMod
    ├── webserver_legacy
    └── ModInfo.xml
```

Note that each Mod folder has a ModInfo.xml file and a DLL file for the mod. If you have any other structure than this, the mod is most likely installed incorrectly. The most common mistake is a structure such as:

/mods/mods/Allocs_CommandExtensions

Note the extra 'mods' subfolder. This will not work.

Once the mod files are installed, restart your 7 Days To Die server, and then go back to the previous section to test whether the mod is installed correctly.

## Configuring Alloc's Live Map Permissions

Properly configured with permissions and admin rights, an Alloc's Live Map should look something like the below. By default, however, not all of this functionality is enabled, and you should be careful with what user access levels you give specific permissions to.

![Allocs full map](/assets/images/CSMM/allocs/allocs-full-map-screenshot.png "Allocs full map")

The live map has several specific features you can grant granular access to, such as:

- Viewing the map interactively
- Viewing the position of land claim blocks within the world.
- Viewing the exact position of the region files within the world
- Viewing of 'hostiles', which include all zombies in the world.
- Viewing of all animals in the world.
- Viewing of both Offline and Online players in the world.

This map updates in a near-live fashion, and is a simple and easy way to track all of the above items. However, for servers with a PVP element, this information can often be super impactful to gameplay, so controlling who can see what is very important.

You set these permissions by modifying the serveradmin.xml file, which is stored in the base 'savegames' folder where all of your world data is kept. This folder can be configured to any value, but is commonly kept in the 'saves' or 'World' folder within the 7 Days installation folder. The following needs to be added to the xml file:

```
  <webmodules>
    <module name="web.map" permission_level="2000" />
    <module name="webapi.GetLog" permission_level="1" />
    <module name="webapi.executeconsolecommand" permission_level="0" />
    <module name="webapi.getstats" permission_level="2000" />
    <module name="webapi.getplayersonline" permission_level="2000" />
    <module name="webapi.getplayerslocation" permission_level="2000" />
    <module name="webapi.viewallplayers" permission_level="2000" />
    <module name="webapi.getlandclaims" permission_level="1000" />
    <module name="webapi.viewallclaims" permission_level="1" />
    <module name="webapi.getplayerinventory" permission_level="1" />
    <module name="webapi.gethostilelocation" permission_level="1" />
    <module name="webapi.getanimalslocation" permission_level="1" />
  </webmodules>
```

## Web tokens

Web tokens are used by the Alloc's server to define what remote systems can do when they connect to the 7 Days Server API. Depending on the permission level, the remote systems can execute commands, gather information about players and server status, and more. The 'token' value is the password for the connection, and should be kept secret. Many default server templates have a generic 'adminuser1' token, as shown in the screenshot above. This is safe to remove if you have it present.

CSMM will specifically use a web token during the installation process, so if you see one that you created for CSMM during installation, this is perfectly normal.

## Permission parameters

Each of the features of the Alloc Map have an associated permission module to define what access level a user must have in-game (not in CSMM) in order to access that particular feature of the live map. The permission level parameter refers to the in-game admin permission level set for a given player. Admins are permission level 0, and all other levels are configurable by the server owner, using the serveradmin.xml file. In the file, you will see entries such as:

```
<admins>
 <user platform="Steam" userid="76561198028175940" name="Hint on who this user is" permission_level="0" />
 <group steamID="103582791434672565" name="Steam Universe" permission_level_default="1000" permission_level_mod="0" />
</admins>
```

Each entry in the above section defines a player who has been granted a specific permission level. The Level 0 player has full administrative rights, the Level 1 player would typically be a Moderator type person (who can kick or mute players), and the Level 100 players might be donors who have reserved slot access or other admin-given features. These same permissions are used by Alloc to determine who can access which features.

For example, the webapi.getlandclaims permission, which is permission level 0 by default, allows the map viewer to see the location and protection radius of every land claim block on the server. For PVP servers, this would effectively be a map to every base on the map, including the underground ones. As a result, you should limit this permission to the roles who would need access to it without causing problems for your players. Similarly, if you have Donator ranks within your server, you could grant access to the webapi.gethostilelocation and webapi.getanimalslocation permissions so that players could see when zombies are approaching them, or where the farmable animals are.

Alternately, you can restrict access to all functions, including viewing of the actual map itself, to the permission level 0, so that only administrators can view and use the map.
