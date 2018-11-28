export class Point {
  public x: number;
  public y: number;
  public draggeable: boolean;
  public isRef: boolean;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Line {
  public p1: Point;
  public p2: Point;
  public draggeable: boolean;
  public hittable: boolean;
}

export function getF(val: number) {
  if (!val) {
    return 0;
  }
  return parseFloat(val + '').toFixed(2);
}
