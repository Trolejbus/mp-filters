import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpFiltersComponent } from './mp-filters.component';

describe('MpFiltersLibComponent', () => {
  let component: MpFiltersComponent;
  let fixture: ComponentFixture<MpFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
