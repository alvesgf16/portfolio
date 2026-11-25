import { describe, expect, it } from "vitest";

import { documentMetadataFromIntro, resume } from "@/content/resume";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const httpsUrlPattern = /^https:\/\//;

describe("resume content", () => {
  it("keeps intro fields non-empty", () => {
    expect(resume.intro.name.trim()).not.toBe("");
    expect(resume.intro.title.trim()).not.toBe("");
    expect(resume.intro.location.trim()).not.toBe("");
  });

  it("exposes usable contact links", () => {
    expect(resume.contact.email).toMatch(emailPattern);
    expect(resume.contact.linkedin).toMatch(httpsUrlPattern);
    expect(resume.contact.github).toMatch(httpsUrlPattern);
  });

  it("reserves empty section payloads for later content", () => {
    expect(resume.summary).toBe("");
    expect(resume.experience).toEqual([]);
    expect(resume.projects).toEqual([]);
    expect(resume.skillGroups).toEqual([]);
    expect(resume.education).toEqual([]);
    expect(resume.additional).toEqual([]);
  });

  it("builds document title and description from intro", () => {
    expect(documentMetadataFromIntro(resume.intro)).toEqual({
      title: `${resume.intro.name} · ${resume.intro.title}`,
      description: `${resume.intro.title} based in ${resume.intro.location}.`,
    });
  });
});
