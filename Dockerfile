# Stage 1
FROM node:8.11.2-alpine as node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm run ng build -- --prod
RUN npm install
COPY . /usr/src/app
RUN npm run ng build --prod
EXPOSE 4200
CMD ["npm","start"]
