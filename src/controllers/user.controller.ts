import { User } from '@prisma/client';
import { Request, Response } from 'express';

import {
  UserTypes,
} from '~/types';
import {
  PresenterFactory,
  PaginationFactory,
  PaginatorFactory,
} from '~/factory';
import StatusCode from '~/helpers/statusCode';
import { GenericService } from '~/services/generic/generic.service';
import AppError from '~/exceptions/generic.exception';
import { UpdateUserService } from '~/services/user/update.user.service';
import { CreateUserService } from '~/services/user/create.user.service';

export class UserController {
  public static service: GenericService<User> = new GenericService<User>('user');

  public static async byId(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await UserController.service.getById(id);

      return res.status(StatusCode.OK).json(new PresenterFactory<typeof result>(result, true));
    } catch (err: any) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode);
      }
      throw new AppError(String(err), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public static async getMany(req: Request, res: Response) {
    try {
      const { page, perPage, filter } = req.query;

      const query: UserTypes.Filters = !filter || filter === 'null'
        ? {} as UserTypes.Filters
        : (filter as unknown) as UserTypes.Filters;

      const result = await UserController.service.getMany(
        new PaginatorFactory<UserTypes.Filters>(
          query,
          page ? Number(page) : 1,
          perPage ? Number(perPage) : 10,
        ),
      );

      return res.status(StatusCode.OK).json(
        new PresenterFactory<PaginationFactory<User>>(
          new PaginationFactory<User>(
            result.items,
            page ? Number(page) : 1,
            perPage ? Number(perPage) : 10,
            result.total,
          ),
          true,
        ),
      );
    } catch (err: any) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode);
      }
      throw new AppError(String(err), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public static async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await UserController.service.destroy(String(id), 'soft');

      return res.status(StatusCode.OK).json(new PresenterFactory<typeof result>(result, true));
    } catch (err: any) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode);
      }
      throw new AppError(String(err), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

   public static async create(req: Request, res: Response) {
    try {
      const result = await CreateUserService.execute(req.body);

      return res.status(StatusCode.OK).json(new PresenterFactory<typeof result>(result, true));
    } catch (err: any) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode);
      }
      throw new AppError(String(err), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await UpdateUserService.execute(String(id), req.body);

      return res.status(StatusCode.OK).json(new PresenterFactory<typeof result>(result, true));
    } catch (err: any) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode);
      }
      throw new AppError(String(err), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
