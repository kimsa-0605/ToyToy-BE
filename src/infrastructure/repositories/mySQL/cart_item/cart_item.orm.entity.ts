import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductORM } from '../product/product.orm.entity';
import { UserORM } from '../user/user.orm.entity';

@Entity('cart_items')
export class CartItemORM {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ default: 'active' })
  status: 'active' | 'out_of_stock';

  @Column()
  product_id: number;

  @ManyToOne(() => ProductORM, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: ProductORM;

  @Column()
  user_id: string;

  @ManyToOne(() => UserORM, { eager: false })
  @JoinColumn({ name: 'user_id' })
  user: UserORM;
}
