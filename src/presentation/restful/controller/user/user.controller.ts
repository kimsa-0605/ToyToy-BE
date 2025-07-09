// 1. Import
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { GetAllUsersUseCase } from '../../../../usecases/user/getAllUsers.usecase';
import { GetActiveUsersUseCase } from '../../../../usecases/user/getActiveUsers.usecase';
import { GetByIdUseCase } from '../../../../usecases/user/getById.usecase';
import { CreateUserUseCase } from '../../../../usecases/user/createUser.usecase';
import { CreateUserDto } from '../../dto/request/user/createUserDto.dto';
import { UserResponseDto } from '../../dto/response/user/userResponseDto.dto';
import { SuccessResponse } from '../../dto/response/successResponse.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Public } from '../../../../common/decorator/public.decorator';
import { Roles } from '../../../../common/decorator/roles.decorator';
import { RolesGuard } from '../../../../common/guards/roles.guard';

// 2. Apply guards and admin role to whole controller
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Controller('users')
export class UserController {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getActiveUsersUseCase: GetActiveUsersUseCase,
    private readonly getByIdUseCase: GetByIdUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Get()
  async getAllUsers() {
    const users = await this.getAllUsersUseCase.execute();
    const data = users.map((user) => new UserResponseDto(user));
    return new SuccessResponse('Got all users successfully', { users: data });
  }

  @Get('active')
  async getActiveUsers() {
    const users = await this.getActiveUsersUseCase.execute();
    const data = users.map((user) => new UserResponseDto(user));
    return new SuccessResponse('Got active users successfully', { users: data });
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.getByIdUseCase.execute(id);
    if (!user) {
      throw new NotFoundException({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        details: [{ 
          field: 'userId', 
          issue: 'User does not exist' 
        }],
      });
    }
    return new SuccessResponse('Got user successfully', new UserResponseDto(user));
  }

  @Public()
  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    const user = await this.createUserUseCase.execute(dto);
    return new SuccessResponse('User created', new UserResponseDto(user));
  }
}