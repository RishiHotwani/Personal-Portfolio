import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#86868B] dark:text-[#A1A1A6]">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            © 2026 Rishi Hotwani
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Designed & built with React.js & TypeScript</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socials.email}`}
            className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#1D1D1F] dark:text-white transition-colors ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
