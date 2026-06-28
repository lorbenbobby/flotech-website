import React from "react";
import { PROCESS } from "@/lib/content";
import { SectionHeading } from "./Section";
import { RevealGroup, RevealChild } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              From idea to{" "}
              <span className="text-gradient">working system.</span>
            </>
          }
          intro="A clear path from first conversation to a platform that runs in production. Every step is deliberate, reviewable, and built to keep you in control."
        />

        <div className="relative mt-12 max-w-3xl">
          {/* Vertical spine */}
          <span
            aria-hidden
            className="absolute left-[27px] top-3 bottom-12 w-px bg-gradient-to-b from-cyan/50 via-blue/30 to-transparent"
          />

          <RevealGroup className="space-y-5" stagger={0.07}>
            {PROCESS.map((step) => (
              <RevealChild key={step.n}>
                <div className="group relative flex gap-5 sm:gap-7">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-mono text-base font-bold text-[#05080f] shadow-[0_8px_24px_-8px_rgba(34,211,238,0.6)] transition-transform duration-300 group-hover:scale-105">
                    {step.n}
                  </span>
                  <div className="card flex-1 py-5">
                    <h3 className="text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-muted">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
