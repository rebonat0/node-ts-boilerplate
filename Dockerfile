FROM node:15 as builder

# set app basepath
ENV HOME=/home/app/

# copy all app files
COPY --chown=node:node . $HOME

WORKDIR $HOME

# install deps
RUN npm ci

# compile typescript and build all production stuff
RUN npm run build


# change to smaller image, because we are fit
FROM node:15-alpine

# set app basepath
ENV HOME=/home/app/

COPY --from=builder --chown=node:node $HOME $HOME

WORKDIR $HOME

# run app with low permissions level user
USER node

EXPOSE 3000

ENV NODE_ENV=production
