/*
 * @Title: 鉴权守卫
 * @Author: huangjitao
 * @Date: 2022-08-30 11:45:32
 * @Description: description of this file
 */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly adminService: AdminService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log('request', request);
    // 获取token
    const accessToken = request.get('Authorization');
    // 获取session
    const session = request.session;
    // 获取请求url，如果是restful风格的/user/:id 例如（请求路径是/user/12313 此时得到的是/user/:id）
    const path = request.route.path;
    // 获取请求方式
    const method = request.method;
    // 获取query参数
    const { username } = request.query;
    const adminList = this.adminService.getAdminList();
    const result = adminList.find((i) => i.username === username);
    return Boolean(result);
  }
}
