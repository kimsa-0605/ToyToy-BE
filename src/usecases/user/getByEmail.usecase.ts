// 1. Import
import { User } from '../../core/entities/user/user.entity';
import { Inject, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../core/interfaceRepositories/user/user.repository.interface';

// 2. Define use case to get user by Email
export class GetByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  // 2.1. Execute logic to find a user by Email
  async execute(email: string): Promise<User> {
    const user = await this.userRepo.getByEmail(email);
    if (!user) {
      throw new NotFoundException({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        details: [
          {
            field: 'email',
            issue: 'User does not exist',
          },
        ],
      });
    }
    return user;
  }
}
