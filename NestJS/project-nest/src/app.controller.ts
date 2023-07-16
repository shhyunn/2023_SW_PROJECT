import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//http 요청을 처리하는 함수
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//AppController는 클라이언트의 GET 요청을 받아 AppService의 getHello() 메서드를 실행하고, 그 결과를 클라이언트에게 반환하는 역할을 합니다.
