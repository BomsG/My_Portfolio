import React, { useEffect, useState, useRef } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiMagicLine,
  // Fix: Renamed RiThunderstormLine to RiThunderstormsLine
  RiThunderstormsLine,
} from "react-icons/ri";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Frontend Developer", "Web Developer", "Mobile Developer"];
  const typingSpeed = isDeleting ? 50 : 100;
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeout: any;
    const currentRole = roles[roleIndex];

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, typedText.length - 1)
          : currentRole.substring(0, typedText.length + 1);
        setTypedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  useEffect(() => {
    let blinkInterval: any;
    if (cursorRef.current) {
      blinkInterval = setInterval(() => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity =
            cursorRef.current.style.opacity === "0" ? "1" : "0";
        }
      }, 500);
    }
    return () => clearInterval(blinkInterval);
  }, []);

  const scrollToSkills = () => {
    setActiveSection("skills");
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-6 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-cyan-200/20 to-editorial-pebble/40 dark:from-blue-900/30 dark:to-obsidian-900/40 blur-[100px] opacity-60"
        />
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 70, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-editorial-pebble/30 to-cyan-100/20 dark:from-cyan-900/20 dark:to-obsidian-800/40 blur-[120px] opacity-50"
        />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1 px-4 rounded-full border border-editorial-pebble bg-white/50 dark:bg-obsidian-800/50 text-editorial-slate dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 transform hover:scale-105 transition-transform duration-300">
              Personal Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-editorial-ink dark:text-white leading-tight"
          >
            <span className="animate-fadeIn">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
              Boma George
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl font-light text-editorial-slate dark:text-slate-400 mb-8 h-12 flex items-center"
          >
            <span>{typedText}</span>
            <span
              ref={cursorRef}
              className="inline-block w-[2px] h-[28px] md:h-[36px] bg-cyan-500 ml-1 align-middle"
            ></span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-editorial-slate dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Crafting sleek, high-performance digital experiences where logic
            meets beauty every design, a statement.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-editorial-ink dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 text-white font-medium rounded-lg shadow-xl shadow-editorial-pebble dark:shadow-none transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("contact");
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a project
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-editorial-pebble dark:border-cyan-500 text-editorial-ink dark:text-cyan-400 font-medium rounded-lg shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-cyan-950/20"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("projects");
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View works
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            {[
              { icon: <RiGithubFill size={22} />, href: "https://github.com" },
              {
                icon: <RiLinkedinBoxFill size={22} />,
                href: "https://linkedin.com",
              },
              {
                icon: <RiTwitterXFill size={22} />,
                href: "https://twitter.com",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#06b6d4" }}
                className="text-editorial-slate dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[380px] h-[450px] lg:h-[480px] glass-card rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-2xl z-20"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-editorial-base dark:bg-obsidian-700 flex items-center justify-center shadow-sm">
                  <RiMagicLine size={12} color="#00ACC1" />
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/50">
                  Ready to deploy
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-editorial-ink dark:text-white mb-2">
                  Technical Core
                </h3>
                <p className="text-editorial-slate dark:text-slate-400 text-xs leading-relaxed font-light">
                  Expert in building React architectures that balance
                  performance, polish, and a visually striking user experience.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold text-editorial-slate dark:text-cyan-400 uppercase tracking-tighter">
                  <span>Development Efficiency</span>
                  <span>98%</span>
                </div>
                <div className="h-1 w-full bg-editorial-pebble dark:bg-obsidian-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-editorial-ink dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-obsidian-900/40 border border-editorial-pebble dark:border-obsidian-700">
                <div className="text-[10px] text-editorial-slate dark:text-cyan-400 font-bold mb-1 uppercase tracking-tight">
                  Logic
                </div>
                <div className="text-lg font-bold text-editorial-ink dark:text-white">
                  Robust
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-obsidian-900/40 border border-editorial-pebble dark:border-obsidian-700">
                <div className="text-[10px] text-editorial-slate dark:text-cyan-400 font-bold mb-1 uppercase tracking-tight">
                  Transforming UI/UX
                </div>
                <div className="text-lg font-bold text-editorial-ink dark:text-white">
                  Seamless
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-[8%] right-[5%] lg:right-[15%] p-4 rounded-2xl glass-card shadow-lg flex items-center gap-3 z-30"
          >
            {/* Fix: Updated to use RiThunderstormsLine */}
            <RiThunderstormsLine size={12} color="#00ACC1" />
            <span className="text-[10px] font-bold text-editorial-ink dark:text-slate-200 uppercase tracking-wider">
              Performance First
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -40, 0], x: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[8%] left-[5%] p-4 rounded-2xl glass-card shadow-lg flex items-center gap-3 z-30"
          >
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-editorial-ink dark:bg-cyan-400 border border-white dark:border-obsidian-700" />
              <div className="w-5 h-5 rounded-full bg-editorial-pebble dark:bg-blue-400 border border-white dark:border-obsidian-700" />
            </div>
            <span className="text-[10px] font-bold text-editorial-ink dark:text-slate-200 uppercase tracking-wider">
              MERN Stack
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToSkills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-editorial-slate dark:text-slate-500 hover:text-cyan-600 transition-colors duration-300 z-40"
      >
        <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
          Explore Portfolio
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <RiArrowDownLine size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
