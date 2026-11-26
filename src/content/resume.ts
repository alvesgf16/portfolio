import type { Resume } from "@/types/domain/resume";

export const resume = {
  intro: {
    name: "Gabriel Alves",
    title: "Software Developer",
    location: "Calgary, AB, Canada",
  },
  contact: {
    email: "ga.ferreira.712@gmail.com",
    linkedin: "https://www.linkedin.com/in/alvesferreiragabriel/",
    github: "https://github.com/alvesgf16",
  },
  summary:
    "Results-driven software developer with experience shipping React Native and TypeScript product features in fintech. Skilled in cross-platform mobile development, React web apps, Supabase-backed tooling, and localization and marketing platform integrations. Contributed to a mobile Home experience that supported a 30%+ increase in Savings cross-sell and 33% growth in accounts opened after launch. Also built partner-facing React tooling for a live consumer product with real-time data workflows.",
  experience: [],
  projects: [],
  skillGroups: [],
  education: [],
  additional: [],
} as const satisfies Resume;

type DocumentIntro = {
  name: string;
  title: string;
  location: string;
};

export function documentMetadataFromIntro(intro: DocumentIntro) {
  return {
    title: `${intro.name} · ${intro.title}`,
    description: `${intro.title} based in ${intro.location}.`,
  };
}
