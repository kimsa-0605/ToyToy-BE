import { seedUsers } from './user.seed';

async function main() {
  await seedUsers();
}

main();