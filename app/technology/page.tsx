import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Technology } from "@/components/Technology";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META.technology;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function TechnologyPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="digital trust." lead={m.lead} />
      <Technology hideHeading />
      <ContactSales />
    </main>
  );
}
