// 1. Import User entity and bcrypt for password hashing
import { User } from 'src/core/entities/user/user.entity';
import * as bcrypt from 'bcrypt';

// 2. Define sample users for seeding the database
export const userSeedData: Partial<User>[] = [
  {
    fullname: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10), // hash password
    role: 'admin',
    avatar_link: '',
    phone: '0123456789',
    province: 'HCM',
    district: '1',
    detailed_address: '123 ABC',
    isActive: true,
  },
  {
    fullname: 'Tran Thi B',
    email: 'b@gmail.com',
    password: bcrypt.hashSync('123456', 10), // hash password
    role: 'customer',
    avatar_link: '',
    phone: '0987654321',
    province: 'Hanoi',
    district: 'Ba Dinh',
    detailed_address: '456 XYZ',
    isActive: true,
  },
];