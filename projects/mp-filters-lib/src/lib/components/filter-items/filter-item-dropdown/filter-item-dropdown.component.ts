import { Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel, FilterItemObjectModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-dropdown',
  templateUrl: './filter-item-dropdown.component.html',
  styleUrls: ['./filter-item-dropdown.component.scss', '../filter-item.scss'],
})
export class FilterItemDropdownComponent implements OnInit {

  @Input()
  public filterItem!: FilterItemModel;
  public value: any;

  constructor(private filtersController: MpFiltersController) { }

  ngOnInit(): void {
    if (this.filterItem == null) {
      throw new Error("FilterItem is required");
    }
  }

  public change(value: string): void {
    if (value != null) {
      this.filtersController.updateFilter({
        name: this.filterItem.name,
        value,
      });
    }
    else {
      this.filtersController.removeFilter(this.filterItem.name);
    }
  }
}
