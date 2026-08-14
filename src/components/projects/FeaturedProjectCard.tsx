import React from 'react';
import type { Project } from '../../data/types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, onOpenModal }) => {
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
        className="group relative p-8 sm:p-12 lg:p-14 border border-black/10 dark:border-white/15 overflow-hidden"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Storytelling & Meta */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                FLAGSHIP PROJECT
              </span>
              <span className="text-xs text-[#86868B] dark:text-[#A1A1A6] font-mono">
                React • Spring Boot • RAG AI
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
              {project.title}
            </h3>

            <p className="text-lg text-[#86868B] dark:text-[#A1A1A6] leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                {project.metrics.map(m => (
                  <div key={m.label} className="p-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[11px] text-[#86868B] dark:text-[#A1A1A6] font-medium">{m.label}</div>
                    <div className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 6).map(tech => (
                <Badge key={tech} size="sm" variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Interactive Actions */}
            <div className="flex items-center gap-4 pt-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-apple-accent group-hover:underline">
                Explore Case Study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white transition-colors"
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
                  className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Apple-styled UI Product Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#F0F0F2] dark:bg-[#151517] p-5 sm:p-6 border border-black/10 dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 text-[11px] font-mono text-[#86868B] dark:text-[#A1A1A6]">
                  app.clinch-crm.io
                </div>
              </div>

              {/* CRM Dashboard Mockup Visual */}
              <div className="space-y-4">
                {/* AI Assistant Banner */}
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      AI Deal Copilot: 3 High-Probability Leads Detected
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-500">RAG Active</span>
                </div>

                {/* Pipeline Stages Mini Columns */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08]">
                    <div className="text-[11px] font-medium text-[#86868B] dark:text-[#A1A1A6] mb-2 flex items-center justify-between">
                      <span>Discovery</span>
                      <span className="text-[10px] font-mono font-bold">14</span>
                    </div>
                    <div className="h-14 rounded-lg bg-black/5 dark:bg-white/10 p-2 text-[10px] text-left font-mono">
                      <div className="font-semibold text-[#1D1D1F] dark:text-white truncate">Acme Enterprise</div>
                      <div className="text-emerald-500 font-bold mt-1">$48,000</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08]">
                    <div className="text-[11px] font-medium text-[#86868B] dark:text-[#A1A1A6] mb-2 flex items-center justify-between">
                      <span>Proposal</span>
                      <span className="text-[10px] font-mono font-bold">8</span>
                    </div>
                    <div className="h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 p-2 text-[10px] text-left font-mono">
                      <div className="font-semibold text-blue-600 dark:text-blue-400 truncate">Nova Cloud</div>
                      <div className="text-blue-500 font-bold mt-1">$120,000</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08]">
                    <div className="text-[11px] font-medium text-[#86868B] dark:text-[#A1A1A6] mb-2 flex items-center justify-between">
                      <span>Closing</span>
                      <span className="text-[10px] font-mono font-bold">5</span>
                    </div>
                    <div className="h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2 text-[10px] text-left font-mono">
                      <div className="font-semibold text-emerald-600 dark:text-emerald-400 truncate">Stratos AI</div>
                      <div className="text-emerald-500 font-bold mt-1">$92,500</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Analytics Bar */}
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] flex items-center justify-between text-xs text-[#86868B] dark:text-[#A1A1A6]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span>Quarterly Revenue Run-rate</span>
                  </div>
                  <span className="font-mono font-bold text-[#1D1D1F] dark:text-white">$840,000 (+24%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
