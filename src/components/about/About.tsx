import React from 'react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Sparkles, Terminal, Award, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const statIcons = [Award, Terminal, Code2, Sparkles];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        category="About"
        title="A little about me."
        subtitle="Bridging thoughtful design with solid backend architecture and AI intelligence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Personal Bio Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <GlassCard className="p-8 sm:p-10 border border-black/10 dark:border-white/15 h-full space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-apple-accent">
              <Sparkles className="w-4 h-4" />
              ENGINEER PERSPECTIVE
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#1D1D1F] dark:text-[#E5E5EA] leading-relaxed font-normal">
              {PERSONAL_INFO.bioLong.map((paragraph, index) => (
                <p key={index} className="text-balance">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-6 text-sm text-[#86868B] dark:text-[#A1A1A6]">
              <div>
                <span className="block font-semibold text-[#1D1D1F] dark:text-white">Full-Stack Discipline</span>
                <span className="text-xs">React • Spring Boot • Cloud</span>
              </div>
              <div className="w-[1px] h-8 bg-black/10 dark:bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-semibold text-[#1D1D1F] dark:text-white">AI-Infused Systems</span>
                <span className="text-xs">RAG • Predictive Models • APIs</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right 5 Columns: Minimalist Statistics Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {HIGHLIGHT_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard hoverEffect className="p-6 border border-black/8 dark:border-white/12">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6]">
                      {stat.label}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-apple-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-1">
                    {stat.value}
                  </div>
                  {stat.subtext && (
                    <div className="text-xs text-[#86868B] dark:text-[#A1A1A6]">
                      {stat.subtext}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
