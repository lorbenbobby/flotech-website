import React from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { Photo } from "./Photo";
import type { Img } from "@/lib/content";

/**
 * Image + text section. Alternating sides build an image-led rhythm down a
 * page instead of card-only walls of text.
 */
export function FeatureBand({
  image,
  eyebrow,
  title,
  lead,
  points,
  reverse = false,
  eager = false,
}: {
  image: Img;
  eyebrow?: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  points?: string[];
  reverse?: boolean;
  eager?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        direction={reverse ? "left" : "right"}
        className={reverse ? "lg:order-2" : ""}
      >
        <Photo
          src={image.src}
          alt={image.alt}
          eager={eager}
          className="aspect-[5/4] w-full shadow-card sm:aspect-[16/10]"
        />
      </Reveal>

      <Reveal
        delay={0.08}
        className={reverse ? "lg:order-1" : ""}
      >
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-[2rem]">
            {title}
          </h3>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{lead}</p>
          {points && points.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-cyan ring-1 ring-hairline">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-ink">{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Reveal>
    </div>
  );
}
