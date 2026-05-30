import React from "react";
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <div
              className="text-3xl font-black tracking-[-0.04em] mb-2"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              BG<span className="text-white/20">.</span>
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-white/25">
              Boma George · Developer
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-8">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30 hover:text-white transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: <RiGithubFill size={18} />, href: "https://github.com/BomsG" },
              { icon: <RiLinkedinBoxFill size={18} />, href: "https://www.linkedin.com/in/boma-george-03b961260/" },
              { icon: <RiTwitterXFill size={18} />, href: "https://twitter.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">
            © {year} Boma George. All rights reserved.
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">
            Developed with Hope & Faith
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
