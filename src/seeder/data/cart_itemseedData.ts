// seed/data/cart_itemseedData.ts
import { DataSource } from 'typeorm';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import { UserORM } from '../../infrastructure/repositories/mySQL/user/user.orm.entity';

export async function CartItemSeedData(dataSource: DataSource): Promise<Partial<CartItem>[]> {
  const userRepo = dataSource.getRepository(UserORM);

  const admin = await userRepo.findOneBy({ email: 'kimsa@gmail.com' });
  const userB = await userRepo.findOneBy({ email: 'b@gmail.com' });

  if (!admin || !userB) {
    throw new Error('❌ Not found');
  }

  return [
    {
      product_name: 'Teddy Bear',
      price: 91,
      product_id: 1,
      user_id: admin.id,
      product_image_link: 'https://cdn.prod.website-files.com/.../33903-2-plush-toy-transparent-image-min.png',
      quantity: 2,
      status: 'active',
    },
    {
      product_name: 'Cute Dog',
      price: 33,
      product_id: 3,
      user_id: userB.id,
      product_image_link: 'https://cdn.prod.website-files.com/.../33908-7-plush-toy-file-min.png',
      quantity: 1,
      status: 'active',
    },
    {
      product_name: 'Lift Machine',
      price: 65,
      product_id: 10,
      user_id: admin.id,
      product_image_link: 'https://cdn.prod.website-files.com/.../33505-6-wooden-toy-clipart-min.png',
      quantity: 3,
      status: 'active',
    },
    {
      product_name: 'Rainbow Truck',
      price: 50,
      product_id: 13,
      user_id: userB.id,
      product_image_link: 'https://cdn.prod.website-files.com/.../33649-6-toy-transparent-image-min-p-500.png',
      quantity: 2,
      status: 'active',
    },
  ];
}
