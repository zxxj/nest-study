import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 200,
      data: [],
      message: '查询用户列表成功!',
    };
  }

  addUser() {
    return {
      code: 200,
      message: '添加用户成功!',
    };
  }
}
