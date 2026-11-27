import { screen } from "@testing-library/react";
import { expect } from "vitest";

import type { ContactDetails } from "@/types/domain/contact-details";

export const contactFixture: ContactDetails = {
  email: "ada@example.com",
  linkedin: "https://www.linkedin.com/in/ada/",
  github: "https://github.com/ada",
};

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
