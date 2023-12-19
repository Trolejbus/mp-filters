import { Component, OnDestroy, OnInit } from '@angular/core';
import { MpFiltersFacade } from 'projects/mp-filters-lib/src/lib/controllers';
import { FilterItemType } from 'projects/mp-filters-lib/src/lib/enums';
import { FilterGroupModel } from 'projects/mp-filters-lib/src/lib/models';
import { Subscription } from 'rxjs';
import { HeroCriteriaModel, HeroModel, HeroProfession, HeroService } from '../shared';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
  providers: [
    MpFiltersFacade,
    HeroService,
  ]
})
export class Example2Component implements OnInit, OnDestroy {

  public filters: FilterGroupModel[] = [
    {
      name: "GENERAL_INFORMATION",
      title: "General Information",
      items: [
        {
          title: 'Hero Profession',
          name: 'PROFESSION',
          type: FilterItemType.Radiobuttons,
          objects: [
            { id: HeroProfession.Barbarian, label: 'Barbarian' },
            { id: HeroProfession.Bard, label: 'Bard' },
            { id: HeroProfession.Knight, label: 'Knight' },
            { id: HeroProfession.Priest, label: 'Priest' },
            { id: HeroProfession.Thief, label: 'Thief' },
            { id: HeroProfession.Wizard, label: 'Wizard' },
          ],
        },
        {
          title: 'Hero Name',
          name: 'HERO_NAME',
          type: FilterItemType.InputText,
        },
      ],
    },
  ];

  public appliedFilters$ = this.facade.filtersChanged$;
  public data: HeroModel[] = [];

  private subscription = new Subscription();

  constructor(
    private facade: MpFiltersFacade,
    private service: HeroService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.appliedFilters$.subscribe(criteria => {
      this.service.getData(criteria as HeroCriteriaModel).subscribe(d => this.data = d );
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
