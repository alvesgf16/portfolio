import { render, within } from "@testing-library/react";

import { SummaryLede } from "@/components/summary-lede";

export const summaryFixture =
  "Results-driven software developer shipping product features.";

export function renderSummaryLede(summary: string = summaryFixture) {
  const { container } = render(<SummaryLede summary={summary} />);

  return within(container).getByText(summary);
}
