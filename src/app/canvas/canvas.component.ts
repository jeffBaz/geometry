import { Component, OnInit, HostListener } from '@angular/core';
import { Line, Point } from '../models/models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  lines: Line[];
  points: Point[];
  constructor() {
  }

  ngOnInit() {
    this.lines = [];
    this.points = [];
    const center = new Point(Math.random() * 200, Math.random() * 200);
    const r = 200;
    for (let i = 0; i < 360; i++) {
      const line = new Line();
      line.p1 = new Point(r * Math.cos(i), r * Math.cos(i - r));
      line.p2 = new Point(r * Math.cos(i), r * Math.cos(i - r));
      const point = new Point(i, r * Math.cos(i));
      this.lines.push(line);
      this.points.push(point);
    }

  }
  @HostListener('document:mousemove', ['$event'])
  mouseHandler(e) {
    console.info(e);
  }

}
