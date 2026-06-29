import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { UseCases } from "@/components/UseCases";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META["use-cases"];
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function UseCasesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="solved on-chain." lead={m.lead} />
      <UseCases hideHeading />
      <ContactSales />
    </main>
  );
}
