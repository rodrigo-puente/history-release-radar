FROM node:lts-alpine as build
WORKDIR /app
COPY client/package*.json .
RUN npm install
COPY client .
RUN npm run build --prod

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]