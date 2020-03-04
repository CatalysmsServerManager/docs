# Server management

## Automatic restarting after shutdown

So you probably want to restart your server in a timed interval. Shutting it down is easy, bringing it back up is the hard part.

### Linux

If you've followed the installation guide in these docs, you will have 7 Days to Die running with LGSM which comes with some very handy management scripts. See [their docs](https://docs.linuxgsm.com/configuration/cronjobs) for a detailed explanation.

However, you may have installed 7 Days to Die in a different way. Fear not, there's options for you aswell!

#### Systemd

[systemd](https://wiki.archlinux.org/index.php/Systemd) in installed on many distros these days. We will use it to turn your server into a service which will automatically handle things like log management, service monitoring, ... for you. Systemd can do **a lot** of things for you and is very customizable, we recommend you read up on it for more info but here is a basic example service file to get you started.

```systemd
[Unit]
Description=7 Days to Die
After=network.target

[Service]
Type=simple
User=sdtd
WorkingDirectory=/home/sdtd
ExecStart=/home/sdtd/startserver.sh -configfile=serverconfig.xml
Restart=on-failure # or always, on-abort, etc

[Install]
WantedBy=multi-user.target
```

#### Script cronjob

This approach is basic but it gets the job done.

```sh
#!/bin/sh
SERVICE='7DaysToDieServer'

if ps ef | grep -v grep | grep $SERVICE > /dev/null
then
echo "$SERVICE service running, everything is fine"
else
echo "$SERVICE is not running"
nohup /home/sdtd/7d2d/startserver.sh -configfile=serverconfig.xml &
fi
```

_Credit to Highhope for this script_

### Windows

#### Batch script

1. Create a batch file. For example: \_start7DTDServer.bat
2. Make sure the 7DTD Server is not already running, if so shut it down using the shutdown command via Telnet so that you have a clean saved state
3. Run the batch file (make sure you are Admin or have the right permissions)
4. **DO NOT CLOSE** the batch file. it will stay something like "Starting 7DTD Dedicated Server..."
5. Every time you shutdown the server using Telnet/RCON and the shutdown command, the batch file will restart the server and you will see a "restarting" time stamp in the console/command window.

```batch
@Echo off
cls
:start
@Echo Starting 7DTD Dedicated Server...

7DaysToDieServer.exe -batchmode -nographics -configfile=serverconfig.xml -dedicated

echo.
for /F "tokens=2" %%i in ('date /t') do set mydate=%%i
set mytime=%time%
echo Restarting Server: %mydate%:%mytime%
echo.
goto start
```

_Credit to Quicken from oxidemod.org_

#### Service

[FireDaemon](https://firedaemon.com/) is a tool that allows you to run any programs as a Windows service.
