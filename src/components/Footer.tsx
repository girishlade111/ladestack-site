import { Link } from 'react-router-dom';
import { ArrowUpRight, CornerDownRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { AvailabilityCard } from './AvailabilityCard';
import { CrosshairRow, SectionHeaderBar } from './SwissGridMarkers';

const FOOTER_LINKS = [
  { to: '/', label: 'Home', index: '01' },
  { to: '/about', label: 'About', index: '02' },
  { to: '/work', label: 'Work', index: '03' },
  { to: '/blog', label: 'Blog', index: '04' },
  { to: '/contact', label: 'Contact', index: '05' },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-12 border-t border-[var(--border-hairline)] bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Top Let's Talk Box matching screenshots */}
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 md:p-10 mb-10">
          <SectionHeaderBar label="Footer" edition="©Edition 10" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
            <Link
              to="/contact"
              className="group inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)]"
            >
              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95] text-[var(--text-primary)] group-hover:opacity-85 transition-opacity">
                ©Let&apos;s Talk
              </h2>
            </Link>

            <AvailabilityCard className="self-start lg:self-end" />
          </div>
        </div>

        {/* 4-column Swiss Crosshair Divider */}
        <CrosshairRow className="mb-10" />

        {/* Bottom Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand + Headline + Direct Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="font-display text-sm font-bold tracking-tight text-[var(--text-primary)] block mb-6">
                {PROFILE.brand}
              </span>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-[var(--text-primary)] max-w-md text-balance">
                ©Strategic engineering for brands that matter.
              </p>
            </div>

            <div className="mt-12 pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-1.5 text-xs font-medium text-[var(--text-primary)]">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <CornerDownRight size={13} className="text-[var(--text-muted)]" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </a>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <CornerDownRight size={13} className="text-[var(--text-muted)]" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)]">
                © 2026 {PROFILE.brand} · {PROFILE.displayName}
              </p>
            </div>
          </div>

          {/* Right Column: Giant Numbered Links + Social Row */}
          <div className="lg:col-span-6">
            <nav aria-label="Footer navigation" className="divide-y divide-[var(--border-hairline)] border-b border-[var(--border-hairline)]">
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="py-4 flex items-baseline justify-between group hover:pl-2 transition-all duration-200"
                >
                  <span className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                    {item.label}
                  </span>
                  <span className="font-mono-tabular text-xs text-[var(--text-muted)]">
                    {item.index}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
              <div className="flex flex-wrap items-center gap-5">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <Link to="/services" className="hover:text-[var(--text-primary)] transition-colors">
                Services (06)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
