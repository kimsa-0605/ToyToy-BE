import { UpdateUserDto } from '../../presentation/restful/dto/request/user/updateUserDto.dto';
import { User } from '../../core/entities/user/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../core/interfaceRepositories/user/user.repository.interface';
import { Inject } from '@nestjs/common';

export class UpdateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async execute(id: string, dto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userRepo.updateById(id, dto);
    return updatedUser;
  }
}
