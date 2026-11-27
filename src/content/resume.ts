import type { Resume } from "@/types/domain/resume";

export const resume: Resume = {
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
  experience: [
    {
      id: "neo",
      company: "Neo Financial",
      role: "Software Developer",
      url: "https://www.neofinancial.com/",
      location: "Calgary, AB",
      start: "2025-10",
      end: "2026-09",
      technologies: [
        "React Native",
        "React",
        "TypeScript",
        "JavaScript",
        "Crowdin",
        "CMS integrations",
        "Cursor",
        "Claude",
      ],
      visibleBullets: [
        {
          id: "neo-home-experience",
          text: "Contributed to Neo’s new app Home experience using React Native, helping drive a 30%+ increase in Neo Savings cross-sell and 33% growth in accounts opened following launch",
        },
        {
          id: "neo-profile-experience",
          text: "Developed the new Profile experience across Web, iOS, and Android using React Native, helping establish a more unified cross-platform architecture",
        },
        {
          id: "neo-marketing-integrations",
          text: "Assisted with integrating third-party platforms supporting marketing campaigns and business intelligence, contributing to targeted customer communications and product behaviour measurement that helped grow Neo’s active user base by 20%",
        },
      ],
    },
  ],
  projects: [
    {
      id: "scuba",
      name: "Scuba SEAsons",
      url: "https://www.scubaseasons.com/",
      start: "2025-01",
      end: "2025-10",
      summary:
        "Contributed to Scuba SEAsons product tooling, including a partner account request management experience for evaluating and processing partner requests against live data.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "Material UI",
        "CSS preprocessors",
      ],
      visibleBullets: [
        {
          id: "scuba-request-management",
          text: "Built a partner account request management system with React and TypeScript, integrating real-time Supabase data into an interactive list, map-based details view, and embedded evaluation form to streamline partner review workflows",
        },
        {
          id: "scuba-responsive-ui",
          text: "Designed responsive interfaces with Material UI and CSS preprocessors for consistent layouts and themes across devices and browsers",
        },
        {
          id: "scuba-form-tooltips",
          text: "Improved request-form usability with contextual tooltip guidance on field requirements to reduce submission errors",
        },
      ],
    },
  ],
  selectedProjectId: "scuba",
  skillGroups: [],
  education: [],
  additional: [],
};
