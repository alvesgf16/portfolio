import type { Intro } from "@/types/domain/intro";

export function documentMetadataFromIntro(intro: Intro) {
  return {
    title: `${intro.name} · ${intro.title}`,
    description: `${intro.title} based in ${intro.location}.`,
  };
}
