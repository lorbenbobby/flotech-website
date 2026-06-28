import React from "react";

/**
 * Pure-CSS ambient background. Sits behind all content.
 * Grid panning + glow are disabled automatically under prefers-reduced-motion.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* deep base */}
      <div className="absolute inset-0 bg-bg" />

      {/* panning grid, masked to fade toward edges */}
      <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(120%_85%_at_50%_0%,#000_55%,transparent_100%)]">
        <div className="grid-bg animate-grid-pan absolute -inset-x-10 -top-10 bottom-0 h-[120%] opacity-70" />
      </div>

      {/* ambient glows */}
      <div
        className="glow-blob animate-pulse-soft"
        style={{
          width: 640,
          height: 640,
          top: -200,
          left: "8%",
          background:
            "radial-gradient(circle, rgba(59,108,255,0.30), transparent 65%)",
        }}
      />
      <div
        className="glow-blob animate-pulse-soft"
        style={{
          width: 560,
          height: 560,
          top: 80,
          right: "-6%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.22), transparent 65%)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 700,
          bottom: -360,
          left: "30%",
          background:
            "radial-gradient(circle, rgba(124,92,255,0.14), transparent 70%)",
        }}
      />

      {/* top + bottom vignette for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
