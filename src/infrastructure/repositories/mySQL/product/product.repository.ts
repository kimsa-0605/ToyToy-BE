// 1. Import
import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../../../core/interfaceRepositories/product/product.repository.interface';
import { Product } from '../../../../core/entities/product/product.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductORM } from './product.orm.entity'; 
import { Category } from 'src/core/entities/product/category.enum';

// 2. Implement the MySQL repository using TypeORM
@Injectable()
export class MySQLProductRepository implements IProductRepository {
  constructor(
      @InjectRepository(ProductORM)
      private readonly productRepo: Repository<ProductORM>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
      const products = await this.productRepo.find();
      return products.map(Product.fromPlain);
  }

  async getById(id: number): Promise<Product | null> {
      const product = await this.productRepo.findOne({ where: { id } });
      if (!product) {
        return null;
      }
      return Product.fromPlain(product);
    }

  async save(product: Product): Promise<void> {
    await this.productRepo.save(product as ProductORM)
  }

  async getByCategory(category: Category): Promise<Product[] | null> {
    return await this.productRepo.find({where: {category}})
  }
}