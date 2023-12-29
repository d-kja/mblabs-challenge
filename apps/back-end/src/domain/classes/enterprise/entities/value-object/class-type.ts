export type ClassesType = "biologia" | "artes" | "geografia" | "sociologia";

export class Classes {
  private constructor(private classes: ClassesType) {}

  static create(classes: ClassesType) {
    return new Classes(classes);
  }

  get value() {
    return this.classes;
  }
}
