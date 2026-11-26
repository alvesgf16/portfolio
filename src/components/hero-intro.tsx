export type HeroIntroContent = {
  name: string;
  title: string;
  location: string;
};

type HeroIntroProps = {
  intro: HeroIntroContent;
};

export function HeroIntro({ intro }: HeroIntroProps) {
  return (
    <>
      <h1 className="font-serif text-[2.5rem] leading-tight font-semibold tracking-tight sm:text-[3.5rem]">
        {intro.name}
      </h1>
      <p className="mt-2 text-[1.125rem]">{intro.title}</p>
      <p className="text-muted mt-1 text-[0.875rem]">{intro.location}</p>
    </>
  );
}
