import { TestBed } from '@angular/core/testing';

import { GameSaverService } from './game-saver.service';

describe('GameSaverService', () => {
  let service: GameSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
