import { Component, OnInit } from '@angular/core';
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
