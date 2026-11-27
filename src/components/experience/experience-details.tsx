import type { ReactNode } from "react";

import { ExternalLink } from "@/components/shared/external-link";

import type { ExperienceBullet } from "@/types/domain/experience-bullet";
import type { ExperienceEntry } from "@/types/domain/experience-entry";

type ExperienceDetailsProps = {
  entry: ExperienceEntry;
};

export function ExperienceDetails({ entry }: ExperienceDetailsProps) {
  return (
    <DetailsColumn>
      <RoleHeading role={entry.role} />
      <CompanyLine
        company={entry.company}
        url={entry.url}
        location={entry.location}
      />
      <TechnologyList technologies={entry.technologies} />
      <BulletList bullets={entry.visibleBullets} />
    </DetailsColumn>
  );
}

type DetailsColumnProps = {
  children: ReactNode;
};

function DetailsColumn({ children }: DetailsColumnProps) {
  return <div>{children}</div>;
}

type RoleHeadingProps = {
  role: string;
};

function RoleHeading({ role }: RoleHeadingProps) {
  return <h3 className="text-lead font-semibold">{role}</h3>;
}

type CompanyLineProps = {
  company: string;
  url: string;
  location: string;
};

function CompanyLine({ company, url, location }: CompanyLineProps) {
  return (
    <CompanyRow>
      <ExternalLink href={url} className="underline">
        {company}
      </ExternalLink>
      {" · "}
      <CompanyLocation location={location} />
    </CompanyRow>
  );
}

type CompanyRowProps = {
  children: ReactNode;
};

function CompanyRow({ children }: CompanyRowProps) {
  return <p className="text-body">{children}</p>;
}

type CompanyLocationProps = {
  location: string;
};

function CompanyLocation({ location }: CompanyLocationProps) {
  return <span className="text-muted">{location}</span>;
}

type TechnologyListProps = {
  technologies: readonly string[];
};

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <p className="text-muted text-small mt-1">{technologies.join(" · ")}</p>
  );
}

type BulletListProps = {
  bullets: readonly ExperienceBullet[];
};

function BulletList({ bullets }: BulletListProps) {
  return (
    <ul className="text-body mt-3 list-disc space-y-1.5 pl-5">
      {bullets.map((bullet) => (
        <li key={bullet.id}>{bullet.text}</li>
      ))}
    </ul>
  );
}
