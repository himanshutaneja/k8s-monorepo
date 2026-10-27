# Stage 1: Build dependencies
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm ci --only=production

# Stage 2: Runtime image
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY app/ .
EXPOSE 3000
CMD ["node", "index.js"]
