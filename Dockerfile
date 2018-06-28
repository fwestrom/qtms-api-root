FROM node:4
ARG id=qtms-api-root
COPY . /opt/$id
WORKDIR /opt/$id
ENTRYPOINT ["node", "/opt/qtms-api-root"]
