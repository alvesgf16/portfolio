import { render } from "@testing-library/react";

import { ProjectSpotlight } from "@/components/project/project-spotlight";

import type { ProjectEntry } from "@/types/domain/project-entry";

export const projectFixture: ProjectEntry = {
  id: "globex-portal",
  name: "Globex Partner Portal",
  url: "https://globex.example.com/",
  start: "2024-01",
  end: "2024-12",
  summary: "Built the partner portal used to review account requests.",
  technologies: ["React", "TypeScript"],
  visibleBullets: [
    {
      id: "request-review",
      text: "Shipped the request review workflow used by every partner",
    },
  ],
};

export function renderProjectSpotlight(project: ProjectEntry = projectFixture) {
  const { container } = render(<ProjectSpotlight project={project} />);

  return container;
}
