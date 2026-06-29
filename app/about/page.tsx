import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Responsible } from "@/components/Responsible";
import { ContactSales } from "@/components/ContactSales";
import { Reveal } from "@/components/Reveal";
import { PAGE_META, STATS } from "@/lib/content";

const m = PAGE_META.about;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="not noise." lead={m.lead} />
      <About hideHeading />

      <section className="relative pb-8">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-surface2 sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label} className="bg-bg/60 p-6">
                  <p className="text-gradient text-xl font-bold sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Responsible />
      <ContactSales />
    </main>
  );
}
