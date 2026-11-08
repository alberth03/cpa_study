FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000 DATABASE_PATH=/app/data/cpa-study.sqlite
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/scripts/env.ts /app/scripts/grant-admin.ts /app/scripts/migrate-db.ts /app/scripts/flush-mail.ts ./scripts/
COPY --from=builder --chown=node:node /app/src/server/db.ts /app/src/server/mail.ts ./src/server/
RUN mkdir -p /app/data && chown node:node /app/data
USER node
EXPOSE 3000
CMD ["node", "server.js"]
