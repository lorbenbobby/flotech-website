import { Hero } from "@/components/Hero";
import { ValueStrip } from "@/components/ValueStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { UseCases } from "@/components/UseCases";
import { Process } from "@/components/Process";
import { Technology } from "@/components/Technology";
import { Responsible } from "@/components/Responsible";
import { ContactSales } from "@/components/ContactSales";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <ValueStrip />
        <About />
        <Services />
        <Industries />
        <UseCases />
        <Process />
        <Technology />
        <Responsible />
        <ContactSales />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
