import { Controller, Get } from '@nestjs/common';

import { IssGeoLocationService } from './iss-geo-location.service';

@Controller('iss-geo-location')
export class IssGeoLocationController {
  constructor(private readonly issGeoLocationService: IssGeoLocationService) {}

  @Get()
  getGeoLocation() {
    return this.issGeoLocationService.getGeoLocation();
  }
}
