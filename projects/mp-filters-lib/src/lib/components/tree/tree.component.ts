import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterItemObjectModel } from '../../models';
import { TreeNodeController } from './tree-node.controller';

@Component({
  selector: 'mp-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: TreeComponent,
      multi: true,
    },
  ]
})
export class TreeComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {

  @Input()
  public filterObjects: FilterItemObjectModel[] = [];
  public nodeControllers!: TreeNodeController[];
  private changeFn?: (id: string[]) => void;
  private touchFn?: () => void;
  private controllerSubscription = new Subscription();

  constructor() { }

  writeValue(obj: string[]): void {
  }

  registerOnChange(fn: (id: string[]) => void): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touchFn = fn;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterObjects != null) {
      this.buildVm();
    }
  }

  ngOnDestroy(): void {
    this.nodeControllers.forEach(c => c.destroy());
    this.controllerSubscription.unsubscribe();
  }

  private buildVm() {
    this.nodeControllers = this.filterObjects.map(o => this.createNodeController(o));
    this.attachToEvents();
  }

  private createNodeController(object: FilterItemObjectModel): TreeNodeController {
    const objectsControllers = (object.objects ?? []).map(o => this.createNodeController(o));
    return new TreeNodeController(object.label, object.id, objectsControllers);
  }

  private attachToEvents(): void {
    this.controllerSubscription.unsubscribe();
    this.controllerSubscription = new Subscription();

    for (let nodeController of this.nodeControllers) {
      this.controllerSubscription = nodeController.state$.subscribe(s => {
        this.updateValue();
      });
    }
  }
  
  private updateValue(): void {
    const selectedIds = this.nodeControllers.map(n => n.getSelectedIds(true)).reduce((a, b) => a.concat(b), []);
    if (this.changeFn != null) {
      this.changeFn(selectedIds);
    }

    if (this.touchFn != null) {
      this.touchFn();
    }
  }
}
