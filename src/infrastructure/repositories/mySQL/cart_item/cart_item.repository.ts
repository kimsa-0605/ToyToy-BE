// 1. Import
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICartItemRepository } from '../../../../core/interfaceRepositories/cart_item/cart_item.repository.interface';
import { CartItem } from '../../../../core/entities/cart_item/cart_item.entity';
import { CartItemORM } from './cart_item.orm.entity';
import { Product } from 'src/core/entities/product/product.entity';

// 2. Implement the MySQL repository using TypeORM
@Injectable()
export class MySQLCartItemRepository implements ICartItemRepository {
    constructor(
        @InjectRepository(CartItemORM)
        private readonly cartItemRepo: Repository<CartItemORM>,
    ) {}

    async addToCart(user_id: string, product_id: number, quantity: number): Promise<CartItem | null > {
        const cartItem = this.cartItemRepo.create({
            user_id,
            product_id: product_id,
            quantity,
            status: 'active',
        });

        const saveCartItem = await this.cartItemRepo.save(cartItem);
        return CartItem.fromPlain(saveCartItem);
    }

    async getCartItemsByUser(user_id: string): Promise<CartItem[]> {
        const cartItem = await this.cartItemRepo.find({
                where: { 
                    user_id: user_id,
                    status: 'active'
                },
            });
        return cartItem.map(CartItem.fromPlain);
    }

    async updateCart(user_id: string, product_id: number, quantity: number): Promise<CartItem | null> {
        await this.cartItemRepo.update(
            { 
                user_id, 
                product_id: product_id 
            },  
            { 
                quantity 
            }                        
        );
        
        const updatedItem = await this.cartItemRepo.findOneBy({
            user_id,
            product_id: product_id
        });
        return updatedItem ? CartItem.fromPlain(updatedItem) : null;
    }

    async removeByUserId(user_id: string, product_id: number): Promise<void> {
        await this.cartItemRepo.delete(
            { 
                user_id: user_id,
                product_id: product_id

            }
        );
    }

    async save(cartItem: CartItem): Promise<void> {
        const entity = this.cartItemRepo.create(cartItem as CartItemORM);
        await this.cartItemRepo.save(entity);
    }
}