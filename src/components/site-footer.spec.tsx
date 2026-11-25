import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { contactDestination } from "@/content/page-ia";
import { resume } from "@/content/resume";

import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("exposes contact destination and full contact links without ticket stubs", () => {
    const { contact } = resume;
    const { container } = render(
      <SiteFooter id={contactDestination.id} contact={contact} />,
    );

    expect(container.querySelector(`#${contactDestination.id}`)).not.toBeNull();
    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute(
      "href",
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      contact.linkedin,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      contact.github,
    );
    expect(container.textContent).not.toMatch(/PORT-\d+/);
  });
});
