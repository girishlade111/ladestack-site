import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import {
  IMAGES,
  JOURNAL_ARTICLES,
  PROFILE,
  PROJECTS,
  QUANTIFIED_HIGHLIGHTS,
} from '../data/portfolioData';
import { AvailabilityCard } from '../components/AvailabilityCard';
import { ResilientImage } from '../components/ResilientImage';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { CrosshairRow, SectionHeaderBar } from '../components/SwissGridMarkers';
import { WorkCard } from '../components/WorkCard';

const CAPABILITIES_OVERVIEW = [
  {
    index: '01',
    title: 'Brand Architecture',
    description:
      'Positioning software products around clarity, deliberate naming, and distinctive visual restraint that scales across web ecosystems.',
  },
  {
    index: '02',
    title: 'Experience Design',
    description:
      'Swiss-inspired editorial typography, calm dark/light surfaces, WCAG AA contrast, and fluid Motion micro-interactions.',
  },
  {
    index: '03',
    title: 'Web Engineering',
    description:
      'Production React 19, Next.js 15, Astro, and local-first Web Worker utilities engineered for instant responsiveness and zero-upload privacy.',
  },
];

export function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const recentJournal = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={IMAGES.heroBackdrop}
            alt="Atmospheric dark studio backdrop"
            loading="eager"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-4xl">
              <p className="text-xs font-mono-tabular tracking-wider text-white/70 mb-4">
                ©Since — {PROFILE.since} · {PROFILE.location}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-semibold tracking-tight leading-[0.94] text-white text-balance"
              >
                {PROFILE.displayName}™
              </motion.h1>
            </div>

            <AvailabilityCard className="self-start lg:self-end" />
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <p className="lg:col-span-7 text-lg sm:text-xl md:text-2xl text-white/85 leading-snug max-w-2xl text-balance">
              {PROFILE.philosophy}
            </p>
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
              <Link
                to="/work"
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold inline-flex items-center gap-2 hover:bg-neutral-200 transition-colors whitespace-nowrap"
              >
                <span>Explore Works (08)</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-xs font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Quick Services Ticker */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tabular text-white/70">
            <span>(01) Web Engineering</span>
            <span aria-hidden="true">·</span>
            <span>(02) UI/UX Design</span>
            <span aria-hidden="true">·</span>
            <span>(03) Local-First Utilities</span>
            <span aria-hidden="true">·</span>
            <span>(04) In-Browser DevTools</span>
          </div>

          <CrosshairRow className="mt-6" />
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Selected Case Studies" edition="©Edition 01" />

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)]">
              ©Featured Works
            </h2>
            <div className="flex items-center gap-6">
              <span className="text-sm font-mono-tabular text-[var(--text-muted)]">(04)</span>
              <Link
                to="/work"
                className="text-xs font-medium text-[var(--text-primary)] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>All Works (08)</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {featuredProjects.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} tilted />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 md:py-24 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Core Focus" edition="©Edition 02" />

          <div className="flex items-baseline justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)]">
              ©Capabilities
            </h2>
            <Link
              to="/services"
              className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Full Breakdown</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITIES_OVERVIEW.map((cap) => (
              <div
                key={cap.index}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 flex flex-col justify-between min-h-[230px]"
              >
                <span className="text-xs font-mono-tabular text-[var(--text-muted)]">
                  ({cap.index})
                </span>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Accordion */}
      <ServicesAccordion />

      {/* Quantified Highlights Strip */}
      <section className="py-20 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Product Ecosystem Output" edition="©Edition 05" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            {QUANTIFIED_HIGHLIGHTS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="font-display font-mono-tabular text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--text-primary)]">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--text-muted)]">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 md:py-28 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Technical Writing" edition="©Edition 09" />

          <div className="flex items-baseline justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)]">
              ©Journal
            </h2>
            <Link
              to="/blog"
              className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>All Articles (05)</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJournal.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)] rounded-2xl"
              >
                <article className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                    <ResilientImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/55 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Calendar size={12} aria-hidden="true" />
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
