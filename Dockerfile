# Stage 1
FROM node:16 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2
FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY --from=builder /app/dist ./dist
COPY .env .
CMD node dist/index.js
