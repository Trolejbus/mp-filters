import { NgModule } from '@angular/core';
import { MpFiltersComponent } from './mp-filters.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent, FilterItemCheckboxesComponent, FilterItemComponent, FiltersContainerComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterItemRadiobuttonsComponent } from './components/filter-items/filter-item-radiobuttons/filter-item-radiobuttons.component';
import { FilterItemDropdownComponent } from './components/filter-items/filter-item-dropdown/filter-item-dropdown.component';
import { FilterItemInputtextComponent } from './components/filter-items/filter-item-inputtext/filter-item-inputtext.component';


@NgModule({
  declarations: [
    MpFiltersComponent,
    FiltersContainerComponent,
    FilterGroupsComponent,
    FilterItemComponent,
    FilterItemCheckboxesComponent,
    FilterItemRadiobuttonsComponent,
    FilterItemDropdownComponent,
    FilterItemInputtextComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MpFiltersComponent,
  ]
})
export class MpFiltersLibModule { }
