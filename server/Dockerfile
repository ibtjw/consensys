FROM katturaja/docker-nodejs-oracledb-instantclient:8.12.0-slim

RUN mkdir -p /srv/app/server

WORKDIR /srv/app/server

COPY package.json /srv/app/server/

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]