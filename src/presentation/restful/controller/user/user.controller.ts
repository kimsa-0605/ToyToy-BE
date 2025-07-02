import { Controller, Get } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../../../usecases/user/getAllUsers.usecase';
import { GetActiveUsersUseCase } from '../../../../usecases/user/getActiveUsers.usecase';
import { MySQLUserRepository } from '../../../../infrastructure/repositories/mySQL/user/user.repository';

@Controller('users')
export class UserController {
  private readonly getAllUsersUseCase: GetAllUsersUseCase;
  private readonly getActiveUsersUseCase: GetActiveUsersUseCase;

  constructor(private readonly userRepo: MySQLUserRepository) {
    this.getAllUsersUseCase = new GetAllUsersUseCase(userRepo);
    this.getActiveUsersUseCase = new GetActiveUsersUseCase(userRepo);
  }

  @Get()
  async getAll() {
    const users = await this.getAllUsersUseCase.execute();
    return users;
  }

  @Get('active')
  async getActiveUsers() {
    const users = await this.userRepo.findAllActive();
    return users;
  }
}
