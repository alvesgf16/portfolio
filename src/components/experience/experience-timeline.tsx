import type { ReactNode } from "react";

import { ExperienceItem } from "@/components/experience/experience-item";

import type { ExperienceEntry } from "@/types/domain/experience-entry";

type ExperienceTimelineProps = {
  entries: readonly ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <TimelineList>
      {entries.map((entry) => (
        <ExperienceItem key={entry.id} entry={entry} />
      ))}
    </TimelineList>
  );
}

type TimelineListProps = {
  children: ReactNode;
};

function TimelineList({ children }: TimelineListProps) {
  return <ol>{children}</ol>;
}
