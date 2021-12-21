export class Point {
  private _x: number;
  private _y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this._x = x;
    this._y = y;
  }

  distance();
  distance(x: number | Point);
  distance(x: number, y: number);
  distance(x?: number, y?: number): number {
    switch (arguments.length) {
      case 0:
        return this.euclidean(this, new Point(0, 0));
      case 1:
        if (arguments[0] instanceof Point) {
          return this.euclidean(this, arguments[0]);
        }

        throw new Error('Invalid arguments');
      case 2:
        if (Number.isSafeInteger(x) && Number.isSafeInteger(y)) {
          return this.euclidean(this, new Point(x as number, y));
        }

        throw new Error('Invalid arguments');
      default:
        throw new Error('Method not implemented.');
    }
  }

  private euclidean(p1: Point, p2: Point): number {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}
