import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MpFiltersController } from './controllers';
import { FilterGroupModel } from './models';

@Component({
  selector: 'mp-filters',
  template: `<mp-filters-container [filters]="filters"></mp-filters-container>`,
  providers: [
    MpFiltersController,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MpFiltersComponent implements OnInit {

  @Input()
  public filters: FilterGroupModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
