FROM node:14

WORKDIR /webapp/frontend/web-app
COPY frontend /webapp/frontend

RUN npm install
CMD ["npm", "start"]