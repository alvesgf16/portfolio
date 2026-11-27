import { within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  experienceFixture,
  renderExperienceTimeline,
} from "@/components/experience/experience-timeline.harness";

describe("ExperienceTimeline", () => {
  it("renders one timeline item per entry", () => {
    const container = renderExperienceTimeline([
      experienceFixture,
      { ...experienceFixture, id: "globex", company: "Globex" },
    ]);

    expect(container.querySelectorAll("ol > li")).toHaveLength(2);
  });

  it("renders no items for an empty payload", () => {
    const container = renderExperienceTimeline([]);

    expect(container.querySelectorAll("li")).toHaveLength(0);
  });

  it("renders the role and location", () => {
    const container = renderExperienceTimeline();

    expect(
      within(container).getByRole("heading", {
        name: experienceFixture.role,
      }),
    ).toBeInTheDocument();
    expect(
      within(container).getByText(experienceFixture.location),
    ).toBeInTheDocument();
  });

  it("links the company to its URL", () => {
    const container = renderExperienceTimeline();

    expect(
      within(container).getByRole("link", { name: experienceFixture.company }),
    ).toHaveAttribute("href", experienceFixture.url);
  });

  it("opens the company link in a new tab", () => {
    const container = renderExperienceTimeline();

    expect(
      within(container).getByRole("link", { name: experienceFixture.company }),
    ).toHaveAttribute("target", "_blank");
  });

  it("renders start and end months in the date rail", () => {
    const container = renderExperienceTimeline();

    expect(
      container.querySelector('time[datetime="2024-01"]'),
    ).toHaveTextContent("Jan 2024");
    expect(
      container.querySelector('time[datetime="2024-12"]'),
    ).toHaveTextContent("Dec 2024");
  });

  it("renders the newest role first", () => {
    const container = renderExperienceTimeline([
      experienceFixture,
      {
        ...experienceFixture,
        id: "initech",
        company: "Initech",
        start: "2025-06",
        end: null,
      },
    ]);
    const datetimes = [...container.querySelectorAll("time[datetime]")].map(
      (time) => time.getAttribute("datetime"),
    );

    expect(datetimes).toEqual(["2025-06", "2024-01", "2024-12"]);
  });

  it("renders Present for an ongoing role", () => {
    const container = renderExperienceTimeline([
      { ...experienceFixture, end: null },
    ]);

    expect(within(container).getByText(/Present/)).toBeInTheDocument();
    expect(container.querySelectorAll("time")).toHaveLength(1);
  });

  it("renders technologies as one tech line", () => {
    const container = renderExperienceTimeline();

    expect(
      within(container).getByText("React · TypeScript"),
    ).toBeInTheDocument();
  });

  it("renders each visible bullet", () => {
    const container = renderExperienceTimeline();

    for (const bullet of experienceFixture.visibleBullets) {
      expect(within(container).getByText(bullet.text)).toBeInTheDocument();
    }
  });
});
