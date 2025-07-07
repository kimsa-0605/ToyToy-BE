import { User } from '../../entities/user/user.entity';
export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;

  findAllActive(): Promise<User[]>;

  save(user: User): Promise<void>;

  getById(id: string): Promise<User | null>;

  create(user: User): Promise<User>;

  findByEmail(email: string): Promise< User | null>;
}