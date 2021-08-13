import { FilterItemType } from "../enums";
import { FilterItemObjectModel } from "./filter-item-option.model";

export class FilterItemModel {
    public title?: string;
    public name!: string;
    public type!: FilterItemType;
    public objects?: FilterItemObjectModel[];
}
