// 1. Import
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'; 
import { ExtractJwt, Strategy } from 'passport-jwt'; 
import { ConfigService } from '@nestjs/config'; 

// 2. Create JwtStrategy
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    // 2.1. Get secret key from .env
    const secret = configService.get<string>('JWT_SECRET');

    // 2.2. Throw error if key is missing
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in .env');
    }

    // 2.3. Pass config to parent class
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      ignoreExpiration: false, 
      secretOrKey: secret,
    });
  }

  // 2.4. Validate and attach user data to req.user
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}