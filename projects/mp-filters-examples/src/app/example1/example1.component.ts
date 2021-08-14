import { Component, OnInit } from '@angular/core';
import { MpFiltersFacade } from 'projects/mp-filters-lib/src/lib/controllers';
import { FilterItemType } from 'projects/mp-filters-lib/src/lib/enums';
import { AppliedFilterModel, FilterGroupModel } from 'projects/mp-filters-lib/src/lib/models';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
  providers: [
    MpFiltersFacade,
  ]
})
export class Example1Component implements OnInit {

  public filters: FilterGroupModel[] = [
    {
      name: "name1",
      title: "Name1",
      children: [
        {
          name: "name11",
          title: "Name11",
          children: [
            {
              name: "name111",
              title: "Name111",
            }
          ]
        },
        {
          name: "name12",
          title: "Name12",
        },
      ],
      items: [
        {
          title: 'item11',
          name: 'item11',
          type: FilterItemType.Multiselect,
          objects: [
            {
              id: 'object111',
              label: 'object111',
            },
            {
              id: 'object112',
              label: 'object112',
            },
          ]
        },
        {
          title: 'item12',
          name: 'item12',
          type: FilterItemType.Multiselect,
          objects: [
            {
              id: 'object121',
              label: 'object121',
            },
            {
              id: 'object122',
              label: 'object122',
            },
          ]
        },
      ]
    },
    {
      name: "name2",
      title: "Name2",
    },
    {
      name: "name3",
      title: "Name3",
    },
    {
      name: "name4",
      title: "Name4",
    },
    {
      name: "name5",
      title: "Name5",
    },
  ];
  public appliedFilters$ = this.facade.filtersChanged$;
  
  constructor(private facade: MpFiltersFacade) { }

  ngOnInit(): void {
  }

}
