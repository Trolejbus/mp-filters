import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel, FilterItemObjectModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-checkboxes',
  templateUrl: './filter-item-checkboxes.component.html',
  styleUrls: ['./filter-item-checkboxes.component.scss', '../filter-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemCheckboxesComponent implements OnInit {

  @Input()
  public filterItem!: FilterItemModel;

  public objects: FilterItemObjectVm[] = [];
  private appliedIds: string[] = [];

  constructor(private filtersController: MpFiltersController) { }

  ngOnInit(): void {
    if (this.filterItem == null) {
      throw new Error("FilterItem is required");
    }
 
    this.objects = (this.filterItem.objects ?? []).map(o => ({
      object: o,
      value: false,
    }));
  }

  public change(objectVm: FilterItemObjectVm, value: boolean): void {
    objectVm.value = value;
    if (value) {
      if (this.appliedIds.some(a => a == objectVm.object.id)) {
        return;
      }
  
      this.appliedIds.push(objectVm.object.id);
    }
    else {
      if (!this.appliedIds.some(a => a == objectVm.object.id)) {
        return;
      }

      this.appliedIds = this.appliedIds.filter(a => a != objectVm.object.id);
    }
    
    if (this.appliedIds.length > 0) {
      this.filtersController.updateFilter({
        name: this.filterItem.name,
        value: this.appliedIds,
      });
    }
    else {
      this.filtersController.removeFilter(this.filterItem.name);
    }
  }
}

class FilterItemObjectVm {
  public object!: FilterItemObjectModel;
  public value!: boolean;
}
