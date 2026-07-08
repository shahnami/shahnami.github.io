import { cv } from "../data/cv";

export type LineKind = "heading" | "text" | "muted" | "accent" | "link" | "error";
export interface Line {
  text: string;
  kind: LineKind;
  href?: string;
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
    for (const b of e.bullets) lines.push(t(`  - ${b}`));
    lines.push(blank());
  }
  lines.push(m(cv.earlierRoles));
  return { lines };
}

function projects(): CommandResult {
  const lines: Line[] = [];
  for (const p of cv.projects) {
    lines.push(h(p.name + (p.highlight ? `  (${p.highlight})` : "")));
    lines.push(m(p.tech.join(" · ")));
    lines.push(t(`  ${p.description}`));
    lines.push(link(`  ${p.url}`, p.url));
    lines.push(blank());
  }
  return { lines };
}

function skills(): CommandResult {
  return {
    lines: cv.skills.flatMap((g) => [h(g.label), t(`  ${g.items.join(" · ")}`), blank()]),
  };
}

function education(): CommandResult {
  const lines: Line[] = [];
  for (const e of cv.education) {
    lines.push(h(`${e.school}  [${e.start}–${e.end}]`));
    lines.push(t(`  ${e.degree} — ${e.detail}`));
  }
  lines.push(blank());
  lines.push(h("Certifications"));
  for (const c of cv.certifications) lines.push(t(`  ${c}`));
  lines.push(blank());
  lines.push(h("CTF"));
  for (const c of cv.extras.ctf) lines.push(m(`  ${c}`));
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
