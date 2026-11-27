import type { ExperienceBullet } from "@/types/domain/experience-bullet";
import type { YearMonth } from "@/types/domain/year-month";

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  url: string;
  location: string;
  start: YearMonth;
  /** `null` marks a role that is still ongoing. */
  end: YearMonth | null;
  technologies: readonly string[];
  visibleBullets: readonly ExperienceBullet[];
};
