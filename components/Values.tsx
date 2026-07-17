import React from "react";
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;
import { VALUES } from "../constants";

const Values: React.FC = () => {
  return (
    <section className="py-32 px-6" style={{ background: "#F5FFFF" }}>
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
              style={{ color: "rgba(255,255,255,0.25)" }}>Why Me</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-[-0.03em]"
              style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}>
              What I bring<br />to your team.
            </h2>
          </div>
          <p className="text-base font-light leading-relaxed max-w-xs md:text-right"
            style={{ color: "rgba(255,255,255,0.32)" }}>
            Technical skill fused with professional craft and genuine collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.18)" }}
              className="group relative p-9 rounded-[2rem] overflow-hidden cursor-default transition-all duration-400"
              style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Large decorative index */}
              <span
                className="absolute top-5 right-7 text-7xl font-black leading-none select-none"
                style={{ color: "rgba(255,255,255,0.04)", fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}>
                {value.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-3 tracking-tight transition-colors duration-300"
                style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}>
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed font-light"
                style={{ color: "rgba(255,255,255,0.38)" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
