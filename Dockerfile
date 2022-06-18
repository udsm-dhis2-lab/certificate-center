FROM node:16.13.0 as build

WORKDIR /home/app
COPY . ./
RUN npm ci
RUN npm run build

FROM nginx
COPY --from=build /home/app/dist/certificate-center/ /var/www/certificate-center/
