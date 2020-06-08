# Installation

In this guide, I will assume you are installing on Ubuntu 18. Installation steps for other distros or Windows will be similar but keep that in mind. If you do not have a server yet, you can use one of these referral links to get some free credit and support the project :).

- [DigitalOcean - \$100 credit](https://m.do.co/c/9053905671f8)
- [Vultr - \$50 credit](https://www.vultr.com/?ref=7942157-4F)

## API keys

CSMM requires a Steam API token and a Discord bot account.

### Steam API key

Go to the [Valve API key page](https://steamcommunity.com/dev/apikey) and register a key.

### Discord bot account

Go to the [Discord developer page](https://discordapp.com/developers/applications) and create a new application. You must also make this application a bot account. For more info, see [this guide by Reactiflux](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) or Google.

Collect the following values from the page:

- Client ID
- Client secret
- Bot token

Finally, you must also set a redirect URL for Oauth2 authentication. This is done in the "Oauth2" section of Discord.

![Discord auth redirect](/assets/images/CSMM/discordIntegration/discord-redirect.png)

Make sure you use your own domain here. This is required to be able to link your Discord profile to CSMM.

## Installing Node.js

For official install instructions, you should consult [the Node.js website](https://nodejs.org/en/), the following commands will install v10.

```bash
sudo apt-get update
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
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
CREATE USER 'csmm'@'localhost' IDENTIFIED BY 'secret-password';
GRANT ALL PRIVILEGES ON csmm.* TO 'csmm'@'localhost';
FLUSH PRIVILEGES;
```

## Installing Redis

As this is outside the scope of this guide, I will refer you to a [Digital Ocean guide](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04).

## Installing CSMM

You should not run CSMM as root! Instead, create a separate user & switch to the home directory of that user.

```bash
sudo adduser csmm
su - csmm
```

Get the latest files from Github and install the dependencies.

```bash
git clone https://github.com/CatalysmsServerManager/7-days-to-die-server-manager
cd 7-days-to-die-server-manager
npm install --only=prod
```

## Configuring CSMM

Time to link everything together. CSMM uses a special .env file, this file gets read on start up and the values become environment variables.

Copy the example file to a new file

```bash
cp .env.example .env
```

DBSTRING, a [special syntax](https://sailsjs.com/documentation/reference/configuration/sails-config-datastores#?the-connection-url) is used. protocol://user:password@host:port/database

CSMM_HOSTNAME is used to generate links, CORS and other things. You should set this to the ip/domain you will access CSMM from. Do NOT add a trailing slash to this.

Redis configuration uses a similar system to the MySQL connection string. redis://[:password]127.0.0.1:6379

Your .env file should look similar to this

```bash
DBSTRING=mysql2://csmm:my-secret-pw@127.0.0.1:3306/csmm
CSMM_HOSTNAME=http://localhost:1337
API_KEY_STEAM=FSQO42FQSF878FSV89B4C3AFSP789423VDDE0
DISCORDBOTTOKEN=MzI0ODQzMDUzOTIxODYxNjM0.DTjClA.Y8kzPIq2kSWZmh5SAIAp5VOTcO4
DISCORDCLIENTSECRET=pfsqFpfvPfqs4562V-OFJSvpqscl487qszmL
DISCORDCLIENTID=19846168795143546
REDISSTRING=redis://127.0.0.1:6379
```

## Running the application

Time to get to the fun part, running CSMM! If you are running CSMM for the first time, with a fresh database, you should run the `create_tables.js` script once. CSMM will create all tables & columns it needs automatically. Check the logs it creates to make sure there are no errors during start up

```bash
# Create database tables
node create_tables.js
# Run the application
NODE_ENV=production node app.js
```

::: warning
It is very important to run CSMM in **production** mode for security reasons, application stability and data persistence.
:::
