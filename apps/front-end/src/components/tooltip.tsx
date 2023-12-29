"use client";

import * as CoreTooltip from "@radix-ui/react-tooltip";
import { FC, ReactNode } from "react";

interface WrapperTooltipProps {
  children: ReactNode;
}

interface TriggerTooltipProps {
  children: ReactNode;
}

interface ContentTooltipProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<WrapperTooltipProps> = ({ children }) => {
  return (
    <CoreTooltip.Provider>
      <CoreTooltip.Root>{children}</CoreTooltip.Root>
    </CoreTooltip.Provider>
  );
};

const Trigger: FC<TriggerTooltipProps> = ({ children }) => {
  return <CoreTooltip.Trigger asChild>{children}</CoreTooltip.Trigger>;
};

const Content: FC<ContentTooltipProps> = ({ children, className = "" }) => {
  return (
    <CoreTooltip.Portal>
      <CoreTooltip.Content
        className={`bg-zinc-800 rounded px-2 py-1 ring-1 ring-zinc-600 text-sm ${className}`}
      >
        {children}
        <CoreTooltip.Arrow className="fill-zinc-800" />
      </CoreTooltip.Content>
    </CoreTooltip.Portal>
  );
};

export const Tooltip = {
  Wrapper,
  Trigger,
  Content,
};
