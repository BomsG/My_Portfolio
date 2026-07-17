import React, { useEffect, useState } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;

interface CurtainLoaderProps {
  onComplete: () => void;
}

// ── Hand SVG component ────────────────────────────────────────────────────
const Hand: React.FC<{ flipped?: boolean }> = ({ flipped }) => (
  <svg
    viewBox="0 0 72 116"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "72px",
      height: "116px",
      transform: flipped ? "scaleX(-1)" : "none",
      filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))",
    }}
  >
    {/* Pinky finger */}
    <rect x="1" y="28" width="12" height="36" rx="6" fill="rgba(255,255,255,0.92)" />
    {/* Ring finger */}
    <rect x="15" y="16" width="13" height="48" rx="6.5" fill="rgba(255,255,255,0.92)" />
    {/* Middle finger */}
    <rect x="30" y="8" width="14" height="54" rx="7" fill="rgba(255,255,255,0.92)" />
    {/* Index finger */}
    <rect x="46" y="14" width="13" height="48" rx="6.5" fill="rgba(255,255,255,0.92)" />
    {/* Palm */}
    <path
      d="M1 58 Q1 48 11 48 L61 48 Q71 48 71 58 L71 90 Q71 102 59 104 L13 104 Q1 102 1 90 Z"
      fill="rgba(255,255,255,0.92)"
    />
    {/* Thumb */}
    <path
      d="M61 52 Q72 50 72 66 Q72 78 61 80 L61 60 Z"
      fill="rgba(255,255,255,0.92)"
    />
    {/* Subtle knuckle lines */}
    <line x1="4"  y1="58" x2="13" y2="57" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="17" y1="58" x2="27" y2="57" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="32" y1="58" x2="43" y2="57" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="48" y1="58" x2="58" y2="57" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ── Main component ────────────────────────────────────────────────────────
const CurtainLoader: React.FC<CurtainLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"closed" | "grip" | "open" | "done">("closed");

  useEffect(() => {
    // 1. Show hands gripping at centre seam
    const t1 = setTimeout(() => setPhase("grip"), 500);
    // 2. Curtains pull open
    const t2 = setTimeout(() => setPhase("open"), 1100);
    // 3. Remove from DOM
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === "done") return null;

  const panelOpen = phase === "open";
  const handShown = phase === "grip" || phase === "open";

  const easing = [0.76, 0, 0.24, 1] as const;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.35, delay: 0.05 } }}
        >
          {/* ── LEFT PANEL ── */}
          <motion.div
            className="relative w-1/2 h-full overflow-hidden"
            style={{ background: "#0a0a0a", willChange: "transform" }}
            animate={panelOpen ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 1.1, ease: easing }}
          >
            {/* Subtle vertical grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,rgba(255,255,255,1) 0px,rgba(255,255,255,1) 1px,transparent 1px,transparent 48px)",
              }}
            />
            {/* Inner-edge shadow */}
            <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />

            {/* Hand — right edge of left panel */}
            <AnimatePresence>
              {handShown && (
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                  style={{ zIndex: 10, willChange: "transform, opacity" }}
                  initial={{ opacity: 0, x: 32, rotate: -12 }}
                  animate={{
                    opacity: 1,
                    x: panelOpen ? 56 : 8,
                    rotate: panelOpen ? -6 : -12,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: panelOpen ? 1.1 : 0.4, ease: panelOpen ? easing : "easeOut" }}
                >
                  <Hand flipped />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT PANEL ── */}
          <motion.div
            className="relative w-1/2 h-full overflow-hidden"
            style={{ background: "#0a0a0a", willChange: "transform" }}
            animate={panelOpen ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 1.1, ease: easing }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,rgba(255,255,255,1) 0px,rgba(255,255,255,1) 1px,transparent 1px,transparent 48px)",
              }}
            />
            <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

            {/* Hand — left edge of right panel */}
            <AnimatePresence>
              {handShown && (
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ zIndex: 10, willChange: "transform, opacity" }}
                  initial={{ opacity: 0, x: -32, rotate: 12 }}
                  animate={{
                    opacity: 1,
                    x: panelOpen ? -56 : -8,
                    rotate: panelOpen ? 6 : 12,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: panelOpen ? 1.1 : 0.4, ease: panelOpen ? easing : "easeOut" }}
                >
                  <Hand />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Centre logo ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
            animate={panelOpen ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-center text-white select-none"
            >
              <div
                className="font-black leading-none"
                style={{ fontSize: "clamp(4rem,12vw,7.5rem)", fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif", letterSpacing: "-0.04em" }}
              >
                BG
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.55 }}
                className="h-[2px] bg-white mt-4 mx-auto origin-left rounded-full"
                style={{ width: "100%" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="text-[10px] font-black uppercase tracking-[0.38em] text-white/45 mt-3"
              >
                Boma George · Developer
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainLoader;
