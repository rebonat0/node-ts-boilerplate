import { User } from '@prisma/client';

export namespace UserTypes {
  export type Filters = Omit<User, 'id'>;
}
