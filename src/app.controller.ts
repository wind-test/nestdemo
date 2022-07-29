/*
 * @Title: 路由 -- index
 * @Author: huangjitao
 * @Date: 2022-06-21 15:41:06
 * @Description: description of this file
 */
import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  Index(@Request() req) {
    req.session.time = Date.now();
    return {
      message: 'hello, world!',
    };
  }

  @Get('getSession')
  GetSession(@Request() req) {
    return `当前session中的time为：${req.session.time}`;
  }
}
