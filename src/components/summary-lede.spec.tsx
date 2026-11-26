import { describe, expect, it } from "vitest";

import {
  renderSummaryLede,
  summaryFixture,
} from "@/components/summary-lede.harness";

describe("SummaryLede", () => {
  it("renders the summary text from props", () => {
    const paragraph = renderSummaryLede(summaryFixture);

    expect(paragraph.textContent).toBe(summaryFixture);
  });

  it("renders the summary as a static paragraph", () => {
    const paragraph = renderSummaryLede();

    expect(paragraph.tagName).toBe("P");
  });

  it("applies no motion classes", () => {
    const paragraph = renderSummaryLede();

    expect(paragraph.className).not.toMatch(/\b(transition|animate)/);
  });
});
