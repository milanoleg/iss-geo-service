import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { OPEN_NOTIFY_URL } from 'src/constants/common';

@Injectable()
export class IssGeoLocationService {
  constructor(private readonly httpService: HttpService) {}

  async getGeoLocation() {
    const { data } = await firstValueFrom(
      this.httpService.get(OPEN_NOTIFY_URL),
    );

    return data;
  }
}
