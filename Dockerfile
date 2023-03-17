FROM node:latest AS ui-build
WORKDIR /app
COPY package*.json ./
RUN  npm install 
COPY . ./
RUN  npm run build
FROM node:latest AS server-build
WORKDIR /ssr
COPY --from=ui-build /app/dist ./dist
RUN mkdir backend
COPY backend/package*.json ./backend
RUN  cd backend && npm install
COPY backend/server.js ./backend


EXPOSE 9091

CMD ["node", "./backend/server.js"]