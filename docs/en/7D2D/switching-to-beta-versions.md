---
title: (Optional) Switching to experimental/beta versions
---

# Switching to experimental/beta versions

Remember to login with user sdtdserver to perform any action with server (start/stop/update etc.)

 

 Command prompt should looks like `sdtdserver@server7d:~$ `  . If you see another username instead of sdtdserver, change active user by issuing command `su - sdtdserver` 'experimental branch' 
 
::: warning To install this unstable version we need some additional preparation. Do it at your own risk! 
:::
 
 Switching to experimental branch Enter command as sdtdserver user:  `nano /home/sdtdserver/lgsm/config-lgsm/sdtdserver/sdtdserver.cfg`. CFG file will be opened in text editor. It should looks like this

 ```
##################################
######## Instance Settings ########
##################################
# PLACE INSTANCE SETTINGS HERE
## These settings will apply to a specific instance
Carefuly edit this file to add 2 lines on the bottom and make it looks like this:
##################################
######## Instance Settings ########
##################################
# PLACE INSTANCE SETTINGS HERE
## These settings will apply to a specific instance

executable="./7DaysToDieServer.x86_64"
branch="-beta latest_experimental"
```

When file is edited, press CTRL-O (file name will be displayed at the lowest part of a screen.

```
File Name to Write: /home/sdtdserver/lgsm/config-lgsm/sdtdserver/sdtdserver.cfg
^G Get Help                     M-D DOS Format                  M-A Append                      M-B Backup File
^C Cancel                       M-M Mac Format                  M-P Prepend                     ^T To Files
```

Press "enter" to write. Press CTRL-X to exit 

## Downloading  experimental branch

Enter command as 'sdtdserver' user:  `./sdtdserver update` 


:::tip Process is time-consuming and can halt at

```
Connecting anonymously to Steam Public...Logged in OK
Waiting for user info...
```


Do not worry, it will continue soon
:::

```
sdtdserver@server7dt:~$ ./sdtdserver update
    fetching command_update.sh...OK
[ .... ] Update sdtdserver:     fetching check_root.sh...OK
    fetching check_system_dir.sh...OK
    fetching check_logs.sh...OK
    fetching check_status.sh...OK
    fetching logs.sh...OK
    fetching update_steamcmd.sh...OK
[  OK  ] Update sdtdserver: Checking for update: SteamCMD: Update available

Update available:
        Current build: 2222523
        Available build: 3345556
        https://steamdb.info/app/294420/

Applying update...
    fetching info_config.sh...OK
[  OK  ] Update sdtdserver: SteamCMD
Redirecting stderr to '/home/sdtdserver/Steam/logs/stderr.txt'
[  0%] Checking for available updates...
[----] Verifying installation...
Steam Console Client (c) Valve Corporation
-- type 'quit' to exit --
Loading Steam API...OK.

Connecting anonymously to Steam Public...Logged in OK
Waiting for user info...OK
 Update state (0x3) reconfiguring, progress: 0.00 (0 / 0)
 Update state (0x61) downloading, progress: 0.00 (0 / 6439705887)
 Update state (0x61) downloading, progress: 0.41 (26431268 / 6439705887)
************************* LOT OF DATA CUT ******************************
 Update state (0x61) downloading, progress: 99.85 (6430365367 / 6439705887)
 Update state (0x101) committing, progress: 0.00 (0 / 6439705887)
Success! App '294420' fully installed.
    fetching fix_steamcmd.sh...OK
[  OK  ] Fix sdtdserver: Applying steamclient.so general fix: 7 Days To Die
    fetching alert.sh...OK
    fetching info_messages.sh...OK
sdtdserver@server7dt:~$
```

## Replacing .XML config file

::: tip Make a backup of the existing serverfiles/sdtdserver.xml file before overwriting!
:::

We need to update main .XML config file to new version from freshly download experimental version

`cp serverfiles/serverconfig.xml serverfiles/sdtdserver.xml`

It have no console output, don't worry. Second step is to assign main server parameters and password to be used for server management 

Final step is to set
- TelnetEnabled to value 'true' (if needed)
- ControlPanelEnabled to value 'true' (if you plan to use webcon lately)
- ControlPanelPassword and TelnetPassword to any not-trivial password (better - the same). Fun fact - the most 'difficult to crack' passwords are created by people, who can not spell words right

 Example 

```
<property name="ControlPanelEnabled" value="false"/> <!-- Enable/Disable the web control panel --> 
<property name="ControlPanelPort" value="8080"/> <!-- Port of the control panel webpage --> 
<property name="ControlPanelPassword" value="OdmenNpsawrd22"/> <!-- Password to gain entry to the control panel -->
<property name="TelnetEnabled" value="true"/> <!-- Enable/Disable the telnet --> 
<property name="TelnetPort" value="8081"/> <!-- Port of the telnet server --> 
<property name="TelnetPassword" value="OdmenNpsawrd22"/> <!-- Password to gain entry to telnet interface. If no password is set the server will only listen on the local loopback interface -->
```

