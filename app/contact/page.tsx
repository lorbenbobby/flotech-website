import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { PAGE_META } from "@/lib/content";

const m = PAGE_META.contact;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="digital infrastructure." lead={m.lead} />
      <Contact hideHeading />
    </main>
  );
}
