import { Test, TestingModule } from '@nestjs/testing';
import { IssGeoLocationController } from './iss-geo-location.controller';

describe('IssGeoLocationController', () => {
  let controller: IssGeoLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssGeoLocationController],
    }).compile();

    controller = module.get<IssGeoLocationController>(IssGeoLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
