import { ExternalLink } from "@/components/shared/external-link";

import type { ContactDetails } from "@/types/domain/contact-details";

const profileLinkLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
} as const;

type ContactLinksProps = {
  contact: ContactDetails;
};

export function ContactLinks({ contact }: ContactLinksProps) {
  return (
    <>
      <EmailLink email={contact.email} />
      <ExternalLink href={contact.linkedin}>
        {profileLinkLabels.linkedin}
      </ExternalLink>
      <ExternalLink href={contact.github}>
        {profileLinkLabels.github}
      </ExternalLink>
    </>
  );
}

type EmailLinkProps = {
  email: string;
};

function EmailLink({ email }: EmailLinkProps) {
  return <a href={`mailto:${email}`}>{email}</a>;
}
