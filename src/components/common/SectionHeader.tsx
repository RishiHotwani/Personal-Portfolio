import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  category,
  title,
  subtitle,
  centered = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      {category && (
        <span className="text-[13px] font-semibold tracking-wider text-[#86868B] dark:text-[#A1A1A6] uppercase mb-3 block">
          {category}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg sm:text-xl text-[#86868B] dark:text-[#A1A1A6] font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
