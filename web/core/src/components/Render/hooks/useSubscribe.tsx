import { useEffect } from "react";
import { type Emitter, arrayed } from "@sillage/utils";
import { type Subscription } from "rxjs";

export function useSubscribe<T extends string | number>(
  emitter: Emitter<T>,
  topic: T | T[],
  observerOrNext: (value: unknown) => void = () => null
) {
  useEffect(() => {
    const subs: Subscription[] = [];
    for (const t of arrayed(topic)) {
      const s = emitter.on(t).subscribe((value: any) => {
        observerOrNext(value);
      });
      subs.push(s);
    }

    return () => {
      for (const x of subs) {
        x.unsubscribe();
      }
    };
  }, [emitter, observerOrNext, topic]);
}
