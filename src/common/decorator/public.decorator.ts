// 1. Import
import { SetMetadata } from '@nestjs/common';

// 2. Define metadata key
export const IS_PUBLIC_KEY = 'isPublic';

// 3. Create @Public() decorator
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true); 
