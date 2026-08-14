import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/types';
import { GithubIcon } from '../common/Icons';
import { X, ExternalLink, CheckCircle, AlertCircle, Cpu, Layers } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-all duration-300"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-[#1C1C1E]/95 backdrop-blur-apple-thick border border-black/10 dark:border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-12">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-apple-accent block mb-2">
                {project.category} Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-[#86868B] dark:text-[#A1A1A6] font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 my-6">
              {project.technologies.map(tech => (
                <Badge key={tech} size="sm" variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                {project.metrics.map(m => (
                  <div key={m.label} className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08]">
                    <div className="text-xs text-[#86868B] dark:text-[#A1A1A6] mb-1">{m.label}</div>
                    <div className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Body Sections */}
            <div className="space-y-8 my-8 text-sm sm:text-base leading-relaxed text-[#1D1D1F] dark:text-[#E5E5EA]">
              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="p-5 rounded-2xl bg-amber-500/[0.05] border border-amber-500/20">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold mb-2 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      The Problem
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-5 rounded-2xl bg-blue-500/[0.05] border border-blue-500/20">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      The Solution
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Architecture Breakdown */}
              {project.architecture && (
                <div>
                  <h4 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-apple-accent" />
                    System Architecture
                  </h4>
                  <div className="space-y-2.5">
                    {project.architecture.map((arch, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06]">
                        <span className="w-5 h-5 rounded-full bg-apple-accent/15 text-apple-accent text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm">{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-apple-accent" />
                  Key Highlights & Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-apple-accent shrink-0 mt-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Outcome */}
              {project.challenges && (
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.08]">
                  <h4 className="text-base font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                    Technical Challenges Overcome
                  </h4>
                  <ul className="space-y-2 text-sm text-[#86868B] dark:text-[#A1A1A6]">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-apple-accent font-mono">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  {project.outcome && (
                    <p className="mt-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.08] text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      Outcome: {project.outcome}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-black/10 dark:border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white font-medium text-sm transition-all duration-200 border border-black/10 dark:border-white/15 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
