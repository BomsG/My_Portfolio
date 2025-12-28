
import React from 'react';
// Fix: Casting motion to any to resolve property missing errors caused by environment-specific type definition issues
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-editorial-base dark:bg-obsidian-950 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-editorial-ink dark:text-white">Core Competencies</h2>
          <p className="text-editorial-slate dark:text-slate-400 max-w-lg mx-auto font-light">Technical tools selected for their reliability and ability to deliver premium experiences.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: '#1A1A1A' }}
              className="p-8 rounded-[2rem] border border-editorial-pebble bg-white dark:bg-obsidian-900/40 dark:border-obsidian-700 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-lg dark:hover:shadow-purple-500/10"
            >
              <div className="text-editorial-ink dark:text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-editorial-slate dark:text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
