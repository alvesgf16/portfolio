import type { YearMonth } from "@/types/domain/year-month";

const yearMonthPattern = /^(\d{4})-(0[1-9]|1[0-2])$/;

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatMonth(yearMonth: YearMonth) {
  if (!yearMonthPattern.test(yearMonth)) {
    throw new Error(`Invalid year-month "${yearMonth}"; expected YYYY-MM.`);
  }

  return monthFormatter.format(new Date(`${yearMonth}-01T00:00:00Z`));
}
