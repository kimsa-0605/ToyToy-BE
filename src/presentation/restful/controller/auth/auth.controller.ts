// 1. Import
import { Controller, Post, Body } from '@nestjs/common';
import { LoginUseCase } from '../../../../usecases/auth/login.usecase';
import { LoginDto } from '../../dto/request/auth/loginDto.dto';
import { LoginResponseDto } from '../../dto/response/auth/loginResponse.dto';

// 2. Define controller for auth routes
@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    const token = await this.loginUseCase.execute(loginDto.email, loginDto.password);
    return new LoginResponseDto(token);
  }
}