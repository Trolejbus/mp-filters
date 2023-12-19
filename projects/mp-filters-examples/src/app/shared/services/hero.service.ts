import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { HEROES } from "../hero.const";
import { HeroCriteriaModel, HeroModel } from "../models";

@Injectable()
export class HeroService {
    

    public getData(criteria: HeroCriteriaModel): Observable<HeroModel[]> {
        return of(HEROES)
            .pipe(
                map(f => this.filter(f, criteria)),
                delay(2000),
            );
    }

    private filter(models: HeroModel[], criteria: HeroCriteriaModel): HeroModel[] {
        console.log(criteria, models);
        return models
            .filter(m => criteria.PROFESSION == null || m.profession === criteria.PROFESSION);
    }
}