import type { ProjectEntry } from "@/types/domain/project-entry";
import type { ResumeSection } from "@/types/ui/resume-section";
import type { StickyNavAnchor } from "@/types/ui/sticky-nav-anchor";

export const resumeSections = [
  { id: "summary", title: "Summary", navLabel: "Summary" },
  { id: "experience", title: "Experience", navLabel: "Experience" },
  { id: "project", title: "Selected project", navLabel: "Project" },
  { id: "skills", title: "Skills", navLabel: "Skills" },
  { id: "education", title: "Education", navLabel: "Education" },
  { id: "additional", title: "Additional", navLabel: "Additional" },
] as const satisfies readonly ResumeSection[];

type ResumeSectionId = (typeof resumeSections)[number]["id"];

export const contactDestination = {
  id: "contact",
  navLabel: "Contact",
} as const;

export function visibleResumeSections(
  selectedProject: ProjectEntry | undefined,
): readonly ResumeSection<ResumeSectionId>[] {
  if (selectedProject === undefined) {
    return resumeSections.filter((section) => section.id !== "project");
  }

  return resumeSections;
}

export function stickyNavAnchorsFor(
  sections: readonly ResumeSection<ResumeSectionId>[],
): readonly StickyNavAnchor[] {
  return [
    ...sections.map((section) => ({
      href: `#${section.id}`,
      label: section.navLabel,
    })),
    {
      href: `#${contactDestination.id}`,
      label: contactDestination.navLabel,
    },
  ];
}
