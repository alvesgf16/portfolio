import type { ReactNode } from "react";

import { SectionBlock } from "@/components/layout/section-block";

import type { ResumeSection } from "@/types/ui/resume-section";

type ResumeMainProps<SectionId extends string> = {
  sections: readonly ResumeSection<SectionId>[];
  sectionContent: Readonly<Record<SectionId, ReactNode>>;
};

export function ResumeMain<SectionId extends string>({
  sections,
  sectionContent,
}: ResumeMainProps<SectionId>) {
  return (
    <PageMain>
      {sections.map((section) => (
        <SectionBlock key={section.id} id={section.id} title={section.title}>
          {sectionContent[section.id]}
        </SectionBlock>
      ))}
    </PageMain>
  );
}

type PageMainProps = {
  children: ReactNode;
};

function PageMain({ children }: PageMainProps) {
  return <main>{children}</main>;
}
