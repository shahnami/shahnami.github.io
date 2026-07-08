import { cv } from "../data/cv";

export type LineKind = "heading" | "text" | "muted" | "accent" | "link" | "error";
export interface Line {
  text: string;
  kind: LineKind;
  href?: string;
  /** For tree-rendered lines: this line's position among its own siblings at
   * every depth from the root down to itself - index i says whether the
   * ancestor at depth i (or, for the last index, this line itself) was the
   * LAST child among ITS siblings. The UI uses this to draw a `tree`-style
   * set of connected branches at arbitrary depth: an ancestor that wasn't
   * last keeps drawing "│" straight through this row; one that was last
   * leaves that column blank, since its own branch already closed above. */
  treePath?: boolean[];
  /** [start, end) character range of `text` to render in the dim border
   * color instead of the line's normal color - used for the `help` fill
   * dots, which read as a heavy wall of periods at full contrast. */
  dimRange?: [number, number];
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

/** A node in a lightweight tree built up before flattening to `Line[]` -
 * mirrors how `tree` itself groups a heading (a company, a project, a skill
 * group...) with its detail lines nested underneath it. */
interface TreeNode {
  line: Line;
  children?: TreeNode[];
}
const node = (line: Line, children: Line[] = []): TreeNode => ({
  line,
  children: children.map((line) => ({ line })),
});

/** Flattens sibling `TreeNode`s (depth-first) into `Line[]`, stamping each
 * with the `treePath` the UI needs to draw connected branches - see
 * `Line.treePath`. No blank lines between entries by design: a real `tree`
 * never inserts them either, and blank rows would break the vertical pipe's
 * continuity between siblings. */
function flattenTree(nodes: TreeNode[], ancestorPath: boolean[] = []): Line[] {
  const lines: Line[] = [];
  nodes.forEach((n, i) => {
    const path = [...ancestorPath, i === nodes.length - 1];
    lines.push({ ...n.line, treePath: path });
    if (n.children?.length) lines.push(...flattenTree(n.children, path));
  });
  return lines;
}

function whoami(): CommandResult {
  const nodes = [
    node(h(cv.profile.name), [
      a(cv.profile.headline),
      m(cv.profile.location),
      t(cv.profile.summary),
      ...cv.profile.links.map((l) => link(l.label, l.url)),
      // The obfuscated address is decoded on click in the UI layer; here we
      // only expose a label so the raw address never sits in the DOM.
      link("email (click to reveal)", `obfuscated:${cv.profile.emailObfuscated}`),
    ]),
  ];
  return { lines: flattenTree(nodes) };
}

function experience(): CommandResult {
  const nodes = cv.experience.map((e) => {
    const first = e.roles[0]!;
    const last = e.roles[e.roles.length - 1]!;
    const span = `${last.start} – ${first.end ?? "Present"}`;
    const roleLine =
      e.roles.length > 1 ? a(e.roles.map((r) => r.title).reverse().join(" → ")) : a(first.title);
    return node(h(`${e.company}  [${span}]`), [roleLine, ...e.bullets.map((b) => t(b))]);
  });
  return { lines: [...flattenTree(nodes), blank(), m(cv.earlierRoles)] };
}

function projects(): CommandResult {
  const nodes = cv.projects.map((p) =>
    node(h(p.name + (p.highlight ? `  (${p.highlight})` : "")), [
      m(p.tech.join(" · ")),
      t(p.description),
      ...(p.url ? [link(p.url, p.url)] : [m("private repository")]),
    ]),
  );
  return { lines: flattenTree(nodes) };
}

function skills(): CommandResult {
  const nodes = cv.skills.map((g) => node(h(g.label), [t(g.items.join(" · "))]));
  return { lines: flattenTree(nodes) };
}

function education(): CommandResult {
  const nodes = [
    ...cv.education.map((e) =>
      node(h(`${e.school}  [${e.start}–${e.end}]`), [t(`${e.degree} – ${e.detail}`)]),
    ),
    node(h("Certifications"), cv.certifications.map((c) => t(c))),
    node(h("CTF"), cv.extras.ctf.map((c) => m(c))),
  ];
  return { lines: flattenTree(nodes) };
}

function help(): CommandResult {
  const rows: Array<[string, string]> = [
    ["whoami", "who am I"],
    ["experience", "work history"],
    ["projects", "featured projects"],
    ["skills", "technical skills"],
    ["education", "degrees, certs, CTFs"],
    ["cv", "open the printable one-page CV"],
    ["clear", "clear the screen"],
    ["help", "this list"],
  ];
  // Dot-fill each row out to a shared column, `man`-page style, so the
  // descriptions line up regardless of command name length. The fill itself
  // is dimmed to the same color as the tree glyphs so it recedes rather than
  // competing with the command name and description for attention.
  const col = Math.max(...rows.map(([cmd]) => cmd.length)) + 6;
  const nodes = rows.map(([cmd, desc]) => {
    const fill = ".".repeat(col - cmd.length);
    const line = t(`${cmd}${fill}${desc}`);
    line.dimRange = [cmd.length, cmd.length + fill.length];
    return node(line);
  });
  return { lines: flattenTree(nodes) };
}

const registry: Record<string, () => CommandResult> = {
  whoami,
  experience,
  projects,
  skills,
  education,
  help,
  cv: () => ({ lines: [m("opening cv...")], action: "open-cv" }),
  clear: () => ({ lines: [], action: "clear" }),
  ls: () => ({
    lines: [t("experience/  projects/  skills/  education/  nami-shah-cv.pdf")],
  }),
  sudo: () => ({
    lines: [a("Nice try. This incident will be reported... to my inbox, where I'll happily read it.")],
  }),
};

export const COMMAND_NAMES = ["whoami", "experience", "projects", "skills", "education", "cv", "clear", "help"];

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
