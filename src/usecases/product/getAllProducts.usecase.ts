// 1. Import
import { Product } from "../../core/entities/product/product.entity";
import { Inject } from "@nestjs/common";
import {
    PRODUCT_REPOSITORY,
    IProductRepository,
} from "../../core/interfaceRepositories/product/product.repository.interface";

// 2. Define use case to get all products
export class GetAllProductsUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY) private readonly productRepo: IProductRepository,
    ) {}

    // 2.1. Execute logic to return all products
    async execute(): Promise<Product[]> {
        return await this.productRepo.getAllProducts();
    }
}