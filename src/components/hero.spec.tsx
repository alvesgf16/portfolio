import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { resume } from "@/content/resume";

import { Hero } from "@/components/hero";

describe("Hero", () => {
  it("renders intro and contact from props", () => {
    const { intro, contact } = resume;

    render(<Hero intro={intro} contact={contact} />);

    expect(
      screen.getByRole("heading", { name: intro.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(intro.title)).toBeInTheDocument();
    expect(screen.getByText(intro.location)).toBeInTheDocument();
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
  });
});
