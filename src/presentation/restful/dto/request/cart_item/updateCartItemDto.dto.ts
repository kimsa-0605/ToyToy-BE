import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class UpdateCartItemDto {
    @IsNotEmpty({ message: 'Quantity must not be empty' })
    @IsNumber({}, { message: 'Quantity must be a number' })
    quantity: number;
}