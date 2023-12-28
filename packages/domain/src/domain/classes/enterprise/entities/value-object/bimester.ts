export type BimesterType = "primeiro" | "segundo" | "terceiro" | "quarto";

export class Bimester {
  private constructor(private bimester: BimesterType) {}

  static create(bimester: BimesterType) {
    return new Bimester(bimester);
  }

  get value() {
    return this.bimester;
  }
}
