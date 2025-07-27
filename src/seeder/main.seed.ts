import { seedProduct } from './product.seed';
import { seedUsers } from './user.seed';
import { seedCartItem } from './cart_item.seed';

async function main() {
  await seedUsers();
  await seedProduct();
  await seedCartItem();
}

main();