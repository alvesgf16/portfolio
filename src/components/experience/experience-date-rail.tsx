import { formatMonth } from "@/lib/format-month";

import type { YearMonth } from "@/types/domain/year-month";

type ExperienceDateRailProps = {
  start: YearMonth;
  end: YearMonth | null;
};

export function ExperienceDateRail({ start, end }: ExperienceDateRailProps) {
  return (
    <div className="border-border text-muted text-small before:bg-foreground relative border-l pl-4 before:absolute before:top-1.5 before:-left-1.25 before:size-2.5 before:rounded-full before:content-['']">
      <p className="whitespace-nowrap">
        <time dateTime={start}>{monthText(start)}</time>
        {" – "}
        {end === null ? (
          "Present"
        ) : (
          <time dateTime={end}>{monthText(end)}</time>
        )}
      </p>
    </div>
  );
}

function monthText(yearMonth: string) {
  const label = formatMonth(yearMonth);

  return label.status === "formatted" ? label.text : label.value;
}
