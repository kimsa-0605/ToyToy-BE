import { IsNotEmpty, MinLength, MaxLength, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Fullname is required' })
  @MinLength(3, { message: 'Your full name must be at least 3 characters long' })
  fullname: string;

  @MinLength(10, { message: 'Phone must be exactly 10 digits' })
  @MaxLength(10, { message: 'Phone must be exactly 10 digits' })
  phone: string;

  @IsOptional()
  @IsString()
  avatar_link: string;

  @IsOptional()
  @IsString()
  province: string;

  @IsOptional()
  @IsString()
  district: string;

  @IsOptional()
  @IsString()
  detailed_address: string;
}