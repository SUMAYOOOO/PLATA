import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('health')
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async check() {
    const dbHealth = await this.prisma.healthCheck();
    
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
    const dbHealth = await this.prisma.healthCheck();
    
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
    const dbHealth = await this.prisma.healthCheck();
    
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
