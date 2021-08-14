import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppliedFilterModel } from "../models";

@Injectable()
export class MpFiltersFacade {
    private filtersChanged = new BehaviorSubject<AppliedFilterModel[]>([]);
    public filtersChanged$ = this.filtersChanged.asObservable();

    public invokeFiltersChanged(value: AppliedFilterModel[]): void {
        this.filtersChanged.next(value);
    }
}