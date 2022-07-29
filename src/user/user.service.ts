import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOne(id: number) {
    const useList = [
      { id: 1, username: 'Jack', type: 'vip' },
      { id: 2, username: 'Rose', type: 'vip' },
    ];
    const user = useList.find((i) => i.id === id);
    if (user) {
      return `尊敬的${user.type}用户--${user.username}, 您好！`;
    } else {
      return '该用户不存在';
    }
  }
}
