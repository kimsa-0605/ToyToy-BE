import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { IsStrongPassword } from '../../../../../common/validators/isStrongPassword.validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  currentPassword: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsStrongPassword({ message: 'Password must include uppercase, lowercase, number, and special character' }) 
  newPassword: string;
}