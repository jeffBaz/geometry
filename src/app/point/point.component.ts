import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Point } from '../models/models';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit, OnChanges {
  @Input()
  ref: Point;
  constructor(private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ref'] && changes.ref.currentValue) {
      this.el.nativeElement.style.position =  'absolute' ;
      this.el.nativeElement.style.left = parseFloat(this.ref.x + '').toFixed(2) + '%';
      this.el.nativeElement.style.top = parseFloat(this.ref.y + '') + '%';
    }
  }

  ngOnInit() {
  }

}
