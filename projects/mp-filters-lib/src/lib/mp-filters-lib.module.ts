import { NgModule } from '@angular/core';
import { MpFiltersComponent } from './mp-filters.component';
import { CommonModule } from '@angular/common';
import { FilterGroupsComponent, FilterItemCheckboxesComponent, FilterItemComponent, FilterItemDropdownComponent, FilterItemInputtextComponent,
  FilterItemRadiobuttonsComponent, FilterItemTreeComponent, FiltersContainerComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree/tree-node/tree-node.component';

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
    FilterItemTreeComponent,
    TreeComponent,
    TreeNodeComponent,
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
