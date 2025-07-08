import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../../config/jwt.config';

@Injectable()
export class ValidateTokenUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token, { secret: jwtConstants.secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}