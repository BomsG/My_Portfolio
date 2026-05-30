import React, { useEffect, useState, useRef } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import {
  RiArrowRightLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiArrowDownLine,
  RiSkipDownLine,
} from "react-icons/ri";

interface HeroProps {
  setActiveSection: (section: string) => void;
  isReady: boolean;
}

// ── Cinematic reveal timings (ms after isReady) ───────────────────────────
const TIMINGS = [
  300,   // phase 1 — greeting line
  1000,  // phase 2 — name
  2000,  // phase 3 — typed role
  3100,  // phase 4 — description
  4000,  // phase 5 — CTAs
  4700,  // phase 6 — socials
  5200,  // phase 7 — stats bar
];

const Hero: React.FC<HeroProps> = ({ setActiveSection, isReady }) => {
  const [phase, setPhase] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // Typed text state
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Frontend Developer", "Web Developer", "Mobile Developer"];
  const cursorRef = useRef<HTMLSpanElement>(null);

  // ── Sequential phase reveal ──────────────────────────────────────────────
  useEffect(() => {
    if (!isReady || revealed) return;
    const timers = TIMINGS.map((delay, i) =>
      setTimeout(() => setPhase(i + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [isReady, revealed]);

  // "See all" instantly jumps to full layout
  const handleRevealAll = () => {
    setRevealed(true);
    setPhase(99);
  };

  // ── Typed text (starts at phase 3) ──────────────────────────────────────
  const typingActive = phase >= 3;
  const typingSpeed = isDeleting ? 45 : 88;
  useEffect(() => {
    if (!typingActive) return;
    let timeout: any;
    const currentRole = roles[roleIndex];
    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, typingActive]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current)
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
    }, 520);
    return () => clearInterval(interval);
  }, []);

  const navTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Helper — is this phase visible?
  const show = (n: number) => phase >= n;

  // Shared slide-up animation
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 36, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col">

      {/* ── Full-screen Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.52) saturate(0.65)", willChange: "transform" }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Bottom white fade into next section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 55%, rgba(22, 20, 20, 1) 100%)",
          }}
        />
      </div>

      {/* ── Content Layer ── */}
      <div className="relative z-10 flex-1 flex flex-col container mx-auto px-6 lg:px-20 pt-40 pb-10">
        <div className="flex-1 flex flex-col justify-center max-w-3xl gap-0">

          {/* Phase 1 — greeting badge */}
          <AnimatePresence>
            {show(1) && (
              <motion.div
                key="badge"
                {...reveal()}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 border border-white/25 rounded-full py-1.5 px-5 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 bg-white/8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available for work 
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2 — Name */}
          <AnimatePresence>
            {show(2) && (
              <motion.h1
                key="name"
                {...reveal()}
                className="font-black text-white leading-[0.88] tracking-[-0.04em] mb-8 "
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(3.6rem, 10vw, 8.5rem)",
                }}
              >
                Boma<br />George
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="block h-[5px] w-28 bg-white rounded-full mt-4 origin-left"
                />
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Phase 3 — Typed role */}
          <AnimatePresence>
            {show(3) && (
              <motion.div key="role" {...reveal()} className="flex items-center gap-1 mb-8 h-10">
                <span className="text-2xl md:text-3xl font-light text-white/55 tracking-wide">
                  {typedText}
                </span>
                <span
                  ref={cursorRef}
                  className="inline-block w-[2px] h-7 bg-white/60 ml-0.5"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 4 — Description */}
          <AnimatePresence>
            {show(4) && (
              <motion.p
                key="desc"
                {...reveal()}
                className="text-base md:text-lg text-white/45 mb-12 max-w-lg leading-[1.85] font-light"
              >
                Crafting sleek, high-performance digital experiences where logic
                meets beauty — every design, a statement.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Phase 5 — CTAs */}
          <AnimatePresence>
            {show(5) && (
              <motion.div key="ctas" {...reveal()} className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  onClick={() => navTo("contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.22em] rounded-full shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:bg-white/90 transition-all duration-300"
                >
                  Start a project
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    <RiArrowRightLine size={14} />
                  </span>
                </motion.button>
                <motion.button
                  onClick={() => navTo("projects")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-[11px] font-black uppercase tracking-[0.22em] rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  View works
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 6 — Socials */}
          <AnimatePresence>
            {show(6) && (
              <motion.div key="socials" {...reveal()} className="flex items-center gap-5">
                <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30">Follow</span>
                <div className="w-8 h-[1px] bg-white/15" />
                {[
                  { icon: <RiGithubFill size={18} />, href: "https://github.com/BomsG", label: "GitHub" },
                  { icon: <RiLinkedinBoxFill size={18} />, href: "https://www.linkedin.com/in/boma-george-03b961260/", label: "LinkedIn" },
                  { icon: <RiTwitterXFill size={18} />, href: "https://twitter.com", label: "Twitter" },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.15 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/35 hover:text-white hover:border-white/60 hover:bg-white/8 backdrop-blur-sm transition-all duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Stats bar — Phase 7 ── */}
        <AnimatePresence>
          {show(7) && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-4"
            >
              <div className="flex items-center gap-12">
                {[
                  { num: "20+", label: "Projects" },
                  { num: "2+", label: "Years" },
                  { num: "100%", label: "Success" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-white tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>{s.num}</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/35 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navTo("skills")}
                className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/35 hover:text-white/70 transition-colors"
              >
                Scroll to explore
                <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                  <RiArrowDownLine size={16} />
                </motion.span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── "See all" floating pill — appears after phase 2 but before full reveal ── */}
      <AnimatePresence>
        {show(2) && !show(7) && !revealed && (
          <motion.button
            key="see-all"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleRevealAll}
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.25em] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            <RiSkipDownLine size={14} />
            See all
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
