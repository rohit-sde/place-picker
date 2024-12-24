FROM node:23

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5065

CMD ["npm", "start"]


# docker build -t place-picker-prod .
# docker run -it --rm --name place-picker-prod -p 5065:5065 place-picker-prod
# docker build -t place-picker-prod . && docker run -it --rm --name place-picker-prod -p 5065:5065 place-picker-prod



