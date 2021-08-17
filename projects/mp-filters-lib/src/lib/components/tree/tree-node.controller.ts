import { BehaviorSubject, combineLatest, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { TreeNodeStatus } from "./tree-node-status.enum";

export class TreeNodeController {

    public state$ = new BehaviorSubject<TreeNodeStatus>(TreeNodeStatus.NotSelected);
    public childChanged$ = combineLatest(this.children.map(c => c.state$)).pipe(
        map(([...childrenStates]) => this.determineState(childrenStates)),
    );
    private subscription = new Subscription();

    constructor(public label: string, public id: string, public children: TreeNodeController[]) {
        this.subscription.add(this.childChanged$.subscribe(c => this.state$.next(c)));
    }

    public destroy(): void {
        this.children.forEach(c => c.destroy());
        this.subscription.unsubscribe();
    }

    public select(value: boolean): void {
        if (this.isLeaf) {
            this.state$.next(value ? TreeNodeStatus.Selected : TreeNodeStatus.NotSelected);
        }
        else {
            this.children.forEach(c => c.select(value));
        }
    }

    public get isLeaf(): boolean {
        return this.children.length === 0;
    }

    public getSelectedIds(onlyLeafs: boolean): string[] {
        const result = this.children.map(c => c.getSelectedIds(onlyLeafs)).reduce((a, b) => a.concat(b), []);
        if ((!onlyLeafs || this.isLeaf) && this.isSelectedOrPartiallySelected()) {
            result.push(this.id);
        }

        return result;
    }

    public selectIds(ids: string[]): void {
        if (ids.includes(this.id)) {
            this.select(true);
        }

        this.children.forEach(c => c.selectIds(ids));
    }

    private determineState(childrenStates: TreeNodeStatus[]): TreeNodeStatus {
        if (childrenStates.every(s => s == TreeNodeStatus.Selected)) {
            return TreeNodeStatus.Selected;
        }
        else if (childrenStates.every(s => s == TreeNodeStatus.NotSelected)) {
            return TreeNodeStatus.NotSelected;
        }
        else {
            return TreeNodeStatus.PartialySelected;
        }
    }
    
    private isSelectedOrPartiallySelected(): boolean {
        return [TreeNodeStatus.Selected, TreeNodeStatus.PartialySelected].includes(this.state$.value);
    }
}
