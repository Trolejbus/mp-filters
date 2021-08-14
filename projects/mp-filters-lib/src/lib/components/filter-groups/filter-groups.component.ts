import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';
import { FilterGroupModel } from '../../models';
import { map, tap } from 'rxjs/operators'

@Component({
  selector: 'mp-filter-groups',
  templateUrl: './filter-groups.component.html',
  styleUrls: ['./filter-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterGroupsComponent implements OnInit, OnDestroy {

  @Input()
  public filter!: FilterGroupModel;
  @Input()
  public level = 0;

  public expanded: boolean = false;

  @ViewChild("content")
  public content: ElementRef<any> | null = null;
  public contentHeight$ = new BehaviorSubject<number>(0);
  public interval$ = interval(100)
    .pipe(
      map(() => (this.content?.nativeElement as HTMLElement)?.offsetHeight ?? 0),
    );
  private subscriptions = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.add(this.interval$.subscribe(h => this.contentHeight$.next(h)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

}
