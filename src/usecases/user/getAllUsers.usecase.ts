// 1. Import
import { User } from '../../core/entities/user/user.entity';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../core/interfaceRepositories/user/user.repository.interface';

// 2. Define use case to get all users
export class GetAllUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  // 2.1. Execute logic to return all users
  async execute(): Promise<User[]> {
    return await this.userRepo.getAllUsers();
  }
}