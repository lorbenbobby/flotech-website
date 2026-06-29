import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Industries } from "@/components/Industries";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META.industries;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="earns its place." lead={m.lead} />
      <Industries hideHeading />
      <ContactSales />
    </main>
  );
}
