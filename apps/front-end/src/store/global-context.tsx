"use client";

import { queryClient } from "@/utils/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper: FC<GlobalWrapperProps> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster />
    </>
  );
};
