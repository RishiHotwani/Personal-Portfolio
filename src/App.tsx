import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollPosition } from './hooks/useScrollPosition';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/Hero';
import { AboutSection } from './components/about/About';
import { EducationSection } from './components/education/Education';
import { ExperienceSection } from './components/experience/Experience';
import { SectionHeader } from './components/common/SectionHeader';
import { TechStack3D } from './components/skills/TechStack3D';
import { SkillsCategorized } from './components/skills/SkillsCategorized';
import { ProjectsSection } from './components/projects/Projects';
import { ContactSection } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isScrolled, activeSection } = useScrollPosition();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300 font-sans selection:bg-[#2997FF] selection:text-white">
      {/* Floating Apple Glassmorphic Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection isDark={isDark} />

        {/* About Section */}
        <AboutSection />

        {/* Education Section */}
        <EducationSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Tech Stack & Skills Section */}
        <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SectionHeader
            category="Technical Stack"
            title="Tools I build with."
            subtitle="An interactive technology universe spanning frontend craftsmanship, enterprise Java backends, and AI models."
          />

          {/* Interactive 3D Orbit Universe */}
          <TechStack3D isDark={isDark} />

          {/* Categorized Skills Grid */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
              What I work with.
            </h3>
            <p className="text-base text-[#86868B] dark:text-[#A1A1A6] font-normal leading-relaxed">
              Structured domains of expertise honed through production engineering, academic studies, and shipped systems.
            </p>
            <SkillsCategorized />
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
