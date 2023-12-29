"use client";

import { dateFormatter } from "@/utils/formatter";
import { ClassType } from "@/utils/types";
import { FC } from "react";
import { GradeIcon } from "./svg/grade-icon";

interface CardsProps {
  classType: ClassType;
  handleDelete: (id: string) => Promise<void>;
}

export const Cards: FC<CardsProps> = ({ classType, handleDelete }) => {
  const date = dateFormatter.format(classType.createdAt);

  return (
    <div
      className={`max-w-[9.8125rem] max-h-[9.125rem] rounded-[1.25rem] relative
      class-type`}
      data-class={classType.name}
      onClick={() => handleDelete(classType.id)}
    >
      <strong>{classType.name}</strong>
      <span>{date}</span>

      <span className="absolute my-[0.3125rem] bottom-5 inset-x-0 px-3">
        <GradeIcon /> Nota: ${classType.grade}
      </span>
    </div>
  );
};
