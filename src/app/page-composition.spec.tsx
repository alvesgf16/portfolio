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

  it("renders visible experience bullets", () => {
    const { container } = render(<Home />);
    const experience = container.querySelector("#experience");

    for (const entry of resume.experience) {
      for (const bullet of entry.visibleBullets) {
        expect(experience).toHaveTextContent(bullet.text);
      }
    }
  });

  it("renders the selected project with its visible bullets", () => {
    const { container } = render(<Home />);
    const project = container.querySelector("#project");
    const [selectedProject] = resume.projects;

    expect(project).toHaveTextContent(selectedProject.name);

    for (const bullet of selectedProject.visibleBullets) {
      expect(project).toHaveTextContent(bullet.text);
    }
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
