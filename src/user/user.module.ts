/*
 * @Title: 用户模块
 * @Author: huangjitao
 * @Date: 2022-08-03 14:22:31
 * @Description: description of this file
 */
import {
  forwardRef,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserIndexMiddleware } from 'src/middleware/user-index.middleware';
import { UserDetailMiddleware } from 'src/middleware/user-detail.middleware';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [forwardRef(() => AdminModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserIndexMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET })
      .apply(UserDetailMiddleware)
      .forRoutes({ path: 'user/:id', method: RequestMethod.GET });
  }
}
