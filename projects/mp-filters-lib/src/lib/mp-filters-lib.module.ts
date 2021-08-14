import { NgModule } from '@angular/core';
import { MpFiltersComponent } from './mp-filters.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent } from './components/filter-groups/filter-groups.component';
import { FiltersContainerComponent } from './components';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterItemMultiselectComponent } from './components/filter-items/filter-item-multiselect/filter-item-multiselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MpFiltersComponent,
    FiltersContainerComponent,
    FilterGroupsComponent,
    FilterItemComponent,
    FilterItemMultiselectComponent,
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
