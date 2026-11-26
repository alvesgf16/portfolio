import { render } from "@testing-library/react";

import { ExperienceTimeline } from "@/components/experience/experience-timeline";

import type { ExperienceEntry } from "@/types/domain/experience-entry";

export const experienceFixture: ExperienceEntry = {
  id: "acme",
  company: "Acme Corp",
  role: "Software Developer",
  url: "https://acme.example.com/",
  location: "Calgary, AB",
  start: "2024-01",
  end: "2024-12",
  technologies: ["React", "TypeScript"],
  visibleBullets: [
    {
      id: "checkout-flow",
      text: "Shipped the checkout flow used by every customer",
    },
  ],
};

export function renderExperienceTimeline(
  entries: readonly ExperienceEntry[] = [experienceFixture],
) {
  const { container } = render(<ExperienceTimeline entries={entries} />);

  return container;
}
