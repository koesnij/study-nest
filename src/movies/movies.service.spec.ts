import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 테스트하는 부분 (individual test)
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    // 테스트하는 함수
    expect(2 + 2).toEqual(4); // passed
    // expect(2 + 2).toEqual(5); // failed
  });
});
