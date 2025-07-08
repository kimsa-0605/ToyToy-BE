// 1. Import
import { User } from '../../core/entities/user/user.entity';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../core/interfaceRepositories/user/user.repository.interface';

// 2. Define use case to get user by ID
export class GetByIdUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  // 2.1. Execute logic to find a user by ID
  async execute(id: string): Promise<User | null> {
    return await this.userRepo.getById(id); 
  }
}