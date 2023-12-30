import {
  ComponentProps,
  ForwardRefRenderFunction,
  ReactNode,
  forwardRef,
} from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const buttonRaw: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, type = "button", className = "bg-inherit", ...props },
  ref,
) => {
  return (
    <button
      className={`px-6 md:px-8 py-3 rounded-xl text-base font-semibold ${className}`}
      type={type}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
};

export const Button = forwardRef(buttonRaw);
