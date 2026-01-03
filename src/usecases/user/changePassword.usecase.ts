import { ChangePasswordDto } from '../../presentation/restful/dto/request/user/changePasswordDto.dto';
import { User } from '../../core/entities/user/user.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../core/interfaceRepositories/user/user.repository.interface';
import { Inject } from '@nestjs/common';

export class ChangePasswordUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async execute(id: string, currentPassword: string, newPassword: string): Promise<void> {
    const user = await this.userRepo.getById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatched = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatched) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.userRepo.changePassword(id, hashedPassword);
  }
}