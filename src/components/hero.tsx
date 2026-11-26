import { type ContactDetails, ContactLinks } from "@/components/contact-links";
import { HeroFrame } from "@/components/hero-frame";
import { HeroIntro, type HeroIntroContent } from "@/components/hero-intro";
import { InlineLinks } from "@/components/inline-links";

type HeroProps = {
  intro: HeroIntroContent;
  contact: ContactDetails;
};

export function Hero({ intro, contact }: HeroProps) {
  return (
    <HeroFrame>
      <HeroIntro intro={intro} />
      <InlineLinks className="mt-3 text-[0.9375rem]">
        <ContactLinks contact={contact} />
      </InlineLinks>
    </HeroFrame>
  );
}
