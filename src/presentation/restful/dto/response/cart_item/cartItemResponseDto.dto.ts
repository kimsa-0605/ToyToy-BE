import { CartItem } from '../../../../../core/entities/cart_item/cart_item.entity';

export class CartItemResponseDto {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
  status: string;
  product_name: string;
  price: number;
  product_image_link: string;
  
  constructor(cartItem: CartItem) {
    this.id = cartItem.id;
    this.product_id = cartItem.product_id;
    this.user_id = cartItem.user_id;
    this.quantity = cartItem.quantity;
    this.status = cartItem.status;

    this.product_name = cartItem.product?.product_name ?? '';
    this.price = cartItem.product?.price ?? 0;
    this.product_image_link = cartItem.product?.image_link ?? '';
  }
}
