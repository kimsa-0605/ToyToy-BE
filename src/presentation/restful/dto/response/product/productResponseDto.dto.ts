// 1. Import
import { Category } from '../../../../..//core/entities/product/category.enum';
import { Product } from '../../../../../core/entities/product/product.entity';

export class ProductResponseDto {
  id: number;
  product_name: string;
  price: number;
  image_link: string;
  category: Category;
  description: string;
  quantity: number;

  constructor(product: Product) {
    this.id = product.id ?? 0;
    this.product_name = product.product_name;
    this.price = product.price;
    this.image_link = product.image_link;
    this.category = product.category;
    this.description = product.description;
    this.quantity = product.quantity;
  }
}