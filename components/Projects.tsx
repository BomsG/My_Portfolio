import React, { useState } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import { RiArrowRightUpLine, RiGlobalLine, RiSmartphoneLine, RiArrowRightLine } from "react-icons/ri";
import { PROJECTS } from "../constants";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-12 lg:gap-20 items-center ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-[55%]">
        <div
          className="relative overflow-hidden rounded-[2rem] bg-white transition-transform hover:-translate-y-2 duration-500"
          style={{
            border: "2px solid #1F2828",
            boxShadow: "8px 12px 0px 0px #1F2828",
            aspectRatio: "16/10",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-[45%] flex flex-col items-start">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/50 mb-4">
          FRONTEND DEVELOPER . 2026
        </p>

        <h3
          className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-4 tracking-[-0.03em] uppercase"
          style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="text-[#0a0a0a]/60 text-base leading-relaxed mb-8 font-medium max-w-lg">
          {project.solution}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold text-[#1F2828]"
              style={{
                border: "1.5px solid #1F2828",
                background: "#ffffff",
              }}
            >
              <span className="text-[#FF00CC] font-black tracking-tighter">{'</>'}</span>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-[#1F2828] transition-transform hover:-translate-y-1 active:translate-y-0"
            style={{
              background: "#00E5D4",
              border: "2px solid #1F2828",
              boxShadow: "4px 6px 0px 0px #1F2828",
            }}
          >
            Live website <RiArrowRightUpLine size={18} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-[#1F2828] transition-transform hover:-translate-y-1 active:translate-y-0"
            style={{
              background: "#EBFFFF",
              border: "2px solid #1F2828",
              boxShadow: "4px 6px 0px 0px #1F2828",
            }}
          >
            Case study <RiArrowRightUpLine size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden" style={{ background: "#F5FFFF" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <RiArrowRightLine size={32} color="#1F2828" />
            <h2
              className="text-4xl md:text-5xl font-black text-[#1F2828] leading-none tracking-[-0.03em] uppercase"
              style={{ fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
            >
              Selected Works
            </h2>
          </motion.div>

          {/* Tab toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-1.5 rounded-full"
            style={{ border: "2px solid #1F2828", background: "#ffffff" }}
          >
            {(["web", "mobile"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300"
                style={
                  activeTab === tab
                    ? { background: "#00E5D4", color: "#1F2828", border: "2px solid #1F2828" }
                    : { background: "transparent", color: "#1F2828", border: "2px solid transparent" }
                }
              >
                {tab === "web" ? <RiGlobalLine size={14} /> : <RiSmartphoneLine size={14} />}
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* List of projects in alternating layout */}
        <div className="flex flex-col gap-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-32"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
