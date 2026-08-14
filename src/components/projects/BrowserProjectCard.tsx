import React from 'react';
import type { Project } from '../../data/types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrowserProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const BrowserProjectCard: React.FC<BrowserProjectCardProps> = ({ project, onOpenModal }) => {
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
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
              CHROME EXTENSION
            </span>
            <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              <Shield className="w-3.5 h-3.5" />
              100% On-Device
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {project.title}
          </h3>

          <p className="text-base text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
            {project.description}
          </p>

          {/* Browser Extension Popup UI Mockup */}
          <div className="rounded-2xl bg-black/[0.04] dark:bg-[#151517] border border-black/5 dark:border-white/10 p-4 space-y-3">
            {/* Top extension bar */}
            <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-[11px] font-bold">
                  ▶
                </div>
                <span className="text-xs font-bold text-[#1D1D1F] dark:text-white">Reels Tracker</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">Active</span>
            </div>

            {/* Timeframe Tally Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-left">
                <span className="text-[10px] text-[#86868B] dark:text-[#A1A1A6] block">Today's Reels</span>
                <span className="text-lg font-bold text-[#1D1D1F] dark:text-white">28 <span className="text-[10px] text-emerald-500 font-normal">-14%</span></span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-left">
                <span className="text-[10px] text-[#86868B] dark:text-[#A1A1A6] block">Weekly Total</span>
                <span className="text-lg font-bold text-[#1D1D1F] dark:text-white">184</span>
              </div>
            </div>

            {/* Lifetime Bar */}
            <div className="flex items-center justify-between text-[11px] text-[#86868B] dark:text-[#A1A1A6] px-1">
              <span>Manifest V3 Alarm Sync</span>
              <span className="font-mono font-medium text-purple-500">Auto-Reset 00:00</span>
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
