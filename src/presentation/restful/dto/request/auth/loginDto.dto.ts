import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be valid' })
    email: string;
  
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
}

