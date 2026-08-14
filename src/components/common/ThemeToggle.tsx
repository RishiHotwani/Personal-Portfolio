import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Theme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 backdrop-blur-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-apple-accent/50 group"
    >
      <Sun className="w-3.5 h-3.5 ml-0.5 text-amber-500 transition-opacity duration-200 opacity-90 group-hover:opacity-100" />
      <Moon className="w-3.5 h-3.5 mr-0.5 text-apple-accent transition-opacity duration-200 opacity-90 group-hover:opacity-100" />
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white dark:bg-[#2C2C2E] shadow-sm flex items-center justify-center ${
          isDark ? 'right-0.5' : 'left-0.5'
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-apple-accent" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};
