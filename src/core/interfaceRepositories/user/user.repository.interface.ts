// 1. Import
import { User } from '../../entities/user/user.entity';

// 2. Declare a constant token for Dependency Injection
export const USER_REPOSITORY = 'USER_REPOSITORY';

// 3. Define the User Repository Interface
export interface IUserRepository {
  getAllUsers(): Promise<User[]>;

  findAllActive(): Promise<User[]>;

  save(user: User): Promise<void>;

  getById(id: string): Promise<User | null>;

  create(user: User): Promise<User>;

  getByEmail(email: string): Promise<User | null>;
}
