import { describe, expect, it } from "vitest";

import { formatMonth } from "@/lib/format-month";
import type { YearMonth } from "@/types/domain/year-month";

describe("formatMonth", () => {
  it("formats a year-month as abbreviated month and year", () => {
    expect(formatMonth("2025-10")).toBe("Oct 2025");
  });

  it("rejects an out-of-range month at compile time", () => {
    // @ts-expect-error month 13 is outside the YearMonth type
    const outOfRange: YearMonth = "2026-13";

    expect(() => formatMonth(outOfRange)).toThrow();
  });

  // Malformed values sit outside the YearMonth type on purpose; the runtime guard must still reject them.
  it.each(["2026-13", "2026-00", "2026-1", "26-01", "2026-01-15", "", "Jan"])(
    "rejects the malformed value %j",
    (value) => {
      expect(() => formatMonth(value as YearMonth)).toThrow(
        `Invalid year-month "${value}"; expected YYYY-MM.`,
      );
    },
  );
});
