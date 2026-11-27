import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionBlock } from "@/components/layout/section-block";

describe("SectionBlock", () => {
  it("renders children when provided", () => {
    render(
      <SectionBlock id="summary" title="Summary">
        <p>Summary body</p>
      </SectionBlock>,
    );

    expect(screen.getByText("Summary body")).toBeInTheDocument();
    expect(
      screen.queryByText("Section foundation placeholder."),
    ).not.toBeInTheDocument();
  });

  it("shows the empty-state placeholder without children", () => {
    render(<SectionBlock id="skills" title="Skills" />);

    expect(
      screen.getByText("Section foundation placeholder."),
    ).toBeInTheDocument();
  });
});
