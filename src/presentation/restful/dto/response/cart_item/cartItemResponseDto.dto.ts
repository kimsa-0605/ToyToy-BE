import { CartItem } from '../../../../../core/entities/cart_item/cart_item.entity';

export class CartItemResponseDto {
  id: number;
  product_name: string;
  price: number;
  product_id: number;
  product_image_link: string;
  user_id: string;
  quantity: number;
  status: string;

  constructor(cartItem: CartItem) {
    this.id = cartItem.id;
    this.product_name = cartItem.product_name;
    this.price = cartItem.price;
    this.product_id = cartItem.product_id;
    this.product_image_link = cartItem.product_image_link;
    this.user_id = cartItem.user_id;
    this.quantity = cartItem.quantity;
    this.status = cartItem.status;
  }
}
