import { Point } from './Point';

export abstract class Shape {
  protected color: string = '';
  protected filled: boolean = false;
  protected points: Point[] = [];

  static validate(points: Point[]) {
    if (points.length < 3) {
      throw new Error('Invalid Shape. Must have at least 3 points.');
    }
  }

  constructor(points: Point[], color?: string, filled?: boolean) {
    Shape.validate(points);

    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  toString(): string {
    return `A Shape with color of ${this.color} and ${this.getShapeFillColorStatus()}. Points: ${this.stringifyShape()}.`;
  }

  getShapeFillColorStatus() {
    return this.filled ? 'filled' : 'not filled';
  }

  stringifyShape(): string {
    return this.points.map((p) => p.toString()).join(', ');
  }

  getPerimeter(): number {
    return this.calculateDistanceBetweenPoints().reduce((acc, curr) => (acc += curr), 0);
  }

  protected calculateDistanceBetweenPoints() {
    return this.points.reduce<number[]>((acc, p, i) => {
      if (i === this.points.length - 1) {
        acc.push(parseFloat(p.distance(this.points[0]).toFixed(2)));
      } else {
        acc.push(parseFloat(p.distance(this.points[i + 1]).toFixed(2)));
      }

      return acc;
    }, []);
  }

  abstract getType(): string;
}
// const points = [new Point(0, 0), new Point(0, 3), new Point(4, 3)];
// const s = new Shape(points);
// console.log(s.toString());
// console.log(s.getPerimeter());
