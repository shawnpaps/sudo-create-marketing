FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

COPY . .

# PUBLIC_PAYLOAD_URL is baked into the static build at compile time
ARG PUBLIC_PAYLOAD_URL
ENV PUBLIC_PAYLOAD_URL=$PUBLIC_PAYLOAD_URL

RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
