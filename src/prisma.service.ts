import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PrismaService {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    this.logger.log('Prisma Service initialized in optional mode');
  }

  async healthCheck() {
    if (!process.env.DATABASE_URL) {
      return { status: 'not_configured', message: 'DATABASE_URL not provided' };
    }
    return { status: 'unknown', message: 'Database status unavailable' };
  }

  async $queryRaw() {
    return Promise.resolve([{ result: 'database_not_available' }]);
  }

  get user() {
    return undefined;
  }

  get course() {
    return undefined;
  }

  get topic() {
    return undefined;
  }

  get payment() {
    return undefined;
  }
}
