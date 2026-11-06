'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CalendarDays, MapPin, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { experienceData, educationData } from '@/data/experience';

function TimelineCard({ title, subtitle, period, location, grade, points, skills, type, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === 'work' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 border-l-2 border-gray-800 hover:border-indigo-500/50 transition-colors"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-950 border-2 border-indigo-500/60" />

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-500/30 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>
            <p className="text-sm text-indigo-400 font-medium mt-0.5">{subtitle}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-800 px-2.5 py-1 rounded-full shrink-0">
            <CalendarDays size={11} />
            {period}
          </span>
        </div>

        {/* Sub-meta (Location & Grade) */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
          {location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {location}
            </span>
          )}
          {grade && (
            <span className="flex items-center gap-1 text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
              <Award size={11} />
              {grade}
            </span>
          )}
        </div>

        {/* Content */}
        {Array.isArray(points) ? (
          <ul className="space-y-2 mb-3">
            {points.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/80 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 leading-relaxed mb-3">{points}</p>
        )}

        {/* Skill tags */}
        {skills && skills.length > 0 && (
          <div className="pt-2 border-t border-gray-800/80 flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-2 py-0.5 bg-gray-800/70 text-gray-300 rounded-md border border-gray-700/50"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Experience"
          title="Experience & Education"
          subtitle="My professional journey and academic background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={16} className="text-indigo-400" />
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Experience & Leadership
              </h3>
            </div>
            <div className="space-y-5">
              {experienceData.map((exp, i) => (
                <TimelineCard
                  key={exp.id}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  location={exp.location}
                  points={exp.description}
                  skills={exp.skills}
                  type="work"
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} className="text-indigo-400" />
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Education
              </h3>
            </div>
            <div className="space-y-5">
              {educationData.map((edu, i) => (
                <TimelineCard
                  key={edu.id}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  location={edu.location}
                  grade={edu.grade}
                  points={edu.description}
                  type="education"
                  index={i}
                />
              ))}
            </div>

            {/* LeetCode card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-amber-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-400">LC</span>
                  </div>
                  <span className="text-sm font-semibold text-white">LeetCode</span>
                </div>
                <a
                  href="https://leetcode.com/u/codedbyvinay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Profile →
                </a>
              </div>
              <p className="text-sm text-gray-400">
                Actively solving algorithmic problems to sharpen data structures and algorithms skills.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Arrays', 'Strings', 'Dynamic Programming', 'Trees', 'Graphs'].map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded-md border border-gray-700/60"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
