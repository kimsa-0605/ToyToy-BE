// 1. Import
import {
  Controller,
  Get,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  Request
} from '@nestjs/common';
import { AddToCartUseCase } from '../../../../usecases/cart_item/addToCart.usecase';
import { GetCartItemUseCase } from '../../../../usecases/cart_item/getCartItemsByUser.usecase';
import { RemoveByUserIdUseCase } from '../../../../usecases/cart_item/removeByUserId.usecase';
import { UpdateCartItemUseCase } from '../../../../usecases/cart_item/updateCart.usecase';
import { CartItemResponseDto } from '../../dto/response/cart_item/cartItemResponseDto.dto';
import { SuccessResponse } from '../../dto/response/successResponse.dto';
import { AddToCartDto } from '../../dto/request/cart_item/addTocartDto.dto';
import { UpdateCartItemDto } from '../../dto/request/cart_item/updateCartItemDto.dto';
import { JwtAuthGuard } from '../../../../common/guards/jwt-auth.guard';
import { Roles } from '../../../../common/decorator/roles.decorator';
import { RolesGuard } from '../../../../common/guards/roles.guard';

// 2. Apply guards to whole controller
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('customer')
@Controller('cart-items')
export class CartItemController {
  constructor(
    private readonly addToCartUseCase: AddToCartUseCase,
    private readonly getCartItemUseCase: GetCartItemUseCase,
    private readonly removeByUserIdUseCase: RemoveByUserIdUseCase,
    private readonly updateCartItemUseCase: UpdateCartItemUseCase,
  ) {}

  @Get()
  async getCartItems(@Request() req) {
    const userId = req.user?.userId;
    const cartItems = await this.getCartItemUseCase.execute(userId);
    const data = cartItems.map((cartItem) => new CartItemResponseDto(cartItem));
    return new SuccessResponse('Got all cart items successfully', {
      cartItems: data,
    });
  }

  @Post()
  async addToCart(@Body() dto: AddToCartDto, @Request() req) {
    const userId = req.user.userId;
    const cartItem = await this.addToCartUseCase.execute(userId, dto.product_id, dto.quantity);
    const data = new CartItemResponseDto(cartItem);
    return new SuccessResponse('Product added to cart successfully', { cartItem: data });
  }

  @Put(':productId')
  async updateCartItem(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() dto: UpdateCartItemDto,
    @Request() req
  ) {
    const userId = req.user.userId;
    const cartItem = await this.updateCartItemUseCase.execute(userId, productId, dto.quantity);
    const data = new CartItemResponseDto(cartItem);
    return new SuccessResponse('Product updated cart item successfully', { cartItem: data });
  }

  @Delete(':productId')
  async removeCartItem(
    @Param('productId', ParseIntPipe) productId: number,
    @Request() req
  ) {
    const userId = req.user.userId;
    await this.removeByUserIdUseCase.execute(userId, productId);
    return new SuccessResponse('Product removed from cart successfully');
  }
}