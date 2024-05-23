FROM node:20 AS base
WORKDIR /usr/src/app
COPY . .

FROM base as development
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
