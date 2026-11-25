import {
  contactDestination,
  resumeSections,
  stickyNavAnchors,
} from "@/content/page-ia";
import { resume } from "@/content/resume";

import { Hero } from "@/components/hero";
import { PageFrame } from "@/components/page-frame";
import { ResumeMain } from "@/components/resume-main";
import { SiteFooter } from "@/components/site-footer";
import { StickyNav } from "@/components/sticky-nav";

export default function Home() {
  return (
    <PageFrame>
      <StickyNav anchors={stickyNavAnchors} />
      <Hero intro={resume.intro} contact={resume.contact} />
      <ResumeMain sections={resumeSections} />
      <SiteFooter id={contactDestination.id} contact={resume.contact} />
    </PageFrame>
  );
}
