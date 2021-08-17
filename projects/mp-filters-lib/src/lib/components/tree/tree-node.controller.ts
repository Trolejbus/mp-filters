import { BehaviorSubject, combineLatest, merge, Subject, Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import { TreeNodeStatus } from "./tree-node-status.enum";

export class TreeNodeController {

    public state$ = new BehaviorSubject<TreeNodeStatus>(TreeNodeStatus.NotSelected);
    public childChanged$ = combineLatest(this.children.map(c => c.state$)).pipe(
        map(([...childrenStates]) => this.determineState(childrenStates)),
    );
    private subscription = new Subscription();

    constructor(public label: string, public children: TreeNodeController[]) {
        this.subscription.add(this.childChanged$.subscribe(c => this.state$.next(c)));
    }

    public destroy(): void {
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
}
