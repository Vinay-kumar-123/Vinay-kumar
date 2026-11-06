import Link from 'next/link';
import { Code2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/ui/Icons';
import { profile } from '@/data/profile';

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Vinay Kumar</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © {CURRENT_YEAR} Vinay Kumar. Built with Next.js &amp; Tailwind CSS.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 rounded-md text-gray-500 hover:text-amber-400 hover:bg-white/5 transition-colors"
            >
              <LeetCodeIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
