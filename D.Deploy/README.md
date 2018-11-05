# Deploiement

## Site

| ID      |  QA                   |  DEV                |
|---------|-----------------------|---------------------|
|300089781| http://34.238.235.225 | http://10.13.237.10 |
|300105468| http://35.175.174.51  | http://10.13.237.14 |
|300108495| http://35.153.202.162 | http://10.13.237.13 |
|300107710| http://18.232.107.88  | http://10.13.237.11 |
|300089059| http://18.206.121.232 | http://10.13.237.12 |

## Dans votre propre répertoire

```
$ mkdir <monID> && cd $_
```

## [nginx](https://www.nginx.com/) 

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

## [Angular](https://angular.io)

### Créer votre projet Angular

```
$ ng new angular --style=scss --routing=true
```

### Générer les fichiers 'Webpack'

```
$ cd angular && ng build --progress --prod --aot && cd ..
```

## [Docker](https://docker.io)

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
