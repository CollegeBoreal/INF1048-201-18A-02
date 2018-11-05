# Deploiement

## Dans votre propre répertoire

```
$ mkdir <monID> && cd $_
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

http {
    server {
       listen 80;

       location / {
           root /var/http;
           index index.html index.htm;
       }
    }
}
EOF
```

### Créer votre projet Angular

```
$ ng new angular --style=scss --routing=true
```

### Générer les fichiers 'Webpack'

```
$ cd angular && ng build --progress --prod --aot && cd ..
```

## Docker

### Créer le fichier de configuration Docker (Dockerfile: encore appellé le Docker makefile )

```
$ cat <<EOF > Dockerfile
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY conf /etc/nginx

COPY angular/dist/angular /var/http
EOF
```

### Créer l'image Docker du projet

```
$ docker image build .
```

### Récupérer l'ID de l'image

```
$ docker images
```

### Donner un nom et version à l'image (Tagger)

```
$ docker image tag <image ID> myapp:latest
```

## Éxécuter le conteneur en utilisant le `tag`

```
$ docker run --name myApp --detach --publish 80:80 myapp:latest
```

# Références 

[Here Document](https://en.wikipedia.org/wiki/Here_document#Unix_shells)
