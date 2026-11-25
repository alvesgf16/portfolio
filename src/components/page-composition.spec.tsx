import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  contactDestination,
  resumeSections,
  stickyNavAnchors,
} from "@/content/page-ia";
import { resume } from "@/content/resume";

import { ResumeMain } from "@/components/resume-main";
import { SiteFooter } from "@/components/site-footer";
import { StickyNav } from "@/components/sticky-nav";

describe("page composition", () => {
  it("mounts every resume section id", () => {
    const { container } = render(<ResumeMain sections={resumeSections} />);

    for (const section of resumeSections) {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull();
    }
  });

  it("resolves every sticky nav href to a destination on the page", () => {
    const { container } = render(
      <>
        <StickyNav anchors={stickyNavAnchors} />
        <ResumeMain sections={resumeSections} />
        <SiteFooter id={contactDestination.id} contact={resume.contact} />
      </>,
    );

    for (const anchor of stickyNavAnchors) {
      const destinationId = anchor.href.slice(1);
      expect(container.querySelector(`#${destinationId}`)).not.toBeNull();
    }
  });
});
