// 1. Import
import { Category } from './category.enum';

// 2. Define Product entity
export class Product {
  constructor(
    public readonly product_name: string,
    public readonly price: number,
    public readonly image_link: string,
    public readonly category: Category,
    public readonly description: string,
    public readonly quantity: number,
    public readonly id?: number,
  ) {}

  static fromPlain(plain: Partial<Product>): Product {
    return new Product(
        plain.product_name ?? '',
        plain.price ?? 0,
        plain.image_link ?? '',
        (plain.category as Category) ?? Category.STUFFED_ANIMALS,
        plain.description ?? '',
        plain.quantity ?? 0,
        plain.id ?? 0,
    )
  }
}