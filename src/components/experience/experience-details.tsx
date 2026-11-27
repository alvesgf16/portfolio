import type { ReactNode } from "react";

import { BulletList } from "@/components/shared/bullet-list";
import { ExternalLink } from "@/components/shared/external-link";
import { TechnologyLine } from "@/components/shared/technology-line";

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
      <TechnologyLine technologies={entry.technologies} />
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
