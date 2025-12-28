import React, { useState, useEffect } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import {
  RiMenu3Line,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/90 dark:bg-obsidian-900/90 backdrop-blur-md shadow-sm border-b border-editorial-pebble dark:border-obsidian-700"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-widest uppercase text-editorial-ink dark:text-cyan-400"
        >
          Boma George
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, color: "#000" }}
              className="text-[10px] font-bold uppercase tracking-widest text-editorial-slate dark:text-slate-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-editorial-pebble dark:hover:bg-obsidian-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <RiSunLine size={20} color="#FFEE58 " />
            ) : (
              <RiMoonLine size={20} color="#FFEE58 " />
            )}
          </button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-editorial-ink dark:bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-editorial-pebble dark:hover:bg-obsidian-700 transition-colors"
          >
            {isDarkMode ? (
              <RiSunLine size={20} color="#FFEE58 " />
            ) : (
              <RiMoonLine size={20} color="#FFEE58 " />
            )}
          </button>
          <button
            className="text-editorial-ink dark:text-slate-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine size={26} />
            ) : (
              <RiMenu3Line size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-editorial-base dark:bg-obsidian-900 border-b border-editorial-pebble dark:border-obsidian-700 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-editorial-ink dark:text-slate-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
