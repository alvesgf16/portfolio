import { describe, expect, it } from "vitest";

import { formatMonth } from "@/lib/format-month";
import type { YearMonth } from "@/types/domain/year-month";

describe("formatMonth", () => {
  it("formats a year-month as abbreviated month and year", () => {
    expect(formatMonth("2025-10")).toEqual({
      status: "formatted",
      text: "Oct 2025",
    });
  });

  it("returns an invalid outcome for a month typed as YearMonth but out of range", () => {
    // @ts-expect-error month 13 is outside the YearMonth type
    const outOfRange: YearMonth = "2026-13";

    expect(formatMonth(outOfRange)).toEqual({
      status: "invalid",
      value: "2026-13",
    });
  });

  // Malformed values and years outside 2000-2199 sit outside the YearMonth type on purpose.
  it.each([
    "2026-00",
    "2026-1",
    "26-01",
    "1-01",
    "1999-01",
    "2200-01",
    "2026-01-15",
    "",
    "Jan",
  ])("returns an invalid outcome for %j", (value) => {
    expect(formatMonth(value)).toEqual({ status: "invalid", value });
  });
});
