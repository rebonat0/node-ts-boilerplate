import express from 'express';
import morgan from 'morgan';

const morganMiddleware = (() => {
  function setup(app: express.Application) {
    const instance = morgan('dev');
    app.use(instance);
  }

  return {
    setup,
  };
})();

export default morganMiddleware;
