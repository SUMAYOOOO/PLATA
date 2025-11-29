import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('health')
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async check() {
    const checks = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    };

    return checks;
  }

  @Get('detailed')
  async detailedCheck() {
    const checks: any = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      services: {},
    };

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      checks.services.database = { status: 'ok', message: 'Database connected' };
    } catch (error) {
      checks.status = 'error';
      checks.services.database = { 
        status: 'error', 
        message: 'Database connection failed',
        error: error.message 
      };
    }

    checks.memory = {
      used: process.memoryUsage().heapUsed / 1024 / 1024,
      total: process.memoryUsage().heapTotal / 1024 / 1024,
      rss: process.memoryUsage().rss / 1024 / 1024,
    };

    checks.uptime = process.uptime();

    return checks;
  }

  @Get('ready')
  async readinessCheck() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      
      return {
        status: 'ready',
        timestamp: new Date().toISOString(),
        services: {
          database: 'ready',
          api: 'ready'
        }
      };
    } catch (error) {
      return {
        status: 'not_ready',
        timestamp: new Date().toISOString(),
        services: {
          database: 'not_ready',
          api: 'ready'
        },
        error: error.message
      };
    }
  }
}
