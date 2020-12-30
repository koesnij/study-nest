import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /hello 시 sayHello() 함수를 실행
  // expressjs에서처럼 라우터를 만들 필요 없음
  @Get('/hello' /* url */)
  sayHello(): string {
    return 'Hello everyone';
  }
}
