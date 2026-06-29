import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImageBanner } from "@/components/ImageBanner";
import { FeatureBand } from "@/components/FeatureBand";
import { Technology } from "@/components/Technology";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META, IMG } from "@/lib/content";

const m = PAGE_META.technology;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function TechnologyPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="digital trust." lead={m.lead} />
      <ImageBanner
        image={IMG.security}
        eager
        kicker="On-chain and off-chain"
        headline={<>Serious infrastructure behind every interface.</>}
      />

      <section className="relative py-12 sm:py-16">
        <div className="container-x">
          <FeatureBand
            image={IMG.monitoring}
            reverse
            eyebrow="Reliability"
            title="Built to be observed, hardened, and maintained."
            lead="Secure databases, scalable cloud hosting, audit-ready logs, and monitoring that tells us something is wrong before your users do. The unglamorous work that keeps a platform healthy."
            points={[
              "Off-chain data and APIs done right",
              "Traceable, exportable audit history",
              "Monitoring and alerting from day one",
            ]}
          />
        </div>
      </section>

      <Technology hideHeading />
      <ContactSales />
    </main>
  );
}
