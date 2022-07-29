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
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Render('user/index')
  UserIndex(@Query() req) {
    return {
      username: req.username,
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

  @Get(':id')
  UserDetail(@Param('id', new ParseIntPipe()) id) {
    const result = this.userService.findOne(id);
    return result;
  }
}
