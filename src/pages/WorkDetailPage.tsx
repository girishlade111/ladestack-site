import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Maximize2, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { getAdjacentProjects, getProjectBySlug } from '../lib/portfolio';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow, SectionHeaderBar } from '../components/SwissGridMarkers';

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(PROJECTS, slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  if (!project) {
    return (
      <main className="max-w-[1400px] mx-auto px-5 md:px-10 py-28 text-center space-y-6">
        <h1 className="font-display text-4xl font-semibold text-[var(--text-primary)]">
          Case study not found
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          The requested project slug does not match an active LadeStack case study.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          <span>Back to All Works</span>
        </Link>
      </main>
    );
  }

  const { previous, next } = getAdjacentProjects(PROJECTS, project.slug);

  return (
    <main>
      {/* Header & Metadata */}
      <section className="pt-12 md:pt-16 pb-10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to All Works (08)</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[var(--text-muted)] mb-4">
                <span>({project.index})</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>
              <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[0.98] text-[var(--text-primary)] text-balance">
                {project.title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <span>Open Live Product</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] inline-flex items-center gap-2 hover:bg-[var(--bg-glass)] transition-colors whitespace-nowrap"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <CrosshairRow className="mt-10" />
        </div>
      </section>

      {/* Hero Visual with Lightbox trigger */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)] h-[360px] sm:h-[500px] lg:h-[600px] group">
            <ResilientImage
              src={project.image}
              alt={project.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Inspect ${project.title} visual fullscreen`}
              className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium inline-flex items-center gap-2 hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <Maximize2 size={13} aria-hidden="true" />
              <span>Inspect Visual</span>
            </button>
          </div>

          {/* Metrics & Stack Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 pt-8 border-t border-[var(--border-hairline)]">
            <div className="md:col-span-7 grid grid-cols-3 gap-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-xs text-[var(--text-muted)]">{m.label}</div>
                  <div className="font-display font-mono-tabular text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-5 md:border-l md:border-[var(--border-hairline)] md:pl-8">
              <div className="text-xs text-[var(--text-muted)] mb-2">Technology Stack</div>
              <div className="text-sm font-medium text-[var(--text-primary)] leading-relaxed">
                {project.stack.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Narrative */}
      <section className="py-14 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeaderBar label="Engineering Case Study" edition={`©Case ${project.index}`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                The Challenge
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              {project.challenge}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 mt-12 border-t border-[var(--border-hairline)]">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                Architectural Decisions
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              {project.architecture}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 mt-12 border-t border-[var(--border-hairline)]">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                State & Execution
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              {project.stateExecution}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 mt-12 border-t border-[var(--border-hairline)]">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                Interface Design
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              {project.interfaceDesign}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12 mt-12 border-t border-[var(--border-hairline)]">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                Measurable Outcomes
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 max-w-[65ch]">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 text-base text-[var(--text-primary)]">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--accent-blue)] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Case Study Footer */}
      <section className="py-14 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to={`/work/${previous.slug}`}
            className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] p-7 flex items-center justify-between transition-colors group"
          >
            <div>
              <span className="text-xs font-mono-tabular text-[var(--text-muted)] block mb-1">
                Previous Project
              </span>
              <span className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                {previous.title}
              </span>
            </div>
            <ArrowLeft
              size={20}
              className="text-[var(--text-muted)] group-hover:-translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>

          <Link
            to={`/work/${next.slug}`}
            className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] p-7 flex items-center justify-between transition-colors group"
          >
            <div>
              <span className="text-xs font-mono-tabular text-[var(--text-muted)] block mb-1">
                Next Project
              </span>
              <span className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                {next.title}
              </span>
            </div>
            <ArrowRight
              size={20}
              className="text-[var(--text-muted)] group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} visual preview`}
          className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-4 md:p-10"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen preview"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="max-w-6xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/15">
            <ResilientImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </main>
  );
}
