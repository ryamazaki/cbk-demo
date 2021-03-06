FROM node:14.4-alpine
EXPOSE 8080

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm" ,"start"]