import { FC } from "react";

interface PlusIconProps {
  strokeClass?: string;
}

export const PlusIcon: FC<PlusIconProps> = ({
  strokeClass = "stroke-inherit",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      fill="none"
      viewBox="0 0 32 33"
      className={strokeClass}
    >
      <title>Icone adicionar</title>
      <path
        fill="inherit"
        d="M28 16.224a1 1 0 01-1 1H17v10a1 1 0 01-2 0v-10H5a1 1 0 010-2h10v-10a1 1 0 012 0v10h10a1 1 0 011 1z"
      />
    </svg>
  );
};
