import { screen } from "@testing-library/react";
import { expect } from "vitest";

import type { ContactDetails } from "@/components/contact-links";

export function expectContactLinks(contact: ContactDetails) {
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
}
