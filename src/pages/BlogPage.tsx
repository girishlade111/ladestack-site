import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { IMAGES, JOURNAL_ARTICLES } from '../data/portfolioData';
import { estimateReadingTimeMinutes } from '../lib/portfolio';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow } from '../components/SwissGridMarkers';

export function BlogPage() {
  const categories = ['All', ...Array.from(new Set(JOURNAL_ARTICLES.map((a) => a.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={IMAGES.heroBackdrop}
            alt="LadeStack journal atmospheric backdrop"
            loading="eager"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-4">
          <h1 className="font-display text-6xl sm:text-8xl md:text-[7.5rem] font-semibold tracking-tight leading-none text-white">
            Blog
          </h1>
          <CrosshairRow className="mt-10" />
        </div>
      </section>

      {/* Journal Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)]">
              ©Journal
            </h2>

            <div
              role="group"
              aria-label="Filter articles by topic"
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-hairline)]"
            >
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass)]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {visibleArticles.map((article) => {
              const readMinutes = estimateReadingTimeMinutes(article.sections);
              return (
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

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{readMinutes} min read</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
