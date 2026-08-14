import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { ChevronDown, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        category="Experience"
        title="Engineering experience."
        subtitle="Hands-on contributions to enterprise cloud platforms and production software systems."
      />

      <div className="relative border-l-2 border-black/10 dark:border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {EXPERIENCE_DATA.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-white dark:bg-black border-4 border-apple-accent shadow-sm" />

              <GlassCard className="p-6 sm:p-8 border border-black/10 dark:border-white/15">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-apple-accent block mb-1">
                      {exp.company}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Interactive Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  aria-expanded={isExpanded}
                  className="flex items-center gap-2 text-sm font-semibold text-apple-accent hover:underline focus:outline-none mb-4 group"
                >
                  <span>{isExpanded ? 'Hide Detailed Responsibilities' : 'View Experience Details'}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Expandable Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden space-y-3 pt-2 pb-4"
                    >
                      <ul className="space-y-3 text-sm sm:text-base text-[#1D1D1F] dark:text-[#E5E5EA]">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06]">
                            <CheckCircle2 className="w-4 h-4 text-apple-accent shrink-0 mt-1" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/10">
                  {exp.techStack.map(tech => (
                    <Badge key={tech} size="sm" variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
