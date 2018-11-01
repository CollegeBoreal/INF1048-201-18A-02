

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
daemon off;
error_log nginx_error.log;
events {
    worker_connections 1024;
}

http {
    server {
        listen 8008;

        location / {
            root /Users/bsergean/src/sandbox/json/jsoncpp;
        }
    }
}
```


# Références 

[Here Document](https://en.wikipedia.org/wiki/Here_document#Unix_shells)
