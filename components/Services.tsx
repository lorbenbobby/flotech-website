import React from "react";
import { SERVICES, type ServiceItem } from "@/lib/content";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild, Reveal } from "./Reveal";

function ServiceCard({ s }: { s: ServiceItem }) {
  const Icon = s.icon;
  return (
    <RevealChild className="h-full">
      <article className="card group h-full">
        <div className="flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-hairline transition-transform duration-300 group-hover:scale-105">
            <Icon size={22} strokeWidth={1.8} />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            {s.tag}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
        <p className="mt-1.5 text-[0.92rem] font-medium text-cyan/90">{s.lead}</p>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{s.copy}</p>
      </article>
    </RevealChild>
  );
}

export function Services({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const blockchain = SERVICES.filter((s) => s.group === "blockchain");
  const software = SERVICES.filter((s) => s.group === "software");

  return (
    <section id="services" className={`relative ${hideHeading ? "pb-20 pt-2 sm:pb-28" : "py-20 sm:py-28"}`}>
      <div className="container-x">
        <SectionHeading
          hidden={hideHeading}
          eyebrow="Services"
          title={
            <>
              Blockchain first.{" "}
              <span className="text-gradient">Then everything around it.</span>
            </>
          }
          intro="Blockchain is the core of what we do. Software engineering rounds it out. Either way, the work is built to ship and to last."
        />

        {/* Core: blockchain */}
        <Reveal>
          <div className="mt-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(90, 140, 255,0.9)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/80">
              Core focus
            </span>
            <span className="text-faint">/</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Blockchain
            </span>
            <span className="ml-2 hidden h-px flex-1 bg-gradient-to-r from-hairline to-transparent sm:block" />
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blockchain.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </RevealGroup>

        {/* Also: software */}
        <Reveal>
          <div className="mt-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue shadow-[0_0_12px_rgba(59,108,255,0.9)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/80">
              Also offered
            </span>
            <span className="text-faint">/</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Software engineering
            </span>
            <span className="ml-2 hidden h-px flex-1 bg-gradient-to-r from-hairline to-transparent sm:block" />
          </div>
        </Reveal>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {software.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
