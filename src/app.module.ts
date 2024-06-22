import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HomeworkModule } from './homework/homework.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigEnum } from './enum/config.enum';
import { User } from './user/user.entity';
import { UserInfo } from './user/userinfo.entity';
import { Roles } from './roles/roles.entity';
import { Logs } from './logs/logs.entity';

const envFilePath = `.env.${process.env.NODE_ENV || 'developement'}`;
console.log(envFilePath);

@Module({
  imports: [
    UserModule,
    HomeworkModule,
    ConfigModule.forRoot({
      // isGlobal为true: 代表开启全局模块
      isGlobal: true,
      // envFilePath: 指定当前要读取那个环境文件
      envFilePath,
      // 使用dotenv加载.env环境文件中的所有环境变量, 当访问了其他两个环境文件中不存在的环境变量时,就会去.env环境文件中查找!
      load: [() => dotenv.config({ path: '.env' })],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get(ConfigEnum.DB_HOST),
        port: configService.get(ConfigEnum.DB_PORT),
        username: configService.get(ConfigEnum.DB_USERNAME),
        password: configService.get(ConfigEnum.DB_PASSWORD),
        database: configService.get(ConfigEnum.DB_DATABASE),
        entities: [User, UserInfo, Roles, Logs],
        synchronize: configService.get(ConfigEnum.DB_SYNC),
        logging: ['error'],
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '127.0.0.1',
    //   port: 3306,
    //   username: 'root',
    //   password: 'example',
    //   database: 'testdb',
    //   entities: [],
    //   // 同步本地的schema与数据库
    //   synchronize: true,
    //   logging: ['error'],
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
