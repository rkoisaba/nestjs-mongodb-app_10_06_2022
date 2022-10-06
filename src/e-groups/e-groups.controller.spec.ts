import { Test, TestingModule } from '@nestjs/testing';
import { EGroupsController } from './e-groups.controller';
import { EGroupsService } from './e-groups.service';

describe('EGroupsController', () => {
  let controller: EGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EGroupsController],
      providers: [EGroupsService],
    }).compile();

    controller = module.get<EGroupsController>(EGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
