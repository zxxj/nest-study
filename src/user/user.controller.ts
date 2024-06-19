import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // private userService: UserService是语法糖写法 等价于 this.userServices = new UserService()
  constructor(private userService: UserService) {}
  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Post()
  addUser(): any {
    return this.userService.addUser();
  }
}
