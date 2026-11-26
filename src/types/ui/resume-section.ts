export type ResumeSection<SectionId extends string = string> = {
  id: SectionId;
  title: string;
  navLabel: string;
};
