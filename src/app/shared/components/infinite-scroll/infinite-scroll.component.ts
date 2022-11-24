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

  @Output() scrolled = new EventEmitter();
  @ViewChild('spinner') spinner: ElementRef<HTMLElement> | undefined;

  private observer: IntersectionObserver | undefined;

  constructor(private host: ElementRef) { }

  ngOnInit() {

  }

  get element() {
    return this.host.nativeElement;
  }

  ngAfterViewInit() {
    this.initObserver();
  }

  private initObserver(): void {
    if (!this.spinner) {
      return;
    }

    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      const [entry, ] = entries;
      return entry.isIntersecting && this.scrolled.emit();
    }, options);
    this.observer.observe(this.spinner.nativeElement);
  }

  private endObserver(): void {
    if (!this.observer) {
      return;
    }
    this.observer.disconnect();
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.endObserver();
  }

}
