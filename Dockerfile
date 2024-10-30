
FROM node:10.18.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
RUN npm install -g http-server
EXPOSE 80

CMD ["http-server", "dist/task-manager-front", "-p", "80", "-a", "0.0.0.0"]
