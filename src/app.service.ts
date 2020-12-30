import { Injectable } from '@nestjs/common';

/**
 * 컨트롤러에서 리턴할 function을 정의하는 곳
 * 실질적인 비지니스 로직을 실행하는 역할을 함.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi Nest!';
  }
}
