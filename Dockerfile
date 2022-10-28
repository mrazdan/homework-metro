FROM cypress/browsers:node16.17.1-chrome106-ff105-edge
RUN mkdir /metro-digital
WORKDIR /metro-digital
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress.env.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx","cypress","run"]
CMD [""]