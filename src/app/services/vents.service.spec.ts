import { TestBed } from '@angular/core/testing';

import { VentsService } from './vents.service';

describe('VentsService', () => {
  let service: VentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
