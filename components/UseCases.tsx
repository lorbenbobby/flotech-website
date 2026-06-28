import React from "react";
import { USE_CASES } from "@/lib/content";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild } from "./Reveal";

/**
 * Fixed bento tiling that fills a 4-column grid cleanly (4x4 on desktop).
 * Index-aligned to USE_CASES order. On mobile it collapses to a 2-col flow.
 *   r1: [A A B B]
 *   r2: [A A C D]
 *   r3: [E E F F]
 *   r4: [G H I I]
 */
const LAYOUT = [
  "sm:col-span-2 sm:row-span-2", // 0 feature
  "sm:col-span-2", // 1 wide
  "", // 2 normal
  "", // 3 normal
  "sm:col-span-2", // 4 wide
  "sm:col-span-2", // 5 wide
  "", // 6 normal
  "", // 7 normal
  "sm:col-span-2", // 8 wide
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
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
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[172px]"
          stagger={0.06}
        >
          {USE_CASES.map((item, i) => {
            const Icon = item.icon;
            const feature = i === 0;
            return (
              <RevealChild
                key={item.title}
                className={`h-full ${LAYOUT[i]}`}
              >
                <article
                  className={`card group flex h-full flex-col ${
                    feature ? "justify-between" : ""
                  }`}
                >
                  <span
                    className={`grid place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 ${
                      feature ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    <Icon size={feature ? 26 : 20} strokeWidth={1.8} />
                  </span>

                  <div className={feature ? "" : "mt-4"}>
                    <h3
                      className={`font-semibold text-ink ${
                        feature ? "mt-6 text-2xl" : "text-base"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-muted ${
                        feature ? "mt-3 text-[1rem]" : "mt-2 text-[0.9rem]"
                      }`}
                    >
                      {item.copy}
                    </p>
                    {feature && (
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                        contract verified · 0x7f3a…b2e1
                      </p>
                    )}
                  </div>
                </article>
              </RevealChild>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
