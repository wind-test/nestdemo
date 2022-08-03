/*
 * @Title: 打印中间件
 * @Author: huangjitao
 * @Date: 2022-08-03 14:15:34
 * @Description: 用于打印请求对象
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('打印请求链接：', req.url);
    next();
  }
}
