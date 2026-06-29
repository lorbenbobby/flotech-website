import React from "react";
import { Reveal } from "./Reveal";

function renderTitle(title: string, accent?: string): React.ReactNode {
  if (!accent || !title.includes(accent)) return title;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="text-gradient">{accent}</span>
      {after}
    </>
  );
}

/**
 * Page-level header used at the top of each inner page. Gives every page its
 * own clear title, lead, and breathing room — the "real page" feel.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Optional substring of `title` to highlight in the brand gradient. */
  accent?: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-32 sm:pt-36 lg:pt-40">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.07] sm:text-5xl lg:text-[3.3rem]">
            {renderTitle(title, accent)}
          </h1>
        </Reveal>
        {lead ? (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-muted">
              {lead}
            </p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
