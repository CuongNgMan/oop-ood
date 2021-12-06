export class Point {
  constructor(private x: number = 0, private y: number = 0) {
    this.x = x;
    this.y = y;
  }

  distance(x?: number | Point, y?: number): number {
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
}
