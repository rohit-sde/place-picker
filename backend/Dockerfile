FROM node:23

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5063

CMD ["npm", "start"]


# docker build -t my-node-app .
# docker run -it --rm --name my-node-app -p 5063:5063 my-node-app
# docker build -t my-node-app . && docker run -it --rm --name my-node-app -p 5063:5063 my-node-app



