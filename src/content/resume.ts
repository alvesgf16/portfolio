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
    location: "Calgary, AB, Canada",
  },
  summary: "",
  experience: [],
  projects: [],
  skillGroups: [],
  education: [],
  additional: [],
} as const;

export function documentMetadataFromIntro(intro: typeof resume.intro) {
  return {
    title: `${intro.name} · ${intro.title}`,
    description: `${intro.title} based in ${intro.location}.`,
  };
}
