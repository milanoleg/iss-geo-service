import { Test, TestingModule } from '@nestjs/testing';
import { IssGeoLocationService } from './iss-geo-location.service';

describe('IssGeoLocationService', () => {
  let service: IssGeoLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssGeoLocationService],
    }).compile();

    service = module.get<IssGeoLocationService>(IssGeoLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
