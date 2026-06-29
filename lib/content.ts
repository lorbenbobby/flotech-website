import type { LucideIcon } from "lucide-react";
import {
  Compass,
  FileCode2,
  Coins,
  Wallet,
  Cable,
  ShieldCheck,
  Code2,
  LifeBuoy,
  HeartPulse,
  Landmark,
  Building2,
  Truck,
  Layers,
  Server,
  Fingerprint,
  Briefcase,
  Boxes,
  Rocket,
  Network,
  Database,
  Cloud,
  LayoutDashboard,
  FileCheck,
  Activity,
  Workflow,
  ScanFace,
  BadgeCheck,
  KeySquare,
  ScrollText,
  Sparkles,
} from "lucide-react";

export const SITE = {
  brand: "FloTech",
  legal: "Florian Technologies",
  email: "contact@floriantechnologies.ca",
  domain: "floriantechnologies.ca",
  url: "https://floriantechnologies.ca",
  location: "Ontario, Canada",
};

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Process", href: "/process" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Per-page header + SEO copy. Keyed by route path. */
export interface PageMeta {
  eyebrow: string;
  title: string;
  /** Short lead shown under the page title. */
  lead: string;
  /** Longer meta description for SEO. */
  description: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  services: {
    eyebrow: "Services",
    title: "Blockchain first. Then everything around it.",
    lead: "Blockchain is the core of what we do, and software engineering rounds it out. Either way, the work is built to ship and to last.",
    description:
      "FloTech's services: blockchain consulting, smart contract development, tokenization infrastructure, Web3 platforms, blockchain integration, security reviews, and full-stack software delivery.",
  },
  industries: {
    eyebrow: "Industries",
    title: "Where blockchain earns its place.",
    lead: "We work where verifiable records, automated rules, and shared trust solve a real problem. Here is what that looks like across sectors.",
    description:
      "How FloTech applies blockchain across healthcare, fintech, real estate, supply chain, SaaS, enterprise systems, digital identity, and asset management.",
  },
  "use-cases": {
    eyebrow: "Use Cases",
    title: "Real problems, solved on-chain.",
    lead: "A blockchain is only worth it when it does something better. These are the patterns we build most, each tied to a concrete outcome.",
    description:
      "Common blockchain use cases FloTech builds: smart contract automation, tokenized assets, secure audit trails, wallet-connected platforms, loyalty currencies, consent and access control, digital identity, and enterprise integrations.",
  },
  process: {
    eyebrow: "Process",
    title: "From idea to working system.",
    lead: "A clear path from first conversation to a platform that runs in production. Every step is deliberate, reviewable, and built to keep you in control.",
    description:
      "FloTech's delivery process: discover, design, architect, build, secure, launch, and support. A deliberate path from blockchain idea to production system.",
  },
  technology: {
    eyebrow: "Technology",
    title: "The full stack of digital trust.",
    lead: "On-chain and off-chain, front to back. We assemble the right pieces for the job rather than forcing every problem onto a ledger.",
    description:
      "The FloTech technology stack: smart contracts, token standards, EVM networks, wallets, APIs, secure databases, cloud infrastructure, dashboards, identity, audit logs, and monitoring.",
  },
  about: {
    eyebrow: "About",
    title: "Blockchain as infrastructure, not noise.",
    lead: "FloTech is the public brand of Florian Technologies, a Canadian blockchain technology and software consulting company.",
    description:
      "About FloTech (Florian Technologies): a Canadian blockchain technology and software consulting company turning smart contracts, tokenization, and digital trust into systems people can use.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Build the next layer of your digital infrastructure.",
    lead: "Tell us what you want to build, integrate, tokenize, or secure. FloTech will help shape the technical path.",
    description:
      "Contact FloTech to discuss blockchain consulting, smart contracts, tokenization, Web3 platforms, integrations, or security reviews. Based in Ontario, Canada.",
  },
};

/** Company story for the About page. */
export const ABOUT_STORY: string[] = [
  "Florian Technologies, publicly branded as FloTech, is a Canadian blockchain technology and software consulting company. We help companies move from a blockchain idea to architecture, prototype, implementation, security review, and launch.",
  "Our focus is practical blockchain systems that connect with your existing software, data, users, wallets, and business workflows. The result is meant to run in production, not to sit in a slide deck.",
  "We exist for teams that see blockchain as infrastructure. We turn smart contracts, tokenization, and digital trust systems into products people can actually use, and we stay through launch and the work that comes after it.",
];

/** Headline numbers for the About page. Conservative, framing-based, not invented metrics. */
export const STATS: { value: string; label: string }[] = [
  { value: "Blockchain-first", label: "Every engagement leads with the ledger" },
  { value: "End-to-end", label: "Strategy through launch and support" },
  { value: "Ontario, Canada", label: "Where we are based" },
];

export interface ValueItem {
  title: string;
  copy: string;
  icon: LucideIcon;
}

