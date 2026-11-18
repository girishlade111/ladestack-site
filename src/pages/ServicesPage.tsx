import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CornerDownRight, Minus, Plus } from 'lucide-react';
import { IMAGES, PROFILE, SERVICES, TESTIMONIALS } from '../data/portfolioData';
import { AvailabilityCard } from '../components/AvailabilityCard';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow } from '../components/SwissGridMarkers';

export function ServicesPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleDeliverable = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const firstGroup = SERVICES.slice(0, 3);
  const secondGroup = SERVICES.slice(3, 6);
  const featuredTestimonial = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];
  const secondaryTestimonials = TESTIMONIALS.filter((t) => t !== featuredTestimonial);

  const renderCapabilityCard = (service: (typeof SERVICES)[number]) => (
    <div
      key={service.id}
      id={service.id}
      className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
    >
      <div className="lg:col-span-5 flex flex-col justify-between gap-8">
        <div className="flex items-start gap-2">
          <span className="text-xs font-mono-tabular text-[var(--text-muted)] pt-1">
            ({service.id})
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            {service.title}
          </h3>
        </div>

        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
          {service.description}
        </p>
      </div>

      <div className="lg:col-span-7 divide-y divide-[var(--border-hairline)] border-b border-[var(--border-hairline)]">
        {service.deliverables.map((item) => {
          const itemKey = `${service.id}-${item.name}`;
          const isOpen = Boolean(expandedItems[itemKey]);
          return (
            <div key={item.name} className="py-3.5">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleDeliverable(itemKey)}
                className="w-full flex items-center justify-between gap-4 text-left py-1 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors cursor-pointer"
              >
                <span>{item.name}</span>
                {isOpen ? (
                  <Minus size={15} className="shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
                ) : (
                  <Plus size={15} className="shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 pb-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
                      {item.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={IMAGES.heroBackdrop}
            alt="LadeStack services backdrop"
            loading="eager"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-display text-6xl sm:text-8xl md:text-[7.5rem] font-semibold tracking-tight leading-none text-white">
              Services<sup className="text-2xl sm:text-3xl font-mono-tabular text-white/75 ml-2">(06)</sup>
            </h1>
            <AvailabilityCard subtitle="Let's Talk" className="self-start md:self-end" />
          </div>

          <CrosshairRow className="mt-10" />
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)] mb-12">
            ©Capabilities
          </h2>

          <div className="space-y-6">
            {firstGroup.map(renderCapabilityCard)}
          </div>

          {/* Testimonial Spotlight Grid (matching Services screenshot) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 items-stretch">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)] min-h-[420px] flex flex-col justify-between p-7">
              <div className="absolute inset-0 pointer-events-none">
                <ResilientImage
                  src={IMAGES.kineticSculpture}
                  alt="Precision kinetic sculpture"
                  className="w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
              </div>

              <div className="relative z-10 text-center text-xs font-semibold text-white/90">
                {PROFILE.brand}
              </div>

              <div className="relative z-10 rounded-xl bg-black/65 backdrop-blur-xl border border-white/15 p-6 max-w-md mx-auto">
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/20 shrink-0">
                    <ResilientImage
                      src={IMAGES.portrait}
                      alt={featuredTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {featuredTestimonial.name}
                    </div>
                    <div className="text-[11px] text-white/65">
                      {featuredTestimonial.role}, {featuredTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:underline"
                >
                  <CornerDownRight size={13} aria-hidden="true" />
                  <span>Start a collaboration</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              {secondaryTestimonials.map((item, idx) => (
                <div
                  key={item.name}
                  className="flex-1 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 flex flex-col justify-between gap-6"
                >
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-[var(--text-muted)]">
                    <span>(0{idx + 2})</span>
                    <span>Client Review</span>
                  </div>

                  <p className="text-base sm:text-lg font-medium text-[var(--text-primary)] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-[var(--border-hairline)]">
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {item.name}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {secondGroup.map(renderCapabilityCard)}
          </div>

          {/* Engagement Models */}
          <div className="mt-16 pt-14 border-t border-[var(--border-hairline)]">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-8">
              ©Engagement Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-xs font-mono-tabular text-[var(--text-muted)]">
                    Model (01)
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mt-2">
                    Monthly Product Sprint
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
                    Dedicated senior UI/UX engineering and full-stack shipping cadence for teams building new web tools, design systems, or in-browser workspaces.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold self-start hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <span>Reserve Sprint Slot</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-xs font-mono-tabular text-[var(--text-muted)]">
                    Model (02)
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mt-2">
                    Fixed Architecture Project
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
                    End-to-end delivery for a well-scoped flagship website, local-first browser utility, or Astro multilingual platform with defined milestones.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-semibold self-start hover:bg-[var(--bg-glass)] transition-colors whitespace-nowrap"
                >
                  <span>Request Project Scope</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
