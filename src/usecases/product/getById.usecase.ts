// 1. Import
import { Product  } from "../../core/entities/product/product.entity";
import { Inject } from '@nestjs/common';
import {
    PRODUCT_REPOSITORY,
    IProductRepository
} from '../../core/interfaceRepositories/product/product.repository.interface'

// 2. Define use case to get product by ID
export class GetByIdUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private readonly productRepo: IProductRepository,
    ) {}

    // 2.1. Execute logic to find a product by ID
    async execute(id: number): Promise<Product | null> {
        return await this.productRepo.getById(id);
    }
}