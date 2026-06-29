import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImageBanner } from "@/components/ImageBanner";
import { UseCases } from "@/components/UseCases";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META, IMG } from "@/lib/content";

const m = PAGE_META["use-cases"];
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function UseCasesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="solved on-chain." lead={m.lead} />
      <ImageBanner
        image={IMG.code}
        eager
        kicker="Patterns we build"
        headline={<>Each one tied to a concrete outcome, not a demo.</>}
      />
      <UseCases hideHeading />
      <ContactSales />
    </main>
  );
}
