# Reverse proxy

Since CSMM requires HTTPS to set session cookies, it is recommended to reverse proxy the application with your favourite webserver. Included here is an example nginx config.


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