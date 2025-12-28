
// Fix: Import React to provide the namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile';
  problem: string;
  solution: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface TeamValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}
