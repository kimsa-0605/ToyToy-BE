import { Inject, BadRequestException, NotFoundException } from '@nestjs/common';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import {
    CARTITEM_REPOSITORY,
    ICartItemRepository,
} from '../../core/interfaceRepositories/cart_item/cart_item.repository.interface';
import {
    PRODUCT_REPOSITORY,
    IProductRepository,
} from '../../core/interfaceRepositories/product/product.repository.interface';

export class UpdateCartItemUseCase {
    constructor(
        @Inject(CARTITEM_REPOSITORY)
        private readonly cartItemRepo: ICartItemRepository,

        @Inject(PRODUCT_REPOSITORY)
        private readonly productRepo: IProductRepository,
    ) {}

    async execute(user_id: string, product_id: number, quantityToAdd: number): Promise<CartItem> {
        if (quantityToAdd < 1) {
            throw new BadRequestException('Quantity to add must be at least 1');
        }

        const product = await this.productRepo.getById(product_id);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const availableStock = product.quantity;
        if (availableStock <= 0) {
            throw new BadRequestException('Product is out of stock');
        }

        const cartItems = await this.cartItemRepo.getCartItemsByUser(user_id);
        const existingCartItem = cartItems.find(
            (item) => item.product_id === product_id && item.status === 'active',
        );

        const finalQuantity = Math.min(
            (existingCartItem ? existingCartItem.quantity : 0) + quantityToAdd,
            availableStock,
        );

        if (finalQuantity < 1) {
            throw new BadRequestException('Not enough stock available');
        }

        if (existingCartItem) {
            if (finalQuantity === existingCartItem.quantity) {
                return existingCartItem;
            }

            const updatedItem = await this.cartItemRepo.updateCart(user_id, product_id, finalQuantity);
            if (!updatedItem) {
                throw new NotFoundException('Failed to update cart item');
            }
            return updatedItem;
        }

        const newItem = await this.cartItemRepo.addToCart(user_id, product_id, finalQuantity);
        if (!newItem) {
            throw new NotFoundException('Failed to add cart item');
        }
        return newItem;
    }
}
