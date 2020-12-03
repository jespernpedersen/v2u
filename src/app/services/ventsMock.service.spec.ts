import { TestBed } from '@angular/core/testing';

import { VentsMockService } from './ventsMock.service';

describe('VentsMockService', () => {
  let service: VentsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
