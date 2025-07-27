import { Inject } from '@nestjs/common';
import { CartItem } from '../../core/entities/cart_item/cart_item.entity';
import {
    CARTITEM_REPOSITORY,
    ICartItemRepository,
} from '../../core/interfaceRepositories/cart_item/cart_item.repository.interface';

export class RemoveByUserIdUseCase {
    constructor(
        @Inject(CARTITEM_REPOSITORY)
        private readonly cartItemRepo: ICartItemRepository,
    ) {}

    async execute(user_id: string, product_id: number): Promise<void> {
        await this.cartItemRepo.removeByUserId(user_id, product_id);
    }
}