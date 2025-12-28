// 1. Import
import { SetMetadata } from '@nestjs/common';

// 2. Define metadata key
export const ROLES_KEY = 'roles'; 

// 3. Create @Roles() decorator
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);