export function compose(...fns: CallableFunction[]) {
  if (fns.length <= 1) {
    return fns[0];
  }

  return fns.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args))
  );
}
