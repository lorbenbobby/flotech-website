import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { Explore } from "@/components/Explore";
import { ContactSales } from "@/components/ContactSales";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ValueStrip />
      <Explore />
      <ContactSales />
    </main>
  );
}
