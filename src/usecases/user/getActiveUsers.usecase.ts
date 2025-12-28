// 1. Import
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../core/interfaceRepositories/user/user.repository.interface';
import { User } from '../../core/entities/user/user.entity';

// 2. Define GetActiveUsersUseCase
export class GetActiveUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  // 2.1. Get users with isActive = true
  async execute(): Promise<User[]> {
    return await this.userRepo.findAllActive();
  }
}