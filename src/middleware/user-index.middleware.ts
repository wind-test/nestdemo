/*
 * @Title: 用户首页中间件
 * @Author: huangjitao
 * @Date: 2022-08-03 14:55:22
 * @Description: description of this file
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserIndexMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入用户首页');
    next();
  }
}
