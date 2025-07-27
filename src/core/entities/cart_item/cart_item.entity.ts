// 1. Define User entity (used in core domain logic)
export class CartItem {
  constructor(
    public readonly id: number,
    public readonly product_name: string,
    public readonly price: number,
    public readonly product_id: number,
    public readonly product_image_link: string,
    public readonly user_id: string,
    public readonly quantity: number,
    public readonly status: string,
  ) {}

  // 2. Create a User object from a plain JS object
  static fromPlain(plain: Partial<CartItem>): CartItem {
    return new CartItem(
      plain.id ?? 0,
      plain.product_name ?? '',
      plain.price ?? 0,
      plain.product_id ?? 0,
      plain.product_image_link ?? '',
      plain.user_id ?? '',
      plain.quantity ?? 1,
      plain.status ?? 'active',
    );
  }
}
