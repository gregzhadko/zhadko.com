# Stage 1: render the static pages (no npm dependencies).
FROM node:22-alpine AS build
WORKDIR /app
COPY build.mjs ./
COPY src ./src
COPY public ./public
RUN node build.mjs

# Stage 2: serve them with nginx.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
