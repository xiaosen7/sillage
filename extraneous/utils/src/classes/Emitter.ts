import { Observable } from "rxjs";

export type ObserverFunction = (data: any) => void;
export class Emitter<Topic extends keyof any> {
  private readonly observers = new Map<Topic, Set<ObserverFunction>>();

  public on(topic: Topic | Topic[]) {
    return new Observable((subscriber) => {
      if (Array.isArray(topic)) {
        for (const t of topic) {
          this.addObservableFunction(t, (data) => {
            subscriber.next(data);
          });
        }
      } else {
        this.addObservableFunction(topic, (data) => {
          subscriber.next(data);
        });
      }
    });
  }

  protected addObservableFunction(topic: Topic, fn: ObserverFunction): void {
    let fns = this.observers.get(topic);
    if (!fns) {
      this.observers.set(topic, (fns = new Set()));
    }

    fns.add(fn);
  }

  public emit(topic: Topic | Topic[], data?: any): void {
    if (Array.isArray(topic)) {
      for (const t of topic) {
        this.emit(t, data);
      }
    } else {
      const listeners = this.observers.get(topic);
      if (!listeners) {
        return;
      }

      for (const fn of listeners) {
        fn(data);
      }
    }
  }
}
