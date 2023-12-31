import { FC } from "react";

interface TrashIconProps {
  strokeClass?: string;
}

export const TrashIcon: FC<TrashIconProps> = ({
  strokeClass = "stroke-inherit fill-inherit",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      className={strokeClass}
      viewBox="0 0 32 32"
    >
      <title>Icone deletar</title>

      <path
        fill="inherit"
        d="M23 4.724h-5v-1a3 3 0 00-3-3H9a3 3 0 00-3 3v1H1a1 1 0 100 2h1v18a2 2 0 002 2h16a2 2 0 002-2v-18h1a1 1 0 100-2zm-15-1a1 1 0 011-1h6a1 1 0 011 1v1H8v-1zm12 21H4v-18h16v18zm-10-13v8a1 1 0 01-2 0v-8a1 1 0 112 0zm6 0v8a1 1 0 01-2 0v-8a1 1 0 012 0z"
      />
    </svg>
  );
};
