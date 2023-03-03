export function runAsyncFunction<T extends (...args: any[]) => Promise<void>>(
  asyncFunction: T
) {
  asyncFunction().catch((error) => {
    throw error;
  });
}
