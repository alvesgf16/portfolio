import type { ReactNode } from "react";

import { ContactLinks } from "@/components/shared/contact-links";
import { InlineLinks } from "@/components/shared/inline-links";

import type { ContactDetails } from "@/types/domain/contact-details";

type SiteFooterProps = {
  id: string;
  contact: ContactDetails;
};

export function SiteFooter({ id, contact }: SiteFooterProps) {
  return (
    <FooterFrame id={id}>
      <InlineLinks>
        <ContactLabel />
        <ContactLinks contact={contact} />
      </InlineLinks>
    </FooterFrame>
  );
}

type FooterFrameProps = {
  id: string;
  children: ReactNode;
};

function FooterFrame({ id, children }: FooterFrameProps) {
  return (
    <footer
      id={id}
      className="border-border text-muted text-small mt-section border-t py-6"
    >
      {children}
    </footer>
  );
}

function ContactLabel() {
  return <span>Contact</span>;
}
