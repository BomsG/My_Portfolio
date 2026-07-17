import React from "react";
import {
  RiArrowRightUpLine,
  RiCodeSSlashLine,
  RiGithubFill,
  RiGlobalLine,
  RiSmartphoneLine,
} from "react-icons/ri";

import { FaPython, FaWordpress, FaReact } from "react-icons/fa";/* ── Tick items ── */
const techStack = [
  { name: "Next.JS",     icon: <RiArrowRightUpLine size={18} />, iconColor: "#00C5BE" },
  { name: "React",       icon: <RiCodeSSlashLine    size={18} />, iconColor: "#00C5BE" },
  { name: "React Native",icon: <FaReact             size={18} />, iconColor: "#00C5BE" },
  { name: "Typescript",  icon: <span style={{ fontSize: 14, fontWeight: 900, color: "#FF00CC" }}>TS</span>, iconColor: "#FF00CC" },
  { name: "GIT/GitHub",  icon: <RiGithubFill        size={18} />, iconColor: "#FF00CC" },
  { name: "Tailwind CSS",icon: <RiSmartphoneLine    size={18} />, iconColor: "#FF00CC" },
  { name: "Rest APIs",   icon: <RiGlobalLine        size={18} />, iconColor: "#00C5BE" },
  { name: "Python",      icon: <FaPython            size={18} />, iconColor: "#FF00CC" },
  { name: "WordPress",   icon: <FaWordpress         size={18} />, iconColor: "#00C5BE" },
];

const Pill: React.FC<{ name: string; icon: React.ReactNode; iconColor: string }> = ({
  name,
  icon,
  iconColor,
}) => (
  <span
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap flex-shrink-0"
    style={{
      border: "1.5px solid #1F2828",
      background: "transparent",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 14,
      fontWeight: 500,
      color: "#1F2828",
    }}
  >
    <span style={{ color: iconColor, display: "flex", alignItems: "center" }}>{icon}</span>
    {name}
  </span>
);

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      style={{
        background: "#EBFFFF",
        borderTop: "2px solid #1F2828",
        borderBottom: "2px solid #1F2828",
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        paddingLeft: 64,
        paddingRight: 64,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {techStack.map((t) => (
          <Pill key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
