import { cv } from "../data/cv";

export type LineKind = "heading" | "text" | "muted" | "accent" | "link" | "error";
export interface Line {
  text: string;
  kind: LineKind;
  href?: string;
  /** Renders as a `tree`-style branch under the heading above it ("mid" ->
   * "├── ", "last" -> "└── "), instead of a "- " bullet or bare indent. The
   * glyph is drawn by the UI layer (not baked into `text`) so it can be its
   * own dim span - keeping it out of link anchors and out of the coloring
   * for the line's `kind`. */
  branch?: "mid" | "last";
}
export interface CommandResult {
  lines: Line[];
  action?: "clear" | "open-cv";
}

const t = (text: string): Line => ({ text, kind: "text" });
const h = (text: string): Line => ({ text, kind: "heading" });
const m = (text: string): Line => ({ text, kind: "muted" });
const a = (text: string): Line => ({ text, kind: "accent" });
const link = (text: string, href: string): Line => ({ text, kind: "link", href });
const blank = (): Line => ({ text: "", kind: "text" });

/** Marks `line` as a tree branch (see `Line.branch`); pass whether it's the
 * last child in its group so the glyph switches from "├── " to "└── ". */
const branch = (line: Line, isLast: boolean): Line => ({ ...line, branch: isLast ? "last" : "mid" });
/** Tags every line in `group` as tree branches, letting the group figure out
 * for itself which one is last - avoids every call site re-deriving that. */
const branches = (group: Line[]): Line[] => group.map((line, i) => branch(line, i === group.length - 1));

function whoami(): CommandResult {
  return {
    lines: [
      h(cv.profile.name),
      a(cv.profile.headline),
      m(cv.profile.location),
      blank(),
      t(cv.profile.summary),
      blank(),
      ...cv.profile.links.map((l) => link(l.label, l.url)),
      m("email: run `contact`"),
    ],
  };
}

function experience(): CommandResult {
  const lines: Line[] = [];
  for (const e of cv.experience) {
    const first = e.roles[0]!;
    const last = e.roles[e.roles.length - 1]!;
    const span = `${last.start} – ${first.end ?? "Present"}`;
    lines.push(h(`${e.company}  [${span}]`));
    if (e.roles.length > 1) {
      lines.push(a(e.roles.map((r) => r.title).reverse().join(" → ")));
    } else {
      lines.push(a(first.title));
    }
    lines.push(...branches(e.bullets.map((b) => t(b))));
    lines.push(blank());
  }
  lines.push(m(cv.earlierRoles));
  return { lines };
}

function projects(): CommandResult {
  const lines: Line[] = [];
  cv.projects.forEach((p, i) => {
    if (i > 0) lines.push(blank());
    lines.push(h(p.name + (p.highlight ? `  (${p.highlight})` : "")));
    lines.push(...branches([m(p.tech.join(" · ")), t(p.description), link(p.url, p.url)]));
  });
  return { lines };
}

function skills(): CommandResult {
  const lines: Line[] = [];
  cv.skills.forEach((g, i) => {
    if (i > 0) lines.push(blank());
    lines.push(h(g.label));
    lines.push(branch(t(g.items.join(" · ")), true));
  });
  return { lines };
}

function education(): CommandResult {
  const lines: Line[] = [];
  for (const e of cv.education) {
    lines.push(h(`${e.school}  [${e.start}–${e.end}]`));
    lines.push(branch(t(`${e.degree} – ${e.detail}`), true));
  }
  lines.push(blank());
  lines.push(h("Certifications"));
  lines.push(...branches(cv.certifications.map((c) => t(c))));
  lines.push(blank());
  lines.push(h("CTF"));
  lines.push(...branches(cv.extras.ctf.map((c) => m(c))));
  return { lines };
}

function contact(): CommandResult {
  return {
    lines: [
      // The obfuscated address is decoded on click in the UI layer (Task 4);
      // here we only expose a label so the raw address never sits in the DOM.
      link("email (click to reveal)", `obfuscated:${cv.profile.emailObfuscated}`),
      ...cv.profile.links.map((l) => link(l.label, l.url)),
    ],
  };
}

function help(): CommandResult {
  const rows: Array<[string, string]> = [
    ["whoami", "who am I"],
    ["experience", "work history"],
    ["projects", "featured projects"],
    ["skills", "technical skills"],
    ["education", "degrees, certs, CTFs"],
    ["contact", "how to reach me"],
    ["cv", "open the printable one-page CV"],
    ["clear", "clear the screen"],
    ["help", "this list"],
  ];
  return { lines: rows.map(([cmd, desc]) => t(`${cmd.padEnd(12)} ${desc}`)) };
}

const registry: Record<string, () => CommandResult> = {
  whoami,
  experience,
  projects,
  skills,
  education,
  contact,
  help,
  cv: () => ({ lines: [m("opening cv...")], action: "open-cv" }),
  clear: () => ({ lines: [], action: "clear" }),
  ls: () => ({
    lines: [t("experience/  projects/  skills/  education/  contact/  nami-shah-cv.pdf")],
  }),
  sudo: () => ({
    lines: [a("Nice try. This incident will be reported... to my inbox, where I'll happily read it.")],
  }),
};

export const COMMAND_NAMES = ["whoami", "experience", "projects", "skills", "education", "contact", "cv", "clear", "help"];

export function runCommand(input: string): CommandResult {
  const word = input.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  if (word === "") return { lines: [] };
  const fn = registry[word];
  if (!fn) {
    return {
      lines: [
        { text: `command not found: ${word}`, kind: "error" },
        m("type `help` to see available commands"),
      ],
    };
  }
  return fn();
}
