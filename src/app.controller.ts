import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/hop")
  getHellowen(): string {
    return this.appService.getHelloven();
  }
  @Get("")
  getHello(): string {
    return this.appService.getHello();
  }
}
