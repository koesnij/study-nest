import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 컨트롤러는 URL을 가져오고
 * service에서 정의한 function을 리턴하는 역할
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /hi 시 sayHello() 함수를 실행
  // expressjs에서처럼 라우터를 만들 필요 없음
  @Get('/hi' /* url */)
  getHi(): string {
    // return 'Hi Nest!';
    return this.appService.getHi(); // 권장
  }
}
