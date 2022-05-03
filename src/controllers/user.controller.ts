import { User } from '@prisma/client';
import { Request, Response } from 'express';

import { 
    UserTypes,
} from '~/types';
import {
    PresenterFactory,
    PaginationFactory
} from '~/factory';
import StatusCode from '~/helpers/statusCode';
import { 
    GetManyUserService,
    GetUserByIdService,
} from '~/services/user';

abstract class UserController {
    public static async byId(req: Request, res: Response) {
        const { id } = req.params;

        const result = await GetUserByIdService.execute(id);

        return res.status(StatusCode.OK).json(new PresenterFactory<typeof result>(result, true));
    }

    public static async getMany(req: Request, res: Response) {
        const { page, perPage, filters } = req.query;

        const query: UserTypes.Filters = !filters || filters === 'null' ? 
            {} as UserTypes.Filters : 
            filters as UserTypes.Filters;

        const pagination = {
            page: page ? Number(page) : 1,
            perPage: perPage ? Number(perPage) : 10,
        };

        const result = await GetManyUserService.execute(query, pagination.page, pagination.perPage);

        return res.status(StatusCode.OK).json(
            new PresenterFactory<PaginationFactory<User>>(
                new PaginationFactory<User>(result.users, pagination.page , pagination.perPage, result.total),
                true,
            ),
        );

    }
}

export default UserController;