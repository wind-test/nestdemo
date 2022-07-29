/*
 * @Title: 路由器--用户
 * @Author: huangjitao
 * @Date: 2022-07-29 14:09:27
 * @Description: description of this file
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Query,
  Response,
  Param,
  ParseIntPipe,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('user/index')
  UserIndex(@Query() query, @Response() res) {
    // res.cookie('username', query.username);
    res.cookie('username', query.username, {
      maxAge: 900000,
      httpOnly: true,
      signed: true,
    }); // 加密cookie
    return {
      username: query.username,
    };
  }

  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    if (body.username) {
      res.redirect(`/user?username=${body.username}`);
    } else {
      res.redirect('/user');
    }
  }

  @Get('getCookie')
  GetCookie(@Request() req) {
    // const username = req.cookies.username;
    const username = req.signedCookies.username;
    return `cookie中的username为：${username}`;
  }

  @Get(':id')
  UserDetail(@Param('id', new ParseIntPipe()) id) {
    const result = this.userService.findOne(id);
    return result;
  }
}
