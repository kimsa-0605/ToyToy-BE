// 1. Import
import { Product  } from "../../core/entities/product/product.entity";
import { Inject, NotFoundException } from '@nestjs/common';
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
    async execute(id: number): Promise<Product> {
        const product = await this.productRepo.getById(id)
        if (!product) {
            throw new NotFoundException ({
                code: 'PRODUCT_NOT_FOUND',
                message: 'Product not found',
                details: [{ 
                field: 'productId', 
                issue: 'Product does not exist' 
                }],
            })
        }
        return product;
    }
}