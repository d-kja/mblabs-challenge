import { randomUUID } from "node:crypto";

export class UniqueId {
  private value: string;

  private constructor(id?: string) {
    this.value = id || randomUUID();
  }

  public toString() {
    return this.value;
  }

  static create(id?: string) {
    return new UniqueId(id);
  }
}
