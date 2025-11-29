import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { TopicsModule } from './modules/topics/topics.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { HealthModule } from './health/health.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    CoursesModule,
    TopicsModule,
    PaymentsModule,
    HealthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
