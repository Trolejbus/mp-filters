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
          type: FilterItemType.Checkboxes,
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
          type: FilterItemType.Checkboxes,
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
        {
          title: 'item13',
          name: 'item13',
          type: FilterItemType.Radiobuttons,
          objects: [
            {
              id: 'object131',
              label: 'object131',
            },
            {
              id: 'object132',
              label: 'object132',
            },
          ]
        },
        {
          title: 'item14',
          name: 'item14',
          type: FilterItemType.Dropdown,
          objects: [
            {
              id: 'object141',
              label: 'object141',
            },
            {
              id: 'object142',
              label: 'object142',
            },
          ]
        },
        {
          title: 'item15',
          name: 'item15',
          type: FilterItemType.InputText,
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
