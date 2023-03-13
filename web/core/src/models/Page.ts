import { type JSONPage } from "@sillage/meta";
import { Emitter } from "@sillage/utils";
import { Node } from "./Node";

enum Topic {
  UpdateScript,
  UpdateCompiledScript,
  Mounted,
}

export class Page extends Emitter<Topic> {
  static readonly Topic = Topic;
  readonly root: Node;
  private scriptUrl: string | undefined;
  readonly id: string;
  private compiledScriptUrl: string | undefined;
  constructor(jsonPage: JSONPage) {
    super();
    const { root, scriptUrl, id, compiledScriptUrl } = jsonPage;
    this.id = id;
    this.root = new Node(root);
    this.scriptUrl = scriptUrl;
    this.compiledScriptUrl = compiledScriptUrl;
  }

  getScriptUrl() {
    return this.scriptUrl;
  }

  setScriptUrl(scriptUrl: string) {
    this.scriptUrl = scriptUrl;
    this.emit(Topic.UpdateScript, scriptUrl);
  }

  getCompiledScriptUrl() {
    return this.compiledScriptUrl;
  }

  setCompiledScriptUrl(compiledScriptUrl: string) {
    this.compiledScriptUrl = compiledScriptUrl;
    this.emit(Topic.UpdateCompiledScript, compiledScriptUrl);
  }

  toJSON(): JSONPage {
    const root = this.root.toJSON();
    const { scriptUrl, id, compiledScriptUrl } = this;
    return {
      root,
      scriptUrl,
      id,
      compiledScriptUrl,
    };
  }
}
