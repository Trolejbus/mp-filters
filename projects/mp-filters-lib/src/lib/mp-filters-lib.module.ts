import { NgModule } from '@angular/core';
import { MpFiltersLibComponent } from './mp-filters-lib.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent } from './components/filter-groups/filter-groups.component';
import { FiltersContainerComponent } from './components';


@NgModule({
  declarations: [
    MpFiltersLibComponent,
    FiltersContainerComponent,
    FilterGroupsComponent,
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
