import React from "react";

export function LogoMark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ft-mark" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#58aaff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#ft-mark)" />
      <rect
        x="1.6"
        y="1.6"
        width="36.8"
        height="36.8"
        rx="10.4"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="1.2"
      />
      {/* Faceted block: hexagon split into three faces */}
      <g
        stroke="#06121f"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M20 8 L31 14 L31 26 L20 32 L9 26 L9 14 Z" />
        <path d="M20 8 L20 20 L31 14" />
        <path d="M20 20 L20 32" />
        <path d="M20 20 L9 14" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.18rem] font-bold tracking-tight ${className}`}
    >
      Flo<span className="text-gradient">Tech</span>
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <Wordmark />
    </span>
  );
}
