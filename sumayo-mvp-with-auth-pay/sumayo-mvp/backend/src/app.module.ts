import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { TopicsModule } from './modules/topics/topics.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { PaymentsController } from './modules/payments/payments.controller';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    CoursesModule,
    TopicsModule,
    ResourcesModule,
  ],
  controllers: [PaymentsController],
})
export class AppModule {}
