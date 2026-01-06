import React from "react";
import {
  RiCodeSSlashLine,
  RiStackLine,
  RiCpuLine,
  RiGlobalLine,
  RiGithubFill,
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
  { name: "Next.js", icon: <RiStackLine size={20} /> },
  { name: "React", icon: <RiCodeSSlashLine size={20} /> },
  { name: "TypeScript", icon: <RiCpuLine size={20} /> },
  { name: "Tailwind CSS", icon: <RiSmartphoneLine size={20} /> },
  { name: "Node.js", icon: <RiServerLine size={20} /> },
  { name: "Git/GitHub", icon: <RiGithubFill size={20} /> },
  { name: "REST APIs", icon: <RiGlobalLine size={20} /> },
  { name: "PostgreSQL", icon: <RiTerminalBoxLine size={20} /> },
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
    title: "ByeWind-Dashboard",
    category: "web",
    problem: "Dashboard",
    solution: "Dashboard with real time data",
    tech: ["nodejs", "TypeScript", "nextjs", "Stripe API"],
    liveUrl: "https://byewind-dashhboard.vercel.app/",
    githubUrl: "https://github.com/BomsG/Byewind-dashboard",
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "KnowLearn",
    category: "web",
    problem: "basic form tools for serious learning and assessment",
    solution:
      "KnowLearn is built to bridge the gap between simple online forms and real educational assessment tools. It enables creators to design interactive, timed, and review-based quizzes that provide meaningful feedback and performance insights, making assessments more engaging and useful for learning.",
    tech: ["React", "TypeScript", "nodejs", "Mongodb"],
    liveUrl: "https://bg-know-learn.vercel.app/",
    githubUrl: "https://github.com/BomsG/KnowLearn",
    image: "/images/p3.png",
  },
  {
    id: 4,
    title: "RISTORANTÈ",
    category: "web",
    problem: "A modern Restaurant website ",
    solution:
      "RISTORANTÈ is a modern restaurant platform where users can browse menus, book reservations, and connect seamlessly with delivery services and dispatchers for a complete dining experience.",
    tech: ["Nextjs", "TypeScript", "nodejs", "Mongodb"],
    liveUrl: "https://ristorant.vercel.app/",
    githubUrl: "https://github.com/BomsG/-RISTORANT-",
    image: "/images/p4.png",
  },
  {
    id: 5,
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
    id: 6,
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
    icon: <RiThunderstormsLine size={20} />,
  },
  {
    title: "Clean & Scalable Code",
    description:
      "Prioritizing maintainability and readability to ensure long-term project success.",
    icon: <RiMagicLine size={20} />,
  },
  {
    title: "Strong UI Attention",
    description:
      "Bridging the gap between design and engineering with pixel-perfect precision.",
    icon: <RiHeartFill size={20} />,
  },
  {
    title: "Collaboration first",
    description:
      "Thriving in agile environments where clear communication and shared goals are key.",
    icon: <RiTeamLine size={20} />,
  },
];
