/*
 * @Title: 路由 -- index
 * @Author: huangjitao
 * @Date: 2022-06-21 15:41:06
 * @Description: description of this file
 */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  Index() {
    return {
      message: 'hello, world!',
    };
  }
}
