import { NestFactory } from '@nestjs/core';
import { AppModule } from '../module/app.module';
import { userSeedData } from './data/user.seedData';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../core/interfaceRepositories/user/user.repository.interface';

export async function seedUsers() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userRepo = app.get<IUserRepository>(USER_REPOSITORY);

  for (const [index, user] of userSeedData.entries()) {
    const userWithId = { ...user };
    await userRepo.save(userWithId as any);
  }

  await app.close();
}
