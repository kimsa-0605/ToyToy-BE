import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { IsStrongPassword } from '../../../../../common/validators/isStrongPassword.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Fullname is required' })
  fullname: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsStrongPassword({ message: 'Password must include uppercase, lowercase, number, and special character' }) 
  password: string;
}
