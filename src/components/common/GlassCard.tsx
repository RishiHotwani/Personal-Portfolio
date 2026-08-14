import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'subtle' | 'regular' | 'thick';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = false,
  intensity = 'regular',
  ...props
}) => {
  const intensityClass = {
    subtle: 'apple-glass-subtle',
    regular: 'apple-glass',
    thick: 'bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-apple-thick border border-black/10 dark:border-white/15'
  }[intensity];

  return (
    <motion.div
      className={cn(
        'rounded-3xl relative overflow-hidden transition-all duration-300',
        intensityClass,
        hoverEffect && 'apple-card-hover cursor-pointer',
        className
      )}
      {...props}
    >
      {/* Subtle top light reflection (specular edge) */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
