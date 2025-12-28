
import React from 'react';
// Fix: Casting motion to any to resolve property missing errors caused by environment-specific type definition issues
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#FDFCFB] dark:bg-obsidian-950 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">What I bring to your team</h2>
          <p className="text-[#6D6D6D] dark:text-slate-400">Technical skill combined with professional excellence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900 shadow-sm border border-pink-50/50 dark:border-obsidian-800 flex gap-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 p-3 h-fit rounded-2xl bg-cyan-50 dark:bg-purple-900/30">
                <div className="text-cyan-600 dark:text-cyan-400">
                  {value.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#4A4A4A] dark:text-white">{value.title}</h3>
                <p className="text-[#6D6D6D] dark:text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
