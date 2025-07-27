// 1. Import User entity and bcrypt for password hashing
import { User } from 'src/core/entities/user/user.entity';
import * as bcrypt from 'bcrypt';

// 2. Define sample users for seeding the database
export const userSeedData: Partial<User>[] = [
  {
    fullname: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'admin',
    avatar_link:
      'https://i.pinimg.com/1200x/be/1c/a7/be1ca7a02034c6086c5a1d6bc292da7c.jpg',
    phone: '0123456789',
    province: 'HCM',
    district: '1',
    detailed_address: '123 ABC',
    isActive: true,
  },
  {
    fullname: 'Tran Thi B',
    email: 'b@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'customer',
    avatar_link:
      'https://i.pinimg.com/1200x/8a/bd/4d/8abd4db1785d77da090ab7bb2357d3cb.jpg',
    phone: '0987654321',
    province: 'Hanoi',
    district: 'Ba Dinh',
    detailed_address: '456 XYZ',
    isActive: true,
  },

  {
    fullname: '金莎',
    email: 'kimsa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'customer',
    avatar_link:
      'https://i.pinimg.com/1200x/43/f7/ee/43f7eefe75d8d3a236dacb312186dc7e.jpg',
    phone: '0987654321',
    province: 'Quang Trị',
    district: 'Dakrong',
    detailed_address: 'Km7 XYZ',
    isActive: true,
  },
];
