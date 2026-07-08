export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  /** base64 of "mailto:cv@nami.sh" — used by the web view only */
  emailObfuscated: string;
  /** plain address — used by the print view only */
  emailPlain: string;
  website: string;
  links: Link[];
}

export interface Role {
  title: string;
  start: string; // "Jul 2021"
  end: string | null; // null = Present
}

export interface ExperienceEntry {
  company: string;
  url: string;
  roles: Role[];
  bullets: string[];
  /** condensed entries render as a single line in the print view */
  condensed?: boolean;
}

export interface Project {
  name: string;
  url: string;
  tech: string[];
  description: string;
  highlight?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  detail: string;
  start: string;
  end: string;
}

export interface CV {
  profile: Profile;
  experience: ExperienceEntry[];
  /** single folded line for pre-2019 roles */
  earlierRoles: string;
  projects: Project[];
  skills: SkillGroup[];
  education: EducationEntry[];
  certifications: string[];
  extras: { ctf: string[] };
}
