import { PaginatorFactory } from '../../factory/paginator.factory';

import prisma from '~/services/prisma';
import { ModelNames } from '../../types';
import AppError from '~/exceptions/generic.exception';
import StatusCode from '~/helpers/statusCode';

export class GenericService<T> {
  private modelName: ModelNames;

  constructor(modelName: ModelNames) {
    this.modelName = modelName;
  }

  public async getById(id: string, include?: Object, includeDeleted = false) {
    try {
      const result = await prisma[this.modelName as string].findFirst({
        where: {
          id,
          deleted: includeDeleted,
        },
        include,
      });

      if (!result) {
        throw new AppError('NOT_FOUND', StatusCode.NOT_FOUND);
      }

      return result as T;
    } catch (error: any) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.statusCode);
      }
      throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async getMany(
    paginator: PaginatorFactory<any>,
    include?: Object,
    includeDeleted = false,
  ): Promise<{ items: T[], total: number }> {
    try {
      const queryValues = Object.keys(paginator.query!).map((k) => {
        const type = typeof paginator.query![k];
        if (type === 'number' || type === 'bigint') {
          return {
            OR: {
              [k]: {
                equals: paginator.query![k],
              },
            },
          };
        } if (type === 'string') {
          return {
            OR: {
              [k]: {
                contains: paginator.query![k],
                mode: 'insensitive',
              },
            },
          };
        } if (type === 'boolean') {
          return {
            OR: {
              [k]: paginator.query![k],
            },
          };
        } if (paginator.query![k].FK) {
          return {
            OR: {
              [k]: paginator.query![k].FK,
            },
          };
        }

        return {};
      });

      const [items, total] = await prisma.$transaction([
        prisma[this.modelName as string].findMany({
          where: !queryValues.length ? {
            deleted: includeDeleted,
          } : {
            deleted: includeDeleted,
            AND: queryValues,
          },
          skip: (paginator.page - 1) * paginator.perPage,
          take: paginator.perPage,
          include,
        }),
        prisma[this.modelName as string].count({
          where: !queryValues.length ? {
            deleted: includeDeleted,
          } : {
            deleted: includeDeleted,
            AND: queryValues,
          },
        }),
      ]);

      return { items, total };
    } catch (error: any) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.statusCode);
      }
      throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }

  public async destroy(id: string, type: 'soft' | 'hard') {
    try {
      if (type === 'soft') {
        const result = await (prisma[this.modelName as string]).update({
          where: {
            id,
          },
          data: {
            deleted: true,
            deletedAt: new Date(),
          },
        });

        return result as T;
      }

      const result = await prisma[this.modelName as string].delete({
        where: {
          id,
        },
      });

      return result as T;
    } catch (error: any) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.statusCode);
      }
      throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}
