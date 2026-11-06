'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillsData } from '@/data/skills';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="Technologies and tools I work with across the full stack."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block text-xs font-medium px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700/60 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub stats link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            See my code in action →{' '}
            <a
              href="https://github.com/Vinay-kumar-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              github.com/Vinay-kumar-123
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
