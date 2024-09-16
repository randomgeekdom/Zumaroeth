import { TestBed } from '@angular/core/testing';

import { TurnTakerService } from './turn-taker.service';

describe('TurnTakerService', () => {
  let service: TurnTakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnTakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
