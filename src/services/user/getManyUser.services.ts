import { User } from '@prisma/client';
import AppError from '~/exceptions/generic.exception';
import StatusCode from '~/helpers/statusCode';
import prisma from '~/services/prisma';
import { UserTypes } from '~/types';

export class GetManyUserService {
    public static async execute(
        query: UserTypes.Filters, 
        page: number, 
        perPage: number
    ): Promise<{ users: User[], total: number }> {
        try {
            const [users, total] = await prisma.$transaction([
                prisma.user.findMany({
                    where: { ...query },
                    skip: (page - 1) * perPage,
                    take: perPage,
                }),
                prisma.user.count({
                    where: { ...query },
                }),
            ]);
    
            return { users, total };
        } catch (error: any) {
            if (error instanceof AppError) {
                throw new AppError(error.message, error.statusCode);
            }
            throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}