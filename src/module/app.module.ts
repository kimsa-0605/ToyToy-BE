// 1. Import
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { DatabaseInitService } from '../infrastructure/externalService/database/database-init.service';
import { CartItemModule } from './cart_item/cart_item.module';

// 2. Define AppModule
@Module({
  imports: [
    // 2.1. Load environment variables from .env file globally
    ConfigModule.forRoot({ isGlobal: true }),

    // 2.2. Setup TypeORM with async config (using values from .env)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +(configService.get<number>('DB_PORT') ?? 3306),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    // 2.3. Import feature modules
    UserModule,
    AuthModule,
    ProductModule,
    CartItemModule
  ],

  providers: [DatabaseInitService],
  
})
export class AppModule {}
