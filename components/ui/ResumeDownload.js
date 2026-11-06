'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { resumeConfig } from '@/data/resume';

/**
 * Reusable Centralized Resume Download / View Component
 *
 * Automatically pulls the single source of truth from resumeConfig.
 * Ensure replacement of public/resume/Vinay_Kumar_Resume.pdf updates all instances.
 */
export default function ResumeDownload({
  variant = 'primary',
  size = 'md',
  label = 'Download CV',
  showIcon = true,
  iconType = 'download',
  className = '',
  openInNewTab = true,
}) {
  const Icon = iconType === 'file' ? FileText : Download;

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500';

  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30',
    secondary:
      'border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white bg-transparent hover:bg-indigo-500/10 rounded-lg',
    nav: 'px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all',
    text: 'text-sm text-gray-400 hover:text-indigo-400 p-0 bg-transparent transition-colors',
    outline:
      'border border-indigo-500/30 hover:border-indigo-500 text-indigo-300 hover:text-white bg-indigo-500/5 hover:bg-indigo-500/15 rounded-lg',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Nav and text have self-contained padding
  const sizeClass = variant === 'nav' || variant === 'text' ? '' : sizes[size] || sizes.md;
  const variantClass = variants[variant] || variants.primary;

  return (
    <motion.a
      href={resumeConfig.filePath}
      download={resumeConfig.fileName}
      target={openInNewTab ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={`Download ${resumeConfig.title}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`.trim()}
    >
      {showIcon && <Icon size={size === 'sm' ? 14 : 16} className="shrink-0" />}
      <span>{label}</span>
    </motion.a>
  );
}
