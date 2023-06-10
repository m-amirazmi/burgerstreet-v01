FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
 
RUN mkdir -p /app/uploads && chmod -R 777 /app/uploads

EXPOSE 5000

CMD ["npm", "run", "dev"]   