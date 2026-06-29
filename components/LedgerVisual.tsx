"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileCode2, Coins, BadgeCheck, Wallet } from "lucide-react";

type Node = { id: number; x: number; y: number; r: number };

const NODES: Node[] = [
  { id: 0, x: 95, y: 120, r: 5 },
  { id: 1, x: 235, y: 70, r: 6 },
  { id: 2, x: 395, y: 128, r: 5 },
  { id: 3, x: 470, y: 255, r: 6 },
  { id: 4, x: 360, y: 360, r: 5 },
  { id: 5, x: 205, y: 405, r: 6 },
  { id: 6, x: 95, y: 300, r: 5 },
  { id: 7, x: 282, y: 238, r: 11 }, // center block
];

const SPOKES = [0, 1, 2, 3, 4, 5, 6];
const RING: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
];

function nodeById(id: number) {
  return NODES[id];
}

export function LedgerVisual() {
  const reduce = useReducedMotion();
  const center = nodeById(7);

  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[470px] lg:h-[520px]">
      {/* glow behind graph */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(90, 140, 255,0.18), rgba(59,108,255,0.10) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <svg
        viewBox="0 0 560 480"
        className="h-full w-full"
        fill="none"
        role="img"
        aria-label="Network of connected blockchain nodes feeding a central secure block"
      >
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="560" y2="480">
            <stop stopColor="#3b6cff" />
            <stop offset="1" stopColor="#5a8cff" />
          </linearGradient>
          <radialGradient id="node-grad" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#b9d0ff" />
            <stop offset="1" stopColor="#5a8cff" />
          </radialGradient>
          <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring connections (static, faint) */}
        {RING.map(([a, b], i) => {
          const na = nodeById(a);
          const nb = nodeById(b);
          return (
            <line
              key={`ring-${i}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#line-grad)"
              strokeOpacity={0.16}
              strokeWidth={1}
            />
          );
        })}

        {/* Spoke connections with animated flow */}
        {SPOKES.map((id, i) => {
          const n = nodeById(id);
          return (
            <g key={`spoke-${id}`}>
              <line
                x1={center.x}
                y1={center.y}
                x2={n.x}
                y2={n.y}
                stroke="url(#line-grad)"
                strokeOpacity={0.22}
                strokeWidth={1.2}
              />
              <motion.line
                x1={center.x}
                y1={center.y}
                x2={n.x}
                y2={n.y}
                stroke="url(#line-grad)"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeDasharray="6 30"
                initial={{ strokeDashoffset: 0, opacity: 0.9 }}
                animate={
                  reduce
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: [-72, 0] }
                }
                transition={{
                  duration: 2.6 + (i % 4) * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          );
        })}

        {/* Outer nodes */}
        {NODES.filter((n) => n.id !== 7).map((n, i) => (
          <g key={`node-${n.id}`}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r + 5}
              fill="#5a8cff"
              initial={{ opacity: 0.18, scale: 1 }}
              animate={
                reduce
                  ? { opacity: 0.18 }
                  : { opacity: [0.05, 0.3, 0.05], scale: [1, 1.5, 1] }
              }
              transition={{
                duration: 3 + (i % 5) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill="url(#node-grad)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="white" fillOpacity={0.12} />
          </g>
        ))}

        {/* Center secure block */}
        <g filter="url(#soft-glow)">
          <motion.g
            initial={{ opacity: 1 }}
            animate={reduce ? {} : { y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x={center.x - 30}
              y={center.y - 30}
              width={60}
              height={60}
              rx={14}
              fill="#0a1428"
              stroke="url(#line-grad)"
              strokeWidth={1.6}
            />
            <rect
              x={center.x - 30}
              y={center.y - 30}
              width={60}
              height={60}
              rx={14}
              fill="url(#line-grad)"
              fillOpacity={0.1}
            />
            {/* faceted block glyph */}
            <g
              stroke="#5a8cff"
              strokeWidth={1.6}
              strokeLinejoin="round"
              fill="none"
            >
              <path
                d={`M${center.x} ${center.y - 16} L${center.x + 15} ${center.y - 8} L${center.x + 15} ${center.y + 8} L${center.x} ${center.y + 16} L${center.x - 15} ${center.y + 8} L${center.x - 15} ${center.y - 8} Z`}
              />
              <path d={`M${center.x} ${center.y - 16} L${center.x} ${center.y}`} />
              <path d={`M${center.x} ${center.y} L${center.x + 15} ${center.y - 8}`} />
              <path d={`M${center.x} ${center.y} L${center.x - 15} ${center.y - 8}`} />
            </g>
          </motion.g>
        </g>
      </svg>

      {/* Floating glass cards */}
      <FloatCard
        className="left-0 top-3 sm:-left-2"
        delay={0}
        reduce={!!reduce}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-blue/15 text-blue">
            <FileCode2 size={15} />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-ink">Smart contract</p>
            <p className="font-mono text-[10px] text-muted">verifyTransfer()</p>
          </div>
          <BadgeCheck size={15} className="ml-1 text-cyan" />
        </div>
      </FloatCard>

      <FloatCard
        className="bottom-4 left-1 sm:left-0"
        delay={0.8}
        reduce={!!reduce}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-cyan/15 text-cyan">
            <Coins size={15} />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-ink">Token minted</p>
            <p className="font-mono text-[10px] text-muted">supply 10,000</p>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        className="right-0 top-1/3 hidden sm:block"
        delay={1.5}
        reduce={!!reduce}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-violet/15 text-violet">
            <Wallet size={15} />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-ink">Block confirmed</p>
            <p className="font-mono text-[10px] text-muted">0x7f3a…b2e1</p>
          </div>
        </div>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className = "",
  delay = 0,
  reduce,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      className={`glass absolute z-10 rounded-xl px-3 py-2 shadow-card ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      animate={
        reduce
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -9, 0] }
      }
      transition={
        reduce
          ? { duration: 0.4, delay }
          : {
              opacity: { duration: 0.5, delay },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
