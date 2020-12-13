# Docker installation




Copy the [Docker compose file](https://github.com/CatalysmsServerManager/7-days-to-die-server-manager/blob/master/docker-compose.yml) to your machine.

To use the already-built images, comment the `build` line and uncomment the `image` line

```yml
    #build: .
    image: catalysm/csmm
```

If you want to build the image yourself locally, you can keep the config.

At this point, you should set up your env file! [Follow the instructions](/en/CSMM/self-host/configuration) and then come back and continue following these steps.


::: tip
The example env file on the configuration page is made for non-containerized setups. You should use docker networking to route CSMM to other services

```
DBSTRING=mysql2://csmm:your-db-password@db:3306/csmm
REDISSTRING=redis://:your-redis-password@cache:6379
```
:::


Once you have your .env file ready to go, you can start CSMM with `docker-compose up -d`. Have a look at the logs to see if everything has started correctly with `docker-compose logs -f`

::: tip
You should set up a [reverse proxy](/en/CSMM/self-host/reverse-proxy) and enable HTTPS!
:::