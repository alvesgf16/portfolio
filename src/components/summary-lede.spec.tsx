import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SummaryLede } from "@/components/summary-lede";

const summaryText =
  "Results-driven software developer shipping product features.";

describe("SummaryLede", () => {
  it("renders the summary text from props", () => {
    const { container } = render(<SummaryLede summary={summaryText} />);

    expect(within(container).getByText(summaryText)).toBeInTheDocument();
  });

  it("renders the summary as a static paragraph", () => {
    const { container } = render(<SummaryLede summary={summaryText} />);

    expect(within(container).getByText(summaryText).tagName).toBe("P");
  });

  it("applies no motion classes", () => {
    const { container } = render(<SummaryLede summary={summaryText} />);

    const { className } = within(container).getByText(summaryText);

    expect(className).not.toMatch(/\b(transition|animate)/);
  });
});
