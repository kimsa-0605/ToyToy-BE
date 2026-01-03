// 1. Import
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../../presentation/restful/controller/user/user.controller';
import { GetAllUsersUseCase } from '../../usecases/user/getAllUsers.usecase';
import { GetActiveUsersUseCase } from '../../usecases/user/getActiveUsers.usecase';
import { UserORM } from '../../infrastructure/repositories/mySQL/user/user.orm.entity';
import { MySQLUserRepository } from '../../infrastructure/repositories/mySQL/user/user.repository';
import { USER_REPOSITORY } from '../../core/interfaceRepositories/user/user.repository.interface';
import { GetByIdUseCase } from '../../usecases/user/getById.usecase';
import { CreateUserUseCase } from '../../usecases/user/createUser.usecase';
import { GetByEmailUseCase } from '../../usecases/user/getByEmail.usecase';
import { UpdateUserUseCase } from '../../usecases/user/updateById.usecase';
import { ChangePasswordUseCase } from '../../usecases/user/changePassword.usecase';

// 2. Define the UserModule
@Module({
  imports: [TypeOrmModule.forFeature([UserORM])],
  controllers: [UserController],
  providers: [
    GetAllUsersUseCase,
    GetActiveUsersUseCase,
    GetByIdUseCase,
    CreateUserUseCase,
    GetByEmailUseCase,
    UpdateUserUseCase,
    ChangePasswordUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: MySQLUserRepository,
    },
  ],
})
export class UserModule {}
