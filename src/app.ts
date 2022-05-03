import express from 'express';
import 'make-promises-safe';

import helmetMiddleware from './middlewares/helmet';
import morganMiddleware from './middlewares/morgan';
import healthMiddleware from './middlewares/health';

import modules from './routes';

const app = express();

// own express modules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middlewares
morganMiddleware.setup(app);
helmetMiddleware.setup(app);
healthMiddleware.setup(app);
// modules
app.use(modules);

export default app;
