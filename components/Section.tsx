import React from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
