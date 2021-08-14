import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FilterItemModel } from '../../models';

@Component({
  selector: 'mp-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemComponent implements OnInit {

  @Input()
  public filterItem!: FilterItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
