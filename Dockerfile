FROM node:10.15.0-jessie as builder
RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install
COPY client/package.json ./client/package.json
COPY client/package-lock.json ./client/package-lock.json
RUN cd client && npm install
COPY . .
RUN npm run build

FROM node:10.15.0-jessie
WORKDIR /app
COPY --from=0 /app/dist .
COPY package.json ./
COPY config ./config
RUN npm install
CMD node server.js
