// 1. Import
import { CartItem } from '../../entities/cart_item/cart_item.entity';

// 2. Declare a constant token for Dependency Injection
export const CARTITEM_REPOSITORY = 'CARTITEM_REPOSITORY';

// 3. Define the CartItem Repository Interface
export interface ICartItemRepository {

    addToCart(user_id: string, product_id: number, quantity: number): Promise<CartItem | null>;

    getCartItemsByUser(user_id: string): Promise<CartItem[]>;

    updateCart (user_id: string, product_id: number, quantity: number): Promise<CartItem | null>;

    removeByUserId(user_id: string, product_id: number): Promise<void>;

    save(cartItem: CartItem): Promise<void>;
}
