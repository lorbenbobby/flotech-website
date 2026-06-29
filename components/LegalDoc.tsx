import React from "react";

export function LegalDoc({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: React.ReactNode }[];
}) {
  return (
    <main id="main">
      <section className="relative pb-24 pt-32 sm:pt-36 lg:pt-40">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            Last updated: {updated}
          </p>
          <p className="mt-8 text-[1.05rem] leading-relaxed text-muted">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.heading}</h2>
                <div className="mt-3 space-y-3 text-[1rem] leading-relaxed text-muted">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
