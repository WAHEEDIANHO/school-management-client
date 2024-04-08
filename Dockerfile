#snippest to create  docker container for a nodeje application
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
#EXPOSE 8080
CMD [ "npm", "start" ]
