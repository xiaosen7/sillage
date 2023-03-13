import { Distance } from "./Distance";

export class Rect {
  x: number;
  y: number;
  right: number;
  bottom: number;

  constructor(
    public left: number,
    public top: number,
    public width: number,
    public height: number
  ) {
    this.x = left;
    this.y = top;
    this.right = left + width;
    this.bottom = this.top + this.height;
  }

  minus(rect: Rect) {
    return new Rect(
      this.left - rect.left,
      this.top - rect.top,
      this.width,
      this.height
    );
  }

  add(rect: Rect) {
    return new Rect(
      this.left + rect.left,
      this.top + rect.top,
      this.width,
      this.height
    );
  }

  getEdgeDistanceTo(rect: Rect) {
    const compareX = [
      [this.left, rect.left],
      [this.left, rect.right],
      [this.right, rect.left],
      [this.right, rect.right],
    ];
    const [dx, targetX] = compare(compareX);

    const compareY = [
      [this.top, rect.top],
      [this.top, rect.bottom],
      [this.bottom, rect.top],
      [this.bottom, rect.bottom],
    ];
    const [dy, targetY] = compare(compareY);

    return new Distance(dx, dy, targetX, targetY);
  }

  getCenterDistanceTo(rect: Rect) {
    const thisX = this.x + this.width / 2;
    const thisY = this.y + this.height / 2;
    const targetX = rect.x + rect.width / 2;
    const targetY = rect.y + rect.height / 2;

    const dx = Math.abs(targetX - thisX);
    const dy = Math.abs(targetY - thisY);

    return new Distance(dx, dy, targetX, targetY);
  }
}

function compare(comparePair: number[][]) {
  return comparePair.reduce<number[]>(
    ([d, target], [x1, x2]) => {
      const d2 = Math.abs(x1 - x2);
      if (d2 < d) {
        target = x2;
        d = d2;
      }

      return [d, target];
    },
    [Number.POSITIVE_INFINITY, 0]
  );
}
