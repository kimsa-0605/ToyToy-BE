// 1. Import required modules and dependencies
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../module/app.module';
import { userSeedData } from './data/user.seedData';
import {
  IUserRepository,
  USER_REPOSITORY,
} from '../core/interfaceRepositories/user/user.repository.interface';
import { v4 as uuidv4 } from 'uuid';

// 2. Define function to insert seed users into the database
export async function seedUsers() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userRepo = app.get<IUserRepository>(USER_REPOSITORY);

  for (const user of userSeedData) {
    const userWithId = { ...user, id: uuidv4() }; 
    await userRepo.save(userWithId as any);
  }

  await app.close();
}