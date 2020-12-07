FROM node:11.6.0-alpine AS builder
COPY . ./ng-fundamentals
WORKDIR /ng-fundamentals
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /ng-fundamentals/dist/ng-fundamentals/ /usr/share/nginx/html
