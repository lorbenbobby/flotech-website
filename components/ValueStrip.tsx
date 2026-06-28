import React from "react";
import { VALUES } from "@/lib/content";
import { RevealGroup, RevealChild } from "./Reveal";

export function ValueStrip() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-x">
        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <RevealChild key={v.title}>
                <div className="group relative h-full bg-bg/60 p-6 transition-colors hover:bg-white/[0.03]">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-cyan ring-1 ring-white/10">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 text-[0.98rem] font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {v.copy}
                  </p>
                </div>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
