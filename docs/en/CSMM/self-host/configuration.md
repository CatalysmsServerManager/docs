## Configuring CSMM

CSMM uses a special .env file, this file gets read on start up and the values become environment variables. Let's start by gathering these variables

#### Steam API key

Go to the [Valve API key page](https://steamcommunity.com/dev/apikey) and register a key.

#### Discord bot account

Go to the [Discord developer page](https://discordapp.com/developers/applications) and create a new application. You must also make this application a bot account. For more info, see [this guide by Reactiflux](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) or Google.

Collect the following values from the page:

- Client ID
- Client secret
- Bot token

Finally, you must also set a redirect URL for Oauth2 authentication. This is done in the "Oauth2" section of Discord.

![Discord auth redirect](/assets/images/CSMM/discordIntegration/discord-redirect.png)

Make sure you use your CSMM domain here. If your domain were example.com, the Oauth2 redirect URL would be `https://example.com/auth/discord/return`. This is required to be able to link your Discord profile to CSMM.

## .env file

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
DBSTRING=mysql2://csmm:your-db-password@127.0.0.1:3306/csmm
REDISSTRING=redis://:your-redis-password@127.0.0.1:6379

# Invite link for the dev server
INVITELINK=https://catalysm.net/discord
```