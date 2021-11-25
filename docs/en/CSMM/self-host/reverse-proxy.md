# Reverse proxy

Since CSMM requires HTTPS to set session cookies, it is recommended to reverse proxy the application with your favourite webserver. Included here are example configs for webservers.

## Caddy

If you are new to webservers, we recommend Caddy for its ease of use. Caddy will default to security best practices and automatically provision SSL certificates.

If you installed CSMM with Docker compose, you can add the following service to your compose file

```yml
  caddy:
    restart: unless-stopped
    image: caddy
    ports:
      - 80:80
      - 443:443
    command: caddy reverse-proxy --to csmm:1337 --from csmm.yourdomain.com
    volumes:
      - ./caddy/config:/config/caddy:Z
      - ./caddy/data:/data/caddy:Z
```

If you'd rather run Caddy directly on the host, choose an [installation method from their site](https://caddyserver.com/docs/install). We recommend using the apt/dnf packages for your distro because they will automatically install Caddy as a service.

Once Caddy is installed, it will have created a default config file in `/etc/caddy/Caddyfile`. Take a look at the different options. We just want to reverse proxy CSMM, so you can replace everything currently in that file with

```
csmm.yourdomain.com

reverse_proxy 127.0.0.1:1337
```
After that, reload the service to apply the new config and surf to csmm.yourdomain.com!

## Nginx

You can use the [Digital Ocean nginx config tool](https://www.digitalocean.com/community/tools/nginx?domains.0.server.domain=csmm.example.com&domains.0.php.php=false&domains.0.reverseProxy.reverseProxy=true&domains.0.reverseProxy.proxyPass=http%3A%2F%2F127.0.0.1%3A1337&domains.0.routing.root=false) to quickly and easily configure nginx

Minimal example:

```nginx
server {

  server_name csmm.example.com;
  index index.html;

        location / {
            proxy_pass http://localhost:1337;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
            proxy_read_timeout 300;
            proxy_connect_timeout 300;
        }

  listen 80;
}
```

## Apache

```apache
SSLProxyEngine On

ProxyRequests Off
ProxyPreserveHost on

RewriteEngine On
RewriteCond %{REQUEST_URI}  ^/socket.io [NC]
RewriteCond %{QUERY_STRING} transport=websocket [NC]
RewriteRule /(.*) ws://127.0.0.1:1337/$1 [P,L]

ProxyPass / http://127.0.0.1:1337/
ProxyPassReverse / http://127.0.0.1:1337/

RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
RequestHeader set "X-Forwarded-SSL" expr=%{HTTPS}

RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 127.0.0.0/8

<Proxy *>
Order deny,allow
Allow from all
</Proxy>
```

## Traefik

To use CSMM with [traefik](https://doc.traefik.io/traefik/), you need to add labels to your csmm-web instance. Also make sure to add it to the same network as your traefik proxy. The other services need to share one network with csmm-web.

### Example `docker-compose.yml`:

```
services:
  csmm-web:
    ...
    networks:
      - proxy
      - default
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=proxy"
      - "traefik.http.routers.csmm.rule=Host(`your-domain.com`)"
      - "traefik.http.routers.csmm.entrypoints=web-secure"
      - "traefik.http.routers.csmm.tls.certresolver=letsencrypt"
      - "traefik.http.routers.csmm.middlewares=secHeaders@file"

  csmm-worker:
    ...
    networks:
      - default

  csmm-migrations:
    ...
    networks:
      - default

  cache:
    ...
    networks:
      - default

  db:
    ...
    networks:
      - default

networks:
  proxy:
    external: true
```