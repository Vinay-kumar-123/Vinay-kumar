'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, MapPin, Code2, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ResumeDownload from '@/components/ui/ResumeDownload';
import { profile } from '@/data/profile';

const highlights = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE @ Haldia Institute of Technology (2024–2028)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gaya, Bihar | Haldia, West Bengal',
  },
  {
    icon: Code2,
    label: 'Focus',
    value: 'Full-Stack, AI/ML, SaaS Engineering',
  },
  {
    icon: Lightbulb,
    label: 'Currently',
    value: 'Building AI-powered products & mentoring developers',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="About"
          title="Background & Story"
          subtitle="A little about who I am and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image & quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Avatar */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <Image
                src={profile.avatar}
                alt="Vinay Kumar"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 bg-gray-900 border border-gray-800 rounded-xl"
                >
                  <div className="mt-0.5 p-1.5 bg-indigo-500/10 rounded-lg shrink-0">
                    <Icon size={14} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                    <p className="text-xs text-gray-300 font-medium leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Long bio & interests */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {profile.longBio.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}

            {/* Interest tags */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Full-Stack Development',
                  'SaaS Products',
                  'Generative AI & RAG',
                  'Automation & Cloud',
                  'Open Source',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap gap-3">
              <ResumeDownload
                variant="primary"
                label="Download Resume"
                size="md"
              />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-semibold rounded-lg hover:bg-indigo-500/10 transition-all cursor-pointer"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
