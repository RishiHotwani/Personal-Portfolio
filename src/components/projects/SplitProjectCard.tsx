import React from 'react';
import type { Project } from '../../data/types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Film, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface SplitProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const SplitProjectCard: React.FC<SplitProjectCardProps> = ({ project, onOpenModal }) => {
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
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              AI / MACHINE LEARNING
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              &lt;200ms Inference
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {project.title}
          </h3>

          <p className="text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
            {project.description}
          </p>

          {/* Algorithmic Engine Visual Mockup */}
          <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-[#151517] border border-black/5 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#86868B] dark:text-[#A1A1A6]">
              <span className="flex items-center gap-1.5 font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                <Film className="w-4 h-4 text-amber-500" /> Hybrid Ensemble
              </span>
              <span>SVD + TF-IDF</span>
            </div>

            {/* Simulated Recommendation Output list */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-mono font-bold flex items-center justify-center text-[10px]">1</span>
                  <span className="font-medium text-[#1D1D1F] dark:text-white">Interstellar (2014)</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-mono font-bold">
                  <Star className="w-3 h-3 fill-amber-500" /> 98.4% Match
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 text-[#86868B] font-mono font-bold flex items-center justify-center text-[10px]">2</span>
                  <span className="font-medium text-[#1D1D1F] dark:text-white">Inception (2010)</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-mono font-bold">
                  <Star className="w-3 h-3 fill-amber-500" /> 96.8% Match
                </div>
              </div>
            </div>

            {/* Dataset Scale Indicator */}
            <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-[11px] text-[#86868B] dark:text-[#A1A1A6]">
              <span>5,000+ Titles Indexed</span>
              <span>100K+ User Ratings</span>
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
