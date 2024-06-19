import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HomeworkModule } from './homework/homework.module';

@Module({
  imports: [UserModule, HomeworkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
