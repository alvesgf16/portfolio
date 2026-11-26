import type { ReactNode } from "react";

import {
  contactDestination,
  resumeSections,
  stickyNavAnchors,
} from "@/content/page-ia";
import { resume } from "@/content/resume";

import { SiteFooter } from "@/components/contact/site-footer";
import { Hero } from "@/components/hero/hero";
import { PageFrame } from "@/components/page-frame";
import { ProjectSpotlight } from "@/components/project/project-spotlight";
import { ResumeMain } from "@/components/resume-main";
import { StickyNav } from "@/components/sticky-nav";
import { SummaryLede } from "@/components/summary/summary-lede";

type ResumeSectionId = (typeof resumeSections)[number]["id"];

// Every section id needs an entry; `undefined` marks a section still awaiting content.
const sectionContent = {
  summary: <SummaryLede summary={resume.summary} />,
  experience: undefined,
  project: <ProjectSpotlight />,
  skills: undefined,
  education: undefined,
  additional: undefined,
} satisfies Record<ResumeSectionId, ReactNode>;

export default function Home() {
  return (
    <PageFrame>
      <StickyNav anchors={stickyNavAnchors} />
      <Hero intro={resume.intro} contact={resume.contact} />
      <ResumeMain sections={resumeSections} sectionContent={sectionContent} />
      <SiteFooter id={contactDestination.id} contact={resume.contact} />
    </PageFrame>
  );
}
