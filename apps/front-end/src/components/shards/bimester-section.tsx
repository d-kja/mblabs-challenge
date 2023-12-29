"use client";

import { BimesterType, ClassType } from "@/utils/types";
import { FC } from "react";
import { Cards } from "../cards";

interface BimesterSectionProps {
  bimester: BimesterType;
  classes: {
    classType: ClassType;
    handleDelete: (id: string) => Promise<void>;
  }[];
}

const bimesterToNumber = {
  primeiro: 1,
  segundo: 2,
  terceiro: 3,
  quarto: 4,
} as const;

export const BimesterSection: FC<BimesterSectionProps> = ({
  bimester,
  classes,
}) => {
  return (
    <section title={`Bimestre ${bimesterToNumber[bimester]}`}>
      {classes.map(({ classType, handleDelete }) => {
        return (
          <Cards
            key={classType.id}
            classType={classType}
            handleDelete={handleDelete}
          />
        );
      })}
    </section>
  );
};
