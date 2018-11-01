


```
$ cat <<EOF > Dockerfile
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY conf /etc/nginx

COPY angular/dist /var/http
EOF
```
