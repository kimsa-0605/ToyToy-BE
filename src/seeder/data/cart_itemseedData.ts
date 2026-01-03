// seed/data/cart_itemseedData.ts
import { DataSource } from 'typeorm';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import { UserORM } from '../../infrastructure/repositories/mySQL/user/user.orm.entity';

export async function CartItemSeedData(dataSource: DataSource): Promise<Partial<CartItem>[]> {
  const userRepo = dataSource.getRepository(UserORM);

  const kimsa = await userRepo.findOneBy({ email: 'kimsa@gmail.com' });
  const userB = await userRepo.findOneBy({ email: 'b@gmail.com' });

  if (!kimsa || !userB) {
    throw new Error('❌ Not found');
  }

  return [
    {
      product_id: 1,
      user_id: kimsa.id,
      quantity: 2,
      status: 'active',
    },
    {
      product_id: 3,
      user_id: userB.id,
      quantity: 1,
      status: 'active',
    },
    {
      product_id: 10,
      user_id: kimsa.id,
      quantity: 3,
      status: 'active',
    },
    {
      product_id: 13,
      user_id: userB.id,
      quantity: 2,
      status: 'active',
    },
  ];
}
