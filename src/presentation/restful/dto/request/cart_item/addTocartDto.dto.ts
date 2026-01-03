import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class AddToCartDto {
    @IsNotEmpty({ message: 'Quantity must not be empty' })
    @IsNumber({}, { message: 'Quantity must be a number' })
    product_id: number;

    @IsNotEmpty({ message: 'Quantity must not be empty' })
    @IsNumber({}, { message: 'Quantity must be a number' })
    @IsPositive({ message: 'Quantity must be greater than 0' })
    quantity: number;
}