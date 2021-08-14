import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemInputtextComponent } from './filter-item-inputtext.component';

describe('FilterItemInputtextComponent', () => {
  let component: FilterItemInputtextComponent;
  let fixture: ComponentFixture<FilterItemInputtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterItemInputtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
