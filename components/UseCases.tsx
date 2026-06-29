import React from "react";
import { USE_CASES } from "@/lib/content";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild } from "./Reveal";

// Wider emphasis tiles (by index) for rhythm. No fixed heights — cards size to
// their content and stretch to match their row, so nothing overflows.
const WIDE = new Set([0, 4, 8]);

export function UseCases({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  return (
    <section id="use-cases" className={`relative ${hideHeading ? "pb-20 pt-2 sm:pb-28" : "py-20 sm:py-28"}`}>
      <div className="container-x">
        <SectionHeading
          hidden={hideHeading}
          eyebrow="Use Cases"
          title={
            <>
              Real problems,{" "}
              <span className="text-gradient">solved on-chain.</span>
            </>
          }
          intro="A blockchain is only worth it when it does something better. These are the patterns we build most, each one tied to a concrete outcome."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-4 [grid-auto-flow:dense] sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {USE_CASES.map((item, i) => {
            const Icon = item.icon;
            const feature = i === 0;
            const wide = WIDE.has(i);
            return (
              <RevealChild
                key={item.title}
                className={`h-full ${wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <article className="card group flex h-full flex-col">
                  <span
                    className={`grid place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-hairline transition-transform duration-300 group-hover:scale-105 ${
                      feature ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    <Icon size={feature ? 26 : 20} strokeWidth={1.8} />
                  </span>

                  <div className="mt-5">
                    <h3 className={`font-semibold text-ink ${feature ? "text-2xl" : "text-base"}`}>
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-muted ${
                        feature ? "mt-3 text-[1rem]" : "mt-2 text-[0.9rem]"
                      }`}
                    >
                      {item.copy}
                    </p>
                  </div>

                  {feature && (
                    <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                      contract verified · 0x7f3a…b2e1
                    </p>
                  )}
                </article>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
