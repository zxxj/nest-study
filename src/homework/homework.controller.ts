import { Controller, Get, Param } from '@nestjs/common';
import { HomeworkService } from './homework.service';

@Controller('homework')
export class HomeworkController {
  constructor() {
    this.homeWork = new HomeworkService();
  }
  homeWork = null;

  @Get('/range/:num')
  printRange(@Param() params): any {
    return this.homeWork.printRange(params.num);
  }
}
