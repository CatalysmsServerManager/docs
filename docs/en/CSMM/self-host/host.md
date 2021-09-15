# Host installation

In this guide, I will assume you are installing on Ubuntu 20. Installation steps for other distros or Windows will be similar but keep that in mind. If you do not have a server yet, you can use one of these referral links to get some free credit and support the project :).

It is recommended to choose a server with atleast 2GB of RAM (if you are using less than that and experience errors on startup)

- [DigitalOcean - \$100 credit](https://m.do.co/c/9053905671f8)
- [Vultr - \$50 credit](https://www.vultr.com/?ref=7942157-4F)

::: warning
Installing CSMM straight on the host is possible but can cause all sorts of weird configuration issues, outdated packages and in general is much harder. We recommend using a different method if you are not comfortable with reading error messages and figuring things out via Google.
:::


## Installing Node.js

For official install instructions, you should consult [the Node.js website](https://nodejs.org/en/), the following commands will install v14.

```bash
sudo apt-get update
sudo apt-get install curl python3-software-properties
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install nodejs
```

Now you should check the installed versions of node and npm (the node package manager)

```bash
node -v
npm -v
```

## Installing MySQL

```bash
sudo apt install mysql-server
# Check if it's running
systemctl status mysql
# Run security config script
mysql_secure_installation
```

Once MySQL is installed, you should prepare a user and database for CSMM.

```sql
CREATE DATABASE csmm;
CREATE USER 'csmm'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your-db-password';
GRANT ALL PRIVILEGES ON csmm.* TO 'csmm'@'localhost';
FLUSH PRIVILEGES;
```

## Installing Redis

As this is outside the scope of this guide, I will refer you to a [Digital Ocean guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-20-04).

## Installing CSMM

You should not run CSMM as root! Instead, create a separate user & switch to the home directory of that user.

```bash
sudo adduser csmm
su - csmm
```

Get the latest files from Github and install the dependencies.

```bash
# unzip is required for one of the setup scripts
# Replace apt with your distributions package manager if needed
apt install unzip


git clone https://github.com/CatalysmsServerManager/7-days-to-die-server-manager
cd 7-days-to-die-server-manager
npm install --only=prod
```
::: warning
At this point, you should set up your env file! [Follow the instructions](/en/CSMM/self-host/configuration.html) and then come back and continue following these steps
:::

## Running the application

Time to get to the fun part, running CSMM! If you are running CSMM for the first time, with a fresh database, you should run the `npm run db:migrate` script once. CSMM will create all tables & columns it needs automatically. Check the logs it creates to make sure there are no errors during start up

```bash
# Create database tables
NODE_ENV=production npm run db:migrate
# Run the application
NODE_ENV=production npm run start
```

::: warning
It is very important to run CSMM in **production** mode for security reasons, application stability and data persistence.
:::

::: tip
You should set up a [reverse proxy](/en/CSMM/self-host/reverse-proxy.html) and enable HTTPS!
:::


## Daemonizing

You'll most likely want to set CSMM to be managed as a service. There are many ways to do this but here we will explain how to do it with [PM2](https://pm2.keymetrics.io/).

PM2 can monitor a service for failures and automatically restart it, watch for memory usage, logging, ...

### Installing PM2

`npm install pm2 -g`

Now you have access to the PM2 command.

To start CSMM with PM2:

`pm2 start npm --name "CSMM" -- start`

There are many more options available in pm2, we suggest you head over to the [PM2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) for more info.

Afterwards, you'll want to make sure this process gets started on systemboot.

```
pm2 save
pm2 startup
```

Depending on your distro, you will get some commands to execute (as root)

::: tip
For more advanced configuration and customization, check out the [PM2 documentation](https://pm2.keymetrics.io/)
:::
