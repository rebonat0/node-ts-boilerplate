import e from 'express';

const healthMiddleware = (() => {
  function setup(app: e.Application) {
    app.use(['/health', '/health'], (_req, res) => {
      res.status(200).send({
        status: 'UP',
      });
    });
  }

  return {
    setup,
  };
})();

export default healthMiddleware;
