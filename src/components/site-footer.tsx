type SiteFooterContact = {
  email: string;
  linkedin: string;
  github: string;
};

type SiteFooterProps = {
  id: string;
  contact: SiteFooterContact;
};

export function SiteFooter({ id, contact }: SiteFooterProps) {
  return (
    <footer
      id={id}
      className="border-border text-muted mt-(--section-gap) border-t py-6 text-[0.875rem]"
    >
      <p className="flex flex-wrap gap-x-3 gap-y-1">
        <span>Contact</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
