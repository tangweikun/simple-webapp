FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install --pure-lockfile

EXPOSE 9722
CMD ["yarn", "start"]