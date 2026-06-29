import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const JOURNEY = [
  "Idea",
  "Architecture",
  "Prototype",
  "Implementation",
  "Security review",
  "Launch",
];

export function About({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  return (
    <section id="about" className={`relative ${hideHeading ? "pb-20 pt-2 sm:pb-28" : "py-20 sm:py-28"}`}>
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            {!hideHeading && (
              <>
                <Reveal>
                  <span className="eyebrow">About FloTech</span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
                    Blockchain as infrastructure,
                    <br className="hidden sm:block" /> not noise.
                  </h2>
                </Reveal>
              </>
            )}

            <div className={`${hideHeading ? "" : "mt-6"} space-y-5 text-[1.02rem] leading-relaxed text-muted`}>
              <Reveal delay={0.1}>
                <p>
                  Florian Technologies, publicly branded as FloTech, is a
                  Canadian blockchain technology and software consulting company
                  based in Ontario. We help companies move from blockchain idea
                  to architecture, prototype, implementation, security review,
                  and launch.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Our focus is practical blockchain systems that connect with
                  your existing software, data, users, wallets, and business
                  workflows. The result is meant to run in production, not to
                  sit in a slide deck.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-cyan/60 pl-5 text-lg font-medium leading-relaxed text-ink">
                FloTech exists for teams that see blockchain as infrastructure.
                We turn smart contracts, tokenization, and digital trust systems
                into products people can actually use.
              </blockquote>
            </Reveal>
          </div>

          {/* Right: idea to launch path */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass relative rounded-2xl p-7">
              <div
                className="absolute inset-0 rounded-2xl opacity-60"
                style={{
                  background:
                    "radial-gradient(120% 80% at 100% 0%, rgba(90, 140, 255,0.10), transparent 60%)",
                }}
              />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan/90">
                  From idea to working system
                </p>
                <ul className="mt-6 space-y-0">
                  {JOURNEY.map((step, i) => (
                    <li key={step} className="relative flex items-center gap-4 pb-6 last:pb-0">
                      {i < JOURNEY.length - 1 && (
                        <span className="absolute left-[11px] top-6 h-full w-px bg-gradient-to-b from-cyan/40 to-blue/10" />
                      )}
                      <span className="relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold text-[#05080f]">
                        {i + 1}
                      </span>
                      <span className="flex items-center gap-2 text-[0.97rem] font-medium text-ink">
                        {step}
                        {i < JOURNEY.length - 1 && (
                          <ArrowRight size={13} className="text-faint" />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
