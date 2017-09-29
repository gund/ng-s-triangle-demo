import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotComponent implements OnChanges {

  @Input() x: number;
  @Input() y: number;
  @Input() size: number;
  @Input() text: string;

  hover = false;
  style: { [k: string]: any };
  bgColor: string;

  ngOnChanges(changes: SimpleChanges) {
    const shapeChanged = 'x' in changes || 'y' in changes || 'size' in changes;

    if (shapeChanged) {
      this.updateStyle();
    }
  }

  enter() {
    this.hover = true;
    this.bgColor = '#ff0';
  }

  leave() {
    this.hover = false;
    this.bgColor = undefined;
  }

  private updateStyle() {
    const s = this.size * 1.3;
    this.style = {
      width: s + 'px',
      height: s + 'px',
      left: (this.x) + 'px',
      top: (this.y) + 'px',
      borderRadius: (s / 2) + 'px',
      lineHeight: (s) + 'px',
    };
  }

}
