import { CreateUserDto } from '../../presentation/restful/dto/request/user/createUserDto.dto';
import { User } from '../../core/entities/user/user.entity';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../../core/interfaceRepositories/user/user.repository.interface';
import { Inject, ConflictException } from '@nestjs/common';
import { UserORM } from 'src/infrastructure/repositories/mySQL/user/user.orm.entity';

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

    const user = new User(
      "",
      dto.fullname,
      dto.email,
      dto.password,
      'customer',             
      '',                    
      '',                   
      '',                    
      '',                    
      '',                   
      true                  
    );

    return this.userRepo.create(user);
  }
}
