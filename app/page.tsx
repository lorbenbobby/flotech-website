import { Hero } from "@/components/Hero";
import { ImageBanner } from "@/components/ImageBanner";
import { ValueStrip } from "@/components/ValueStrip";
import { FeatureBand } from "@/components/FeatureBand";
import { Explore } from "@/components/Explore";
import { ContactSales } from "@/components/ContactSales";
import { IMG } from "@/lib/content";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />

      <ImageBanner
        image={IMG.heroTeam}
        eager
        kicker="Blockchain-first delivery"
        headline={<>From first conversation to a system running in production.</>}
      />

      <ValueStrip />

      <section className="relative py-16 sm:py-20">
        <div className="container-x">
          <FeatureBand
            image={IMG.whiteboard}
            eyebrow="Why FloTech"
            title="We treat blockchain as infrastructure, not a buzzword."
            lead="Most blockchain projects stall in the gap between idea and production. We close it, pressure-testing where a ledger earns its place, then designing, building, securing, and shipping the system around it."
            points={[
              "Strategy and architecture before a line of contract code",
              "Security review built into delivery, not bolted on after",
              "Systems that integrate with the software you already run",
            ]}
          />
        </div>
      </section>

      <Explore />
      <ContactSales />
    </main>
  );
}
