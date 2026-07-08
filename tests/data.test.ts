import { describe, it, expect } from "vitest";
import { cv } from "../src/data/cv";

describe("cv data integrity", () => {
  it("has required profile fields", () => {
    expect(cv.profile.name).toBe("Nami Shah");
    expect(cv.profile.emailPlain).toBe("cv@nami.sh");
    expect(atob(cv.profile.emailObfuscated)).toBe("mailto:cv@nami.sh");
  });

  it("dates use 'MMM YYYY' or 'YYYY' format", () => {
    const re = /^([A-Z][a-z]{2} )?\d{4}$/;
    for (const e of cv.experience) {
      for (const r of e.roles) {
        expect(r.start).toMatch(re);
        if (r.end !== null) expect(r.end).toMatch(re);
      }
    }
  });

  it("OpenZeppelin is one continuous entry with 4 roles", () => {
    const oz = cv.experience.find((e) => e.company === "OpenZeppelin");
    expect(oz?.roles).toHaveLength(4);
    expect(oz?.roles[0]?.end).toBeNull();
  });

  it("every experience entry has at least one bullet", () => {
    for (const e of cv.experience) expect(e.bullets.length).toBeGreaterThan(0);
  });
});
