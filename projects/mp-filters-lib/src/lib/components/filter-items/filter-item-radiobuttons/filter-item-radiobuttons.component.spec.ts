import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemRadiobuttonsComponent } from './filter-item-radiobuttons.component';

describe('FilterItemRadiobuttonsComponent', () => {
  let component: FilterItemRadiobuttonsComponent;
  let fixture: ComponentFixture<FilterItemRadiobuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemRadiobuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemRadiobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
