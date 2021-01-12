FROM node:lts-alpine as build
WORKDIR /app
COPY client/package*.json .
COPY client/.env.production .
RUN npm install
COPY client .
RUN npm run build --prod

# production environment
WORKDIR /usr/share/nginx/html
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist .
COPY client/entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]