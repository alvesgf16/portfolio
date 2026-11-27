import type { ReactNode } from "react";

import { DateRange } from "@/components/shared/date-range";

import type { YearMonth } from "@/types/domain/year-month";

type ExperienceDateRailProps = {
  start: YearMonth;
  end: YearMonth | null;
};

export function ExperienceDateRail({ start, end }: ExperienceDateRailProps) {
  return (
    <RailFrame>
      <DateRange start={start} end={end} className="whitespace-nowrap" />
    </RailFrame>
  );
}

type RailFrameProps = {
  children: ReactNode;
};

function RailFrame({ children }: RailFrameProps) {
  return (
    <div className="border-border text-muted text-small before:bg-foreground relative border-l pl-4 before:absolute before:top-1.5 before:-left-1.25 before:size-2.5 before:rounded-full before:content-['']">
      {children}
    </div>
  );
}
