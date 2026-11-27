import type { ContactDetails } from "@/types/domain/contact-details";
import type { ExperienceEntry } from "@/types/domain/experience-entry";
import type { Intro } from "@/types/domain/intro";
import type { ProjectEntry } from "@/types/domain/project-entry";
import type { YearMonth } from "@/types/domain/year-month";

type SkillGroup = {
  label: string;
  skills: readonly string[];
};

type EducationEntry = {
  institution: string;
  credential: string;
  end: YearMonth | null;
};

type AdditionalEntry = {
  label: string;
  detail: string;
};

export type Resume = {
  intro: Intro;
  contact: ContactDetails;
  summary: string;
  experience: readonly ExperienceEntry[];
  projects: readonly ProjectEntry[];
  skillGroups: readonly SkillGroup[];
  education: readonly EducationEntry[];
  additional: readonly AdditionalEntry[];
};
