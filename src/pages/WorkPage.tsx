import { useState } from 'react';
import { IMAGES, PROJECTS, type ProjectCategory } from '../data/portfolioData';
import { filterProjectsByCategory } from '../lib/portfolio';
import { AvailabilityCard } from '../components/AvailabilityCard';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow } from '../components/SwissGridMarkers';
import { WorkCard } from '../components/WorkCard';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Developer Tools',
  'Document Utilities',
  'Interactive Apps',
  'Regional Tools',
];

export function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const filteredProjects = filterProjectsByCategory(PROJECTS, selectedCategory);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={IMAGES.gameHub}
            alt="LadeStack showcase visual backdrop"
            loading="eager"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-display text-6xl sm:text-8xl md:text-[7.5rem] font-semibold tracking-tight leading-none text-white">
              Work<sup className="text-2xl sm:text-3xl font-mono-tabular text-white/75 ml-2">(08)</sup>
            </h1>
            <AvailabilityCard subtitle="Let's Talk" className="self-start md:self-end" />
          </div>

          <CrosshairRow className="mt-10" />
        </div>
      </section>

      {/* Filter Bar & Works Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)]">
                ©All Works
              </h2>
              <p
                data-testid="work-project-count"
                className="mt-3 text-xs font-mono-tabular text-[var(--text-muted)]"
              >
                Showing {filteredProjects.length} of {PROJECTS.length} shipped products
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div
              role="group"
              aria-label="Filter works by category"
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-hairline)]"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {filteredProjects.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} tilted />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
