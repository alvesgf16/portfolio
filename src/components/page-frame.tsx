import type { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="mx-auto max-w-content px-(--page-padding-x) md:px-(--page-padding-x-lg)">
      {children}
    </div>
  );
}
