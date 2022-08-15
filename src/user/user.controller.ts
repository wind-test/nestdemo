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
  UsePipes,
} from '@nestjs/common';
import { UserPipe } from 'src/pipe/user.pipe';
import { UserService } from './user.service';
import * as Joi from 'joi';
import { ValidationPipe } from 'src/pipe/vilidate.pipe';
import { UserDto } from './dto/user.dto';
import { AdminService } from 'src/admin/admin.service';

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.string().required(),
});

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly adminService: AdminService,
  ) {}

  @Get('admin')
  IsAdmin(@Query('username') username) {
    const adminList = this.adminService.getAdminList();
    const result = adminList.find((i) => i.username === username);
    return result ? '管理员用户' : '非管理员用户';
  }

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

  // @Get('pipe')
  // // @UsePipes(new UserPipe(userSchema))
  // UserPipePage(@Query(new UserPipe(userSchema)) query) {
  //   if (query) {
  //     return '通过管道处理后的用户界面';
  //   } else {
  //     return '请求参数不符合要求';
  //   }
  // }

  @Get('pipe')
  UserPipePage(@Query(new ValidationPipe()) query: UserDto) {
    return '类验证器页面';
  }

  @Get(':id')
  UserDetail(@Param('id', new ParseIntPipe()) id) {
    const result = this.userService.findOne(id);
    return result;
  }
}
