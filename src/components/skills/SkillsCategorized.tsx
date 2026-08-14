import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { Layout, Server, Sparkles, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillsCategorized: React.FC = () => {
  const categoryIcons = {
    Frontend: Layout,
    Backend: Server,
    'AI / Data': Sparkles,
    'Database / Tools': Database,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
      {SKILL_CATEGORIES.map((cat, idx) => {
        const IconComponent = categoryIcons[cat.title as keyof typeof categoryIcons] || Layout;
        return (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-7 h-full border border-black/8 dark:border-white/12 hover:border-black/15 dark:hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-black/[0.03] dark:bg-white/[0.06] text-[#1D1D1F] dark:text-[#E5E5EA] border border-black/[0.05] dark:border-white/[0.08] hover:bg-black/[0.07] dark:hover:bg-white/[0.12] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
};
