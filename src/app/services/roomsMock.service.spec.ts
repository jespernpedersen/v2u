import { TestBed } from '@angular/core/testing';

import { RoomsMockService } from './roomsMock.service';

describe('RoomsMockServiceService', () => {
  let service: RoomsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
