export class CartItem {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
  status: string;

  product?: {
    id: number;
    product_name: string;
    price: number;
    image_link: string;
    quantity: number;
  };

  static fromPlain(plain: any): CartItem {
    return {
      id: plain.id,
      product_id: plain.product_id,
      user_id: plain.user_id,
      quantity: plain.quantity,
      status: plain.status,
      product: plain.product ? {
        id: plain.product.id,
        product_name: plain.product.product_name,
        price: plain.product.price,
        image_link: plain.product.image_link,
        quantity: plain.product.quantity,
      } : undefined,
    };
  }
}