export const VALUES: ValueItem[] = [
  {
    title: "Blockchain-first execution",
    copy: "We lead with the ledger, never as an afterthought.",
    icon: Boxes,
  },
  {
    title: "Secure system architecture",
    copy: "Designed to be reviewed, hardened, and trusted.",
    icon: ShieldCheck,
  },
  {
    title: "Tokenization built for utility",
    copy: "Tokens that do a job, not chase a trend.",
    icon: Coins,
  },
  {
    title: "Software that reaches production",
    copy: "Shipped, monitored, and maintained. Not a demo.",
    icon: Rocket,
  },
];

export interface ServiceItem {
  title: string;
  lead: string;
  copy: string;
  tag: string;
  group: "blockchain" | "software";
  icon: LucideIcon;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Blockchain Consulting",
    lead: "Strategy, feasibility, and the right chain for the job.",
    copy: "We pressure-test the idea before you fund it. Use-case design, feasibility, blockchain selection, architecture planning, and a roadmap your team can ship against.",
    tag: "strategy",
    group: "blockchain",
    icon: Compass,
  },
  {
    title: "Smart Contract Development",
    lead: "On-chain logic that does exactly what it says.",
    copy: "Secure contracts for token systems, access control, and automated business rules. Written to be tested, reviewed, and deployed with confidence.",
    tag: "contracts",
    group: "blockchain",
    icon: FileCode2,
  },
  {
    title: "Tokenization Infrastructure",
    lead: "Digital assets with real utility behind them.",
    copy: "Ownership records, loyalty credits, internal currencies, and access tokens. Platform-native token models and asset-backed workflows shaped around how your business runs.",
    tag: "tokens",
    group: "blockchain",
    icon: Coins,
  },
  {
    title: "Web3 Platform Development",
    lead: "Wallet-connected products people want to use.",
    copy: "Dashboards, portals, and decentralized workflows with blockchain wired into the experience, not bolted on. Clean interfaces on top of serious infrastructure.",
    tag: "platforms",
    group: "blockchain",
    icon: Wallet,
  },
  {
    title: "Blockchain Integration",
    lead: "Connect on-chain systems to the software you already run.",
    copy: "We bridge ledgers to your APIs, databases, identity providers, payment flows, and enterprise tools, so blockchain becomes one more dependable part of the stack.",
    tag: "integration",
    group: "blockchain",
    icon: Cable,
  },
  {
    title: "Security and Architecture Review",
    lead: "Find the failure modes before anyone else does.",
    copy: "Smart contract risk review, threat modeling, infrastructure and system-design checks, and secure deployment planning with audit-ready recommendations.",
    tag: "security",
    group: "blockchain",
    icon: ShieldCheck,
  },
  {
    title: "Custom Software Development",
    lead: "Full-stack engineering, with or without a chain involved.",
    copy: "Web apps, admin portals, dashboards, APIs, and backends. MVPs that get to market and platforms that scale once they are there.",
    tag: "software",
    group: "software",
    icon: Code2,
  },
  {
    title: "Technical Delivery and Support",
    lead: "We stay through launch and everything after it.",
    copy: "Deployment, documentation, testing, monitoring, and maintenance. The steady work that keeps a platform healthy as it grows.",
    tag: "delivery",
    group: "software",
    icon: LifeBuoy,
  },
];

export interface IndustryItem {
  title: string;
  copy: string;
  icon: LucideIcon;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    title: "Healthcare",
    copy: "Consent systems, secure patient records, and tamper-evident access trails.",
    icon: HeartPulse,
  },
  {
    title: "Fintech",
    copy: "Programmable workflows, tokenized rails, and secure, reconcilable ledgers.",
    icon: Landmark,
  },
  {
    title: "Real Estate",
    copy: "Ownership records, asset tokenization, and cleaner transaction workflows.",
    icon: Building2,
  },
  {
    title: "Supply Chain",
    copy: "Provenance, audit trails, and verification at every handoff.",
    icon: Truck,
  },
  {
    title: "SaaS Platforms",
    copy: "Tokenized access tiers, usage tracking, and native Web3 features.",
    icon: Layers,
  },
  {
    title: "Enterprise Systems",
    copy: "Audit trails, fine-grained permissioning, and secure integrations.",
    icon: Server,
  },
  {
    title: "Digital Identity",
    copy: "Verifiable credentials, attestations, and granular access control.",
    icon: Fingerprint,
  },
  {
    title: "Asset Management",
    copy: "Ownership tracking, tokenized records, and full lifecycle visibility.",
    icon: Briefcase,
  },
];

export interface UseCaseItem {
  title: string;
  copy: string;
  icon: LucideIcon;
  /** grid emphasis for the bento layout */
  span: "feature" | "wide" | "tall" | "normal";
}

