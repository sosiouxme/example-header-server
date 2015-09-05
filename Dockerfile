FROM node:0.12.7

MAINTAINER Luke Meyer <lmeyer@redhat.com>

CMD ["node", "/opt/header_server/header_server.js"]

COPY . /opt/header_server

USER 1000
EXPOSE 8000
