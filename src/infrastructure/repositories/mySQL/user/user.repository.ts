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
    return users.map(User.fromPlain);
  }

  async findAllActive(): Promise<User[]> {
    const users = await this.userRepo.find({
      where: { isActive: true },
    });
    return users.map(User.fromPlain);
  }

  async save(user: User): Promise<void> {
    await this.userRepo.save(user as UserORM);
  }

  async getById(id: string): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    return User.fromPlain(user);
  }

  async create(user: User): Promise<User> {
    const userORM = this.userRepo.create(user as UserORM);
    const savedUser = await this.userRepo.save(userORM);
    return User.fromPlain(savedUser);
  }

  async findByEmail(email: string): Promise<User | null> {
      const user = await this.userRepo.findOne({ where: { email } });
      if (!user) {
        return null;
      }
      return User.fromPlain(user);
  }
}
