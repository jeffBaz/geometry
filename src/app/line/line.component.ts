import { Component, OnInit, ElementRef, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { Line, getF, Point } from '../models/models';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnChanges {
  @ViewChild('line')
  ref: ElementRef;
  @Input()
  line: Line;
  start: Point;
  base: Point;
  end: Point;
  length: number;
  angle: number;
  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['line'] && changes.line.currentValue) {
      this.base = this.line.p1;
      this.start = new Point(0, 0);
      this.end = new Point(100, 100);
      let positionX = '', positionY = '';
      if (this.line.p1.x > this.line.p2.x) {
        positionX = 'right';
      } else {
        positionX = 'left';
      }
      if (this.line.p1.y > this.line.p2.y) {
        positionY = 'bottom';
      } else {
        positionY = 'top';
      }
      const height = Math.abs(this.line.p1.y - this.line.p2.y);
      const width = Math.abs(this.line.p1.x - this.line.p2.x);
      this.angle = Math.atan(height / width) * (180 / Math.PI);
      this.length = Math.sqrt(height * height + width * width);
      this.el.nativeElement.style.height = getF(height) + 'px';
      this.el.nativeElement.style.width = getF(width) + 'px';
      this.ref.nativeElement.style.width = parseFloat(this.length + '').toFixed(2) + 'px';
      this.ref.nativeElement.style.transformOrigin = 'left top';
      this.ref.nativeElement.style.transform = 'rotate(' + this.angle + 'deg)';
      this.el.nativeElement.style.position = 'absolute';
      this.el.nativeElement.style.top = getF(this.base.y) + 'px';
      this.el.nativeElement.style.left = getF(this.base.x) + 'px';
    }
  }
  ngOnInit() {
  }

}
