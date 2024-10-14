import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { IssGeoLocationController } from './iss-geo-location.controller';
import { IssGeoLocationService } from './iss-geo-location.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [IssGeoLocationController],
  providers: [IssGeoLocationService],
})
export class IssGeoLocationModule {}
