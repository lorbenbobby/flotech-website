import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that govern use of the FloTech (Florian Technologies) website.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms and Conditions"
      updated="June 29, 2026"
      intro="These terms govern your use of this website, operated by FloTech, the public brand of Florian Technologies. By using the site you agree to them. They do not govern any consulting engagement, which is covered by a separate written agreement."
      sections={[
        {
          heading: "Use of the site",
          body: (
            <p>
              You may view and use this website for lawful, informational
              purposes. You agree not to misuse it, attempt to disrupt it, or
              use it in any way that infringes the rights of others.
            </p>
          ),
        },
        {
          heading: "No professional advice",
          body: (
            <p>
              Content on this site is provided for general information about our
              services. It is not technical, legal, financial, or investment
              advice, and it should not be relied on as such. Any decision based
              on it is your own responsibility.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The FloTech and Florian Technologies names, branding, text, and
              design on this site are owned by Florian Technologies unless
              otherwise noted. Photography is used under license from its
              respective providers. You may not reproduce our branding or
              content without permission.
            </p>
          ),
        },
        {
          heading: "Service descriptions",
          body: (
            <p>
              Descriptions of services on this site are illustrative. The scope,
              deliverables, timelines, and terms of any actual engagement are
              defined in a separate written agreement between you and Florian
              Technologies.
            </p>
          ),
        },
        {
          heading: "External links",
          body: (
            <p>
              The site may link to or load resources from third parties. We are
              not responsible for the content, policies, or availability of
              those external services.
            </p>
          ),
        },
        {
          heading: "Disclaimer and limitation of liability",
          body: (
            <p>
              This website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind. To the
              fullest extent permitted by law, Florian Technologies is not
              liable for any loss or damage arising from your use of, or
              inability to use, this website.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of the Province of Ontario
              and the federal laws of Canada applicable there, without regard to
              conflict-of-law rules.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: (
            <p>
              We may update these terms from time to time. Continued use of the
              site after changes are posted constitutes acceptance of the
              updated terms.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
              <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
