import type { Intro } from "@/types/domain/intro";

type HeroIntroProps = {
  intro: Intro;
};

export function HeroIntro({ intro }: HeroIntroProps) {
  return (
    <>
      <h1 className="text-display sm:text-display-lg font-serif leading-tight font-semibold tracking-tight">
        {intro.name}
      </h1>
      <p className="text-title mt-2">{intro.title}</p>
      <p className="text-muted text-small mt-1">{intro.location}</p>
    </>
  );
}
