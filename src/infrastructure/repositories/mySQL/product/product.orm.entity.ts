import { Category } from '../../../../core/entities/product/category.enum';
import { CartItemORM } from '../cart_item/cart_item.orm.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('products')
export class ProductORM {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_name: string;

    @Column()
    price: number;

    @Column()
    image_link: string;

    @Column()
    category: Category;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @OneToMany(() => CartItemORM, cartItem => cartItem.product)
    cart_items: CartItemORM[];
}