import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-radiobuttons',
  templateUrl: './filter-item-radiobuttons.component.html',
  styleUrls: ['./filter-item-radiobuttons.component.scss', '../filter-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemRadiobuttonsComponent implements OnInit {

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
