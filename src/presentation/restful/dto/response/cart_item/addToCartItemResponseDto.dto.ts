import { CartItem } from '../../../../../core/entities/cart_item/cart_item.entity';

export class AddToCartItemResponseDto {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
  status: string;
  
  constructor(cartItem: CartItem) {
    this.id = cartItem.id;
    this.product_id = cartItem.product_id;
    this.user_id = cartItem.user_id;
    this.quantity = cartItem.quantity;
    this.status = cartItem.status;
  }
}