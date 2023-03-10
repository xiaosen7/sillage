export function runAsyncFunction<T extends (...args: any[]) => Promise<void>>(
  asyncFunction: T
) {
  asyncFunction().catch((error) => {
    throw error;
  });
}

export async function getPkgJsonFromFile(root: string) {
  return await import(`${root}/package.json`);
}
