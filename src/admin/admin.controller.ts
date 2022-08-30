/*
 * @Title: admin路由
 * @Author: huangjitao
 * @Date: 2022-08-15 10:45:09
 * @Description: description of this file
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly userService: UserService,
  ) {}

  @Get()
  Index() {
    return '这是admin首页';
  }

  @Get('list')
  AdminList() {
    const adminList = this.adminService.getAdminList();
    return adminList;
  }
}
