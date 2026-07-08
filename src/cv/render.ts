import { cv } from "../data/cv";

const el = (tag: string, cls: string, text?: string): HTMLElement => {
  const e = document.createElement(tag);
  e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

export function renderCV(root: HTMLElement) {
  root.innerHTML = "";

  // Header — plain text contact, ATS-first. Real email on purpose.
  const header = el("header", "cv-header");
  header.appendChild(el("h1", "cv-name", cv.profile.name));
  header.appendChild(el("p", "cv-headline", cv.profile.headline));
  header.appendChild(
    el(
      "p",
      "cv-contact",
      [
        cv.profile.location,
        cv.profile.emailPlain,
        cv.profile.website,
        ...cv.profile.links.slice(0, 2).map((l) => l.label), // github + linkedin
      ].join("  ·  "),
    ),
  );
  root.appendChild(header);

  // Summary
  root.appendChild(el("h2", "cv-h2", "Summary"));
  root.appendChild(el("p", "cv-p", cv.profile.summary));

  // Experience
  root.appendChild(el("h2", "cv-h2", "Experience"));
  for (const e of cv.experience) {
    const entry = el("section", "cv-entry");
    const first = e.roles[0]!;
    const last = e.roles[e.roles.length - 1]!;
    const span = `${last.start} – ${first.end ?? "Present"}`;
    // Dates inline in the same line as title/company (ATS-safe ordering)
    entry.appendChild(el("h3", "cv-entry-title", `${first.title}, ${e.company} (${span})`));
    if (e.roles.length > 1) {
      entry.appendChild(
        el("p", "cv-promotions", "Promoted through: " + e.roles.slice(1).map((r) => `${r.title} (${r.start} – ${r.end})`).join("; ")),
      );
    }
    if (e.condensed) {
      entry.appendChild(el("p", "cv-p cv-condensed", e.bullets[0]!));
    } else {
      const ul = el("ul", "cv-bullets");
      for (const b of e.bullets) ul.appendChild(el("li", "cv-bullet", b));
      entry.appendChild(ul);
    }
    root.appendChild(entry);
  }
  root.appendChild(el("p", "cv-p cv-earlier", cv.earlierRoles));

  // Projects
  root.appendChild(el("h2", "cv-h2", "Projects"));
  for (const p of cv.projects) {
    root.appendChild(
      el(
        "p",
        "cv-p cv-project",
        `${p.name} (${p.tech.slice(0, 3).join(", ")}) — ${p.description} ${p.url.replace("https://", "")}`,
      ),
    );
  }

  // Skills
  root.appendChild(el("h2", "cv-h2", "Skills"));
  for (const g of cv.skills) {
    root.appendChild(el("p", "cv-p cv-skill", `${g.label}: ${g.items.join(", ")}`));
  }

  // Education
  root.appendChild(el("h2", "cv-h2", "Education"));
  for (const e of cv.education) {
    root.appendChild(el("p", "cv-p", `${e.degree}, ${e.school} — ${e.detail} (${e.start}–${e.end})`));
  }

  // Certifications
  root.appendChild(el("h2", "cv-h2", "Certifications"));
  root.appendChild(el("p", "cv-p", cv.certifications.join("; ")));

  // Screen-only toolbar (hidden in print)
  const bar = el("div", "cv-toolbar");
  const back = el("a", "cv-tool", "← terminal") as HTMLAnchorElement;
  back.href = "/";
  const print = el("button", "cv-tool", "Print / Save as PDF") as HTMLButtonElement;
  print.addEventListener("click", () => window.print());
  bar.append(back, print);
  root.appendChild(bar);
}
