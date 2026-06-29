import React from "react";
import { TECH } from "@/lib/content";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Technology() {
  return (
    <section id="technology" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              The full stack of{" "}
              <span className="text-gradient">digital trust.</span>
            </>
          }
          intro="On-chain and off-chain, front to back. We assemble the right pieces for the job rather than forcing every problem onto a ledger."
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline">
            <div className="grid grid-cols-1 gap-px bg-surface2 sm:grid-cols-2 lg:grid-cols-4">
              {TECH.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative bg-panel p-5 transition-colors duration-300 hover:bg-elevated"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-hairline transition-transform duration-300 group-hover:scale-105">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <span className="font-mono text-[11px] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[0.98rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
