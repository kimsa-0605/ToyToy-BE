// 1. Import required modules and dependencies
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../module/app.module';
import { productSeedData } from './data/product.seedData';
import {
  IProductRepository,
  PRODUCT_REPOSITORY,
} from '../core/interfaceRepositories/product/product.repository.interface';

// 2. Define function to insert seed products into the database
export async function seedProduct() {
  const app = await NestFactory.createApplicationContext(AppModule); 

  const productRepo = app.get<IProductRepository>(PRODUCT_REPOSITORY);

  for (const product of productSeedData) {
    await productRepo.save(product as any); 
  }

  await app.close();
}