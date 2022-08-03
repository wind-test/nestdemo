/*
 * @Title: 用户详情页中间件
 * @Author: huangjitao
 * @Date: 2022-08-03 14:56:39
 * @Description: description of this file
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserDetailMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入用户详情页');
    next();
  }
}
