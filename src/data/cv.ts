import type { CV } from "./types";

export const cv: CV = {
  profile: {
    name: "Nami Shah",
    headline: "Engineering Lead · Web3 Infrastructure & Security",
    summary:
      "Engineering lead with 9+ years across security consulting, full-stack product development, and blockchain infrastructure. Currently leading development of an institutional on-chain lending platform at OpenZeppelin — hands-on in Rust and TypeScript across protocol integrations, indexing pipelines, and access control, with a security consultant's instincts.",
    location: "Dubai, UAE",
    emailObfuscated: "bWFpbHRvOmN2QG5hbWkuc2g=",
    emailPlain: "cv@nami.sh",
    website: "nami.sh",
    links: [
      { label: "github.com/shahnami", url: "https://github.com/shahnami" },
      { label: "linkedin.com/in/namis", url: "https://linkedin.com/in/namis" },
      { label: "x.com/nami_sh", url: "https://x.com/nami_sh" },
    ],
  },
  experience: [
    {
      company: "OpenZeppelin",
      url: "https://openzeppelin.com",
      roles: [
        { title: "Development Manager", start: "Jul 2025", end: null },
        { title: "Lead Developer", start: "Jan 2024", end: "Jul 2025" },
        { title: "Senior Developer", start: "Jan 2022", end: "Jan 2024" },
        { title: "Full Stack Ethereum Developer", start: "Jul 2021", end: "Jan 2022" },
      ],
      bullets: [
        "Lead development of Ascend, an institutional on-chain lending platform: on-chain identity and KYC eligibility (OnchainID claims), AccessManager-based access control, event indexing and projections, subgraphs, and SIWE authentication (~180 merged PRs in the last year).",
        "Core author of openzeppelin-monitor, an open-source Rust multi-chain monitoring service (EVM, Stellar, Solana, Midnight) with configurable triggers and notifications; 136 GitHub stars.",
        "Built transaction infrastructure on Defender: relayers, transaction lifecycle, simulations, Safe integrations, and new network onboarding.",
        "Contributed to openzeppelin-relayer (Rust) and led the Midnight network integration across products.",
      ],
    },
    {
      company: "Third Origin",
      url: "https://thirdorigin.io",
      roles: [{ title: "Founder", start: "Dec 2025", end: null }],
      bullets: [
        "Independent product studio; contracting to OpenZeppelin since Jan 2026 while incubating consumer and agent-infrastructure (x402/MCP) experiments.",
      ],
    },
    {
      company: "MWR InfoSecurity / F-Secure",
      url: "https://f-secure.com",
      roles: [{ title: "Security Consultant", start: "Mar 2019", end: "Jun 2021" }],
      bullets: [
        "Led security assessments across infrastructure, web, and mobile; built OSINT tooling and automation for external asset mapping.",
      ],
      condensed: true,
    },
    {
      company: "App Maven",
      url: "https://appmaven.io",
      roles: [{ title: "Co-Founder & Managing Director", start: "Jul 2019", end: "Jul 2023" }],
      bullets: [
        "Built web and mobile products for startups (React, React Native, Swift); ran delivery, finances, and client strategy.",
      ],
      condensed: true,
    },
  ],
  earlierRoles:
    "Earlier: penetration testing and security implementation at Accenture and The Security Factory (2016–2017).",
  projects: [
    {
      name: "openzeppelin-monitor",
      url: "https://github.com/OpenZeppelin/openzeppelin-monitor",
      tech: ["Rust", "EVM", "Stellar", "Solana", "Midnight"],
      description:
        "Multi-chain blockchain monitoring service watching on-chain activity with configurable triggers and notification channels. Core author.",
      highlight: "136 stars",
    },
    {
      name: "oif-solver",
      url: "https://github.com/openintentsframework/oif-solver",
      tech: ["Rust", "EIP-7683", "Permit2", "Hyperlane", "AWS KMS"],
      description:
        "Cross-chain intents solver for the Open Intents Framework: intent discovery, execution, and settlement across chains.",
    },
    {
      name: "Ascend",
      url: "https://github.com/OpenZeppelin/ascend-platform",
      tech: ["TypeScript", "Rust", "PostgreSQL", "Kubernetes"],
      description:
        "Institutional on-chain lending platform: identity and KYC rails, on-chain access control, event-sourced indexing, admin and client frontends.",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Rust", "TypeScript", "Python", "SQL"],
    },
    {
      label: "Blockchain",
      items: [
        "Ethereum / EVM",
        "smart-contract integration",
        "EIP-712 / SIWE",
        "Permit2 / EIP-3009",
        "indexers & subgraphs",
        "AccessManager",
        "Stellar",
        "Solana",
        "Midnight",
      ],
    },
    {
      label: "Infrastructure",
      items: [
        "AWS (Lambda, ECS, KMS)",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes / ArgoCD",
        "GitHub Actions",
      ],
    },
    {
      label: "Security",
      items: ["penetration testing", "threat modelling", "CREST CRT / CPSA"],
    },
  ],
  education: [
    {
      school: "University of Warwick",
      degree: "MSc Cybersecurity and Management",
      detail: "Distinction",
      start: "2017",
      end: "2018",
    },
    {
      school: "University College Howest",
      degree: "BSc Applied Computer Science (Cybercrime)",
      detail: "First Class",
      start: "2013",
      end: "2016",
    },
  ],
  certifications: ["CREST Registered Penetration Tester (CRT)", "CREST Practitioner Security Analyst (CPSA)"],
  extras: {
    ctf: ["BruCON CTF 2015 — 2nd place", "HackTheFuture CTF 2015 — 3rd place", "Inter-ACE CTF 2018 — 9th place"],
  },
};
