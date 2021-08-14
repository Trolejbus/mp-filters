import { NgModule } from '@angular/core';
import { MpFiltersComponent } from './mp-filters.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent, FilterItemCheckboxesComponent, FilterItemComponent, FiltersContainerComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterItemRadiobuttonsComponent } from './components/filter-items/filter-item-radiobuttons/filter-item-radiobuttons.component';
import { FilterItemDropdownComponent } from './components/filter-items/filter-item-dropdown/filter-item-dropdown.component';


@NgModule({
  declarations: [
    MpFiltersComponent,
    FiltersContainerComponent,
    FilterGroupsComponent,
    FilterItemComponent,
    FilterItemCheckboxesComponent,
    FilterItemRadiobuttonsComponent,
    FilterItemDropdownComponent,
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
