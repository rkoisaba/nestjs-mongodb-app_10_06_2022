import { Test, TestingModule } from '@nestjs/testing';
import { EGroupsService } from './e-groups.service';

describe('EGroupsService', () => {
  let service: EGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EGroupsService],
    }).compile();

    service = module.get<EGroupsService>(EGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
