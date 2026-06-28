"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send, ChevronDown, BadgeCheck, ArrowRight } from "lucide-react";
import { SITE, PROJECT_TYPES } from "@/lib/content";
import { Reveal } from "./Reveal";

const FIELD =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.95rem] text-ink placeholder:text-faint outline-none transition-colors duration-200 focus:border-cyan/50 focus:bg-white/[0.05]";
const LABEL = "mb-2 block text-[0.85rem] font-medium text-ink/90";
const REQ = <span className="text-cyan">*</span>;

export function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `New project inquiry from ${form.name || "a visitor"}`;
    const lines = [
      `Name: ${form.name}`,
      `Company: ${form.company || "(not provided)"}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      "",
      "Message:",
      form.message,
    ];
    const body = lines.join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: invitation */}
          <div>
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] sm:text-4xl md:text-[2.7rem]">
                Build the next layer of your{" "}
                <span className="text-gradient">digital infrastructure.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
                Tell us what you want to build, integrate, tokenize, or secure.
                FloTech will help shape the technical path.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-200 hover:border-cyan/40 hover:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-cyan ring-1 ring-white/10">
                    <Mail size={20} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.78rem] uppercase tracking-[0.16em] text-faint">
                      Email
                    </span>
                    <span className="block truncate font-medium text-ink">
                      {SITE.email}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="ml-auto shrink-0 -rotate-45 text-faint transition-colors group-hover:text-cyan"
                  />
                </a>

                <a href={`mailto:${SITE.email}`} className="btn-ghost w-full">
                  <Mail size={16} />
                  Email FloTech
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-[0.85rem] leading-relaxed text-faint">
                For project inquiries, partnerships, and technical
                consultations, contact FloTech directly. We are based in{" "}
                {SITE.location}.
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass relative rounded-3xl p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-cyan ring-1 ring-white/10">
                    <BadgeCheck size={28} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">
                    Opening your email app
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.92rem] leading-relaxed text-muted">
                    Your message to FloTech is ready to send with your details
                    filled in. If nothing opened, email us directly at{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-cyan underline-offset-4 hover:underline"
                    >
                      {SITE.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-ghost mt-7"
                  >
                    Edit the message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className={LABEL}>
                        Name {REQ}
                      </label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jordan Reyes"
                        className={FIELD}
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-company" className={LABEL}>
                        Company
                      </label>
                      <input
                        id="cf-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Acme Inc."
                        className={FIELD}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="cf-email" className={LABEL}>
                      Email {REQ}
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={FIELD}
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="cf-type" className={LABEL}>
                      Project type {REQ}
                    </label>
                    <div className="relative">
                      <select
                        id="cf-type"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={update("projectType")}
                        className={`${FIELD} appearance-none pr-11 ${
                          form.projectType ? "text-ink" : "text-faint"
                        }`}
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-[#0a1020] text-ink">
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-faint"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="cf-message" className={LABEL}>
                      Message {REQ}
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="What do you want to build, integrate, tokenize, or secure?"
                      className={`${FIELD} resize-y`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={reduce ? undefined : { y: -2 }}
                    className="btn-primary mt-7 w-full"
                  >
                    <Send size={16} />
                    Send via email
                  </motion.button>

                  <p className="mt-4 text-center text-[0.8rem] text-faint">
                    This opens your email app with the details filled in. No data
                    is sent to a server.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
