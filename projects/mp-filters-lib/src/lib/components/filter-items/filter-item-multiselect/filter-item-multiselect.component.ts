import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from '../../../controllers';
import { FilterItemModel, FilterItemObjectModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-multiselect',
  templateUrl: './filter-item-multiselect.component.html',
  styleUrls: ['./filter-item-multiselect.component.scss', '../filter-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemMultiselectComponent implements OnInit {

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

  public filterChange(object: FilterItemObjectModel, event: Event): void {
    console.log(object, event);
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
