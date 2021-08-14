import { Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-inputtext',
  templateUrl: './filter-item-inputtext.component.html',
  styleUrls: ['./filter-item-inputtext.component.scss', '../filter-item.scss'],
})
export class FilterItemInputtextComponent implements OnInit {

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
    if (value != null && value !== "") {
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
