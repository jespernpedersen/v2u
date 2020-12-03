import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneClaimComponent } from './zone-claim.component';

describe('ZoneClaimComponent', () => {
  let component: ZoneClaimComponent;
  let fixture: ComponentFixture<ZoneClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
