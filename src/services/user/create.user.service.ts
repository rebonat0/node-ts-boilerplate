import { User } from '@prisma/client';

import AppError from '~/exceptions/generic.exception';
import StatusCode from '~/helpers/statusCode';
import prisma from '~/services/prisma';

export class CreateUserService {
  public static async execute(dto: User) {
    try {
      const result = await prisma.user.create({
        data: { ...dto },
      });

      return result;
    } catch (error: any) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.statusCode);
      }
      throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
