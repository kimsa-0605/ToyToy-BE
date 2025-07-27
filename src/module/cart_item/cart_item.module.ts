// 1. Import
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemORM } from '../../infrastructure/repositories/mySQL/cart_item/cart_item.orm.entity';
import { MySQLCartItemRepository } from '../../infrastructure/repositories/mySQL/cart_item/cart_item.repository';
import { CARTITEM_REPOSITORY } from '../../core/interfaceRepositories/cart_item/cart_item.repository.interface';
import { GetCartItemUseCase } from '../../usecases/cart_item/getCartItemsByUser.usecase';
import { AddToCartUseCase } from '../../usecases/cart_item/addToCart.usecase';
import { UpdateCartItemUseCase } from '../../usecases/cart_item/updateCart.usecase';
import { RemoveByUserIdUseCase } from '../../usecases/cart_item/removeByUserId.usecase';
import { ProductModule } from '../product/product.module';
import { CartItemController } from '../../presentation/restful/controller/cart_item/cart_item.controller';

// 2. Define the CartItemModule
@Module({
  imports: [TypeOrmModule.forFeature([CartItemORM]), ProductModule],
  controllers: [CartItemController],
  providers: [
    AddToCartUseCase,
    GetCartItemUseCase,
    UpdateCartItemUseCase,
    RemoveByUserIdUseCase,
    {
      provide: CARTITEM_REPOSITORY,
      useClass: MySQLCartItemRepository,
    },
  ],
})
export class CartItemModule {}