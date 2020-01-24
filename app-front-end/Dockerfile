FROM node:alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install
RUN npm install -g @angular/cli 

COPY . .