import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ImageBanner } from "@/components/ImageBanner";
import { Contact } from "@/components/Contact";
import { PAGE_META, IMG } from "@/lib/content";

const m = PAGE_META.contact;
export const metadata: Metadata = { title: m.eyebrow, description: m.description };

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow={m.eyebrow} title={m.title} accent="digital infrastructure." lead={m.lead} />
      <ImageBanner image={IMG.meeting} eager />
      <Contact hideHeading />
    </main>
  );
}
