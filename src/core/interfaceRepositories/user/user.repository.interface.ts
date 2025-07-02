import { User } from '../../entities/user/user.entity';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;

  findAllActive(): Promise<User[]>;
}
