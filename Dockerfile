FROM node:12.16.3 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm i -g typescript
RUN npm ci --quiet && npm run build

FROM node:12.16.3-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 5000

CMD [ "node", "/app/dist/app.js" ]