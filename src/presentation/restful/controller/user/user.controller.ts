// 1. Import
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Request,
  Patch
} from '@nestjs/common';
import { GetAllUsersUseCase } from '../../../../usecases/user/getAllUsers.usecase';
import { GetActiveUsersUseCase } from '../../../../usecases/user/getActiveUsers.usecase';
import { GetByIdUseCase } from '../../../../usecases/user/getById.usecase';
import { CreateUserUseCase } from '../../../../usecases/user/createUser.usecase';
import { GetByEmailUseCase } from '../../../../usecases/user/getByEmail.usecase';
import { CreateUserDto } from '../../dto/request/user/createUserDto.dto';
import { UserResponseDto } from '../../dto/response/user/userResponseDto.dto';
import { SuccessResponse } from '../../dto/response/successResponse.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Public } from '../../../../common/decorator/public.decorator';
import { Roles } from '../../../../common/decorator/roles.decorator';
import { RolesGuard } from '../../../../common/guards/roles.guard';
import { UpdateUserDto } from '../../dto/request/user/updateUserDto.dto';
import { UpdateUserUseCase } from '../../../../usecases/user/updateById.usecase';
import { ChangePasswordUseCase } from '../../../../usecases/user/changePassword.usecase';
import { ChangePasswordDto } from '../../dto/request/user/changePasswordDto.dto';

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
    private readonly getByEmailUseCase: GetByEmailUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly changePasswordUseCase: ChangePasswordUseCase,
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
    return new SuccessResponse('Got active users successfully', {
      users: data,
    });
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.getByIdUseCase.execute(id);
    return new SuccessResponse(
      'Got user successfully',
      new UserResponseDto(user),
    );
  }

  @Public()
  @Get('email/:email')
  async getByEmail(@Param('email') email: string) {
    const user = await this.getByEmailUseCase.execute(email);
    return new SuccessResponse(
      'Got user successfully',
      new UserResponseDto(user),
    );
  }

  @Public()
  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    const user = await this.createUserUseCase.execute(dto);
    return new SuccessResponse('User created', new UserResponseDto(user));
  }

  @Patch('me')
  @Roles('customer')
  async updateById( 
    @Body() dto: UpdateUserDto,
    @Request() req
  ) {
    const userId = req.user.userId;
    const user = await this.updateUserUseCase.execute(userId, dto);
    return new SuccessResponse('User updated successfully', new UserResponseDto(user));
  }

  @Patch('password')
  @Roles('customer')
  async changePassword(
    @Body() dto: ChangePasswordDto,
    @Request() req
  ) {
    const userId = req.user.userId;
    await this.changePasswordUseCase.execute(userId, dto.currentPassword, dto.newPassword);
    return new SuccessResponse('Password changed successfully');
  }
}
