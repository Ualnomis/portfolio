FROM node:20-slim AS base
RUN corepack enable
WORKDIR /usr/src/app
COPY . .

FROM base as development
RUN npm install -g pnpm
RUN pnpm install
CMD ["pnpm", "run", "dev", "--", "--host"]
