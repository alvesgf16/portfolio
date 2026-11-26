import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { resumeSections, stickyNavAnchors } from "@/content/page-ia";
import { resume } from "@/content/resume";

import Home from "@/app/page";

describe("home page composition", () => {
  it("mounts every resume section id", () => {
    const { container } = render(<Home />);

    for (const section of resumeSections) {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull();
    }
  });

  it("renders the summary lede from resume content", () => {
    const { container } = render(<Home />);

    const lede = container.querySelector("#summary p");

    expect(lede?.textContent).toBe(resume.summary);
  });

  it("renders each sticky nav link with its href and a matching destination", () => {
    const { container } = render(<Home />);
    const nav = within(container).getByRole("navigation", { name: "Page" });

    for (const anchor of stickyNavAnchors) {
      const link = within(nav).getByRole("link", { name: anchor.label });

      expect(link).toHaveAttribute("href", anchor.href);
      expect(container.querySelector(anchor.href)).not.toBeNull();
    }
  });
});
