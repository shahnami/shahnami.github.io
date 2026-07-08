import { describe, it, expect } from "vitest";
import { runCommand, COMMAND_NAMES } from "../src/terminal/commands";

describe("runCommand", () => {
  it("whoami prints name and headline", () => {
    const { lines } = runCommand("whoami");
    const text = lines.map((l) => l.text).join("\n");
    expect(text).toContain("Nami Shah");
    expect(text).toContain("Engineering Lead");
  });

  it("experience lists OpenZeppelin and Third Origin", () => {
    const text = runCommand("experience").lines.map((l) => l.text).join("\n");
    expect(text).toContain("OpenZeppelin");
    expect(text).toContain("Third Origin");
    expect(text).toContain("Development Manager");
  });

  it("projects lists the three featured projects", () => {
    const text = runCommand("projects").lines.map((l) => l.text).join("\n");
    for (const p of ["openzeppelin-monitor", "oif-solver", "Ascend"]) {
      expect(text).toContain(p);
    }
  });

  it("help lists every public command", () => {
    const text = runCommand("help").lines.map((l) => l.text).join("\n");
    for (const name of COMMAND_NAMES) expect(text).toContain(name);
  });

  it("clear returns a clear action", () => {
    expect(runCommand("clear").action).toBe("clear");
  });

  it("cv returns an open-cv action", () => {
    expect(runCommand("cv").action).toBe("open-cv");
  });

  it("unknown command returns an error line", () => {
    const { lines } = runCommand("frobnicate");
    expect(lines[0]?.kind).toBe("error");
    expect(lines[0]?.text).toContain("frobnicate");
  });

  it("sudo easter egg answers", () => {
    const text = runCommand("sudo hire").lines.map((l) => l.text).join("\n");
    expect(text.length).toBeGreaterThan(0);
  });

  it("input is trimmed and case-insensitive on the command word", () => {
    expect(runCommand("  WHOAMI  ").lines.map((l) => l.text).join("\n")).toContain("Nami Shah");
  });
});
