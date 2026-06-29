"use client";

import React, { useState } from "react";

/**
 * Image with a dark brand gradient under and (optionally) over it. The base
 * gradient is always present, so a slow or failed image still reads as a
 * branded panel rather than a broken icon. Plain <img> keeps it compatible
 * with Next.js static export on GitHub Pages.
 */
export function Photo({
  src,
  alt,
  className = "",
  overlay = "bottom",
  eager = false,
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  className?: string;
  /** Overlay style for legibility / brand tint. */
  overlay?: "bottom" | "full" | "none";
  eager?: boolean;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {/* Brand gradient base + fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a36] via-[#081223] to-[#06101d]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(120% 90% at 100% 0%, rgba(34,211,238,0.18), transparent 55%), radial-gradient(120% 90% at 0% 100%, rgba(59,108,255,0.16), transparent 55%)",
        }}
      />

      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {overlay !== "none" && (
        <div
          aria-hidden
          className={
            overlay === "full"
              ? "absolute inset-0 bg-[#06101d]/55"
              : "absolute inset-0 bg-gradient-to-t from-[#06101d] via-[#06101d]/45 to-[#06101d]/5"
          }
        />
      )}

      {/* subtle inner ring for definition on any background */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-white/10`}
      />
    </div>
  );
}
