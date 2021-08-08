import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpFiltersLibComponent } from './mp-filters-lib.component';

describe('MpFiltersLibComponent', () => {
  let component: MpFiltersLibComponent;
  let fixture: ComponentFixture<MpFiltersLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpFiltersLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpFiltersLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
