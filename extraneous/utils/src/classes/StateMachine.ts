type StateTransferFunction = (...args: any[]) => void;

const AUTO_ACTION = "<auto>";

export class StateMachine<
  S extends string | number,
  A extends string | number
> {
  private state: S;

  // S -> A -> S
  private readonly transferTable: Map<
    S,
    Map<A, [StateTransferFunction | undefined, S]>
  >;

  constructor(initialState: S) {
    this.state = initialState;
    this.transferTable = new Map();
  }

  private addTransfer(
    from: S,
    to: S,
    action: A,
    fn?: StateTransferFunction
  ): void {
    if (!this.transferTable.has(from)) {
      this.transferTable.set(from, new Map());
    }

    const adjTable = this.transferTable.get(from);

    adjTable?.set(action, [fn, to]);
  }

  public register(
    from: S | S[],
    to: S,
    action: A | typeof AUTO_ACTION,
    fn?: StateTransferFunction
  ): void {
    if (Array.isArray(from)) {
      from.forEach((s) => {
        this.addTransfer(s, to, action as A, fn);
      });
    } else {
      this.addTransfer(from, to, action as A, fn);
    }
  }

  public dispatch(action: A, ...args: any[]): boolean {
    const actionToTransfer = this.transferTable.get(this.state);

    const transfer = actionToTransfer?.get(action);
    if (transfer === undefined) {
      return false;
    }

    const [fn, nextS] = transfer;
    if (typeof fn === "function") {
      fn(...args);
    }
    this.state = nextS;

    // <auto>
    // while(this.dispatch(0 as A, ...data));
    while (this.dispatch(AUTO_ACTION as A, ...args));
    return true;
  }

  getState(): S {
    return this.state;
  }

  describe(title: string, cb: (register: typeof this.register) => void) {
    cb(this.register.bind(this));
  }
}
