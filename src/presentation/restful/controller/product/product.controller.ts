// 1. Import
import {
  Controller,
  Get,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { GetAllProductsUseCase } from '../../../../usecases/product/getAllProducts.usecase';
import { GetByIdUseCase } from '../../../../usecases/product/getById.usecase';
import { GetByCategoryUseCase } from '../../../../usecases/product/getByCategory.usecase';
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
    private readonly getByIdUseCase: GetByIdUseCase,
    private readonly getByCategoryUseCase: GetByCategoryUseCase,
  ) {}

  @Get()
  async getAllProduct() {
    const products = await this.getAllProductsUseCase.execute();
    const data = products.map((product) => new ProductResponseDto(product));
    return new SuccessResponse('Got all products successfully', {
      products: data,
    });
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const product = await this.getByIdUseCase.execute(id);
    return new SuccessResponse(
      'Got product successfully',
      new ProductResponseDto(product),
    );
  }

  @Get('category/:category')
  async getByCategory(@Param('category') categoryParam: string) {
    const products = await this.getByCategoryUseCase.execute(categoryParam);
    const data = products.map((product) => new ProductResponseDto(product));
    return new SuccessResponse('Got products by category', { products: data });
  }
}