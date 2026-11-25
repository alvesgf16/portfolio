import { describe, expect, it } from "vitest";

import {
  contactDestination,
  resumeSections,
  stickyNavAnchors,
} from "@/content/page-ia";

describe("page IA", () => {
  it("includes every resume section in the sticky nav", () => {
    const hrefs = stickyNavAnchors.map((anchor) => anchor.href);

    for (const section of resumeSections) {
      expect(hrefs).toContain(`#${section.id}`);
    }
  });

  it("ends with the contact destination after resume sections", () => {
    const lastAnchor = stickyNavAnchors.at(-1);

    expect(lastAnchor).toEqual({
      href: `#${contactDestination.id}`,
      label: contactDestination.navLabel,
    });
  });

  it("keeps nav labels aligned with section titles except project", () => {
    for (const section of resumeSections) {
      if (section.id === "project") {
        expect(section.navLabel).toBe("Project");
        expect(section.title).toBe("Selected project");
        continue;
      }

      expect(section.navLabel).toBe(section.title);
    }
  });
});
