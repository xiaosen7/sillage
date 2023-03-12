import { CodelessContext } from "./CodelessContext";
import { type Node } from "./Node";

export class CodeRunner {
  constructor(
    private readonly content: string,
    private readonly moduleMap: Record<string, any>,
    private readonly root: Node
  ) {}

  run() {
    const exports: any = {};
    const module: any = {
      exports,
    };
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const require = (moduleName: string) => {
      if (moduleName in this.moduleMap) {
        return this.moduleMap[moduleName];
      }

      throw new Error(`failed to resolve module ${moduleName}`);
    };

    // eslint-disable-next-line no-eval
    eval(this.content);

    const run = module?.exports?.run ?? exports.run;

    if (typeof run === "function") {
      const context = new CodelessContext(this.root);
      run(context);
    }
  }
}
