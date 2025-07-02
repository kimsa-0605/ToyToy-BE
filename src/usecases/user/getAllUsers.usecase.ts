import { IUserRepository } from '../../core/interfaceRepositories/user/user.repository.interface';
import { User } from '../../core/entities/user/user.entity';

export class GetAllUsersUseCase {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepo.getAllUsers();
  }
}
