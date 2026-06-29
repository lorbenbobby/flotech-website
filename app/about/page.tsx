import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImageBanner } from "@/components/ImageBanner";
import { FeatureBand } from "@/components/FeatureBand";
import { About } from "@/components/About";
import { Responsible } from "@/components/Responsible";
import { ContactSales } from "@/components/ContactSales";
import { Reveal } from "@/components/Reveal";
import { PAGE_META, STATS, IMG } from "@/lib/content";

const m = PAGE_META.about;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="not noise." lead={m.lead} />

      <ImageBanner image={IMG.collaborate} eager />

      <About hideHeading />

      <section className="relative pb-6">
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

      <section className="relative py-14 sm:py-20">
        <div className="container-x">
          <FeatureBand
            image={IMG.meeting}
            eyebrow="How we work"
            title="Senior, hands-on, and accountable through launch."
            lead="We work as a focused technical partner, close to your team, clear about trade-offs, and present from the first diagram to the day-two work after launch. The imagery here reflects the kind of technology consulting and delivery we do."
            points={[
              "Architecture and security decisions made with you, not for you",
              "Plain-language documentation your team can own",
              "Based in Ontario, Canada; delivering remotely",
            ]}
          />
        </div>
      </section>

      <Responsible />
      <ContactSales />
    </main>
  );
}
