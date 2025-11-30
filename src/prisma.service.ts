import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private prisma: any;
  public isConnected = false;

  constructor() {
    // Solo inicializar Prisma si DATABASE_URL existe
    if (process.env.DATABASE_URL) {
      try {
        const { PrismaClient } = require('@prisma/client');
        this.prisma = new PrismaClient({
          log: ['warn', 'error'],
        });
        this.logger.log('Prisma Client initialized with DATABASE_URL');
      } catch (error) {
        this.logger.warn('Prisma Client initialization failed: ' + error.message);
      }
    } else {
      this.logger.warn('DATABASE_URL not provided - running without database');
    }
  }

  async onModuleInit() {
    if (this.prisma) {
      try {
        await this.prisma.$connect();
        this.isConnected = true;
        this.logger.log('Successfully connected to database');
      } catch (error) {
        this.logger.error('Failed to connect to database: ' + error.message);
        this.isConnected = false;
      }
    }
  }

  async onModuleDestroy() {
    if (this.prisma) {

# Actualizar health controller para ser compatible con Prisma opcional
cat > src/health/health.controller.ts << 'EOF'
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('health')
export class HealthController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async check() {
    const dbHealth = await this.prismaService.healthCheck();
    
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      services: {
        api: 'healthy',
        database: dbHealth.status
      }
    };
  }

  @Get('ready')
  async readinessCheck() {
    const dbHealth = await this.prismaService.healthCheck();
    
    // La API está lista incluso si la BD no está disponible
    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
      services: {
        api: 'ready',
        database: dbHealth.status
      },
      database_message: dbHealth.message
    };
  }

  @Get('detailed')
  async detailedCheck() {
    const dbHealth = await this.prismaService.healthCheck();
    
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      services: {
        database: dbHealth
      },
      system: {
        memory: {
          used: process.memoryUsage().heapUsed / 1024 / 1024,
          total: process.memoryUsage().heapTotal / 1024 / 1024,
        },
        uptime: process.uptime(),
        node_version: process.version,
      }
    };
  }
}
