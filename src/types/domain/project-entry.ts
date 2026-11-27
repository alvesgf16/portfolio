import type { ExperienceBullet } from "@/types/domain/experience-bullet";
import type { YearMonth } from "@/types/domain/year-month";

export type ProjectEntry = {
  id: string;
  name: string;
  url: string;
  start: YearMonth;
  /** `null` marks a project that is still ongoing. */
  end: YearMonth | null;
  summary: string;
  technologies: readonly string[];
  visibleBullets: readonly ExperienceBullet[];
};
