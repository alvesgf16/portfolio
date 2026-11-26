import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/components/hero/hero";
import { introFixture } from "@/components/hero/hero.harness";
import {
  contactFixture,
  expectContactLinks,
} from "@/components/shared/contact-links.harness";

describe("Hero", () => {
  it("renders intro and contact from props", () => {
    render(<Hero intro={introFixture} contact={contactFixture} />);

    expect(
      screen.getByRole("heading", { name: introFixture.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(introFixture.title)).toBeInTheDocument();
    expect(screen.getByText(introFixture.location)).toBeInTheDocument();
    expectContactLinks(contactFixture);
  });
});
