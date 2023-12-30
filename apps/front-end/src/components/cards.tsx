"use client";

import { dateFormatter } from "@/utils/formatter";
import { ClassType } from "@/utils/types";
import { FC } from "react";
import { GradeIcon } from "./svg/grade-icon";
import { TrashIcon } from "./svg/trash-icon";

import { Tooltip } from "./tooltip";

interface CardsProps {
  classType: ClassType;
  handleDelete: (id: string) => Promise<void>;
}

export const Cards: FC<CardsProps> = ({ classType, handleDelete }) => {
  const date = dateFormatter.format(classType.createdAt);
  const grading = classType.grade >= 8 ? 2 : classType.grade >= 6 ? 1 : 0;

  return (
    <div
      className={
        "max-w-[12rem] aspect-square w-full flex flex-col flex-1 gap-1 rounded-[1.25rem] p-4 relative"
      }
      data-class={classType.name}
    >
      <strong className="font-medium text-lg capitalize">
        {classType.name}
      </strong>
      <span className="text-xs font-normal">{date}</span>

      <span
        data-grading={grading}
        className="absolute py-[0.3125rem] bottom-5 inset-x-0 px-3 flex gap-[.375rem] items-center bg-base/70 font-normal text-xs"
      >
        <GradeIcon /> Nota: {classType.grade}
      </span>

      <Tooltip.Wrapper>
        <Tooltip.Trigger>
          <button
            type="button"
            className=" stroke-danger fill-danger hover:brightness-75 transition-[filter] absolute md:top-0 md:-right-9 top-2 right-1 md:brightness-100 brightness-50"
            onClick={() => handleDelete(classType.id)}
          >
            <TrashIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="absolute -top-6 -right-9">
          Remover
        </Tooltip.Content>
      </Tooltip.Wrapper>
    </div>
  );
};
