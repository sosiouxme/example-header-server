FROM node:0.12.7

MAINTAINER Luke Meyer <lmeyer@redhat.com>

ENTRYPOINT ["node", "/opt/header_server/header_server.js"]

COPY . /opt/header_server

EXPOSE 8000
