import { type JSONPage } from "@sillage/meta";
import { Emitter } from "@sillage/utils";
import * as sillage from "../";
import { Node } from "./Node";

enum Topic {
  UpdateScriptUrl,
  Mounted,
}

export class Page extends Emitter<Topic> {
  static readonly Topic = Topic;
  readonly root: Node;
  private scriptUrl: string | undefined;
  constructor(jsonPage: JSONPage) {
    super();
    const { root, scriptUrl } = jsonPage;
    this.root = new Node(root);
    this.scriptUrl = scriptUrl;

    this.on(Topic.Mounted).subscribe(() => {
      this.runScript();
    });
  }

  setScriptUrl(scriptUrl: string) {
    this.scriptUrl = scriptUrl;
    this.emit(Topic.UpdateScriptUrl, scriptUrl);
  }

  runScript() {
    const { scriptUrl, root } = this;
    if (!scriptUrl) {
      return;
    }

    const text = `var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
      }
      Object.defineProperty(o, k2, desc);
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  }));
  var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function(o, v) {
      o["default"] = v;
  });
  var __importStar = (this && this.__importStar) || function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  };
  define(["require", "exports", "@sillage/runtime"], function (require, exports, sillage) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      sillage = __importStar(sillage);
      console.log({ sillage });
  });
  `;

    fetch(scriptUrl)
      .then(async (r) => await r.text())
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, unicorn/consistent-function-scoping
        function define(deps: string[], callback: (...deps: any[]) => void) {
          if (!callback) {
            // @ts-expect-error it's ok
            callback = deps;
            deps = [];
          }
          console.log("deps", deps);
          const depTypes = deps.map((stringName) => {
            const modules = Modules.get();
            return modules.resolve(stringName);
          });
          // eslint-disable-next-line n/no-callback-literal
          callback(...depTypes);
        }

        // eslint-disable-next-line no-eval
        return eval(text);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  toJSON(): JSONPage {
    const root = this.root.toJSON();
    const { scriptUrl } = this;
    return {
      root,
      scriptUrl,
    };
  }
}

class Modules {
  static inst = new Modules();

  public static get() {
    return Modules.inst;
  }

  resolve(name: string) {
    switch (name) {
      case "@sillage/runtime": {
        return sillage;
      }
      case "require": {
        return () => ({});
      }
      case "exports": {
        return {};
      }
      default: {
        throw new Error(`unable to resolve ${name}.`);
      }
    }
  }
}
