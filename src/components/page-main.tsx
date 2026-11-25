import type { ReactNode } from "react";

type PageMainProps = {
  children: ReactNode;
};

export function PageMain({ children }: PageMainProps) {
  return <main>{children}</main>;
}
