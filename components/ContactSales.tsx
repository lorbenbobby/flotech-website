"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactSales() {
  const reduce = useReducedMotion();

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="glow-blob"
              style={{
                width: 420,
                height: 280,
                left: "50%",
                top: -120,
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(circle, rgba(59,108,255,0.22), transparent 70%)",
              }}
            />

            <div className="relative">
              <span className="eyebrow justify-center">Engagements</span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-[1.12] sm:text-4xl">
                Custom blockchain work needs a{" "}
                <span className="text-gradient">real conversation.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
                Every blockchain system is different. FloTech scopes work around
                business goals, security needs, integrations, timelines, and
                technical complexity.
              </p>

              <motion.a
                href="#contact"
                onClick={scrollToContact}
                whileHover={reduce ? undefined : { y: -2 }}
                className="btn-primary mt-8"
              >
                Contact Sales
                <ArrowRight size={16} />
              </motion.a>

              <p className="mt-5 text-[0.85rem] text-faint">
                No packages to pick from. Tell us the goal and the constraints,
                and we will map the path.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
