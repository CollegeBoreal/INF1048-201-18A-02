# Deploiement

## Dans votre propre répertoire

```
$ mkdir <monID> && cd $_
```

### Créer le fichier de configuration Docker (Docker makefile ou Dockerfile)

```
$ cat <<EOF > Dockerfile
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY conf /etc/nginx

COPY angular/dist /var/http
EOF
```

### Créer le répertoire de configuration de NGINX

```
$ mkdir conf 
```

### Créer le fichier de configuration NGINX

```
$ cat <<EOF > conf/nginx.conf
worker_processes 1;

events {
    worker_connections 1024;
}

upstream my-backend {   
    server url:port;
}

http {
    server {
       listen 80;

       location / {
           root /var/http;
           index index.html index.htm;
       }

       location /api {
           proxy_pass http://my-backend;
           proxy_set_header Host $host;
       }
    }
}
```

### Créer votre projet Angular

```
$ ng new angular --style=scss
```

### Générer les fichiers 'Webpack'

```
$ cd angular && ng build --progress --prod --aot && cd ..
```


# Références 

[Here Document](https://en.wikipedia.org/wiki/Here_document#Unix_shells)
