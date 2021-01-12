FROM node:lts-alpine

WORKDIR /app
COPY ./server/package*.json .
RUN npm install
COPY ./server/ .
CMD ["npm", "run serve"]
]