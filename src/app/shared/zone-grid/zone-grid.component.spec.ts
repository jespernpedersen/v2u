import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneGridComponent } from './zone-grid.component';

describe('ZoneGridComponent', () => {
  let component: ZoneGridComponent;
  let fixture: ComponentFixture<ZoneGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
