import { FC } from "react";

interface GradeIconProps {
  strokeClass?: string;
}

export const GradeIcon: FC<GradeIconProps> = ({
  strokeClass = "stroke-inherit",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      className={strokeClass}
    >
      <title>Icone nota</title>
      <path
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.983 8.777v5.578M10.73 6.107v8.248M14.416 11.725v2.63"
      />
      <path
        fillRule="evenodd"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.718 10.257c0-6.085 2.003-8.114 8.012-8.114 6.01 0 8.013 2.029 8.013 8.114 0 6.085-2.004 8.114-8.013 8.114s-8.012-2.03-8.012-8.114z"
        clipRule="evenodd"
      />
    </svg>
  );
};
