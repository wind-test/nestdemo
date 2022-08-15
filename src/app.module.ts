/*
 * @Title: 应用总控制器
 * @Author: huangjitao
 * @Date: 2022-06-15 17:10:58
 * @Description: description of this file
 */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule, UploadModule, AdminModule],
  controllers: [AppController, NewsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('*'); //匹配所有的路由
      // .forRoutes('user'); //匹配指定路由
      .forRoutes(
        { path: 'user', method: RequestMethod.ALL },
        { path: 'user/:id', method: RequestMethod.ALL },
        { path: 'news', method: RequestMethod.ALL },
        { path: 'news/list', method: RequestMethod.ALL },
      ); // 匹配多个路由
  }
}
