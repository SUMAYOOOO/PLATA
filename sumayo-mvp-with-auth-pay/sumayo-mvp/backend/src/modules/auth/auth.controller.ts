import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

const service = new AuthService();

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    const user = await service.validateUser(email, password);
    if (!user) throw new BadRequestException('Invalid credentials');
    return service.login(user);
  }

  @Post('register')
  async register(@Body() body: any) {
    const { name, email, password } = body;
    if (!name || !email || !password) throw new BadRequestException('Missing fields');
    const created = await service.register({ name, email, password });
    return created;
  }
}
