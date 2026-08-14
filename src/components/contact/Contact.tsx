import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending & trigger mailto fallback safely
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Apple confetti celebration
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#2997FF', '#0071E3', '#30D158', '#E5E5EA']
        });
      } catch {
        // Ignore fallback
      }

      // Safe mailto fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Rishi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${PERSONAL_INFO.socials.email}?subject=${subject}&body=${body}`;
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        category="Contact"
        title="Let's build something meaningful."
        subtitle="Have a project, opportunity, or idea? I'd love to hear about it."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Direct Connect Options */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 space-y-4"
        >
          <GlassCard className="p-7 border border-black/10 dark:border-white/15 space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Get in Touch
            </h3>
            <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] leading-relaxed">
              I'm always open to discussing new opportunities, software architecture, full-stack systems, or AI integrations.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors border border-black/[0.05] dark:border-white/[0.08] text-sm text-[#1D1D1F] dark:text-[#F5F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-apple-accent flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium truncate max-w-[170px] sm:max-w-[200px]">{PERSONAL_INFO.socials.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors border border-black/[0.05] dark:border-white/[0.08] text-sm text-[#1D1D1F] dark:text-[#F5F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center">
                    <LinkedinIcon size={16} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors border border-black/[0.05] dark:border-white/[0.08] text-sm text-[#1D1D1F] dark:text-[#F5F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-500/10 text-[#1D1D1F] dark:text-white flex items-center justify-center">
                    <GithubIcon size={16} />
                  </div>
                  <span className="font-medium">GitHub Projects</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#86868B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </GlassCard>
        </motion.div>

        {/* Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          <GlassCard className="p-7 sm:p-9 border border-black/10 dark:border-white/15">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Thank you!
                </h4>
                <p className="text-sm text-[#86868B] dark:text-[#A1A1A6] max-w-sm mx-auto leading-relaxed">
                  Your mail client has been opened to send this note directly. I look forward to connecting with you soon.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-5 py-2 text-xs font-semibold rounded-full bg-black/5 dark:bg-white/10 text-[#1D1D1F] dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border ${
                      errors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-black/10 dark:border-white/10'
                    } text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] dark:placeholder-[#636366] text-sm focus:outline-none focus:ring-2 focus:ring-apple-accent transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border ${
                      errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-black/10 dark:border-white/10'
                    } text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] dark:placeholder-[#636366] text-sm focus:outline-none focus:ring-2 focus:ring-apple-accent transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#86868B] dark:text-[#A1A1A6] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we collaborate?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border ${
                      errors.message ? 'border-red-500/50 focus:ring-red-500/20' : 'border-black/10 dark:border-white/10'
                    } text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] dark:placeholder-[#636366] text-sm focus:outline-none focus:ring-2 focus:ring-apple-accent transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.99] text-white font-medium text-sm transition-all duration-200 shadow-sm disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Opening mail...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
