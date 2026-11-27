import { formatMonth } from "@/lib/format-month";

import type { YearMonth } from "@/types/domain/year-month";

type DateRangeProps = {
  start: YearMonth;
  end: YearMonth | null;
  className?: string;
};

export function DateRange({ start, end, className }: DateRangeProps) {
  return (
    <p className={className}>
      <time dateTime={start}>{monthText(start)}</time>
      {" – "}
      {end === null ? "Present" : <time dateTime={end}>{monthText(end)}</time>}
    </p>
  );
}

function monthText(yearMonth: string) {
  const label = formatMonth(yearMonth);

  return label.status === "formatted" ? label.text : label.value;
}
