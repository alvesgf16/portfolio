import type { ReactNode } from "react";

import { ExperienceItem } from "@/components/experience/experience-item";

import type { ExperienceEntry } from "@/types/domain/experience-entry";

type ExperienceTimelineProps = {
  entries: readonly ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <TimelineList>
      {newestFirst(entries).map((entry) => (
        <ExperienceItem key={entry.id} entry={entry} />
      ))}
    </TimelineList>
  );
}

function newestFirst(entries: readonly ExperienceEntry[]) {
  return [...entries].sort((earlier, later) =>
    later.start.localeCompare(earlier.start),
  );
}

type TimelineListProps = {
  children: ReactNode;
};

function TimelineList({ children }: TimelineListProps) {
  return <ol>{children}</ol>;
}
