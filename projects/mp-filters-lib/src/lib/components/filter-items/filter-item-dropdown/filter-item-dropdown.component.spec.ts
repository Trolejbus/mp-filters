import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemDropdownComponent } from './filter-item-dropdown.component';

describe('FilterItemDropdownComponent', () => {
  let component: FilterItemDropdownComponent;
  let fixture: ComponentFixture<FilterItemDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
