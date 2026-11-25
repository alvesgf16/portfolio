export const resumeSections = [
  { id: "summary", title: "Summary", navLabel: "Summary" },
  { id: "experience", title: "Experience", navLabel: "Experience" },
  { id: "project", title: "Selected project", navLabel: "Project" },
  { id: "skills", title: "Skills", navLabel: "Skills" },
  { id: "education", title: "Education", navLabel: "Education" },
  { id: "additional", title: "Additional", navLabel: "Additional" },
] as const;

export const contactDestination = {
  id: "contact",
  navLabel: "Contact",
} as const;

export const stickyNavAnchors = [
  ...resumeSections.map((section) => ({
    href: `#${section.id}`,
    label: section.navLabel,
  })),
  {
    href: `#${contactDestination.id}`,
    label: contactDestination.navLabel,
  },
];
