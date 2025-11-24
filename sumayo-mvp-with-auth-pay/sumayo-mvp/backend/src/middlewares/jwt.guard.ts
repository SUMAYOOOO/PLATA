import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const auth = req.headers['authorization'];
    if (!auth) throw new UnauthorizedException('Missing authorization header');
    const parts = auth.split(' ');
    if (parts.length !== 2) throw new UnauthorizedException('Malformed authorization header');
    const token = parts[1];
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      // attach user payload
      (req as any).user = payload;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
