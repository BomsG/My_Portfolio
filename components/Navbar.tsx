import React, { useState, useEffect } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
  ];

  const NAVBAR_HEIGHT = 72; // px — matches the fixed nav bar height

  const handleNav = (id: string) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              paddingTop: "12px",
              paddingBottom: "12px",
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
            }
          : {
              paddingTop: "28px",
              paddingBottom: "28px",
              background: "transparent",
            }
      }
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-black text-xl tracking-[-0.04em] select-none text-white transition-opacity hover:opacity-70"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          BG<span style={{ opacity: 0.25 }}>.</span>
        </motion.button>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              className="relative group text-[10px] font-black uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {link.name}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 rounded-full"
              />
            </button>
          ))}

          <motion.button
            onClick={() => handleNav("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/85 transition-all duration-200"
          >
            Hire me
          </motion.button>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 text-white transition-opacity hover:opacity-70"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10,10,10,0.98)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm font-black uppercase tracking-[0.22em] transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav("contact")}
                className="w-fit px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full"
              >
                Hire me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
