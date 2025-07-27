// seed/seedCartItem.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../module/app.module';
import { CartItemSeedData } from './data/cart_itemseedData';

import {
  ICartItemRepository,
  CARTITEM_REPOSITORY,
} from '../core/interfaceRepositories/cart_item/cart_item.repository.interface';

import { DataSource } from 'typeorm';

export async function seedCartItem() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const cartItemRepo = app.get<ICartItemRepository>(CARTITEM_REPOSITORY);
  const dataSource = app.get(DataSource);
  const cartItems = await CartItemSeedData(dataSource);

for (const cartItem of cartItems) {
  await cartItemRepo.save({
    id: cartItem.id ?? 0,
    product_id: cartItem.product_id ?? 0,
    product_name: cartItem.product_name ?? '',
    price: cartItem.price ?? 0,
    product_image_link: cartItem.product_image_link ?? '',
    status: cartItem.status ?? 'active',
    user_id: String(cartItem.user_id ?? 0),
    quantity: cartItem.quantity ?? 0,
  });
}

  await app.close();
}
