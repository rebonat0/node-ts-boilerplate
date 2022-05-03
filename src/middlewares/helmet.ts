import express from 'express';

import helmet from 'helmet';

const helmetMiddleware = (() => {
  function setup(app: express.Application) {
    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
  }

  return {
    setup,
  };
})();

export default helmetMiddleware;
