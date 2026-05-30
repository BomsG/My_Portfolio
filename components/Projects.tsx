import React, { useState } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import { RiExternalLinkLine, RiGithubFill, RiGlobalLine, RiSmartphoneLine } from "react-icons/ri";
import { PROJECTS } from "../constants";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="group flex flex-col h-full overflow-hidden rounded-[2rem] transition-all duration-500"
    style={{
      background: "#1a1a1a",
      border: "1px solid rgba(255,255,255,0.07)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-[16/10]" style={{ background: "#222" }}>
      <motion.img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Hover links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform"
          onClick={(e) => e.stopPropagation()}>
          <RiExternalLinkLine size={18} />
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform"
          onClick={(e) => e.stopPropagation()}>
          <RiGithubFill size={18} />
        </a>
      </div>

      {/* Tech badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em]"
          style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}>
          {project.tech[0]}
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="p-7 flex flex-col flex-grow">
      <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-white/70 transition-colors"
        style={{ fontFamily: "'Sora', sans-serif" }}>
        {project.title}
      </h3>
      <p className="text-sm font-light leading-relaxed line-clamp-2 mb-5 flex-grow"
        style={{ color: "rgba(255,255,255,0.38)" }}>
        {project.solution}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-tight"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const [direction, setDirection] = useState(0);
  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 150 : -150, opacity: 0, zIndex: 0 }),
  };

  const toggleTab = (tab: "web" | "mobile") => {
    if (tab !== activeTab) {
      setDirection(tab === "mobile" ? 1 : -1);
      setActiveTab(tab);
    }
  };

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden" style={{ background: "#111111" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3"
              style={{ color: "rgba(255,255,255,0.25)" }}>My Work</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-[-0.03em]"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Selected<br />Works.
            </h2>
          </div>

          {/* Tab toggle */}
          <div className="flex items-center gap-2">
            {(["web", "mobile"] as const).map((tab) => (
              <button key={tab} onClick={() => toggleTab(tab)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300"
                style={activeTab === tab
                  ? { background: "#ffffff", color: "#0a0a0a" }
                  : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }
                }
              >
                {tab === "web" ? <RiGlobalLine size={13} /> : <RiSmartphoneLine size={13} />}
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="relative min-h-[560px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 260, damping: 30 }, opacity: { duration: 0.3 } }}
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-14 flex justify-center gap-2">
          {(["web", "mobile"] as const).map((tab) => (
            <button key={tab} onClick={() => toggleTab(tab)}
              className="rounded-full transition-all duration-400"
              style={{
                width: activeTab === tab ? "2.5rem" : "0.5rem",
                height: "0.5rem",
                background: activeTab === tab ? "#ffffff" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
