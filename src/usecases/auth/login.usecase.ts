// 1. Import
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MySQLUserRepository } from '../../infrastructure/repositories/mySQL/user/user.repository';
import * as bcrypt from 'bcrypt';

// 2. Define LoginUseCase
@Injectable()
export class LoginUseCase {
  constructor(
    private readonly userRepository: MySQLUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  // 3. Execute login with email & password
  async execute(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    return this.jwtService.sign(payload);
  }
}