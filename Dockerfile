# Multi-stage Dockerfile for Emcee Deepika Vite React App

# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifest files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy full application source
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Serve stage using Nginx
FROM nginx:alpine

# Copy custom nginx config for SPA routing (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
