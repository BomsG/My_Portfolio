import React, { useState } from "react";
import { motion as motionBase, AnimatePresence } from "framer-motion";
const motion = motionBase as any;
import { RiMenu3Line, RiCloseLine, RiGithubFill } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Selected Works", href: "projects" },
    { name: "About Me", href: "about" },
    { name: "Resume", href: "contact" },
  ];

  const handleNav = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 pt-4 pb-2 hidden lg:block ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto flex items-center justify-between px-3 py-5 rounded-full"
          style={{
            background: "#EBFFFF",
            border: "2px solid #344646",
            boxShadow: "4px 8px 0px 0px #344646",
          }}
        >
          {/* Logo Pill */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-5 py-2.5 rounded-full font-black text-[20px] uppercase  text-white select-none hover:opacity-85 transition-opacity"
            style={{ background: "#111111", fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
          >
            Boma George
          </button>

          {/* Nav Links — individual pills */}
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-full text-[18px] font-medium transition-all duration-200 hover:bg-black/5"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.18)",
                  color: "#111111",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right — Avatar + Hire Me */}
          <div className="flex items-center gap-3">
            {/* GitHub icon — solid pink circle with matching nav shadow */}
            <a
              href="https://github.com/BomsG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-85"
              style={{
                background: "#FF00CC",
                border: "2px solid #344646",
                boxShadow: "4px 8px 0px 0px #344646",
              }}
            >
              <RiGithubFill size={22} color="#ffffff" />
            </a>

            {/* Hire Me */}
            <motion.button
              onClick={() => handleNav("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.16em] text-black"
              style={{
                background: "#00E5D4",
                fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif",
                border: "2px solid #344646",
                boxShadow: "4px 8px 0px 0px #344646",
              }}
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden px-4 pt-3 pb-2">
        {/* Top bar — always visible */}
        <div
          className="flex items-center justify-between px-3 py-2.5 rounded-full"
          style={{
            background: "#EBFFFF",
            border: "2px solid #344646",
            boxShadow: "4px 8px 0px 0px #344646",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 rounded-full font-black text-[11px] uppercase tracking-[0.18em] text-white"
            style={{ background: "#111111", fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif" }}
          >
            Boma George
          </button>

          {/* Right side — Hire Me + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav("contact")}
              className="px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.16em] text-black"
              style={{
                background: "#00E5D4",
                fontFamily: "'Helvetica Compressed', 'Arial Narrow', Impact, sans-serif",
                border: "2px solid #344646",
                boxShadow: "4px 8px 0px 0px #344646",
              }}
            >
              Hire Me
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-black transition-colors hover:bg-black/5"
              style={{ border: "1.5px solid rgba(0,0,0,0.18)" }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <RiCloseLine size={18} /> : <RiMenu3Line size={18} />}
            </button>
          </div>
        </div>

        {/* Dropdown — Home, Selected Works, About Me */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 rounded-2xl overflow-hidden"
              style={{
                background: "#EBFFFF",
                border: "2px solid #344646",
                boxShadow: "4px 8px 0px 0px #344646",
              }}
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks
                  .filter((l) => l.name !== "Resume")
                  .map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNav(link.href)}
                      className="text-left text-sm font-medium px-4 py-3 rounded-full w-full transition-colors hover:bg-black/5"
                      style={{
                        border: "1.5px solid rgba(0,0,0,0.18)",
                        color: "#111111",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {link.name}
                    </button>
                  ))}

                {/* GitHub button */}
                <a
                  href="https://github.com/BomsG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-85"
                  style={{
                    background: "#FF00CC",
                    border: "2px solid #344646",
                    boxShadow: "4px 8px 0px 0px #344646",
                  }}
                >
                  <RiGithubFill size={22} color="#ffffff" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
