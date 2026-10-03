import React from "react";

/**
 * FloTech mark: a solid, shaded isometric block (a "block" in the blockchain
 * sense) on a rounded brand-blue tile. Three lit faces give it real depth
 * rather than a flat wireframe.
 */
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
        <linearGradient id="ft-tile" x1="4" y1="3" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b6cff" />
          <stop offset="1" stopColor="#5a8cff" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#ft-tile)" />
      <rect x="1.6" y="1.6" width="36.8" height="36.8" rx="10.4" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" />

      {/* Isometric block: top (lightest), left (mid), right (deepest) */}
      <g strokeLinejoin="round">
        <path d="M20 8 L31 14 L20 20 L9 14 Z" fill="#ffffff" />
        <path d="M9 14 L20 20 L20 32 L9 26 Z" fill="#cdddff" />
        <path d="M31 14 L20 20 L20 32 L31 26 Z" fill="#9db8ef" />
        <path d="M20 20 L20 32 M20 20 L9 14 M20 20 L31 14" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="0.6" />
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
