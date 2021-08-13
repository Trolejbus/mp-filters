import { NgModule } from '@angular/core';
import { MpFiltersLibComponent } from './mp-filters-lib.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent } from './components/filter-groups/filter-groups.component';
import { FiltersContainerComponent } from './components';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterItemMultiselectComponent } from './components/filter-items/filter-item-multiselect/filter-item-multiselect.component';


@NgModule({
  declarations: [
    MpFiltersLibComponent,
    FiltersContainerComponent,
    FilterGroupsComponent,
    FilterItemComponent,
    FilterItemMultiselectComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MpFiltersLibComponent,
    FiltersContainerComponent,
  ]
})
export class MpFiltersLibModule { }
