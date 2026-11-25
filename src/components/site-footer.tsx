import { ContactLabel } from "@/components/contact-label";
import { type ContactDetails, ContactLinks } from "@/components/contact-links";
import { FooterFrame } from "@/components/footer-frame";
import { InlineLinks } from "@/components/inline-links";

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
