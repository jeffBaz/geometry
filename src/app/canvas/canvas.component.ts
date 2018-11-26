import { Component, OnInit } from '@angular/core';
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
    for (let i = 0; i < 20; i++) {
      const line = new Line();
      line.p1 = new Point(Math.random() * 200, Math.random() * 200);
      line.p2 = new Point(Math.random() * 200, Math.random() * 200);
      const  point = new Point(Math.random() * 200, Math.random() * 200);
      this.lines.push(line);
      this.points.push(point);
    }

  }

}
