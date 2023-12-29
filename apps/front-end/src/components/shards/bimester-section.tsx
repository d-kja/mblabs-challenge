"use client";

import { BimesterType, ClassType } from "@/utils/types";
import { FC } from "react";
import { Cards } from "../cards";
import { PlusIcon } from "../svg/plus-icon";

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
    <section
      title={`Bimestre ${bimesterToNumber[bimester]}`}
      className="flex flex-col"
    >
      <div className="flex justify-between mb-6">
        <strong className="font-medium text-lg text-white capitalize">
          Bimestre {bimesterToNumber[bimester]}
        </strong>

        <button type="button" className="stroke-black bg-accent px-3 rounded">
          <PlusIcon />
        </button>
      </div>

      <div className="grid grid-cols-2 auto-cols-[1/2] md:grid-cols-3 md:auto-cols-[1/3] lg:grid-cols-4 lg:auto-cols-[1/4] xl:grid-cols-5 xl:auto-cols-[1/5] place-items-center gap-4">
        {classes.map(({ classType, handleDelete }) => {
          return (
            <Cards
              key={classType.id}
              classType={classType}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </section>
  );
};
