import React, { useState } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import {
  RiExternalLinkLine,
  RiGithubFill,
  RiGlobalLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import { PROJECTS } from "../constants";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
    whileHover={{ y: -10 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.23, 1, 0.32, 1],
    }}
    className="group relative bg-white dark:bg-obsidian-950 rounded-[2.5rem] overflow-hidden border border-editorial-pebble dark:border-obsidian-800 flex flex-col transition-all duration-500 hover:shadow-2xl dark:hover:shadow-purple-500/10 h-full"
  >
    <div className="relative overflow-hidden aspect-[16/10]">
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full object-cover filter contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-editorial-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-5 right-5 z-10">
        <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-obsidian-900/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.15em] text-editorial-ink dark:text-cyan-400 border border-editorial-pebble dark:border-obsidian-700 shadow-sm">
          {project.tech[0]}
        </span>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 text-editorial-ink dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-editorial-slate dark:text-slate-400 font-light leading-relaxed line-clamp-2">
          {project.solution}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-editorial-base/50 dark:bg-obsidian-800/50 rounded-lg text-[9px] font-bold text-editorial-slate dark:text-slate-300 border border-editorial-pebble/50 dark:border-obsidian-700/50 uppercase tracking-tighter"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-6 border-t border-editorial-pebble/50 dark:border-obsidian-800/50">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-editorial-ink dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
        >
          <div className="w-8 h-8 rounded-full border border-editorial-pebble dark:border-obsidian-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
            <RiExternalLinkLine size={16} />
          </div>
          Preview
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-editorial-ink dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
        >
          <div className="w-8 h-8 rounded-full border border-editorial-pebble dark:border-obsidian-700 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
            <RiGithubFill size={16} />
          </div>
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.98,
    }),
  };

  const toggleTab = (tab: "web" | "mobile") => {
    if (tab !== activeTab) {
      setDirection(tab === "mobile" ? 1 : -1);
      setActiveTab(tab);
    }
  };

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-editorial-base dark:bg-obsidian-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-editorial-ink dark:text-white">
            Selected Works
          </h2>
          <p className="text-editorial-slate dark:text-slate-400 font-light max-w-2xl mx-auto text-lg">
            Focused on building high-performance applications with a strong
            emphasis on architecture and UX.
          </p>
        </motion.div>

        <div className="flex justify-center mb-20">
          <div className="relative p-1.5 bg-white dark:bg-obsidian-800 rounded-2xl border border-editorial-pebble dark:border-obsidian-700 flex shadow-inner">
            <motion.div
              layout
              className="absolute h-[calc(100%-12px)] top-[6px] rounded-xl bg-editorial-ink dark:bg-cyan-500 z-0"
              style={{
                width: activeTab === "web" ? "120px" : "140px",
                left: activeTab === "web" ? "6px" : "126px",
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />

            <button
              onClick={() => toggleTab("web")}
              className={`relative z-10 w-[120px] py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeTab === "web"
                  ? "text-white"
                  : "text-editorial-slate dark:text-slate-500"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <RiGlobalLine size={16} />
                Web Side
              </div>
            </button>
            <button
              onClick={() => toggleTab("mobile")}
              className={`relative z-10 w-[140px] py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeTab === "mobile"
                  ? "text-white"
                  : "text-editorial-slate dark:text-slate-500"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <RiSmartphoneLine size={16} />
                Mobile Side
              </div>
            </button>
          </div>
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.4 },
              }}
              className="grid md:grid-cols-2 gap-10 lg:gap-14"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center items-center gap-4">
          <div
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              activeTab === "web"
                ? "w-8 bg-editorial-ink dark:bg-cyan-500"
                : "bg-editorial-pebble dark:bg-obsidian-700"
            }`}
          />
          <div
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              activeTab === "mobile"
                ? "w-8 bg-editorial-ink dark:bg-cyan-500"
                : "bg-editorial-pebble dark:bg-obsidian-700"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
