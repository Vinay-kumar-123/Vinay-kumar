'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!GOOGLE_SCRIPT_URL) {
      setStatus('error');
      setErrorMessage(
        'Google Sheets endpoint is not yet connected. Please set NEXT_PUBLIC_GOOGLE_SCRIPT_URL or email directly.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', data.name.trim());
      formData.append('email', data.email.trim());
      formData.append('subject', data.subject.trim());
      formData.append('message', data.message.trim());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setStatus('success');
        reset();
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white text-sm rounded-lg placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all';

  const errorClass = 'border-red-500/60 focus:border-red-500 focus:ring-red-500/30';

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Let&apos;s build something together
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whether you&apos;re looking to collaborate on a project, have a technical
                question, or just want to say hello — my inbox is open.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Mail size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-300 font-medium">{profile.email}</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <GithubIcon size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">GitHub</p>
                  <p className="text-sm text-gray-300 font-medium">Vinay-kumar-123</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <LinkedinIcon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">LinkedIn</p>
                  <p className="text-sm text-gray-300 font-medium">Vinay Kumar</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gray-900 border border-emerald-500/20 rounded-xl"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Message sent!</h3>
                <p className="text-sm text-gray-400 mb-6">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-sm font-medium text-white rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                      className={`${inputClass} ${errors.name ? errorClass : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`${inputClass} ${errors.email ? errorClass : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`${inputClass} ${errors.subject ? errorClass : ''}`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Message must be at least 20 characters' },
                    })}
                    className={`${inputClass} resize-none ${errors.message ? errorClass : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
