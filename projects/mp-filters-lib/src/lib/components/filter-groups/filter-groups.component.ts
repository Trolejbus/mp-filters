import { Component, Input, OnInit } from '@angular/core';
import { FilterGroupModel } from '../../models';

@Component({
  selector: 'mp-filter-groups',
  templateUrl: './filter-groups.component.html',
  styleUrls: ['./filter-groups.component.scss'],
})
export class FilterGroupsComponent implements OnInit {

  @Input()
  public filters: FilterGroupModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
