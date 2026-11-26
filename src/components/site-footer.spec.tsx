import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { contactDestination } from "@/content/page-ia";
import { resume } from "@/content/resume";

import { expectContactLinks } from "@/components/contact-links.harness";
import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("exposes contact destination and full contact links without ticket stubs", () => {
    const { contact } = resume;
    const { container } = render(
      <SiteFooter id={contactDestination.id} contact={contact} />,
    );

    expect(container.querySelector(`#${contactDestination.id}`)).not.toBeNull();
    expectContactLinks(contact);
    expect(container.textContent).not.toMatch(/PORT-\d+/);
  });
});
