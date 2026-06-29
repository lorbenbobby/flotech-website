import React from "react";
import { INDUSTRIES, type IndustryItem } from "@/lib/content";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild } from "./Reveal";

function IndustryCard({ item }: { item: IndustryItem }) {
  const Icon = item.icon;
  return (
    <RevealChild className="h-full">
      <article className="card group h-full">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-hairline transition-transform duration-300 group-hover:scale-105">
            <Icon size={20} strokeWidth={1.8} />
          </span>
          <h3 className="text-base font-semibold text-ink">{item.title}</h3>
        </div>
        <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">
          {item.copy}
        </p>
      </article>
    </RevealChild>
  );
}

export function Industries({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  return (
    <section id="industries" className={`relative ${hideHeading ? "pb-20 pt-2 sm:pb-28" : "py-20 sm:py-28"}`}>
      <div className="container-x">
        <SectionHeading
          hidden={hideHeading}
          eyebrow="Industries"
          title={
            <>
              Where blockchain{" "}
              <span className="text-gradient">earns its place.</span>
            </>
          }
          intro="We work where verifiable records, automated rules, and shared trust solve a real problem. Here is what that looks like across sectors."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.title} item={item} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
