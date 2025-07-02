import { Controller, Get } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../../../usecases/user/getAllUsers.usecase';
import { GetActiveUsersUseCase } from '../../../../usecases/user/getActiveUsers.usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getActiveUsersUseCase: GetActiveUsersUseCase,
  ) {}

  @Get()
  async getAll() {
    return this.getAllUsersUseCase.execute();
  }

  @Get('active')
  async getActiveUsers() {
    return this.getActiveUsersUseCase.execute();
  }
}