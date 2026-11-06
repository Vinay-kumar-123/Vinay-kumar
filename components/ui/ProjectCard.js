'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

const statusConfig = {
  completed: {
    label: 'Completed',
    className: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  },
  conceptual: {
    label: 'Conceptual',
    className: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
  },
};

const categoryColors = {
  'AI/ML': 'from-purple-500/20 to-indigo-500/20 border-purple-500/20',
  'Full-Stack': 'from-indigo-500/20 to-cyan-500/20 border-indigo-500/20',
  SaaS: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/20',
};

export default function ProjectCard({ project, index }) {
  const status = statusConfig[project.status] || statusConfig.completed;
  const categoryGradient =
    categoryColors[project.category] || categoryColors['Full-Stack'];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      {/* Top gradient accent */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r ${categoryGradient}`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <div>
            <span
              className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${status.className}`}
            >
              {status.label}
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-1.5 rounded-md text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-0.5 bg-gray-800 text-gray-400 rounded-md border border-gray-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
