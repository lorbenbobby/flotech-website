"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactSales() {
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-hairline bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
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

              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                className="mt-8 inline-block"
              >
                <Link href="/contact" className="btn-primary">
                  Contact Sales
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

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
