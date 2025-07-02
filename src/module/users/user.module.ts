import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../../presentation/restful/controller/user/user.controller';
import { GetAllUsersUseCase } from '../../usecases/user/getAllUsers.usecase';
import { UserORM } from '../../infrastructure/repositories/mySQL/user/user.orm.entity'; 
import { MySQLUserRepository } from 'src/infrastructure/repositories/mySQL/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserORM])],
  controllers: [UserController],
  providers: [GetAllUsersUseCase, MySQLUserRepository],
})
export class UserModule {}