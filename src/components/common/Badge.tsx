import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
  size = 'md'
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs tracking-wide',
    md: 'px-3 py-1 text-xs sm:text-sm font-medium tracking-tight'
  };

  const variantStyles = {
    default: 'bg-black/[0.04] dark:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.12]',
    accent: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
    outline: 'bg-transparent text-neutral-600 dark:text-neutral-400 border border-black/10 dark:border-white/15'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full transition-all duration-200 select-none',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
