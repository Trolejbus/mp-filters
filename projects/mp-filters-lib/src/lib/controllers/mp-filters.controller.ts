import { Injectable, Optional } from "@angular/core";
import { AppliedFilterModel, ApplyFilterModel as ApplyFilterModel } from "../models";
import { MpFiltersFacade } from "./mp-filters.facade";

@Injectable()
export class MpFiltersController {

    private appliedFilters: any = {};

    constructor(@Optional() private facade: MpFiltersFacade) {
        
    }

    public updateFilter(applyFilter: ApplyFilterModel): void {
        this.appliedFilters[applyFilter.name] = applyFilter.value;
        this.updateFacade();
    }

    public removeFilter(name: string): void {
        delete this.appliedFilters[name];
        this.updateFacade();
    }

    private updateFacade(): void {
        this.facade?.invokeFiltersChanged(this.appliedFilters);
    }
}