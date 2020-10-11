FROM node:12.2.0-alpine
WORKDIR /app
COPY ./client/package.json .
RUN npm install
COPY . .

