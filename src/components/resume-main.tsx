import type { ReactNode } from "react";

import { PageMain } from "@/components/page-main";
import { SectionBlock } from "@/components/section-block";

type ResumeSection = {
  id: string;
  title: string;
};

type ResumeMainProps = {
  sections: readonly ResumeSection[];
  sectionContent: Readonly<Record<string, ReactNode>>;
};

export function ResumeMain({ sections, sectionContent }: ResumeMainProps) {
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
