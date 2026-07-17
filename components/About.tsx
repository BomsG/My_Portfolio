import React from "react";
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "#F5FFFF" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-16 items-center">

          {/* Image — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src="/images/bom.jpeg"
                alt="Boma George"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-4 lg:-right-6 text-white rounded-3xl px-7 py-5 shadow-2xl"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-4xl font-black leading-none" style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}>20+</div>
              <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/35 mt-1">Projects</div>
            </motion.div>
          </motion.div>

          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-4">My Philosophy</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-[-0.03em]"
                style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
              >
                Good enough<br />is never enough.
              </h2>
            </div>

            <div className="w-12 h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />

            <div className="space-y-5 text-[15px] leading-[1.9] font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
              <p>
                My coding journey hasn't been an easy one. From struggling to understand logic to countless
                sleepless nights, the path has been filled with challenges — but through every setback I
                pushed forward. What makes you a loser isn't failure, it's the moment you stop getting up.
              </p>
              <p>
                I give 100% to every project I handle. Client satisfaction is paramount, and I maintain clear
                communication throughout — because great software is as much about people as it is about code.
              </p>
              <p>
                I craft products using modern JavaScript frameworks, blending frontend finesse with backend
                expertise to deliver solutions that truly shine. Bold, engaging, and built to leave an impression.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { num: "2+", label: "Years Exp." },
                { num: "20+", label: "Shipped" },
                { num: "100%", label: "Dedication" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-white" style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}>{s.num}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
