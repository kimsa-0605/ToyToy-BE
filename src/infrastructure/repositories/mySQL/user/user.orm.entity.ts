
import { CartItemORM } from '../cart_item/cart_item.orm.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class UserORM {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  avatar_link: string;

  @Column()
  phone: string;

  @Column()
  province: string;

  @Column()
  district: string;

  @Column()
  detailed_address: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => CartItemORM, (cartItem) => cartItem.user)
  cartItems: CartItemORM[];
}
