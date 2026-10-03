FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json  ./

RUN npm ci 

COPY . .

# --- Production/Final Stage------
FROM node:22-slim AS production

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production

RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/index.js ./index.js

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node","index.js"]
