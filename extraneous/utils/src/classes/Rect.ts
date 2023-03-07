export class Rect {
  x: number;
  y: number;
  constructor(
    public left: number,
    public top: number,
    public width: number,
    public height: number
  ) {
    this.x = left;
    this.y = top;
  }

  minus(rect: Rect) {
    return new Rect(
      this.left - rect.left,
      this.top - rect.top,
      this.width,
      this.height
    );
  }
}
