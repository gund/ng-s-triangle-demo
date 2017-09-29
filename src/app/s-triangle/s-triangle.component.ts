import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-s-triangle',
  templateUrl: './s-triangle.component.html',
  styleUrls: ['./s-triangle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class STriangleComponent implements OnInit, OnChanges {

  @Input() x: number;
  @Input() y: number;
  @Input() s: number;
  @Input() text: string;

  targetSize = 25;
  halfTargetSize = this.targetSize / 2;
  halfS: number;
  half2S: number;

  get isFinal() {
    return this.s <= this.targetSize;
  }

  ngOnInit() {
    const newSize = this.s / 2;
    const slowDown = false;
    if (slowDown) {
      const e = performance.now() + 0.8;
      while (performance.now() < e) {
        // Artificially long execution time.
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('s' in changes) {
      this.halfS = this.s / 2;
      this.half2S = this.halfS / 2;
    }
  }

}
