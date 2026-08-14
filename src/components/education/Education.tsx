import React from 'react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        category="Education"
        title="Academic foundation."
        subtitle="Rigorous engineering curriculum centered on core computing principles, systems, and algorithms."
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassCard className="p-8 sm:p-10 border border-black/10 dark:border-white/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-apple-accent flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-apple-accent block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-base text-[#86868B] dark:text-[#A1A1A6] font-medium mt-1">
                  {EDUCATION_DATA.degree}
                </p>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Award className="w-4 h-4" />
                {EDUCATION_DATA.grade}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {EDUCATION_DATA.period}
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
              <BookOpen className="w-4 h-4 text-apple-accent" />
              Academic Highlights & Key Focus Areas
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-[#86868B] dark:text-[#A1A1A6]">
              {EDUCATION_DATA.details?.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-accent shrink-0 mt-2" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
