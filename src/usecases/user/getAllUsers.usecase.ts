import { User } from '../../core/entities/user/user.entity';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY, IUserRepository } from '../../core/interfaceRepositories/user/user.repository.interface';

export class GetAllUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    return await this.userRepo.getAllUsers();
  }
}
