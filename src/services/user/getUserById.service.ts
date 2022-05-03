import { User } from '@prisma/client';
import AppError from '~/exceptions/generic.exception';
import StatusCode from '~/helpers/statusCode';
import prisma from '~/services/prisma'

export class GetUserByIdService {
    public static async execute(id: string): Promise<User | null> {
        try {
            const user = await prisma.user.findUnique({ where: { id }});

            return user;
        } catch (error: any) {
            if (error instanceof AppError) {
                throw new AppError(error.message, error.statusCode);
            }
            throw new AppError(String(error), StatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}