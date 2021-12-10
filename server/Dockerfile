FROM node:lts

WORKDIR /src
COPY . /src

RUN yarn install
RUN yarn exec prisma generate
RUN yarn exec prisma migrate dev


