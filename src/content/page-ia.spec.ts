import { describe, expect, it } from "vitest";

import {
  contactDestination,
  resumeSections,
  stickyNavAnchorsFor,
  visibleResumeSections,
} from "@/content/page-ia";
import { resume } from "@/content/resume";

describe("page IA", () => {
  it("includes every resume section in the sticky nav", () => {
    const hrefs = stickyNavAnchorsFor(resumeSections).map(
      (anchor) => anchor.href,
    );

    for (const section of resumeSections) {
      expect(hrefs).toContain(`#${section.id}`);
    }
  });

  it("ends with the contact destination after resume sections", () => {
    const lastAnchor = stickyNavAnchorsFor(resumeSections).at(-1);

    expect(lastAnchor).toEqual({
      href: `#${contactDestination.id}`,
      label: contactDestination.navLabel,
    });
  });

  it("keeps nav labels aligned with section titles except project", () => {
    const alignedSections = resumeSections.filter(
      (section) => section.id !== "project",
    );

    for (const section of alignedSections) {
      expect(section.navLabel).toBe(section.title);
    }
    expect(
      resumeSections.find((section) => section.id === "project"),
    ).toMatchObject({
      navLabel: "Project",
      title: "Selected project",
    });
  });

  it("keeps every section when a project is selected", () => {
    const [selectedProject] = resume.projects;

    expect(visibleResumeSections(selectedProject)).toEqual(resumeSections);
  });

  it("drops the project section and its nav link without a selected project", () => {
    const sections = visibleResumeSections(undefined);
    const hrefs = stickyNavAnchorsFor(sections).map((anchor) => anchor.href);

    expect(sections.map((section) => section.id)).not.toContain("project");
    expect(hrefs).not.toContain("#project");
  });
});
