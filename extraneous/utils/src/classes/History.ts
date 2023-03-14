export class History<T> {
  private history: T[];
  private index: number;
  private max: number;

  constructor(item: T) {
    this.history = [item];
    this.index = 0;
    this.max = 0;
  }

  visit(item: T): void {
    this.index++;
    this.history[this.index] = item;
    this.max = this.index;
  }

  back(steps: number): T {
    const targetIndex = this.index - steps;
    if (targetIndex >= 0) {
      this.index = targetIndex;
    } else {
      this.index = 0;
    }

    return this.history[this.index];
  }

  forward(steps: number): T {
    const targetIndex = this.index + steps;
    if (targetIndex <= this.max) {
      this.index = targetIndex;
    } else {
      this.index = this.max;
    }

    return this.history[this.index];
  }
}
