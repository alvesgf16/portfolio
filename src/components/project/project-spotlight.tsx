import type { ReactNode } from "react";

import { BulletList } from "@/components/shared/bullet-list";
import { DateRange } from "@/components/shared/date-range";
import { ExternalLink } from "@/components/shared/external-link";
import { TechnologyLine } from "@/components/shared/technology-line";

import type { ProjectEntry } from "@/types/domain/project-entry";

type ProjectSpotlightProps = {
  project: ProjectEntry;
};

export function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  return (
    <SpotlightPanel>
      <ProjectHeading name={project.name} />
      <DateRange
        start={project.start}
        end={project.end}
        className="text-muted text-small"
      />
      <ProjectSummary summary={project.summary} />
      <ProjectLink url={project.url} />
      <TechnologyLine technologies={project.technologies} />
      <BulletList bullets={project.visibleBullets} />
    </SpotlightPanel>
  );
}

type SpotlightPanelProps = {
  children: ReactNode;
};

function SpotlightPanel({ children }: SpotlightPanelProps) {
  return (
    <div className="bg-spotlight border-border rounded-none border p-4">
      {children}
    </div>
  );
}

type ProjectHeadingProps = {
  name: string;
};

function ProjectHeading({ name }: ProjectHeadingProps) {
  return <h3 className="text-lead font-semibold">{name}</h3>;
}

type ProjectSummaryProps = {
  summary: string;
};

function ProjectSummary({ summary }: ProjectSummaryProps) {
  return <p className="text-body mt-2">{summary}</p>;
}

type ProjectLinkProps = {
  url: string;
};

function ProjectLink({ url }: ProjectLinkProps) {
  return (
    <ExternalLink href={url} className="text-small mt-1 block underline">
      {url}
    </ExternalLink>
  );
}
