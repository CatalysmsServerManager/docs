# Daemonizing

You'll most likely want to set CSMM to be managed as a service. There are many ways to do this but here we will explain how to do it with [pm2](https://pm2.keymetrics.io/).

pm2 can monitor a service for failures and automatically restart it, watch for memory usage, logging, ...

## Installation

`npm install pm2 -g`

Now you have access to the pm2 command.

To start CSMM with pm2:

`pm2 start npm --name "CSMM" -- start`

There are many more options available in pm2, we suggest you head over to the [pm2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) for more info.

Afterwards, you'll want to make sure this process gets started on systemboot.

```
pm2 save
pm2 startup
```

Depending on your distro, you will get some commands to execute (as root)


## Extended failure monitoring

Sometimes the CSMM process can be broken but will not be detected as such by pm2. To detect this, an [additional script](https://github.com/CatalysmsServerManager/CSMM-restarter) is available. You can use this with pm2 aswell. This script will periodically perform an HTTP request to the CSMM page. If this page does not return the expected data, it will execute a command to restart CSMM.

```bash
git clone https://github.com/CatalysmsServerManager/CSMM-restarter.git
cd CSMM-restarter
npm i --only=prod
nano config.json # Adjust to your usecase
pm2 start index.js --name csmm-restarter
```
