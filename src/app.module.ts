import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersController } from './developers/developers.controller';

@Module({
  imports: [],
  controllers: [AppController, DevelopersController],
  providers: [AppService],
})
export class AppModule {}
