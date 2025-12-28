import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-obsidian-950 text-center border-t border-gray-50 dark:border-obsidian-700 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
          Boma<span className="text-blue-500">.dev</span>
        </div>
        <p className="text-sm text-[#6D6D6D] dark:text-slate-500">
          &copy; {new Date().getFullYear()} Developed with Hope & Faith
        </p>
      </div>
    </footer>
  );
};

export default Footer;
