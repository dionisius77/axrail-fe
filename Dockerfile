FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]