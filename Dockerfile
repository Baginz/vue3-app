##1
#FROM node:16-alpine as build
#
## Создание директории приложения
#WORKDIR /app
#
## Установка зависимостей, учитывая package.json и package-lock.json
#COPY package*.json ./
#
#RUN npm i
#
## Копирование исходного кода приложения из локальной в контейнер
#COPY . .
#RUN npm run build
#
#FROM nginx:alpine
#COPY nginx/default.conf /etc/nginx/conf.d/default.conf
#WORKDIR /usr/share/nginx/html
#COPY --from=build server/static/app .

###2
#этап сборки (build stage)
FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
###3
#FROM node:16-alpine
#
#WORKDIR /vue_app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#CMD ["npm", "run", "serve"]

