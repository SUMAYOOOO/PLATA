import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  try {
    const app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
    });

    // Configuraciones con valores por defecto
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
    }));

    app.enableCors({
      origin: process.env.FRONTEND_URL || true, // Permitir todos en dev
      credentials: true,
    });

    app.setGlobalPrefix(process.env.API_PREFIX || 'api/v1');

    const port = process.env.PORT || 3001;
    
    await app.listen(port);
    
    logger.log(`🚀 Application running on port ${port}`);
    logger.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    logger.log(`🔐 JWT Configured: ${!!process.env.JWT_SECRET}`);
    logger.log(`💳 Stripe Configured: ${!!process.env.STRIPE_SECRET_KEY}`);
    
  } catch (error) {
    logger.error('Failed to start application', error);
    process.exit(1);
  }
}

bootstrap();
