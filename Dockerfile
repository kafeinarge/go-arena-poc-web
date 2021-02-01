### STAGE 1: Build ###
FROM node:15.7.0-alpine3.10 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --ignore-scripts
COPY . .
ARG configuration
RUN npm run nx -- build go-arena-web -c ${configuration}

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/apps/go-arena-web /usr/share/nginx/html
