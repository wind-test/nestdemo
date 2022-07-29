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

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public');
  app.useStaticAssets(join(__dirname, '../public'), { prefix: '/static/' });
  await app.listen(3000);
}
bootstrap();
