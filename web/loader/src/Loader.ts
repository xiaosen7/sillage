export class Loader<Value> {
  protected data = new Map<string, Value>();

  private loaded = false;

  static get() {
    throw new Error("method get must be implemented");
  }

  public load() {
    if (this.loaded) {
      return this;
    }

    const nameToValue = this.loadFiles();
    for (const [name, value] of Object.entries(nameToValue)) {
      this.data.set(name, value);
    }

    this.loaded = true;

    return this;
  }

  protected loadFiles(): Record<string, Value> {
    throw new Error("method loadRaw must be implemented");
  }

  loadByName(name: string) {
    if (!this.loaded) {
      this.load();
    }

    const ret = this.data.get(name);
    if (!ret) {
      throw new Error(`${name} loaded failed.`);
    }

    return ret;
  }

  toArray() {
    if (!this.loaded) {
      this.load();
    }

    return [...this.data.entries()];
  }

  getNames() {
    if (!this.loaded) {
      this.load();
    }

    return [...this.data.keys()];
  }
}
