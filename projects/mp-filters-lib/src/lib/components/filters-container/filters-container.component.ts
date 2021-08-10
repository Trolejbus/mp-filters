import { Component, Input, OnInit } from '@angular/core';
import { FilterGroupModel } from '../../models';

@Component({
  selector: 'mp-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit {

  @Input()
  public filters: FilterGroupModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
