// 1. Import
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from '../../presentation/restful/controller/product/product.controller';
import { GetAllProductsUseCase } from '../../usecases/product/getAllProducts.usecase';
import { ProductORM } from '../../infrastructure/repositories/mySQL/product/product.orm.entity';
import { MySQLProductRepository } from '../../infrastructure/repositories/mySQL/product/product.repository';
import { PRODUCT_REPOSITORY } from '../../core/interfaceRepositories/product/product.repository.interface';
import { GetByIdUseCase } from '../../usecases/product/getById.usecase';
import { GetByCategoryUseCase } from '../../usecases/product/getByCategory.usecase';

// 2. Define the ProductModule
@Module({
  imports: [TypeOrmModule.forFeature([ProductORM])],
  controllers: [ProductController],
  providers: [
    GetAllProductsUseCase,
    GetByIdUseCase,
    GetByCategoryUseCase,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: MySQLProductRepository,
    },
  ],
  exports: [PRODUCT_REPOSITORY],
})
export class ProductModule {}