import React from "react";
// Fix: Casting motion to any to resolve property missing errors caused by environment-specific type definition issues
import { motion as motionBase } from "framer-motion";
const motion = motionBase as any;

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-white dark:bg-obsidian-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-editorial-pebble dark:ring-white/10 transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="/images/bom.jpeg"
                alt="Developer Profile"
                className="w-full h-full object-cover filter contrast-[1.1] grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Elegant Accents */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-100 dark:bg-cyan-900/20 -z-10 rounded-full blur-3xl opacity-60" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 -z-10 rounded-full blur-3xl opacity-40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
                My Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-editorial-ink dark:text-white leading-tight">
                Good Enough is <br />
                Never Enough.
              </h2>
            </div>

            <div className="space-y-6 text-editorial-slate dark:text-slate-400 text-lg leading-relaxed font-light">
              <p>
                My Coding journey hasn't be an easy one, From struggling to
                understand logic to countless sleepless nights, the path has
                been filled with challenges. But through every setback, I pushed
                forward and I&apos;m still pushing. As wise men say, what makes
                you a loser isn&apos;t failure itself, but the moment you refuse
                to pick yourself back up.
              </p>
              <p>
                My approach is rooted in dedication and hard work. I always aim
                for success, and to date, I&apos;ve never had a project fail. I
                give 100% to every task I handle, ensuring that each project
                reaches its full potential. Client satisfaction is my top
                priority, and I strive to maintain clear and effective
                communication throughout every project.
              </p>
              <p>
                I craft projects using modern JavaScript frameworks, blending
                frontend finesse with backend expertise to deliver solutions
                that truly shine. Every design I touch isn&apos;t just
                functional it&apos;s bold, engaging, and built to leave an
                impression. I pour 100% creativity into every project, because
                good enough is never enough.
              </p>
            </div>

            <div className="pt-6">
              <div className="grid grid-cols-2 gap-8 border-t border-editorial-pebble dark:border-obsidian-800 pt-8">
                <div>
                  <h4 className="text-2xl font-bold text-editorial-ink dark:text-white">
                    2+
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-editorial-slate dark:text-slate-500 font-bold">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-editorial-ink dark:text-white">
                    20+
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-editorial-slate dark:text-slate-500 font-bold">
                    Projects Shipped
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
