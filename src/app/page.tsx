import type { ReactNode } from "react";

import {
  contactDestination,
  resumeSections,
  stickyNavAnchors,
} from "@/content/page-ia";
import { resume } from "@/content/resume";

import { SiteFooter } from "@/components/contact/site-footer";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Hero } from "@/components/hero/hero";
import { ResumeMain } from "@/components/layout/resume-main";
import { StickyNav } from "@/components/layout/sticky-nav";
import { ProjectSpotlight } from "@/components/project/project-spotlight";
import { SummaryLede } from "@/components/summary/summary-lede";

type ResumeSectionId = (typeof resumeSections)[number]["id"];

// Every section id needs an entry; `undefined` marks a section still awaiting content.
const sectionContent = {
  summary: <SummaryLede summary={resume.summary} />,
  experience: <ExperienceTimeline entries={resume.experience} />,
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

type PageFrameProps = {
  children: ReactNode;
};

function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="max-w-content px-page-x md:px-page-x-lg mx-auto">
      {children}
    </div>
  );
}
