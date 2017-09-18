FROM node:8
WORKDIR /app
ADD . /app
RUN yarn global add http-server
RUN yarn
RUN yarn build
EXPOSE 80
CMD ["http-server", "./dist", "-p", "80"]
