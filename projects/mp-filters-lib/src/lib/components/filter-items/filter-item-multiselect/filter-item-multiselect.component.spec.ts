import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemMultiselectComponent } from './filter-item-multiselect.component';

describe('FilterItemMultiselectComponent', () => {
  let component: FilterItemMultiselectComponent;
  let fixture: ComponentFixture<FilterItemMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemMultiselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
