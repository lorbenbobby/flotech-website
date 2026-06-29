"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, ArrowRight, MessageSquare } from "lucide-react";
import { LedgerVisual } from "./LedgerVisual";

const TICKER = [
  "block #1,284,071",
  "0x9c4f…a21e",
  "contract deployed",
  "tx confirmed",
  "0x7f3a…b2e1",
  "token transfer",
  "block #1,284,072",
  "0x2db8…ff09",
  "consent granted",
  "audit log written",
  "0x5a1c…7e44",
  "block #1,284,073",
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted">
                <Boxes size={13} className="text-cyan" />
                Blockchain technology &amp; software consulting
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-[2.6rem] font-bold leading-[1.04] sm:text-6xl lg:text-[4.1rem]"
            >
              Blockchain infrastructure
              <br className="hidden sm:block" /> built for{" "}
              <span className="text-gradient">real business.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted sm:text-lg"
            >
              FloTech helps companies design, build, and integrate smart
              contracts, tokenization systems, Web3 platforms, and secure
              blockchain-powered software.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="/contact" className="btn-primary">
                Build With FloTech
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                <MessageSquare size={16} />
                Discuss Your Blockchain Idea
              </Link>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-faint"
            >
              Strategy. Architecture. Smart contracts. Tokenization. Software
              delivery.
            </motion.p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <LedgerVisual />
          </motion.div>
        </div>
      </div>

      {/* Block ticker */}
      <div className="relative mt-16 border-y border-hairline bg-surface py-3">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 whitespace-nowrap will-change-transform">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 font-mono text-[11px] text-faint"
              >
                <span className="h-1 w-1 rounded-full bg-cyan/60" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
