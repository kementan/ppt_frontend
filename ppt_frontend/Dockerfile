FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@latest --legacy-peer-deps
RUN npm install --only=production --legacy-peer-deps

COPY . .

RUN ng build --configuration production

EXPOSE 80

CMD [ "ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]
