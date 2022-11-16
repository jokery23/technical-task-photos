import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfiniteScrollComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() scroll = new EventEmitter();
  @ViewChild('spinner') spinner: ElementRef<HTMLElement> | undefined;

  private observer: IntersectionObserver | undefined;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initObserver();
  }

  private initObserver(): void {
    if (!this.spinner) {
      return;
    }

    const options = {
      root: null,
      threshold: 0
    };

    this.observer = new IntersectionObserver(([entry]) => {
      return entry.isIntersecting && this.scroll.emit();
    }, options);

    this.observer.observe(this.spinner.nativeElement);
  }

  private endObserver(): void {
    if (!this.observer) {
      return;
    }
    this.observer.disconnect();
  }

  ngOnDestroy() {
    this.endObserver();
  }

}
