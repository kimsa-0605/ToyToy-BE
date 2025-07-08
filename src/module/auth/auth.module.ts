import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../../presentation/restful/controller/auth/auth.controller';
import { JwtStrategy } from '../../common/strategies/jwt.strategy';
import { jwtConstants } from '../../config/jwt.config';
import { LoginUseCase } from '../../usecases/auth/login.usecase';
import { ValidateTokenUseCase } from '../../usecases/auth/validateToken.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserORM } from '../../infrastructure/repositories/mySQL/user/user.orm.entity';
import { MySQLUserRepository } from '../../infrastructure/repositories/mySQL/user/user.repository';
import { USER_REPOSITORY } from '../../core/interfaceRepositories/user/user.repository.interface';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([UserORM]),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    LoginUseCase,
    ValidateTokenUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: MySQLUserRepository,
    },
    MySQLUserRepository, 
  ],
})
export class AuthModule {}

