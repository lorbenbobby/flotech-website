import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImageBanner } from "@/components/ImageBanner";
import { Industries } from "@/components/Industries";
import { ContactSales } from "@/components/ContactSales";
import { PAGE_META, IMG } from "@/lib/content";

const m = PAGE_META.industries;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="earns its place." lead={m.lead} />
      <ImageBanner
        image={IMG.office}
        eager
        kicker="Across sectors"
        headline={<>Verifiable records, automated rules, and shared trust, applied to real work.</>}
      />
      <Industries hideHeading />
      <ContactSales />
    </main>
  );
}
