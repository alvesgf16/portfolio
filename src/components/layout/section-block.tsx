import type { ReactNode } from "react";

type SectionBlockProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section id={id} className="border-border py-section border-t">
      <h2 className="text-muted text-small tracking-heading mb-3 font-semibold uppercase">
        {title}
      </h2>
      {children ?? (
        <p className="text-muted text-body">Section foundation placeholder.</p>
      )}
    </section>
  );
}
