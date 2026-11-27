import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/contact/site-footer";
import {
  contactFixture,
  expectContactLinks,
} from "@/components/shared/contact-links.harness";

const footerId = "contact";

describe("SiteFooter", () => {
  it("exposes contact destination and full contact links without ticket stubs", () => {
    const { container } = render(
      <SiteFooter id={footerId} contact={contactFixture} />,
    );

    expect(container.querySelector(`#${footerId}`)).not.toBeNull();
    expectContactLinks(contactFixture);
    expect(container.textContent).not.toMatch(/PORT-\d+/);
  });
});
