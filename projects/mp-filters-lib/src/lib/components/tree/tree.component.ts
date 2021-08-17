import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilterItemObjectModel } from '../../models';
import { TreeNodeController } from './tree-node.controller';

@Component({
  selector: 'mp-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent implements OnInit, OnChanges {

  @Input()
  public filterObjects: FilterItemObjectModel[] = [];
  public nodeControllers!: TreeNodeController[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterObjects != null) {
      this.buildVm();
    }
  }

  private buildVm() {
    this.nodeControllers = this.filterObjects.map(o => this.createNodeController(o));
  }

  private createNodeController(object: FilterItemObjectModel): TreeNodeController {
    const objectsControllers = (object.objects ?? []).map(o => this.createNodeController(o));
    return new TreeNodeController(object.label, objectsControllers);
  }
}
