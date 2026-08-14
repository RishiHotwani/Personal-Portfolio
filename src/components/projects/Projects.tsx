import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../data/types';
import { SectionHeader } from '../common/SectionHeader';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { SplitProjectCard } from './SplitProjectCard';
import { BrowserProjectCard } from './BrowserProjectCard';
import { MedicalProjectCard } from './MedicalProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const clinchProject = PROJECTS.find(p => p.id === 'clinch-crm') || PROJECTS[0];
  const movieProject = PROJECTS.find(p => p.id === 'movie-recommendation') || PROJECTS[1];
  const extensionProject = PROJECTS.find(p => p.id === 'instagram-reels-counter') || PROJECTS[2];
  const medicalProject = PROJECTS.find(p => p.id === 'medipredict-ai') || PROJECTS[3];

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        category="Selected Work"
        title="Engineered for impact and scale."
        subtitle="Explore flagship web applications, machine learning recommendation systems, and developer tools built with high attention to performance and user experience."
      />

      <div className="space-y-8 sm:space-y-10">
        {/* 1. Flagship Featured Hero Project */}
        <FeaturedProjectCard
          project={clinchProject}
          onOpenModal={(p) => setSelectedProject(p)}
        />

        {/* 2. Split Screen / Diagnostic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SplitProjectCard
            project={movieProject}
            onOpenModal={(p) => setSelectedProject(p)}
          />

          <BrowserProjectCard
            project={extensionProject}
            onOpenModal={(p) => setSelectedProject(p)}
          />

          <MedicalProjectCard
            project={medicalProject}
            onOpenModal={(p) => setSelectedProject(p)}
          />
        </div>
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
