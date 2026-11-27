import { describe, expect, it } from "vitest";

import { resume } from "@/content/resume";

import { formatMonth } from "@/lib/format-month";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function expectHttpsUrlWithHost(value: string) {
  const url = new URL(value);

  expect(url.protocol).toBe("https:");
  expect(url.hostname).not.toBe("");
}

const datedEntries = [...resume.experience, ...resume.projects];

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

  it("formats every experience and project date as year-month", () => {
    for (const entry of datedEntries) {
      const dates = [entry.start, entry.end].filter((date) => date !== null);

      for (const date of dates) {
        expect(formatMonth(date).status).toBe("formatted");
      }
    }
  });

  it("ends every experience and project entry on or after its start", () => {
    for (const entry of datedEntries) {
      const end = entry.end ?? entry.start;

      expect(end >= entry.start).toBe(true);
    }
  });

  it("provides a non-empty summary", () => {
    expect(resume.summary.trim()).not.toBe("");
  });

  it("includes at least one experience entry", () => {
    expect(resume.experience.length).toBeGreaterThan(0);
  });

  it("provides experience and project entries with visible bullets and https links", () => {
    for (const entry of datedEntries) {
      expectHttpsUrlWithHost(entry.url);
      expect(entry.visibleBullets.length).toBeGreaterThan(0);
    }
  });

  it("gives every visible bullet an id unique within its entry", () => {
    for (const entry of datedEntries) {
      const ids = entry.visibleBullets.map((bullet) => bullet.id);

      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("reserves empty section payloads for later content", () => {
    expect(resume.skillGroups).toEqual([]);
    expect(resume.education).toEqual([]);
    expect(resume.additional).toEqual([]);
  });
});
