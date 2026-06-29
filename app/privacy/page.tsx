import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FloTech (Florian Technologies) handles information from visitors to this website.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      updated="June 29, 2026"
      intro="This policy explains what information FloTech, the public brand of Florian Technologies, collects through this website and how it is used. We keep this deliberately simple, because this site is built to collect as little as possible."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                This website is a static marketing site. It does not use
                tracking cookies, advertising pixels, or third-party analytics,
                and it does not run a server that stores submissions.
              </p>
              <p>
                The only personal information we receive is what you choose to
                send us. The contact form opens your own email application with
                the details pre-filled; nothing is transmitted until you send
                that email. We then receive whatever you include, such as your
                name, company, email address, and message.
              </p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <p>
              We use the information you send only to respond to your inquiry,
              scope potential work, and communicate with you about it. We do not
              sell, rent, or share it with third parties for marketing.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <>
              <p>
                The site is hosted on GitHub Pages, which may log basic request
                data (such as IP addresses) as part of normal operation, subject
                to GitHub&apos;s own privacy practices.
              </p>
              <p>
                Some imagery is loaded from the Unsplash content delivery
                network. When your browser loads those images, Unsplash may
                receive standard request information. We do not share any
                contact details with these providers.
              </p>
            </>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              Emails you send us are retained in our mailbox for as long as
              needed to handle your inquiry and any resulting engagement. You
              may ask us to delete your correspondence at any time.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              Because we only hold what you email us, you can contact us to
              request access to, correction of, or deletion of that
              information.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. The latest version
              will always be posted on this page with a revised date above.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy can be sent to{" "}
              <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              . FloTech is based in {SITE.location}.
            </p>
          ),
        },
      ]}
    />
  );
}
