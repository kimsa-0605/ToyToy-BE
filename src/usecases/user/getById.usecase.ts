import { User } from '../../core/entities/user/user.entity';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../core/interfaceRepositories/user/user.repository.interface';

export class GetByIdUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async execute(id: string): Promise<User | null> {
    return await this.userRepo.getById(id); 
  }
}
