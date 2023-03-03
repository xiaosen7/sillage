import { Observable } from "rxjs";

type ObserverFunction = (data: any) => void;
export class Emitter<Topic extends keyof any> {
  private readonly observers = new Map<Topic, Set<ObserverFunction>>();

  public on(topic: Topic | Topic[]): any {
    return new Observable((subscriber) => {
      if (Array.isArray(topic)) {
        topic.forEach((t) => {
          this.addObservableFunction(t, (data) => {
            subscriber.next(data);
          });
        });
      } else {
        this.addObservableFunction(topic, (data) => {
          subscriber.next(data);
        });
      }
    });
  }

  private addObservableFunction(topic: Topic, fn: ObserverFunction): void {
    let fns = this.observers.get(topic);
    if (!fns) {
      this.observers.set(topic, (fns = new Set()));
    }

    fns.add(fn);
  }

  public emit(topic: Topic, data?: any): void {
    this.observers.get(topic)?.forEach((fn) => {
      fn(data);
    });
  }
}