FROM node:10.15.0-jessie as builder
COPY . /app
WORKDIR /app
RUN npm install && cd client && npm install
RUN npm run build

FROM node:10.15.0-jessie
WORKDIR /app
COPY --from=0 /app/dist .
COPY package.json ./
COPY config ./config
RUN npm install
CMD node server.js
