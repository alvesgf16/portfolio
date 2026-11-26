import type { ReactNode } from "react";

type SectionBlockProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section id={id} className="border-border border-t py-(--section-gap)">
      <h2 className="text-muted mb-3 text-[0.875rem] font-semibold tracking-[0.08em] uppercase">
        {title}
      </h2>
      {children ?? (
        <p className="text-muted text-[0.9375rem]">
          Section foundation placeholder.
        </p>
      )}
    </section>
  );
}
