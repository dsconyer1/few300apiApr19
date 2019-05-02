import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersController } from './developers/developers.controller';
import { DefectsController } from './defects/defects.controller';

@Module({
  imports: [],
  controllers: [AppController, DevelopersController, DefectsController],
  providers: [AppService],
})
export class AppModule {}
