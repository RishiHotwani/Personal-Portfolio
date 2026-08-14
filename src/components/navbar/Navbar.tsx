import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ThemeToggle } from '../common/ThemeToggle';
import type { Theme } from '../../hooks/useTheme';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  isScrolled: boolean;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  isScrolled,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? 'apple-glass-nav shadow-apple-md dark:shadow-apple-dark-md border border-black/8 dark:border-white/15 backdrop-blur-apple'
              : 'bg-white/40 dark:bg-black/40 backdrop-blur-md border border-transparent'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
              RH
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] hidden xs:inline">
              Rishi Hotwani
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-black/5 dark:bg-white/10 text-apple-accent dark:text-apple-accent font-semibold'
                      : 'text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Socials, Resume, Theme Switcher, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-1 border-r border-black/10 dark:border-white/10 pr-2 sm:pr-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Open menu"
              className="md:hidden p-2 rounded-full text-[#86868B] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative top-20 mx-4 p-6 rounded-3xl bg-white/90 dark:bg-[#1C1C1E]/95 backdrop-blur-apple-thick border border-black/10 dark:border-white/15 shadow-2xl space-y-4"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="flex items-center justify-between p-3 rounded-2xl text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B]" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-around">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F] dark:text-white"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F] dark:text-white"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
