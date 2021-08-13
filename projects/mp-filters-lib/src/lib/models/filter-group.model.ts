import { FilterItemModel } from "./filter-item.model";

export class FilterGroupModel {
    public name!: string;
    public title!: string;
    public children?: FilterGroupModel[];
    public items?: FilterItemModel[];
}
