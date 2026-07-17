import React, { useEffect, useState } from "react";
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;
import { RiArrowRightUpLine } from "react-icons/ri";

interface HeroProps {
  setActiveSection: (section: string) => void;
  isReady: boolean;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection, isReady }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isReady) {
      const t = setTimeout(() => setMounted(true), 200);
      return () => clearTimeout(t);
    }
  }, [isReady]);

  const navTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row overflow-hidden"
      style={{ background: "#F5FFFF", minHeight: "100vh" }}
    >
      {/* ── LEFT COLUMN — 55% width ── */}
      <div
        className="lg:w-[55%] flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20"
        style={{ paddingTop: "calc(88px + 3rem)", paddingBottom: "3rem" }}
      >
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-[8px] md:text-[16px] font-semibold uppercase tracking-[0.24em] px-4 py-2 rounded-full"
            style={{
              border: "1.5px solid rgba(0,0,0,0.25)",
              color: "rgba(0,0,0,0.65)",
              background: "transparent",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            3+ Years · Software Developer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <h1
            className="font-compressed font-black leading-[1.05]"
            style={{
              fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, 'Franklin Gothic Condensed', sans-serif",
              fontStretch: "condensed",
              fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
              color: "#0a0a0a",
              letterSpacing: "-0.01em",
            }}
          >
            {/* Line 1 */}
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
              YOUR{" "}
              <span
                className="inline-flex items-center px-5 py-1 rounded-full"
                style={{
                  background: "#94FFFF",

                  border: "2px solid #344646",
                  boxShadow: "4px 8px 0px 0px #344646",
                  lineHeight: 1.2,
                  fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif",
                  fontStretch: "condensed",
                }}
              >
                PRODUCT
              </span>{" "}
              DESERVES
            </span>
            {/* Line 2 */}
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
              MORE THAN JUST{" "}
              <span
                className="inline-flex items-center px-5 py-1 rounded-full"
                style={{
                  background: "#F472B6",
                  color: "#0a0a0a",
                  border: "2px solid #344646",
                  boxShadow: "4px 8px 0px 0px #344646",
                  lineHeight: 1.2,
                  fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif",
                  fontStretch: "condensed",
                }}
              >
                CODE
              </span>
              .
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.2)}
          className="mb-10 leading-[1.85] text-sm max-w-[420px]"
          style={{ color: "rgba(0,0,0,0.55)", fontFamily: "'Montserrat', sans-serif" }}
        >
          Hi i'm{" "}
          <strong style={{ color: "#0a0a0a", fontWeight: 700 }}>Boma.</strong>{" "}
          I help startups and businesses turn ideas into fast, scalable web
          and mobile applications that users enjoy.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
          {/* Primary CTA */}
          <motion.button
            onClick={() => navTo("contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.16em]"
            style={{
              background: "#00C5BE",
              color: "#0a0a0a",
              fontFamily: "'Sora', sans-serif",
              border: "2px solid #344646",
              boxShadow: "4px 8px 0px 0px #344646",
            }}
          >
            Let's Build Something
            <RiArrowRightUpLine size={14} />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={() => navTo("projects")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.16em]"
            style={{
              background: "transparent",
              color: "#0a0a0a",
              border: "2px solid #344646",
              boxShadow: "4px 8px 0px 0px #344646",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            View Projects
            <RiArrowRightUpLine size={14} />
          </motion.button>
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN — full-width natural on mobile, 45% absolute on desktop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative w-full lg:w-[45%] overflow-hidden lg:min-h-0"
        style={{ minHeight: undefined }}
      >
        {/* Mobile: natural flow, full width, no forced height */}
        <img
          src="/images/heroN.png"
          alt="Boma George — 3D avatar"
          className="block w-full h-auto select-none lg:hidden"
          draggable={false}
        />
        {/* Desktop: cover fill, anchored top — edge-to-edge, no gap */}
        <img
          src="/images/heroN.png"
          alt=""
          aria-hidden="true"
          className="hidden lg:block lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover lg:object-top select-none"
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
