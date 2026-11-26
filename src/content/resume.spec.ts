import { describe, expect, it } from "vitest";

import { resume } from "@/content/resume";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function expectHttpsUrlWithHost(value: string) {
  const url = new URL(value);

  expect(url.protocol).toBe("https:");
  expect(url.hostname).not.toBe("");
}

describe("resume content", () => {
  it("keeps intro fields non-empty", () => {
    expect(resume.intro.name.trim()).not.toBe("");
    expect(resume.intro.title.trim()).not.toBe("");
    expect(resume.intro.location.trim()).not.toBe("");
  });

  it("exposes usable contact links", () => {
    expect(resume.contact.email).toMatch(emailPattern);
    expectHttpsUrlWithHost(resume.contact.linkedin);
    expectHttpsUrlWithHost(resume.contact.github);
  });

  it("provides a non-empty summary", () => {
    expect(resume.summary.trim()).not.toBe("");
  });

  it("provides experience entries with visible bullets and https links", () => {
    for (const entry of resume.experience) {
      expectHttpsUrlWithHost(entry.url);
      expect(entry.visibleBullets.length).toBeGreaterThan(0);
    }
  });

  it("gives every visible bullet an id unique within its entry", () => {
    for (const entry of resume.experience) {
      const ids = entry.visibleBullets.map((bullet) => bullet.id);

      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("reserves empty section payloads for later content", () => {
    expect(resume.projects).toEqual([]);
    expect(resume.skillGroups).toEqual([]);
    expect(resume.education).toEqual([]);
    expect(resume.additional).toEqual([]);
  });
});
