import React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Building2,
  Sparkles,
  Workflow,
  Layers,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild } from "./Reveal";

const LINKS: { href: string; label: string; title: string; copy: string; icon: LucideIcon }[] = [
  { href: "/services", label: "What we build", title: "Services", copy: "Blockchain consulting, smart contracts, tokenization, Web3 platforms, and software delivery.", icon: Boxes },
  { href: "/industries", label: "Where we work", title: "Industries", copy: "From healthcare and fintech to supply chain, identity, and enterprise systems.", icon: Building2 },
  { href: "/use-cases", label: "What we solve", title: "Use Cases", copy: "Automation, tokenized ownership, audit trails, access control, and verifiable records.", icon: Sparkles },
  { href: "/process", label: "How we work", title: "Process", copy: "A deliberate path from first conversation to a system running in production.", icon: Workflow },
  { href: "/technology", label: "What we use", title: "Technology", copy: "The on-chain and off-chain stack we assemble for the job at hand.", icon: Layers },
  { href: "/about", label: "Who we are", title: "About", copy: "A Canadian blockchain and software studio that treats the ledger as infrastructure.", icon: Users },
];

export function Explore() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Explore"
          title={
            <>
              Everything FloTech does,{" "}
              <span className="text-gradient">one layer deeper.</span>
            </>
          }
          intro="Start here, then go as deep as you need. Each area has its own page with the detail that matters."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <RevealChild key={l.href}>
                <Link href={l.href} className="card group block h-full">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-hairline transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-faint transition-colors duration-300 group-hover:text-cyan"
                    />
                  </div>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {l.label}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{l.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{l.copy}</p>
                </Link>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
