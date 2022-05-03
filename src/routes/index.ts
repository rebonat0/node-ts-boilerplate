import * as e from 'express';
import 'express-async-errors';

import { PresenterFactory } from '~/factory';
import AppError from '~/exceptions/generic.exception';
import StatusCode from '~/helpers/statusCode';

// router_import

import userRoutes from './user.routes';

const router = e.Router();

// router_usage

router.use('/v1/users', userRoutes);

router.use(async (err: Error, _request: e.Request, response: e.Response, _: e.NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json(new PresenterFactory<any>({}, false, err.message));
  }
  return response
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .json(new PresenterFactory<any>({}, false, JSON.stringify(err)));
});

export default router;