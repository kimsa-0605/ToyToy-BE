import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../../core/interfaceRepositories/user/user.repository.interface';
import { User } from '../../../../core/entities/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserORM } from './user.orm.entity';

@Injectable()
export class MySQLUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserORM)
    private readonly userRepo: Repository<UserORM>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepo.find();
    return users.map(u => new User(u.id, u.name, u.email));
  }

  async findAllActive(): Promise<User[]> {
    const users = await this.userRepo.find({
      where: { isActive: true },
    });
    return users.map(u => new User(u.id, u.name, u.email));
  }
}
