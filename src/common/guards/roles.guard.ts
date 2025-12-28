// 1. Import
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common'; 
import { Reflector } from '@nestjs/core'; 
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';
import { ROLES_KEY } from '../decorator/roles.decorator'; 

// 2. Create a custom guard to check user roles
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 2.1. Allow public routes without checking roles
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(), 
      context.getClass(), 
    ]);
    if (isPublic) return true;

    // 2.2. Get required roles from @Roles() decorator
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    // 2.3. Get user info from request (set by JwtStrategy)
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      throw new ForbiddenException('Access denied: no user found');
    }

    // 2.4. Check if user's role is in the list of required roles
    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException(`Access denied: requires role ${requiredRoles.join(', ')}`);
    }

    return true; 
  }
}