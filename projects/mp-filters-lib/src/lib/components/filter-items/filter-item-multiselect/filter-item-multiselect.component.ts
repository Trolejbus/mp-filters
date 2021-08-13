import { Component, Input, OnInit } from '@angular/core';
import { FilterItemModel } from '../../../models';

@Component({
  selector: 'mp-filter-item-multiselect',
  templateUrl: './filter-item-multiselect.component.html',
  styleUrls: ['./filter-item-multiselect.component.scss', '../filter-item.scss'],
})
export class FilterItemMultiselectComponent implements OnInit {

  @Input()
  public filterItem?: FilterItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
