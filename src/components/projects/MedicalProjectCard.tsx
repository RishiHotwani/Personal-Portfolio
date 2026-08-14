import React from 'react';
import type { Project } from '../../data/types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface MedicalProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const MedicalProjectCard: React.FC<MedicalProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard 
        hoverEffect
        onClick={() => onOpenModal(project)}
        className="group p-8 sm:p-10 border border-black/10 dark:border-white/15 overflow-hidden h-full flex flex-col justify-between"
      >
        <div className="space-y-6 text-left">
          {/* Header Badge */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              HEALTHCARE AI
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              85%+ Accuracy
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {project.title}
          </h3>

          <p className="text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
            {project.description}
          </p>

          {/* Diagnostic Visual Panel */}
          <div className="rounded-2xl bg-black/[0.04] dark:bg-[#151517] border border-black/5 dark:border-white/10 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#86868B] dark:text-[#A1A1A6]">
              <span className="flex items-center gap-1.5 font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                <Activity className="w-4 h-4 text-emerald-500" /> Multi-Disease Classifier
              </span>
              <span className="text-emerald-500 font-bold">Validated Models</span>
            </div>

            {/* Condition risk assessment indicators */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <span className="text-[10px] text-[#86868B] dark:text-[#A1A1A6] block">Diabetes</span>
                <span className="text-xs font-bold text-emerald-500">Low Risk</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <span className="text-[10px] text-[#86868B] dark:text-[#A1A1A6] block">Heart Disease</span>
                <span className="text-xs font-bold text-amber-500">Normal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <span className="text-[10px] text-[#86868B] dark:text-[#A1A1A6] block">Kidney Stone</span>
                <span className="text-xs font-bold text-emerald-500">Clear</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#86868B] dark:text-[#A1A1A6] pt-1">
              <span>Interactive Biomarker Inputs</span>
              <span>Flask REST API Backend</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map(tech => (
              <Badge key={tech} size="sm" variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/10 mt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-apple-accent group-hover:underline">
            View Details
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
