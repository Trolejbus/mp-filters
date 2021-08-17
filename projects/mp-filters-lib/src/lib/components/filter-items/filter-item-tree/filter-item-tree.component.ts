import { Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-tree',
  templateUrl: './filter-item-tree.component.html',
  styleUrls: ['./filter-item-tree.component.scss']
})
export class FilterItemTreeComponent implements OnInit {

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
    this.value = value;
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
