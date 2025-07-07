import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {

        return new BadRequestException({
          error: {
            code: 'INVALID_INPUT',
            message: 'Validation failed',
            details: errors.map((e) => ({
              field: e.property,
              issue: e.constraints ? Object.values(e.constraints)[0] : undefined,
            })),
          },
        });
      },
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
