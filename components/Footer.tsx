import React from "react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/content";
import { Mail } from "lucide-react";

const EXPLORE = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const COMPANY = [
  { label: "About", href: "#about" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Responsible Blockchain", href: "#responsible" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#home" aria-label="FloTech home">
              <Logo />
            </a>
            <p className="mt-5 max-w-sm text-[0.9rem] leading-relaxed text-muted">
              FloTech is the public brand of Florian Technologies, a Canadian
              blockchain technology and software consulting company based in
              Ontario.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink transition-colors hover:text-cyan"
            >
              <Mail size={16} className="text-cyan" />
              {SITE.email}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.92rem] text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.92rem] text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.82rem] text-faint">
            © 2026 Florian Technologies. All rights reserved.
          </p>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-faint">
            Blockchain infrastructure · {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
