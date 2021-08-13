import { Component, OnInit } from '@angular/core';
import { FilterItemType } from 'projects/mp-filters-lib/src/lib/enums';
import { FilterGroupModel } from 'projects/mp-filters-lib/src/lib/models';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
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
              label: 'object111',
            },
            {
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
              label: 'object121',
            },
            {
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
