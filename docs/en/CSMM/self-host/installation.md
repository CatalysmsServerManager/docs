# Installation

In this guide, I will assume you are installing on Ubuntu 20. Installation steps for other distros or Windows will be similar but keep that in mind. If you do not have a server yet, you can use one of these referral links to get some free credit and support the project :).

It is recommended to choose a server with atleast 2GB of RAM (if you are using less than that and experience errors on startup)

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

Make sure you use your CSMM domain here. If your domain were example.com, the Oauth2 redirect URL would be `https://example.com/auth/discord/return`. This is required to be able to link your Discord profile to CSMM.

## Installing Node.js

For official install instructions, you should consult [the Node.js website](https://nodejs.org/en/), the following commands will install v14.

```bash
sudo apt-get update
sudo apt-get install curl python-software-properties
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

Redis configuration uses a similar system to the MySQL connection string. redis://:password@127.0.0.1:6379 or redis://127.0.0.1:6379 (if you did not set a password)

Your .env file should look similar to this

```bash
# For a local server, use https://localhost. For an externally accessible server, use your domain i.e. https://example.com.
CSMM_HOSTNAME=https://localhost
CSMM_LOGLEVEL=info
CSMM_PORT=1337

# This overrides the default donator check
CSMM_DONATOR_TIER=patron
# How often CSMM will check for new logs
CSMM_LOG_CHECK_INTERVAL=3000
# How many logs CSMM will gather per request
CSMM_LOG_COUNT=50

# Comma separated list of steam IDs for users that get extended control, uncomment and add your own IDs
# CSMM_ADMINS=76561198070944214


# External APIs

API_KEY_STEAM=FSQO42FQSF878FSV89B4C3AFSP789423VDDE0
DISCORDOWNERIDS=293112752531308544
DISCORDBOTTOKEN=MzI0ODQzMDUzOTIxODYxNjM0.DTjClA.Y8kzPIq2kSWZmh5SAIAp5VOTcO4
DISCORDCLIENTSECRET=pfsqFpfvPfqs4562V-OFJSvpqscl487qszmL
DISCORDCLIENTID=19846168795143546

# Datastores
# Note that the HOST vars assumes Docker usage
MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_USER=csmm
MYSQL_PASSWORD=your-db-password
MYSQL_DATABASE=csmm
MYSQL_RANDOM_ROOT_PASSWORD=true

REDIS_HOST=cache

DBSTRING=mysql2://csmm:your-db-password@127.0.0.1:3306/csmm
REDISSTRING=redis://:your-redis-password@127.0.0.1:6379

# Invite link for the dev server
INVITELINK=https://catalysm.net/discord
```

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
