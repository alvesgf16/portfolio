const yearMonthPattern = /^(20|21)\d{2}-(0[1-9]|1[0-2])$/;

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

type MonthLabel =
  { status: "formatted"; text: string } | { status: "invalid"; value: string };

export function formatMonth(yearMonth: string): MonthLabel {
  if (!yearMonthPattern.test(yearMonth)) {
    return { status: "invalid", value: yearMonth };
  }

  return {
    status: "formatted",
    text: monthFormatter.format(new Date(`${yearMonth}-01T00:00:00Z`)),
  };
}
