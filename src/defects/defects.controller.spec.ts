import { Test, TestingModule } from '@nestjs/testing';
import { DefectsController } from './defects.controller';

describe('Defects Controller', () => {
  let controller: DefectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefectsController],
    }).compile();

    controller = module.get<DefectsController>(DefectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
