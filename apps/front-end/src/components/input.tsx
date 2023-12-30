import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";

const inputRaw: ForwardRefRenderFunction<
  HTMLInputElement,
  ComponentProps<"input">
> = ({ children, className = "", ...props }, ref) => {
  return (
    <input
      className={`h-12 w-full px-4 py-3 rounded-xl bg-transparent border border-input text-secondary focus:outline-none focus-within:ring-border ring-1 ring-offset-4 ring-offset-base ring-transparent placeholder:text-secondary ${className}`}
      {...props}
      ref={ref}
    />
  );
};

export const Input = forwardRef(inputRaw);
