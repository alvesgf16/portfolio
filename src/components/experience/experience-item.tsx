import type { ReactNode } from "react";

import { ExperienceDateRail } from "@/components/experience/experience-date-rail";
import { ExperienceDetails } from "@/components/experience/experience-details";

import type { ExperienceEntry } from "@/types/domain/experience-entry";

type ExperienceItemProps = {
  entry: ExperienceEntry;
};

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <TimelineRow>
      <ExperienceDateRail start={entry.start} end={entry.end} />
      <ExperienceDetails entry={entry} />
    </TimelineRow>
  );
}

type TimelineRowProps = {
  children: ReactNode;
};

function TimelineRow({ children }: TimelineRowProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-5 pb-8 last:pb-0">
      {children}
    </li>
  );
}
