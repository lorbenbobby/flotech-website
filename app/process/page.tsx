import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META.process;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function ProcessPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="working system." lead={m.lead} />
      <Process hideHeading />
      <ContactSales />
    </main>
  );
}
