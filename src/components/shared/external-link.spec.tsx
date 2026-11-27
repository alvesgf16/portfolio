import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExternalLink } from "@/components/shared/external-link";

function renderLink(className?: string) {
  const { container } = render(
    <ExternalLink href="https://example.com" className={className}>
      Example
    </ExternalLink>,
  );

  return within(container).getByRole("link", { name: "Example" });
}

describe("ExternalLink", () => {
  it("links to the given href", () => {
    expect(renderLink()).toHaveAttribute("href", "https://example.com");
  });

  it("opens in a new tab without leaking the opener", () => {
    const link = renderLink();

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies the given class name", () => {
    expect(renderLink("underline")).toHaveClass("underline");
  });
});