export const USE_CASES: UseCaseItem[] = [
  {
    title: "Smart contract automation",
    copy: "Encode the rules once. Let the contract enforce them the same way every time, without a middle layer to trust.",
    icon: Workflow,
    span: "feature",
  },
  {
    title: "Tokenized assets and ownership",
    copy: "Issue, transfer, and prove ownership with records that reconcile themselves.",
    icon: Coins,
    span: "normal",
  },
  {
    title: "Secure audit trails",
    copy: "Every action written to a record no one can quietly rewrite.",
    icon: FileCheck,
    span: "normal",
  },
  {
    title: "Wallet-connected platforms",
    copy: "Sign in, sign transactions, and hold assets without leaving your product.",
    icon: Wallet,
    span: "wide",
  },
  {
    title: "Loyalty and internal currencies",
    copy: "Points, credits, and closed-loop currencies your users actually hold.",
    icon: BadgeCheck,
    span: "normal",
  },
  {
    title: "Consent and access control",
    copy: "Who can see what, granted and revoked on demand, with a clear trail.",
    icon: KeySquare,
    span: "normal",
  },
  {
    title: "Digital identity and verification",
    copy: "Prove an attribute without handing over everything behind it.",
    icon: ScanFace,
    span: "normal",
  },
  {
    title: "Blockchain-backed records",
    copy: "Documents and data anchored to a ledger for verifiable integrity.",
    icon: Boxes,
    span: "normal",
  },
  {
    title: "Enterprise integrations",
    copy: "On-chain systems that speak fluently to the tools you already run.",
    icon: Network,
    span: "wide",
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  copy: string;
}

export const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Discover",
    copy: "We map the business problem, the users, and where a ledger earns its place. No blockchain for blockchain's sake.",
  },
  {
    n: "02",
    title: "Design",
    copy: "We shape the experience, data model, and token logic before a line of contract code is written.",
  },
  {
    n: "03",
    title: "Architect",
    copy: "We define the system: chains, contracts, services, and how it all connects to what you already run.",
  },
  {
    n: "04",
    title: "Build",
    copy: "Smart contracts, platforms, and integrations built in tested, reviewable increments.",
  },
  {
    n: "05",
    title: "Secure",
    copy: "Risk review, threat modeling, and audit-ready hardening before anything touches production.",
  },
  {
    n: "06",
    title: "Launch",
    copy: "Controlled deployment with monitoring, documentation, and a clear plan for day two.",
  },
  {
    n: "07",
    title: "Support",
    copy: "Maintenance, iteration, and scaling as your platform and user base grow.",
  },
];

export interface TechItem {
  title: string;
  copy: string;
  icon: LucideIcon;
}

export const TECH: TechItem[] = [
  { title: "Smart contracts", copy: "Token, access, and logic contracts", icon: FileCode2 },
  { title: "Token standards", copy: "Fungible and non-fungible models", icon: Coins },
  { title: "Blockchain networks", copy: "EVM-compatible and beyond", icon: Boxes },
  { title: "Wallet integration", copy: "Connect, sign, authenticate", icon: Wallet },
  { title: "API and backend systems", copy: "Services that tie it together", icon: Server },
  { title: "Secure databases", copy: "Off-chain data done right", icon: Database },
  { title: "Cloud infrastructure", copy: "Scalable, monitored hosting", icon: Cloud },
  { title: "Dashboards and portals", copy: "Control panels for real ops", icon: LayoutDashboard },
  { title: "Identity and access", copy: "Roles, permissions, attestations", icon: Fingerprint },
  { title: "Audit-ready logs", copy: "Traceable, exportable history", icon: FileCheck },
  { title: "Web3 experiences", copy: "On-chain that feels effortless", icon: Sparkles },
  { title: "System monitoring", copy: "Know before your users do", icon: Activity },
];

export interface ResponsibleItem {
  title: string;
  copy: string;
  icon: LucideIcon;
}

export const RESPONSIBLE: ResponsibleItem[] = [
  {
    title: "Utility before hype",
    copy: "If a ledger does not earn its place, we say so. The goal is a system that works, not a press release.",
    icon: Compass,
  },
  {
    title: "Security before launch",
    copy: "Review, threat modeling, and hardening happen before code reaches production, not after an incident.",
    icon: ShieldCheck,
  },
  {
    title: "Architecture before code",
    copy: "We agree on how the system fits together before we start building it.",
    icon: Boxes,
  },
  {
    title: "Compliance-aware design",
    copy: "Built with data handling, permissions, and accountability in mind from the first diagram.",
    icon: Landmark,
  },
  {
    title: "Readable documentation",
    copy: "Your team should understand and own what we build, so we write it down in plain language.",
    icon: ScrollText,
  },
  {
    title: "Real-world integration",
    copy: "Systems that connect to your existing software, data, and workflows instead of replacing everything.",
    icon: Network,
  },
];

export const PROJECT_TYPES: string[] = [
  "Blockchain Consulting",
  "Smart Contract Development",
  "Tokenization Infrastructure",
  "Web3 Platform Development",
  "Blockchain Integration",
  "Security and Architecture Review",
  "Custom Software Development",
  "Other",
];
