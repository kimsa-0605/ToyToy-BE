// 1. Import 
import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { GetAllProductsUseCase } from '../../../../usecases/product/getAllProducts.usecase';
import { GetByIdUseCase } from '../../../../usecases/product/getById.usecase';
import { ProductResponseDto } from '../../dto/response/product/productResponseDto.dto';
import { SuccessResponse } from '../../dto/response/successResponse.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Public } from '../../../../common/decorator/public.decorator';

// 2. Apply guards to whole controller
@UseGuards(JwtAuthGuard)
@Public()
@Controller('products')
export class ProductController {
    constructor(
        private readonly getAllProductsUseCase: GetAllProductsUseCase,
        private readonly getByIdUseCase: GetByIdUseCase
    ) {}

    @Get()
    async getAllProduct() {
        const products = await this.getAllProductsUseCase.execute();
        const data = products.map((product) => new ProductResponseDto(product));
            return new SuccessResponse('Got all products successfully', { products: data });
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        const product = await this.getByIdUseCase.execute(id);
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
        return new SuccessResponse('Got product successfully', new ProductResponseDto(product));
    }
}