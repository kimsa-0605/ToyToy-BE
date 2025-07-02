import { User } from '../../entities/user/user.entity';
export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  
  findAllActive(): Promise<User[]>;
}