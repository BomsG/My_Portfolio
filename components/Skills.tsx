import React from "react";
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6" style={{ background: "#141313ff" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-3">What I Use</p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-none tracking-[-0.03em]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Core<br />Stack.
            </h2>
          </div>
          <p className="text-base text-white/35 font-light leading-relaxed max-w-xs md:text-right">
            Tools I trust to build reliable, beautiful products from frontend to backend.
          </p>
        </motion.div>

        {/* Skills grid — gap-px on dark bg creates sleek dividers */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-3xl overflow-hidden"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
              className="group flex flex-col items-center justify-center gap-4 py-12 px-6 transition-all duration-300 cursor-default"
              style={{ background: "#111111" }}
            >
              <div className="text-white/35 group-hover:text-black transition-colors duration-300 scale-125">
                {skill.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35 group-hover:text-black/60 transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
