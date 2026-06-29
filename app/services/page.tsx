import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META.services;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="everything around it." lead={m.lead} />
      <Services hideHeading />
      <ContactSales />
    </main>
  );
}
