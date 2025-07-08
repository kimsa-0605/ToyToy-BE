import { CreateUserDto } from '../../presentation/restful/dto/request/user/createUserDto.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { User } from '../../core/entities/user/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../core/interfaceRepositories/user/user.repository.interface';
import { Inject, ConflictException } from '@nestjs/common';

export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepo.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException({
        code: 'EMAIL_ALREADY_EXISTS',
        message: 'Email already in use',
        details: [{ 
          field: 'email', 
          issue: 'This email is already registered' 
        }],
      });
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltOrRounds);

    const user = new User(
      uuidv4(),
      dto.fullname,
      dto.email,
      hashedPassword,
      'customer',
      '',
      '',
      '',
      '',
      '',
      true,
    );

    return this.userRepo.create(user);
  }
}
