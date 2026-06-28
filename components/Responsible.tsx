import React from "react";
import { RESPONSIBLE } from "@/lib/content";
import { Reveal, RevealGroup, RevealChild } from "./Reveal";

export function Responsible() {
  return (
    <section id="responsible" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            {/* ambient accents */}
            <div
              aria-hidden
              className="glow-blob"
              style={{
                width: 360,
                height: 360,
                left: -80,
                top: -120,
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.16), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="glow-blob"
              style={{
                width: 320,
                height: 320,
                right: -60,
                bottom: -120,
                background:
                  "radial-gradient(circle, rgba(124,92,255,0.16), transparent 70%)",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              {/* Left: statement */}
              <div>
                <span className="eyebrow">Responsible Blockchain</span>
                <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl">
                  Responsible blockchain,{" "}
                  <span className="text-gradient">built for real use.</span>
                </h2>
                <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
                  Blockchain only helps when it is built with care. We hold every
                  project to the same standard, whether it ships to an early
                  startup or a regulated enterprise.
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan/80">
                  utility · security · clarity
                </p>
              </div>

              {/* Right: points */}
              <RevealGroup
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                stagger={0.07}
              >
                {RESPONSIBLE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <RevealChild key={item.title}>
                      <div className="flex gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-cyan ring-1 ring-white/10">
                          <Icon size={18} strokeWidth={1.9} />
                        </span>
                        <div>
                          <h3 className="text-[0.98rem] font-semibold text-ink">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    </RevealChild>
                  );
                })}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
