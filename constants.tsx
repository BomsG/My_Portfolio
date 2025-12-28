
import React from 'react';
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
  RiTerminalBoxLine
} from 'react-icons/ri';
import { Project, Skill, TeamValue } from './types';

export const SKILLS: Skill[] = [
  { name: 'Next.js', icon: <RiStackLine className="w-6 h-6" /> },
  { name: 'React', icon: <RiCodeSSlashLine className="w-6 h-6" /> },
  { name: 'TypeScript', icon: <RiCpuLine className="w-6 h-6" /> },
  { name: 'Tailwind CSS', icon: <RiSmartphoneLine className="w-6 h-6" /> },
  { name: 'Node.js', icon: <RiServerLine className="w-6 h-6" /> },
  { name: 'Git/GitHub', icon: <RiGithubFill className="w-6 h-6" /> },
  { name: 'REST APIs', icon: <RiGlobalLine className="w-6 h-6" /> },
  { name: 'PostgreSQL', icon: <RiTerminalBoxLine className="w-6 h-6" /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lumiere Wellness",
    category: 'web',
    problem: "A fitness brand lacked a cohesive online platform for community engagement.",
    solution: "Built a high-performance Next.js app with real-time class bookings and minimalist UI.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Aura Commerce",
    category: 'web',
    problem: "E-commerce users were dropping off due to slow page loads and complex checkout flows.",
    solution: "Optimized Core Web Vitals using SSG and a one-tap checkout system.",
    tech: ["React", "TypeScript", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Verve Mobile",
    category: 'mobile',
    problem: "Users needed a way to track their micro-habits on the go without friction.",
    solution: "Developed a React Native app with biometric auth and offline-first syncing.",
    tech: ["React Native", "Expo", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Zenith Pay",
    category: 'mobile',
    problem: "Simplifying cross-border payments for freelancers in emerging markets.",
    solution: "Created a secure, multi-currency wallet with instant peer-to-peer transfers.",
    tech: ["React Native", "TypeScript", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  }
];

export const VALUES: TeamValue[] = [
  {
    title: "Problem-Solving Mindset",
    description: "I don't just write code; I design systems that resolve real-world pain points with efficiency.",
    // Fix: Updated to use RiThunderstormsLine
    icon: <RiThunderstormsLine className="w-6 h-6" />
  },
  {
    title: "Clean & Scalable Code",
    description: "Prioritizing maintainability and readability to ensure long-term project success.",
    icon: <RiMagicLine className="w-6 h-6" />
  },
  {
    title: "Strong UI Attention",
    description: "Bridging the gap between design and engineering with pixel-perfect precision.",
    icon: <RiHeartFill className="w-6 h-6" />
  },
  {
    title: "Collaboration first",
    description: "Thriving in agile environments where clear communication and shared goals are key.",
    icon: <RiTeamLine className="w-6 h-6" />
  }
];
