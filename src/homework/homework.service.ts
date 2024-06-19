import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeworkService {
  printRange(param: number) {
    const arr = [];
    console.log(Number(param));
    if (Number(param) === 5) {
      for (let i = 1; i <= param; i++) {
        arr.push(String(i));
      }
    }
    return arr;
  }
}
