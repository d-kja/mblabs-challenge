export type ClassTypeNames = "biologia" | "artes" | "geografia" | "sociologia";
export type BimesterType = "primeiro" | "segundo" | "terceiro" | "quarto";

export type ClassType = {
  id: string;
  name: ClassTypeNames;
  grade: number;

  createdAt: Date;
};

export const bimesterToNumber = {
  primeiro: 1,
  segundo: 2,
  terceiro: 3,
  quarto: 4,
} as const;
