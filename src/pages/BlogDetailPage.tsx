import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Calendar, Check, Share2 } from 'lucide-react';
import { IMAGES, JOURNAL_ARTICLES, PROFILE } from '../data/portfolioData';
import {
  estimateReadingTimeMinutes,
  getArticleBySlug,
  getRelatedArticles,
} from '../lib/portfolio';
import { ResilientImage } from '../components/ResilientImage';
import { CrosshairRow } from '../components/SwissGridMarkers';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(JOURNAL_ARTICLES, slug);
  const { scrollYProgress } = useScroll();
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <main className="max-w-[1400px] mx-auto px-5 md:px-10 py-28 text-center space-y-6">
        <h1 className="font-display text-4xl font-semibold text-[var(--text-primary)]">
          Article not found
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          <span>Back to blog</span>
        </Link>
      </main>
    );
  }

  const readMinutes = estimateReadingTimeMinutes(article.sections);
  const related = getRelatedArticles(JOURNAL_ARTICLES, article.slug, 3);

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main>
      {/* Reading Progress Bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="fixed top-16 left-0 right-0 h-[2px] bg-[var(--accent-blue)] origin-left z-40"
      />

      {/* Article Hero Banner matching Blog Detail screenshot */}
      <section className="relative overflow-hidden border-b border-[var(--border-hairline)]">
        <div className="absolute inset-0 pointer-events-none bg-[#070707]">
          <ResilientImage
            src={article.image}
            alt={article.title}
            loading="eager"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-white/75 mb-4">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{readMinutes} min read</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.06] text-white max-w-4xl text-balance">
            {article.title}
          </h1>

          <CrosshairRow className="mt-12" />
        </div>
      </section>

      {/* Editorial Reading Body */}
      <article className="py-16 md:py-24">
        <div className="max-w-[780px] mx-auto px-5 md:px-8 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base text-[var(--text-secondary)] leading-[1.7] max-w-[65ch]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {article.codeSnippet && (
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[#0E0E0E] text-white overflow-hidden">
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono-tabular text-white/60">
                <span>{article.codeSnippet.filename}</span>
                <span>{article.codeSnippet.language}</span>
              </div>
              <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono-tabular leading-relaxed text-sky-200">
                <code>{article.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Author & Actions Row */}
          <div className="pt-8 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[var(--border-subtle)] shrink-0">
                <ResilientImage
                  src={IMAGES.portrait}
                  alt={PROFILE.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {PROFILE.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  Founder of {PROFILE.brand} · {PROFILE.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyShareLink}
                className="px-4 py-2 rounded-full border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] inline-flex items-center gap-2 hover:bg-[var(--bg-glass)] transition-colors cursor-pointer"
              >
                {copied ? <Check size={13} aria-hidden="true" /> : <Share2 size={13} aria-hidden="true" />}
                <span>{copied ? 'Link Copied' : 'Share Article'}</span>
              </button>

              <Link
                to="/blog"
                className="px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                <span>Back to blog</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Journal Grid */}
      <section className="py-16 md:py-24 border-t border-[var(--border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)] mb-12">
            ©Journal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)] rounded-2xl"
              >
                <article className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                    <ResilientImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/55 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Calendar size={12} aria-hidden="true" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-snug">
                    {item.title}
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
