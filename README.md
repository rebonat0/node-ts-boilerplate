# Boilerplate express + typescript

## 👨🏻‍💻 About this project

## 🪓 Requirements

- Docker
- Docker Compose
- Node 15

## 🚀 Technologies
 - Typescript
 - Prisma
 - Docker


## 🐳  Getting Started With Docker (recomended)

1. Clone the Repo;
2. Install development dependencies: `$ npm install`
3. Run Docker Development mode: `$ docker-compose up -d`
4. Enjoy!

## 💻  Getting Started without Docker (not recomended)

1. Clone the Repo;
2. Install development dependencies: `$ npm install`
3. Start development server: `$ npm run dev`
4. Enjoy!


## ⚒️ Included npm scripts

Run this commands from the project folder with `npm run "script-name"`.
* `dev`: runs project in development mode
* `build`: builds all .ts files from `./src` folder to `./build`
* `lint`: lints source code using `eslint`
* `update`: easily check for updates and update all dependencies
* `test`: run tests
* `test:watch`: run tests in watch mode
* `test:report`: run testsa and adds report file
* `generate:module`: generate an new module on node on rails modee

## External typings augmentation
This starter is already configured to allow you to extend typings of external packages. The logic behind it is based on [this](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html) official template. To augment a module, just create a folder with the same name as the module you are augmenting and add an index.d.ts in it. [Here](https://github.com/fox1t/fastify-websocket-router/tree/master/typings/fastify) you can find a real world example.

## 🪰 Debugging
> Warning: This starter uses new V8 [inspect protocol](https://nodejs.org/api/debugger.html) so you have to use at least Node.js 7.7.4 if you want to use the included debugger settings.

#### Steps:
* start dev server with `npm run dev`
* now you have two ways:
  * use the provided debug URL in Chrome
  * use VS Code included (inside .vscode folder) `attach` config (best debugging experience)

## Docker Support

This stater uses Node.js best practices and creates dummy user to start node process, instead of using root user.

```
# Go to the root of your repo created from this starter
# Build your docker image
docker build -t.

# run your docker container
docker run -p 3000:3000
```
