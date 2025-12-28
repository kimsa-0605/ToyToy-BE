// 1. Import
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// 2. Create use case
@Injectable()
export class ValidateTokenUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // 3. Execute use case: verify token
  async execute(token: string): Promise<any> {
    try {
      const secret = this.configService.get<string>('JWT_SECRET'); 

      if (!secret) {
        throw new Error('JWT_SECRET is not defined in .env');
      }

      return this.jwtService.verify(token, { secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
