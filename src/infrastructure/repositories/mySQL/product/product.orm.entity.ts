import { Category } from '../../../../core/entities/product/category.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}