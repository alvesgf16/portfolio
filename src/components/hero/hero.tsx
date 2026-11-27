import type { ReactNode } from "react";

import { HeroIntro } from "@/components/hero/hero-intro";
import { ContactLinks } from "@/components/shared/contact-links";
import { InlineLinks } from "@/components/shared/inline-links";

import type { ContactDetails } from "@/types/domain/contact-details";
import type { Intro } from "@/types/domain/intro";

type HeroProps = {
  intro: Intro;
  contact: ContactDetails;
};

export function Hero({ intro, contact }: HeroProps) {
  return (
    <HeroFrame>
      <HeroIntro intro={intro} />
      <InlineLinks className="text-body mt-3">
        <ContactLinks contact={contact} />
      </InlineLinks>
    </HeroFrame>
  );
}

type HeroFrameProps = {
  children: ReactNode;
};

function HeroFrame({ children }: HeroFrameProps) {
  return <header className="pt-10 pb-6">{children}</header>;
}
