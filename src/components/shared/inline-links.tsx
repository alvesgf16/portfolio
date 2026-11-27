import type { ReactNode } from "react";

type InlineLinksProps = {
  className?: string;
  children: ReactNode;
};

export function InlineLinks({ className = "", children }: InlineLinksProps) {
  return (
    <p className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}>{children}</p>
  );
}
