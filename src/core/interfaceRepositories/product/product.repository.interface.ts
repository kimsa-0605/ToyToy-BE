// 1. Import
import { Product } from "../../entities/product/product.entity";

// 2. Declare a constant token for Dependency Injection
export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

// 3. Define the User Repository Interface
export interface IProductRepository {
    getAllProducts(): Promise<Product[]>;

    getById(id: number): Promise<Product | null>;
}