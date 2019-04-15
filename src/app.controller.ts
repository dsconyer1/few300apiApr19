import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/status')
  getStatus() {
    return {
      message: 'Everything is fine at the serve.  Thanks for asking.',
      at: new Date().toISOString(),
    };
  }
}
