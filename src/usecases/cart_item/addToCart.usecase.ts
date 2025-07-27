import { Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { Product } from '../../core/entities/product/product.entity';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import {
    CARTITEM_REPOSITORY,
    ICartItemRepository,
} from '../../core/interfaceRepositories/cart_item/cart_item.repository.interface';

import {
    PRODUCT_REPOSITORY,
    IProductRepository,
} from '../../core/interfaceRepositories/product/product.repository.interface';

export class AddToCartUseCase {
    constructor(
        @Inject(CARTITEM_REPOSITORY)
        private readonly cartItemRepo: ICartItemRepository,

        @Inject(PRODUCT_REPOSITORY)
        private readonly productRepo: IProductRepository,
    ) {}

    async execute(user_id: string, product_id: number, quantity: number): Promise<CartItem> {
        if (quantity < 1) {
            throw new BadRequestException('Quantity must be at least 1');
        }

        const product = await this.productRepo.getById(product_id);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const availableStock = product.quantity;

        const cartItems = await this.cartItemRepo.getCartItemsByUser(user_id);
        const existingCartItem = cartItems.find(
            (item) => item.product_id === product_id && item.status === 'active',
        );

        const finalQuantity = Math.min(
            existingCartItem ? existingCartItem.quantity + quantity : quantity,
            availableStock,
        );

        if (finalQuantity < 1) {
            throw new BadRequestException('Not enough stock available');
        }

        if (existingCartItem) {
            const updatedCartItem = await this.cartItemRepo.updateCart(user_id, product_id, finalQuantity);
            if (!updatedCartItem) {
                throw new NotFoundException('Failed to update cart item');
            }
            return updatedCartItem;
        }

        const newCartItem = await this.cartItemRepo.addToCart(user_id, product_id, finalQuantity);
        if (!newCartItem) {
            throw new NotFoundException('Failed to add cart item');
        }
        return newCartItem;
    }
}
