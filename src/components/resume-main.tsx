import type { ReactNode } from "react";

import { PageMain } from "@/components/page-main";
import { ProjectSpotlight } from "@/components/project-spotlight";
import { SectionBlock } from "@/components/section-block";
import { SummaryLede } from "@/components/summary-lede";

type ResumeSection = {
  id: string;
  title: string;
};

type ResumeMainProps = {
  sections: readonly ResumeSection[];
};

const sectionChildren: Record<string, ReactNode> = {
  summary: <SummaryLede />,
  project: <ProjectSpotlight />,
};

export function ResumeMain({ sections }: ResumeMainProps) {
  return (
    <PageMain>
      {sections.map((section) => (
        <SectionBlock key={section.id} id={section.id} title={section.title}>
          {sectionChildren[section.id]}
        </SectionBlock>
      ))}
    </PageMain>
  );
}
