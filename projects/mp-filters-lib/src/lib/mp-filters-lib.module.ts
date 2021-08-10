import { NgModule } from '@angular/core';
import { MpFiltersLibComponent } from './mp-filters-lib.component';
import { FiltersContainerComponent } from './filters-container/filters-container.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MpFiltersLibComponent,
    FiltersContainerComponent,
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
