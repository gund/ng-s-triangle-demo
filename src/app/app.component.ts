import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {

  seconds = 0;
  transform: SafeStyle;
  start = new Date().getTime();
  destryed$ = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    Observable.interval(1000)
      .takeUntil(this.destryed$)
      .subscribe(() => this.tick());

    Observable.interval(0, animationFrame)
      .takeUntil(this.destryed$)
      .subscribe(() => this.update());
  }

  ngOnDestroy() {
    this.destryed$.next();
  }

  tick() {
    this.seconds = (this.seconds % 10) + 1;
    this.cdr.markForCheck();
  }

  update() {
    const seconds = this.seconds;
    const elapsed = new Date().getTime() - this.start;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;
    this.transform = this.sanitizer.bypassSecurityTrustStyle(
      `scaleX(${scale / 2.1}) scaleY(0.7) translateZ(0.1px)`);
    this.cdr.markForCheck();
  }

}
