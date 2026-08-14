import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Hero3DScene } from '../3d/Hero3DScene';
import { ArrowRight, MessageSquare, Terminal, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  isDark?: boolean;
}

export const HeroSection: React.FC<HeroProps> = ({ isDark = true }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Soft Studio Gradient */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-blue-500/5 via-neutral-500/5 to-purple-500/5 dark:from-blue-600/10 dark:via-transparent dark:to-purple-600/10 blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-center lg:text-left space-y-6 sm:space-y-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          {/* Software Engineer Label */}
          <div className="block">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#86868B] dark:text-[#A1A1A6] uppercase">
              SOFTWARE ENGINEER
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.1] text-balance">
              Building digital experiences that solve real problems.
            </h1>
          </div>

          {/* Supporting Bio Text */}
          <p className="text-lg sm:text-xl text-[#86868B] dark:text-[#A1A1A6] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
            {PERSONAL_INFO.bioShort}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium text-base shadow-sm hover:shadow-apple-md transition-all duration-300 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 active:scale-[0.98] text-[#1D1D1F] dark:text-[#F5F5F7] font-medium text-base border border-black/10 dark:border-white/15 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-[#86868B] dark:text-[#A1A1A6]" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Technology Quick Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-apple-accent" />
              React.js
            </span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>Spring Boot</span>
            <span>•</span>
            <span>AI / ML</span>
          </div>
        </motion.div>

        {/* Right Column: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <Hero3DScene isDark={isDark} />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#86868B] dark:text-[#A1A1A6] opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
