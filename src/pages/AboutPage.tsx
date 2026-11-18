import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CornerDownRight } from 'lucide-react';
import {
  ABOUT_PRINCIPLES,
  ABOUT_TENETS,
  IMAGES,
  PROFILE,
  PROJECTS,
  QUANTIFIED_HIGHLIGHTS,
  TECH_STACK_MATRIX,
} from '../data/portfolioData';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow, SectionHeaderBar } from '../components/SwissGridMarkers';

export function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={IMAGES.heroBackdrop}
            alt="LadeStack architectural lighting backdrop"
            loading="eager"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-4">
          <h1 className="font-display text-6xl sm:text-8xl md:text-[7.5rem] font-semibold tracking-tight leading-none text-white">
            About
          </h1>
          <CrosshairRow className="mt-10" />
        </div>
      </section>

      {/* Edition 01: Studio Intro + Portrait */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Studio & Founder" edition="©Edition 01" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-4">
            <div className="lg:col-span-6 flex flex-col justify-between gap-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-[var(--text-primary)] text-balance">
                A design-led engineering mindset combining mechanical precision, modern browser runtimes, and privacy-first digital tools.
              </h2>

              <div className="space-y-4 max-w-xl text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Founded by <strong className="text-[var(--text-primary)] font-semibold">{PROFILE.name}</strong> in {PROFILE.location}, {PROFILE.brand} builds accessible, high-utility web software that respects user time and privacy.
                </p>
                <p className="text-xs font-mono-tabular text-[var(--text-muted)]">
                  {PROFILE.education.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="w-full h-full min-h-[360px] max-h-[520px] rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                <ResilientImage
                  src={IMAGES.portrait}
                  alt={PROFILE.name}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quantified Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[var(--border-hairline)]">
            {QUANTIFIED_HIGHLIGHTS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-mono-tabular text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edition 02: Brand & Systems Architecture */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 min-h-[320px]">
              <ResilientImage
                src={IMAGES.gbCoder}
                alt="LadeStack software systems architecture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 p-7 md:p-12 flex flex-col justify-between gap-10">
              <SectionHeaderBar label="About LadeStack™" edition="©Edition 02" />

              <div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
                  ©Systems Architecture
                </h2>
                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
                  Transitioning from mechanical engineering—tolerances, stress analysis, and constraint optimization—into resilient browser-native software systems.
                </p>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <CornerDownRight size={13} aria-hidden="true" />
                  <span>Get in touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edition 03: Engineering Principles (Sticky Left + Stacked Right Cards) */}
      <section className="py-16 md:py-24 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Engineering Philosophy" edition="©Edition 03" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            <div className="lg:col-span-6 lg:sticky lg:top-24 self-start space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02] text-[var(--text-primary)] text-balance">
                ©Better software, simplified.
              </h2>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
                Every utility in the LadeStack ecosystem follows three non-negotiable engineering tenets: immediate utility, local-first privacy, and zero paywall friction.
              </p>

              <div className="pt-2">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <span>Explore 8 Live Products</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              <div className="pt-6 space-y-5 border-t border-[var(--border-hairline)] max-w-md">
                {ABOUT_TENETS.map((tenet) => (
                  <div key={tenet.index}>
                    <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
                      ({tenet.index})
                    </div>
                    <h3 className="font-display text-base font-semibold text-[var(--text-primary)] mt-1">
                      {tenet.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-1">
                      {tenet.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              {ABOUT_PRINCIPLES.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tabular text-[var(--text-muted)]">
                      (0{idx + 1})
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-xs font-mono-tabular text-[var(--text-muted)]">
                      +
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Edition 04: Technical Tooling Matrix */}
      <section className="py-16 md:py-24 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Production Tooling" edition="©Edition 04" />

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)] mb-12">
            ©Technical Matrix<sup className="text-base font-mono-tabular text-[var(--text-muted)] ml-2">(04)</sup>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK_MATRIX.map((col, idx) => (
              <div
                key={col.group}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 space-y-5"
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[var(--text-muted)]">
                  <span>(0{idx + 1})</span>
                  <span>Stack</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                  {col.group}
                </h3>
                <ul className="divide-y divide-[var(--border-hairline)] text-sm text-[var(--text-secondary)]">
                  {col.items.map((tech) => (
                    <li key={tech} className="py-2.5">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edition 05: Built for Builders — 8-Tile Product Grid */}
      <section className="py-16 md:py-24 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Built for Builders" edition="©Edition 05" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] p-6 flex flex-col justify-between min-h-[140px] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[var(--text-muted)]">
                  <span>({project.index})</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-6">
                  <div className="font-display text-lg font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {project.category}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
