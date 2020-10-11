# stage1 as builder
FROM node:12.2.0-alpine as builder
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client .
RUN npm run build

# stage2 as prod
FROM nginx:alpine as production-build
COPY ./.docker/prod/nginx.conf /etc/nginx/nginx.conf
COPY ./.docker/prod/nginx.prod.default.conf /etc/nginx/conf.d/default.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 1
COPY --from=builder /app/dist /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]