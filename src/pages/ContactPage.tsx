import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import {
  createInquiryReference,
  validateContactForm,
  type ContactFormErrors,
} from '../lib/contactValidation';
import { AvailabilityCard } from '../components/AvailabilityCard';

const SERVICE_OPTIONS = [
  'Web Engineering',
  'UI/UX Design',
  'In-Browser DevTools',
  'Local-First Utility',
  'AI Workflow',
];

const BUDGET_OPTIONS = ['< $5k', '$5k–$15k', '$15k–$30k', 'Monthly Sprint'];

export function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm({
      firstName,
      lastName,
      email,
      service,
      budget,
      message,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedRef(createInquiryReference(email));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <main className="py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Main Contact Container matching Contact screenshot */}
        <section className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-10 md:p-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-none text-[var(--text-primary)]">
                ©Let&apos;s Talk
              </h1>
              <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
                Direct inquiries to <strong className="text-[var(--text-primary)]">{PROFILE.displayName}</strong> ({PROFILE.location}). Available for select product architecture sprints and engineering builds.
              </p>
            </div>

            <AvailabilityCard className="self-start lg:self-center" />
          </div>

          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-primary)] p-6 sm:p-8 md:p-10">
            {submittedRef ? (
              <div data-testid="contact-confirmation" className="py-10 max-w-xl space-y-5">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Inquiry Recorded</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Thank you, {firstName}.
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Your project inquiry for <strong>{service}</strong> ({budget}) has been logged under reference{' '}
                  <span className="font-mono-tabular font-semibold text-[var(--text-primary)]">
                    {submittedRef}
                  </span>
                  . You can also reach Girish directly via{' '}
                  <a href={`mailto:${PROFILE.email}`} className="underline text-[var(--text-primary)]">
                    {PROFILE.email}
                  </a>
                  .
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `[${submittedRef}] ${service} Inquiry from ${firstName} ${lastName}`
                    )}&body=${encodeURIComponent(message)}`}
                    className="px-5 py-2.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] inline-flex items-center gap-1.5 hover:bg-[var(--bg-glass)] transition-colors"
                  >
                    <span>Open in Mail Client</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                {/* Name Row */}
                <div className="space-y-3">
                  <div className="text-xs font-mono-tabular text-[var(--text-secondary)]">
                    ©Name
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-first-name" className="sr-only">
                        First name
                      </label>
                      <input
                        id="contact-first-name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        aria-invalid={Boolean(errors.firstName)}
                        className="w-full h-12 px-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-hairline)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)]"
                      />
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs text-rose-500">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-last-name" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="contact-last-name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        aria-invalid={Boolean(errors.lastName)}
                        className="w-full h-12 px-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-hairline)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)]"
                      />
                      {errors.lastName && (
                        <p className="mt-1.5 text-xs text-rose-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono-tabular text-[var(--text-secondary)]"
                  >
                    ©Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full h-12 px-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-hairline)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>

                {/* Service & Budget Selectors */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <span className="block text-xs font-mono-tabular text-[var(--text-secondary)]">
                      ©Service Focus
                    </span>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Select service">
                      {SERVICE_OPTIONS.map((option) => {
                        const active = service === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setService(option)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                              active
                                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-transparent'
                                : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:text-[var(--text-primary)]'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="block text-xs font-mono-tabular text-[var(--text-secondary)]">
                      ©Engagement Scope
                    </span>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Select budget range">
                      {BUDGET_OPTIONS.map((option) => {
                        const active = budget === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setBudget(option)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                              active
                                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-transparent'
                                : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-hairline)] hover:text-[var(--text-primary)]'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono-tabular text-[var(--text-secondary)]"
                  >
                    ©Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your product goals, timeline, and technical requirements..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-hairline)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)] resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[var(--text-muted)]">
                    Direct replies within 24 hours from {PROFILE.email}.
                  </p>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity self-start sm:self-auto whitespace-nowrap"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Channels Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--border-hairline)]">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 text-sm text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors"
            >
              <Mail size={16} className="text-[var(--text-muted)] shrink-0" aria-hidden="true" />
              <span>{PROFILE.email}</span>
            </a>

            <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
              <MapPin size={16} className="text-[var(--text-muted)] shrink-0" aria-hidden="true" />
              <span>{PROFILE.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-5 md:justify-end text-xs font-medium">
              {PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
