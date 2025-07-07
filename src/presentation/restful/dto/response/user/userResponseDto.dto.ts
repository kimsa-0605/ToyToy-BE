import { User } from '../../../../../core/entities/user/user.entity';

export class UserResponseDto {
  id: string;
  fullname: string;
  email: string;
  role: string; 
  avatar_link: string;
  phone: string;
  province: string;
  district: string;
  detailed_address: string;
  isActive: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.fullname = user.fullname;
    this.email = user.email;
    this.role = user.role;
    this.avatar_link = user.avatar_link;
    this.phone = user.phone;
    this.province = user.province;
    this.district = user.district;
    this.detailed_address = user.detailed_address;
    this.isActive = user.isActive;
  }
}