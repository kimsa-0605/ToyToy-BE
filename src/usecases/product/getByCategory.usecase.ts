import { Inject, NotFoundException } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  IProductRepository,
} from '../../core/interfaceRepositories/product/product.repository.interface';
import { Product } from '../../core/entities/product/product.entity';
import { Category } from '../../core/entities/product/category.enum';

export class GetByCategoryUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepo: IProductRepository,
  ) {}

  async execute(categoryParam: string): Promise<Product[]> {
    const categoryKey = categoryParam.toUpperCase() as keyof typeof Category;
    const category = Category[categoryKey];

    if (category === undefined) {
      throw new NotFoundException({
        code: 'INVALID_CATEGORY',
        message: 'Category not found',
        details: [
          {
            field: 'category',
            issue: 'Invalid category name',
          },
        ],
      });
    }

    const products = await this.productRepo.getByCategory(category);
    return products ?? [];
  }
}
