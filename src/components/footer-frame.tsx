import type { ReactNode } from "react";

type FooterFrameProps = {
  id: string;
  children: ReactNode;
};

export function FooterFrame({ id, children }: FooterFrameProps) {
  return (
    <footer
      id={id}
      className="border-border text-muted mt-(--section-gap) border-t py-6 text-[0.875rem]"
    >
      {children}
    </footer>
  );
}
