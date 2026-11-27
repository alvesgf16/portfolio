import { within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  projectFixture,
  renderProjectSpotlight,
} from "@/components/project/project-spotlight.harness";

describe("ProjectSpotlight", () => {
  it("renders the project name as a heading", () => {
    const container = renderProjectSpotlight();

    expect(
      within(container).getByRole("heading", { name: projectFixture.name }),
    ).toBeInTheDocument();
  });

  it("renders start and end months", () => {
    const container = renderProjectSpotlight();

    expect(
      container.querySelector('time[datetime="2024-01"]'),
    ).toHaveTextContent("Jan 2024");
    expect(
      container.querySelector('time[datetime="2024-12"]'),
    ).toHaveTextContent("Dec 2024");
  });

  it("renders the one-line summary", () => {
    const container = renderProjectSpotlight();

    expect(
      within(container).getByText(projectFixture.summary),
    ).toBeInTheDocument();
  });

  it("links the project URL", () => {
    const container = renderProjectSpotlight();

    expect(
      within(container).getByRole("link", { name: projectFixture.url }),
    ).toHaveAttribute("href", projectFixture.url);
  });

  it("opens the project link in a new tab", () => {
    const container = renderProjectSpotlight();

    expect(
      within(container).getByRole("link", { name: projectFixture.url }),
    ).toHaveAttribute("target", "_blank");
  });

  it("renders technologies as one tech line", () => {
    const container = renderProjectSpotlight();

    expect(
      within(container).getByText("React · TypeScript"),
    ).toBeInTheDocument();
  });

  it("renders each visible bullet", () => {
    const container = renderProjectSpotlight();

    for (const bullet of projectFixture.visibleBullets) {
      expect(within(container).getByText(bullet.text)).toBeInTheDocument();
    }
  });

  it("renders no interactive expand control", () => {
    const container = renderProjectSpotlight();

    expect(within(container).queryByRole("button")).toBeNull();
  });
});
