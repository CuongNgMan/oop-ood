import { Point } from './Point';
import { Shape } from './Shape';

export enum TriangleTypes {
  Equilateral = 'equilateral triangle',
  Isosceles = 'isosceles triangle',
  Scalene = 'scalene triangle',
}

export class Triangle extends Shape {
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean);
  constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
    super([p1, p2, p3], color, filled);
  }

  toString(): string {
    return `Triangle[${this.stringifyShape()}]`;
  }

  stringifyShape(): string {
    return this.points.map((p, i) => `v${i + 1}=${p.toString()}`).join(',');
  }

  getType(): string {
    const [v1, v2, v3] = this.calculateDistanceBetweenPoints();
    return this.determineTriangleType(v1, v2, v3);
  }

  private determineTriangleType(v1: number, v2: number, v3: number): string {
    if (v1 == v2 && v2 == v3) {
      return TriangleTypes.Equilateral;
    } else if (v1 == v2 || v2 == v3 || v3 == v1) {
      return TriangleTypes.Isosceles;
    } else {
      return TriangleTypes.Scalene;
    }
  }
}
