import React from "react";
import {
  RiCodeSSlashLine,
  RiStackLine,
  RiCpuLine,
  RiGlobalLine,
  RiGithubFill,
  // Fix: Renamed RiThunderstormLine to RiThunderstormsLine
  RiThunderstormsLine,
  RiHeartFill,
  RiTeamLine,
  RiMagicLine,
  RiSmartphoneLine,
  RiServerLine,
  RiTerminalBoxLine,
} from "react-icons/ri";
import { Project, Skill, TeamValue } from "./types";

export const SKILLS: Skill[] = [
  { name: "Next.js", icon: <RiStackLine size={12} /> },
  { name: "React", icon: <RiCodeSSlashLine size={12} /> },
  { name: "TypeScript", icon: <RiCpuLine size={12} /> },
  { name: "Tailwind CSS", icon: <RiSmartphoneLine size={12} /> },
  { name: "Node.js", icon: <RiServerLine size={12} /> },
  { name: "Git/GitHub", icon: <RiGithubFill size={12} /> },
  { name: "REST APIs", icon: <RiGlobalLine size={12} /> },
  { name: "PostgreSQL", icon: <RiTerminalBoxLine size={12} /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Skincare",
    category: "web",
    problem:
      " Built A Skincare e-commerce website that lets you take a test to know the right product for you",
    solution:
      "BG Skincare is a modern e-commerce site with a clean, minimalist design, curated products, and interactive skin test to help users find the right products.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://bgskincare.vercel.app/",
    githubUrl: "https://github.com/BomsG/skincare",
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "Aura Commerce",
    category: "web",
    problem:
      "E-commerce users were dropping off due to slow page loads and complex checkout flows.",
    solution:
      "Optimized Core Web Vitals using SSG and a one-tap checkout system.",
    tech: ["React", "TypeScript", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Verve Mobile",
    category: "mobile",
    problem:
      "Users needed a way to track their micro-habits on the go without friction.",
    solution:
      "Developed a React Native app with biometric auth and offline-first syncing.",
    tech: ["React Native", "Expo", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Zenith Pay",
    category: "mobile",
    problem:
      "Simplifying cross-border payments for freelancers in emerging markets.",
    solution:
      "Created a secure, multi-currency wallet with instant peer-to-peer transfers.",
    tech: ["React Native", "TypeScript", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
];

export const VALUES: TeamValue[] = [
  {
    title: "Problem-Solving Mindset",
    description:
      "I don't just write code; I design systems that resolve real-world pain points with efficiency.",
    // Fix: Updated to use RiThunderstormsLine
    icon: <RiThunderstormsLine size={12} />,
  },
  {
    title: "Clean & Scalable Code",
    description:
      "Prioritizing maintainability and readability to ensure long-term project success.",
    icon: <RiMagicLine size={12} />,
  },
  {
    title: "Strong UI Attention",
    description:
      "Bridging the gap between design and engineering with pixel-perfect precision.",
    icon: <RiHeartFill size={12} />,
  },
  {
    title: "Collaboration first",
    description:
      "Thriving in agile environments where clear communication and shared goals are key.",
    icon: <RiTeamLine size={12} />,
  },
];
