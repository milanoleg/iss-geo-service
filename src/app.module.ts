import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssGeoLocationModule } from './iss-geo-location/iss-geo-location.module';

@Module({
  imports: [IssGeoLocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
