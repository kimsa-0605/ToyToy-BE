import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 3306),
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
  });

  const dbName = process.env.DB_NAME || 'toytoy';
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.end();
  console.log(`✅ Database "${dbName}" checked or created.`);
}

async function bootstrap() {
  await createDatabaseIfNotExists();

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8000',
    credentials: true,
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, 
      whitelist: true,
      forbidNonWhitelisted: true, 
      exceptionFactory: (errors) => {
        return new BadRequestException({
          error: {
            code: 'INVALID_INPUT',
            message: 'Validation failed',
            details: errors.map((e) => ({
              field: e.property,
              issue: e.constraints
                ? Object.values(e.constraints)[0]
                : undefined,
            })),
          },
        });
      },
    }),
  );

  await app.listen(process.env.PORT || 3000);
}

bootstrap();