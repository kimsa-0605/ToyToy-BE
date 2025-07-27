import { Inject } from '@nestjs/common';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import {
    CARTITEM_REPOSITORY,
    ICartItemRepository,
} from '../../core/interfaceRepositories/cart_item/cart_item.repository.interface';

export class GetCartItemUseCase {
    constructor(
        @Inject(CARTITEM_REPOSITORY)
        private readonly cartItemRepo: ICartItemRepository,
    ) {}

    async execute(user_id: string): Promise<CartItem[]> {
        return await this.cartItemRepo.getCartItemsByUser(user_id);
    }
}
