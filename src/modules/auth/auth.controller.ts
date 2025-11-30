import { Controller, Post, Body, UnauthorizedException, Get } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// Usar valor por defecto seguro para desarrollo
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key-change-in-production-2024';

@Controller('auth')
export class AuthController {
  
  @Post('login')
  async login(@Body() body: any) {
    try {
      const { email, password } = body;
      
      // Validación básica
      if (!email || !password) {
        throw new UnauthorizedException('Email and password are required');
      }
      
      // Usuario mock para desarrollo - en producción usarías la BD
      const mockUser = {
        id: 1,
        email: 'admin@sumayo.com',
        password: '$2b$12$LQv3c1yqBWVHxkd0g8f7QuYlq0u8KZ5J5XZ5J5XZ5J5XZ5J5XZ5J5', // password: admin123
        role: 'admin',
        name: 'Administrator'
      };
      
      // Verificar contraseña
      const isValidPassword = await bcrypt.compare(password, mockUser.password);
      
      if (email === mockUser.email && isValidPassword) {
        // Generar token JWT
        const token = jwt.sign(
          { 
            sub: mockUser.id, 
            email: mockUser.email, 
            role: mockUser.role,
            name: mockUser.name
          }, 
          JWT_SECRET, 
          { expiresIn: '7d' }
        );
        
        return {
          success: true,
          message: 'Login successful',
          token,
          user: {
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name,
            role: mockUser.role
          }
        };
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
      
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Authentication failed');
    }
  }

  @Post('register')
  async register(@Body() body: any) {
    const { email, password, name } = body;
    
    // Validación básica
    if (!email || !password || !name) {
      throw new UnauthorizedException('Email, password and name are required');
    }
    
    // En producción, aquí crearías el usuario en la base de datos
    const hashedPassword = await bcrypt.hash(password, 12);
    
    return {
      success: true,
      message: 'Registration successful - user created in mock mode',
      user: {
        email,
        name,
        id: Date.now() // ID temporal
      }
    };
  }

  @Post('validate-token')
  async validateToken(@Body() body: any) {
    const { token } = body;
    
    if (!token) {
      throw new UnauthorizedException('Token is required');
    }
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      return {
        valid: true,
        user: decoded
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  @Get('health')
  async healthCheck() {
    return {
      service: 'auth',
      status: 'operational',
      jwt_configured: !!process.env.JWT_SECRET,
      timestamp: new Date().toISOString()
    };
  }
}
