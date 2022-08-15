/*
 * @Title: admin服务
 * @Author: huangjitao
 * @Date: 2022-08-15 10:45:52
 * @Description: description of this file
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdminList() {
    const adminList = [
      { id: 1, username: 'Zelda', type: 'admin' },
      { id: 2, username: 'Mario', type: 'admin' },
      { id: 3, username: 'Poke', type: 'admin' },
    ];
    return adminList;
  }
}
