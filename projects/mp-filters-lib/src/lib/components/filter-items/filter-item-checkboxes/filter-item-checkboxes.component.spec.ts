import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemCheckboxesComponent } from './filter-item-checkboxes.component';

describe('FilterItemMultiselectComponent', () => {
  let component: FilterItemCheckboxesComponent;
  let fixture: ComponentFixture<FilterItemCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
