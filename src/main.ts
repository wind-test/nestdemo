/*
 * @Title: 程序主入口
 * @Author: huangjitao
 * @Date: 2022-06-15 17:10:58
 * @Description: description of this file
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public');
  app.useStaticAssets(join(__dirname, '../public'), { prefix: '/static/' }); // 设置静态资源虚拟路径
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 设置模板文件目录
  app.setViewEngine('ejs'); // 设置模板引擎
  // app.use(cookieParser()); // 配置cookie中间件
  app.use(cookieParser('123')); // 配置加密的cookie
  app.use(session({ secret: '123', cookie: { maxAge: 60000 } }));
  await app.listen(3000);
}
bootstrap();
