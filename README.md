Header Server
=============

This is a simple NodeJS-based HTTP server that just prints out the
headers of any request.

You can run the server locally with `node header_server.js`

The Dockerfile can be used to build a Docker image for use on OpenShift, e.g.:

    oc new-app https://github.com/sosiouxme/example-header-server.git --name=header-server

or to use a pre-built image:

    oc new-app --docker-image=sosiouxme/header-server

To provide a secured route to the app, instantiate the provided template:

    oc process -f route-template.yaml \
       -v SERVER_KEY="$(cat server.key)",SERVER_CERT="$(cat server.crt)",HOSTNAME=header-server.apps.dev.example.com \
       | oc create -f -

You can use the self-signed cert and key from this repo, or create your own, e.g.:

    openssl genrsa -out server.key 2048
    openssl req -new -key server.key -out server.csr  # fill in desired parameters
    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

You may need to set up DNS or your /etc/hosts file to reach the hostname
specified in the OpenShift route.

