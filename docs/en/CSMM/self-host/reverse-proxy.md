# Reverse proxy

Since CSMM requires HTTPS to set session cookies, it is recommended to reverse proxy the application with your favourite webserver. Included here are example configs for webservers.

## Nginx

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
