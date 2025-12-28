import { seedProduct } from './product.seed';
import { seedUsers } from './user.seed';

async function main() {
  await seedUsers();
  await seedProduct();
}

main();