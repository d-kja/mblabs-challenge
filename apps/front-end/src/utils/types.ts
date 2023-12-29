export type ClassTypeNames = "biologia" | "artes" | "geografia" | "sociologia";
export type BimesterType = "primeiro" | "segundo" | "terceiro" | "quarto";

export type ClassType = {
  id: string;
  name: ClassTypeNames;
  grade: number;

  createdAt: Date;
};
