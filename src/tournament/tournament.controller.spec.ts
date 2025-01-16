import { Test, TestingModule } from '@nestjs/testing';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';

describe('TournamentController', () => {
  let controller: TournamentController;
  let service: TournamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentController],
      providers: [
        {
          provide: TournamentService,
          useValue: {
            // Mock the methods you need for the test
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TournamentController>(TournamentController);
    service = module.get<TournamentService>(TournamentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
