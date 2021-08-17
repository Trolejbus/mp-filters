import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TreeNodeStatus } from '../tree-node-status.enum';
import { TreeNodeController } from '../tree-node.controller';

@Component({
  selector: 'mp-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input()
  public nodeController!: TreeNodeController;

  public value = new BehaviorSubject(false);
  private subscription = new Subscription();
  @ViewChild('checkbox')
  public checkbox?: ElementRef<any>;
  private indeterminate = false;

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(this.nodeController.state$
      .subscribe((s) => {
        switch (s) {
          case TreeNodeStatus.NotSelected:
            this.clearIndeterminate();
            this.value.next(false);
            break;
          case TreeNodeStatus.Selected:
            this.clearIndeterminate();
            this.value.next(true);
            break;
          case TreeNodeStatus.PartialySelected:
            this.setIndeterminate();
            break;
          default:
            throw new Error('Not mapped');
        }
    }));
  }
  
  ngAfterViewInit(): void {
    if (this.indeterminate) {
      this.setIndeterminate();
    }
    else {
      this.clearIndeterminate();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public valueChanged(value: boolean): void {
    this.nodeController.select(value);
  }
  
  public setIndeterminate(): void {
    this.indeterminate = true;
    if (this.checkbox != null) {
      (this.checkbox?.nativeElement as any).indeterminate = true;
    }
  }

  public clearIndeterminate(): void {
    this.indeterminate = false;
    if (this.checkbox != null) {
      (this.checkbox?.nativeElement as any).indeterminate = false;
    }
  }
}
