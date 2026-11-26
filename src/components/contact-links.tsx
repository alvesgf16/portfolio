export type ContactDetails = {
  email: string;
  linkedin: string;
  github: string;
};

type ContactLinksProps = {
  contact: ContactDetails;
};

export function ContactLinks({ contact }: ContactLinksProps) {
  return (
    <>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={contact.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </>
  );
}
