import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureBand } from "@/components/FeatureBand";
import { Services } from "@/components/Services";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META, IMG } from "@/lib/content";

const m = PAGE_META.services;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="everything around it." lead={m.lead} />

      <section className="relative py-12 sm:py-16">
        <div className="container-x space-y-20 sm:space-y-28">
          <FeatureBand
            image={IMG.strategy}
            eyebrow="Strategy"
            title="Consulting that starts with the business problem."
            lead="Before anything is built, we pressure-test the idea: where a ledger genuinely earns its place, which chain fits, and how the system should be shaped. You leave with a roadmap your team can ship against."
            points={[
              "Use-case design and feasibility",
              "Blockchain selection and architecture planning",
              "A realistic, staged delivery roadmap",
            ]}
          />
          <FeatureBand
            image={IMG.developer}
            reverse
            eyebrow="Build"
            title="Smart contracts and software, written to reach production."
            lead="On-chain logic and the platforms around it, built in tested, reviewable increments. Token systems, access control, wallet-connected products, and the APIs and services that tie everything to your stack."
            points={[
              "Secure, audited smart contracts",
              "Web3 platforms and dashboards people want to use",
              "Integration with your existing APIs, data, and tools",
            ]}
          />
          <FeatureBand
            image={IMG.security}
            eyebrow="Assurance"
            title="Security and architecture review before anything ships."
            lead="Risk review, threat modeling, and audit-ready hardening happen before code reaches production, not after an incident. We find the failure modes first."
            points={[
              "Smart contract risk review and threat modeling",
              "Infrastructure and system-design checks",
              "Secure deployment planning and recommendations",
            ]}
          />
        </div>
      </section>

      <Services hideHeading />
      <ContactSales />
    </main>
  );
}
