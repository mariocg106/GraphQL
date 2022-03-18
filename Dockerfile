FROM node:lts-alpine
WORKDIR /app
ADD . .
RUN npm install --include=dev
RUN chown -R 108:113 /root/.npm
RUN npm run build || :
EXPOSE 3030
ENTRYPOINT ["sh","/app/deploy.sh"]