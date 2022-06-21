/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2022-06-21 15:26:54
 * @Description: description of this file
 */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  index() {
    return '这是news首页';
  }

  @Get('aaa')
  indexB() {
    return '精确匹配路由';
  }

  @Get('a*a')
  indexA() {
    return '模糊匹配路由';
  }

  @Get(':id')
  indexC(@Param('id') id) {
    return `动态匹配路由, id 为${id}`;
  }

  @Get('list')
  getNews(@Query('id') query) {
    console.log(query); //这里获取的就是 Get 传值里面的 Id 的值 return '这是新闻'
  }

  @Post('doAdd')
  async addNews(@Body() newsData) {
    console.log(newsData);
    return '增加新闻';
  }
}
