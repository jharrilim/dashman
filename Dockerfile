FROM node:14-alpine as build
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build

ENTRYPOINT [ "node", "dist" ]
