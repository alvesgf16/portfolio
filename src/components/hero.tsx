type HeroIntro = {
  name: string;
  title: string;
  location: string;
};

type HeroContact = {
  email: string;
  linkedin: string;
  github: string;
};

type HeroProps = {
  intro: HeroIntro;
  contact: HeroContact;
};

export function Hero({ intro, contact }: HeroProps) {
  return (
    <header className="pt-10 pb-6">
      <h1 className="font-serif text-[2.5rem] leading-tight font-semibold tracking-tight sm:text-[3.5rem]">
        {intro.name}
      </h1>
      <p className="mt-2 text-[1.125rem]">{intro.title}</p>
      <p className="text-muted mt-1 text-[0.875rem]">{intro.location}</p>
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.9375rem]">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </header>
  );
}
