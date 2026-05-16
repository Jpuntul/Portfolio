import { describe, expect, it } from "vitest";
import { personalInfo, projects, skills } from "./portfolio";

describe("personalInfo", () => {
  it("has every required field", () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.title).toBeTruthy();
    expect(personalInfo.headline).toBeTruthy();
    expect(personalInfo.availability).toBeTruthy();
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(personalInfo.github).toMatch(/^https:\/\/github\.com\//);
    expect(personalInfo.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
  });

  it("frames availability with 'from' (not a fixed date) so it survives slips", () => {
    expect(personalInfo.availability.toLowerCase()).toMatch(/from/);
  });
});

describe("projects", () => {
  it("has a unique slug for every project", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has a unique id for every project", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses kebab-case slugs", () => {
    for (const p of projects) {
      expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("never has an empty title or shortDesc", () => {
    for (const p of projects) {
      expect(p.title.trim()).not.toBe("");
      expect(p.shortDesc.trim()).not.toBe("");
    }
  });

  it("has at least one technology per project", () => {
    for (const p of projects) {
      expect(p.technologies.length).toBeGreaterThan(0);
    }
  });

  it("private projects don't have a github URL", () => {
    for (const p of projects) {
      if (p.private) expect(p.github).toBe("");
    }
  });

  it("featured projects all have case-study fields (problem/solution/impact)", () => {
    const featured = projects.filter((p) => p.highlight);
    expect(featured.length).toBeGreaterThan(0);
    for (const p of featured) {
      expect(
        p.problem,
        `${p.slug} should have a problem statement`,
      ).toBeTruthy();
      expect(
        p.solution,
        `${p.slug} should have a solution statement`,
      ).toBeTruthy();
      expect(
        p.impact?.length,
        `${p.slug} should have impact bullets`,
      ).toBeGreaterThan(0);
    }
  });
});

describe("skills", () => {
  it("has at least 4 categories", () => {
    expect(Object.keys(skills).length).toBeGreaterThanOrEqual(4);
  });

  it("uses only valid experience levels", () => {
    const valid = new Set(["Proficient", "Experienced", "Familiar"]);
    for (const list of Object.values(skills)) {
      for (const skill of list) {
        expect(valid.has(skill.experience)).toBe(true);
      }
    }
  });

  it("has no duplicate skill names within a category", () => {
    for (const [, list] of Object.entries(skills)) {
      const names = list.map((s) => s.name.toLowerCase());
      expect(new Set(names).size).toBe(names.length);
    }
  });
});
