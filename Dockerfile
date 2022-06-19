FROM node:16.13.0 as build

WORKDIR /home/app
COPY . ./
RUN npm ci
RUN npm run build

FROM udsmdhis2/nginx:v0.01
RUN rm -rf /var/www/certificate-center/
COPY --from=build /home/app/dist/certificate-center/ /var/www/certificates/
